import React, { Component, useState } from "react";
import { db, storage } from "./Firebase";

class UserPurchases extends Component {
  constructor(props) {
    super(props);
    console.log("AQUI ", this.props.location.state);

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

  render() {
    return (
      <form className="productForm">
        <div className="form-group">
          <h1 className="formName"> Registrar Nuevo Producto </h1>
          <text> Nombre </text>
          <input
            type="text"
            name="name"
            value={this.props.location.state.total}
          />
          <text> Código </text>
          <input type="text" name="code" />
          <text> Categoría </text>
          <input type="text" name="category" />
          <text> Descripción </text>
          <textarea name="description" />
          <text> Precio </text>
          <input type="text" name="price" />
          <text> Cantidad </text>
          <input type="text" name="quantity" />
          <button className="insert" id="insert">
            Insertar
          </button>
        </div>
      </form>
    );
  }
}

export default UserPurchases;
