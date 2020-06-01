import React from "react";

import "./basket.scss";

import { connect } from "react-redux";
import { removeItem, subtractQuantity, addQuantity } from "../../redux/action";
import { Button } from "react-bootstrap";

class Basket extends React.Component {
  handleRemove = (item) => {
    this.props.removeItem(item);
  };
  handleAddQuantity = (item) => {
    this.props.addQuantity(item);
  };
  handleSubtractQuantity = (item) => {
    this.props.subtractQuantity(item);
  };
  render() {
    return (
      <div className="basket">
        <div className="basket__info">
          <div className="basket__books">
            {this.props.addToCart &&
              this.props.addToCart.map((item) => (
                <div className="cart">
                  <div className="cart__logo">
                    <img src={item.image} alt="books" />
                  </div>
                  <div className="cart__info">
                    <div className="cart__title">
                      <span>
                        <p>Название</p>
                        {item.title}
                      </span>
                    </div>
                    <div className="cart__price">
                      <span>
                        <p>Цена</p>
                        {item.price}₽
                      </span>
                    </div>
                  </div>
                  <div className="cart__value">
                    <div className="cart__value-title">
                      <span>Кол-во</span>
                      <p>{item.quantity}</p>
                    </div>
                    <div className="cart-value-input">
                      <svg
                        onClick={() => {
                          this.handleRemove(item);
                        }}
                        className="bi bi-x-circle-fill"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
                        />
                      </svg>
                      <svg
                        onClick={() => {
                          this.handleAddQuantity(item);
                        }}
                        className="bi bi-arrow-up-circle"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"
                        />
                      </svg>
                      <svg
                        onClick={() => {
                          this.handleSubtractQuantity(item);
                        }}
                        className="bi bi-arrow-down-circle"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="total">
          <h5>Корзина</h5>
          <span>₽{this.props.price}</span>
        </div>
        <Button variant="primary">Совершить покупку</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addToCart: state.app.addToCart,
  price: state.app.total,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch(removeItem(item));
    },
    addQuantity: (item) => {
      dispatch(addQuantity(item));
    },
    subtractQuantity: (item) => {
      dispatch(subtractQuantity(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
