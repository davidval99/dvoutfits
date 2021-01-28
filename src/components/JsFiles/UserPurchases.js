import React, { Component, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { db, storage } from "./Firebase";

class UserPurchases extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);

    this.state = {
      ListOrders: [],
      address: "",
      cartItems: [],
      email: "",
      name: "",
      total: "",
      bandera: true,
    };
  }

  componentDidMount() {
    this.getOrders();
  }

  async getOrders() {
    let list = [];
    const response = await db
      .collection("Order")
      .where("email", "==", this.props.location.state)
      .get();
    response.forEach((document) => {
      let id = document.id;
      let address = document.data().address;
      let cartItems = document.data().cartItems;
      let email = document.data().email;
      let name = document.data().name;
      let total = document.data().total;
      let obj = { id, address, email, name, total, cartItems };
      list.push(obj);
    });

    this.setState({ ListOrders: list });
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <div className="container">
            <a className="navbar-brand" href="/UserPurchases">
              Tus Ordenes de Compra
            </a>
          </div>
        </nav>

        <ul className="list-group m-3">
          {this.state.ListOrders.map((Order) => (
            <li className="list-group-item" key={Order.id}>
              <p className="font-weight-bold">
                <span>Dirección: </span>
                {Order.address}
              </p>

              <p className="font-weight-bold">
                <span>Email: </span>
                {Order.email}
              </p>

              <p className="font-weight-bold">
                <span>Articulos: </span>
                {Order.cartItems.map((item) => (
                  <p className="font-weight-bold">
                    - {item.name} x {item.count}
                  </p>
                ))}
              </p>

              <p className="font-weight-bold">
                <span>Total: </span>
                {Order.total}
              </p>

              <div className="d-flex flex-row-reverse">
                <Link
                  to={{
                    pathname: "/PayOrder",
                    state: Order,
                  }}
                >
                  Finalizar Compra
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserPurchases;
