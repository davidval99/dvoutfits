import React, { Component, useState } from "react";
import { db, storage } from "../Firebase";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //npm i boostrap
import { toast } from "react-toastify";
import ReactFirebaseFileUpload from "./AdImageUpload";

import { BrowserRouter, Route, Link } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin";

class BannerCrud extends Component {
  constructor() {
    super();
    this.addBanner = this.addBanner.bind(this);

    this.state = {
      ListBanner: [],
      name: "",
      description: "",
      image: "",
      bandera: true,
    };
  }

  componentDidMount() {
    this.getBanners();
  }

  async getBanners() {
    let list = [];
    const response = await db.collection("publicityBanner").get();
    response.forEach((document) => {
      let id = document.id;
      let name = document.data().name;
      let description = document.data().description;
      let image = document.data().image;
      let obj = { id, name, description, image };
      list.push(obj);
    });
    this.setState({ ListBanner: list });
  }

  async addBanner(event) {
    event.preventDefault();
    const { id, name, description, image } = this.state;
    const obj = { name, description, image };
    if (this.state.bandera) {
      await db.collection("publicityBanner").add(obj);
      this.getBanners();
      this.setState({ name: "", description: "", image: "" });
      alert("Se ha agregado el anuncio exitosamente");
    } else {
      await db.collection("publicityBanner").doc(id).update(obj);

      this.getBanners();
      this.setState({
        name: "",
        description: "",
        image: "",
        id: "",
        bandera: true,
      });
      alert("Se ha actualizado el anuncio exitosamente");
    }
  }

  async deleteBanner(Banner) {
    if (window.confirm("Está seguro que desea eliminar el anuncio?")) {
      await db.collection("publicityBanner").doc(Banner.id).delete();
      alert("Se ha eliminado el anuncio exitosamente");
      this.getBanners();
    }
  }

  async getBanner(Banner) {
    const res = await db.collection("publicityBanner").doc(Banner.id).get();
    this.setState({
      id: res.id,
      name: res.data().name,
      description: res.data().description,
      image: res.data().image,
      bandera: false,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <NavbarAdmin/>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container">
              <a className="navbar-brand" href="/BannerCrud">
                Módulo de administrador de anuncios
              </a>
            </div>
          </nav>
          <form className="card m-3 p-2">
            <input
              placeholder="Nombre del anuncio"
              className="form-control mb-2"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />

            <input
              placeholder="Descripción del anuncio"
              className="form-control mb-2"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />

            <input
              placeholder="URL de Imagen"
              className="form-control mb-2"
              value={this.state.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />

            <button className="btn btn-dark" onClick={this.addBanner}>
              {this.state.bandera ? "Añadir Anuncio" : "Editar Anuncio"}
            </button>
          </form>

          <ReactFirebaseFileUpload />

          <ul className="list-group m-3">
            {this.state.ListBanner.map((banner) => (
              <li className="list-group-item" key={banner.id}>
                <p className="font-weight-bold">
                  <span>Name: </span>
                  {banner.name}
                </p>
                <p className="font-weight-bold">
                  <span>Description: </span>
                  {banner.description}
                </p>

                <p className="font-weight-bold">
                  <span>Imagen: </span>
                  <img
                    src={banner.image}
                    width="120px"
                    alt="..."
                    class="img-thumbnail"
                  ></img>
                </p>
                <div className="d-flex flex-row-reverse">
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={this.deleteBanner.bind(this, banner)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={this.getBanner.bind(this, banner)}
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

export default BannerCrud;
