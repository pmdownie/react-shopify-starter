import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreator';

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  componentDidMount() {
    this.props.initializeCart()
    this.props.getProducts()
  }

  render() {
    return (
      <div className="App">
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
