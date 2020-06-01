import React from "react";
import "./books.scss";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action";


class Books extends React.Component {
  handleClick = (item) => {
    this.props.addToCart(item);
  };
  render() {
    return (
      <div className="books">
        {this.props.books &&
          this.props.books.map((item) => (
            <div className="books__card" key={item.id}>
              <div className="books__image">
                <img src={item.image} alt="icon" />
              </div>
              <div className="books__text">
                <span className="books__title">
                  <p>{item.title}</p>
                </span>
                <span className="books__subtitle">
                  <p>{item.author}</p>
                </span>
                <span className="books__price">
                  <p>₽{item.price}</p>
                </span>
              </div>
              <Button onClick={() => this.handleClick(item)} variant="primary">
                Добавить в корзину
              </Button>
            </div>
          ))}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(Books);
