import React, { Component, useState } from "react";
import { db, storage } from "../Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { toast } from "react-toastify";
import ReactFirebaseFileUpload from "./ProductImageUpload";

import { BrowserRouter, Route, Link } from "react-router-dom";

class ProductCrud extends Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);

    this.state = {
      ListProduct: [],
      name: "",
      description: "",
      price: "",
      id: "",
      image: "",
      bandera: true,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    let list = [];
    const response = await db.collection("Products").get();
    response.forEach((document) => {
      let id = document.id;
      let name = document.data().name;
      let description = document.data().description;
      let price = document.data().price;
      let image = document.data().image;
      let obj = { id, name, description, price, image };
      list.push(obj);
    });
    this.setState({ ListProduct: list });
  }

  async addProduct(event) {
    event.preventDefault();
    const { id, name, description, price, image } = this.state;
    const obj = { name, description, price, image };
    if (this.state.bandera) {
      await db.collection("Products").add(obj);
      this.getProducts();
      this.setState({ name: "", description: "", price: "", image: "" });
      alert("Se ha agregado el producto exitosamente");
    } else {
      await db.collection("Products").doc(id).update(obj);

      this.getProducts();
      this.setState({
        name: "",
        description: "",
        price: "",
        image: "",
        id: "",
        bandera: true,
      });
      alert("Se ha actualizado el producto exitosamente");
    }
  }

  async deleteProduct(Product) {
    if (window.confirm("Está seguro que desea eliminar el producto?")) {
      await db.collection("Products").doc(Product.id).delete();
      alert("Se ha eliminado el producto exitosamente");
      this.getProducts();
    }
  }

  async getProduct(Product) {
    const res = await db.collection("Products").doc(Product.id).get();
    this.setState({
      id: res.id,
      name: res.data().name,
      description: res.data().description,
      price: res.data().price,
      image: res.data().image,
      bandera: false,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container">
              <a className="navbar-brand" href="/ProductAdminCrud">
                Módulo de administrador de productos
              </a>
            </div>
          </nav>
          <form className="card m-3 p-2">
            <input
              placeholder="Nombre del Producto"
              className="form-control mb-2"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />

            <input
              placeholder="Descripción del Producto"
              className="form-control mb-2"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />

            <input
              placeholder="Precio del Producto"
              className="form-control mb-2"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
            <input
              placeholder="URL de Imagen"
              className="form-control mb-2"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />

            <button className="btn btn-dark" onClick={this.addProduct}>
              {this.state.bandera ? "Añadir Producto" : "Editar producto"}
            </button>
          </form>

          <ReactFirebaseFileUpload />

          <ul className="list-group m-3">
            {this.state.ListProduct.map((Product) => (
              <li className="list-group-item" key={Product.id}>
                <p className="font-weight-bold">
                  <span>Name: </span>
                  {Product.name}
                </p>
                <p className="font-weight-bold">
                  <span>Description: </span>
                  {Product.description}
                </p>
                <p className="font-weight-bold">
                  <span>Price: </span>
                  {Product.price}
                </p>

                <p className="font-weight-bold">
                  <span>Imagen: </span>
                  <img
                    src={Product.image}
                    width="120px"
                    alt="..."
                    class="img-thumbnail"
                  ></img>
                </p>
                <div className="d-flex flex-row-reverse">
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={this.deleteProduct.bind(this, Product)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={this.getProduct.bind(this, Product)}
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default ProductCrud;
