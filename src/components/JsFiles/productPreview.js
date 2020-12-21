import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { db, storage } from "./Firebase";
import { connect } from "react-redux";
import "../CssFiles/productPreview.css";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      ListProduct: [],
      name: "",
      description: "",
      price: "",
      id: "",
      image: "",
      bandera: true,
      product: null,
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

  openModal = (Product) => {
    this.setState({ Product });
  };
  closeModal = () => {
    this.setState({ Product: null });
  };
  render() {
    const { Product } = this.state;
    return (
      <div>
        <ul className="products">
          {this.state.ListProduct.map((Product) => (
            <li key={Product.id}>
              <div className="product">
                <a
                  href={"#" + Product.id}
                  onClick={() => this.openModal(Product)}
                >
                  <img
                    className="product-image"
                    src={Product.image}
                    alt={Product.name}
                  ></img>
                </a>
                <div className="pro-name">
                  <p>{Product.name}</p>
                </div>

                <div className="product-price">
                  <div>{Product.price}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {Product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details-modal">
                <img
                  className="product-image"
                  src={Product.image}
                  alt={Product.title}
                ></img>
                <div className="product-details-description">
                  <p>
                    <strong>{Product.name}</strong>
                  </p>
                  <p>{Product.description}</p>
                  <p></p>
                  <br></br>
                  <div className="product-price-modal">
                    <div>{Product.price}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(Product);
                        this.closeModal();
                      }}
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Products);
