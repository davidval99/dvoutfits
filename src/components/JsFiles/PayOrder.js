import React, { Component, useState } from "react";
import { db, storage } from "./Firebase";
import 'jquery';
import 'jquery.soap';


class UserPurchases extends Component {
  constructor(props) {
    super(props);

    this.addSale = this.addSale.bind(this);

    console.log("AQUI ", this.props.location.state);
    const fecha = new Date();

    this.state = {
      company: "DVOUTFITS",
      store: "DVOUTFITS Store",
      key: "fa04715ea8bcc784279543929fd41b23",
      cardNumber: "",
      date: fecha.getTime(),
      order: this.props.location.state,
      orderNumber: this.props.location.state.id,
      bandera: true,
    };
  }


  async addSale(event) {
    event.preventDefault();
    const { company, store, cardNumber, key, date, order, orderNumber } = this.state;
    const obj = { company, store, cardNumber, key, date, order, orderNumber};
    await db.collection("Sales").add(obj);
    await db.collection("Order").doc(this.props.location.state.id).update({paid: "true"});

    /*var soap = require('soap');
    var url = 'http://mora.tk/xml/registrar.php?wsdl';
    var args = {nombre: 'nombre', ubicacion: "ubicacion", representante: "representante", correo: "danblanco@estudiantec.cr"};
    soap.createClient(url, function(err, client) {
      client.RegistrarEmpresa(args, function(err, result) {
        console.log(result);
      });
    });*/
    /*
    let $ = require('jquery');
    require('jquery.soap');
    $.soap({
      url: 'http://mora.tk/xml/registrar.php?wsdl',
      method: 'RegistrarEmpresa',

      data: {
        nombre: 'nombre',
        ubicacion: "ubicacion",
        representante: "representante",
        correo: "danblanco@estudiantec.cr"
      },

      success: function (soapResponse) {
        console.log("exito");
        console.log(soapResponse.toString());
        // do stuff with soapResponse
        // if you want to have the response as JSON use soapResponse.toJSON();
        // or soapResponse.toString() to get XML string
        // or soapResponse.toXML() to get XML DOM
      },
      error: function (SOAPResponse) {
        console.log("todo mal");
        console.log(SOAPResponse.toString());
        // show error
      }
    });*/

    alert("Orden facturada");
    }

  render() {
    return (
      <form className="productForm">
        <div className="form-group">
          <h1 className="formName"> Pagar orden de compra</h1>
          <text> Nombre </text>
          <input readOnly={true}
            type="text"
            name="name"
            value={this.props.location.state.name}
          />
          <text> Email </text>
          <input readOnly={true} type="text" name="email" value={this.props.location.state.email}/>
          <text> Numero de orden </text>
          <input readOnly={true} type="text" name="orderNumber" value={this.state.orderNumber}/>
          <text> Numero de tarjeta </text>
          <input name="cardNumber"
                 onChange={(e) => this.setState({ cardNumber: e.target.value })}/>
          <text> Total </text>
          <input type="text" name="total" value={this.props.location.state.total}/>
          <button className="insert" onClick={this.addSale}>
            Pagar
          </button>
        </div>
      </form>
    );
  }
}

export default UserPurchases;
