import React, { Component, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { db, storage } from "./Firebase";
import Moment from 'moment';
//import SimpleDateTime  from 'react-simple-timestamp-to-date';

class UserPurchasesPaid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ListOrders: [],
            address: "",
            cartItems: [],
            email: "",
            name: "",
            total: "",
            date: "",
            cardNumber: "",
            store: "",
            bandera: true,
            order: "",
        };
    }

    componentDidMount() {
        this.getPurchases();
    }

    async getPurchases() {
        let list = [];
        const response = await db
            .collection("Sales")
            .where("order.email", "==", this.props.location.state)
            .get();
        response.forEach((document) => {
            let id = document.id;
            let date = document.data().date
            date = Moment(date).format("MMM Do YY");
            let cardNumber = document.data().cardNumber;
            let store = document.data().store;
            let order = document.data().order;
            let address = document.data().order.address;
            let cartItems = document.data().order.cartItems;
            let email = document.data().order.email;
            let name = document.data().order.name;
            let total = document.data().order.total;
            let obj = { date, cardNumber, store, order, id, address, email, name, total, cartItems };
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
                            Tus compras realizadas
                        </a>
                    </div>
                </nav>

                <ul className="list-group m-3">
                    {this.state.ListOrders.map((Order) => (
                        <li className="list-group-item" key={Order.id}>
                            <p className="font-weight-bold">
                                <span>Fecha: </span>
                                {Order.date}
                            </p>

                            <p className="font-weight-bold">
                                <span>Tienda: </span>
                                {Order.store}
                            </p>
                            <p className="font-weight-bold">
                                <span>Numero de tarjeta </span>
                                {Order.cardNumber}
                            </p>

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
                                        pathname: "/CancelOrder",
                                        state: Order,
                                    }}
                                >
                                    Cancelar Compra
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserPurchasesPaid;
