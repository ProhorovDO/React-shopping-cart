import React from "react";
import Nav from "./components/navbar";
import Books from "./components/books";
import Basket from "./components/basket";
import { connect } from "react-redux";
import { initializeApp } from "./redux/action";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <div className="row">
          <div className="col-sm-7">
            <Books books={this.props.books} />
          </div>
          <div className="col-sm-5">
            <Basket />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.app.books,
  initialize: state.app.initialize,
});
const mapDistpatchToProps = {
  initializeApp,
};

export default connect(mapStateToProps, mapDistpatchToProps)(App);
