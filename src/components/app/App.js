import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cart';
import * as bagsActions from '../../actions/bags';
import * as walletsPursesActions from '../../actions/walletsPurses';
import * as sunglassesActions from '../../actions/sunglasses';
import * as keyChainsActions from '../../actions/keyChains';
import * as pinsActions from '../../actions/pins';
import * as jewelsActions from '../../actions/jewels';
import * as scarvesActions from '../../actions/scarves';

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: {
      bags: state.bags,
      walletsPurses: state.walletsPurses,
      sunglasses: state.sunglasses,
      keyChains: state.keyChains,
      pins: state.pins,
      jewels: state.jewels,
      scarves: state.scarves
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
            ...cartActions, 
            ...bagsActions, 
            ...walletsPursesActions, 
            ...sunglassesActions, 
            ...keyChainsActions, 
            ...pinsActions, 
            ...jewelsActions, 
            ...scarvesActions }, dispatch);
}

class App extends Component {
  componentDidMount() {
    this.props.initializeCart()
    this.props.getBags()
    this.props.getWalletsPurses()
    this.props.getSunglasses()
    this.props.getKeyChains()
    this.props.getPins()
    this.props.getJewels()
    this.props.getScarves()
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
