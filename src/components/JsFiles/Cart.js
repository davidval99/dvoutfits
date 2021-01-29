import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../actions/cartActions";
import { clearOrder, placeOrder } from "../actions/orderActions";

class Cart extends Component {
  constructor(props) {
    console.log("hola");
    super(props);

    const fecha = new Date();

    this.state = {
      email: { storage: localStorage.getItem("localUserEmail") },
      name: { storage: localStorage.getItem("localUserName") },
      address: "",
      date: Math.floor(Date.now()/1000),
      paid: "false",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  placeOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name.storage,
      email: this.state.email.storage,
      address: this.state.address,
      cartItems: this.props.cartItems,
      paid: this.state.paid,
      date: this.state.date,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.placeOrder(order);
  };

  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">El carrito está vacío</div>
        ) : (
          <div className="cart cart-header">
            Tienes {cartItems.length} producto(s) en el carrito{" "}
          </div>
        )}

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.name}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={item.image} alt={item.name}></img>
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="right">
                        {item.price} x {item.count}{" "}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    className="button primary"
                  >
                    Proceder
                  </button>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={this.placeOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Correo</label>
                          <input
                              readOnly={true}
                            name="email"
                            type="email"
                            value={this.state.email.storage}
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Nombre</label>
                          <input
                              readOnly={true}
                            name="name"
                            type="text"
                            value={this.state.name.storage}
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Dirección</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button
                            className="button primary"
                            onClick={() => {
                              alert("Su orden ha sido colocada");
                            }}
                          >
                            Colocar
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, placeOrder, clearOrder }
)(Cart);
