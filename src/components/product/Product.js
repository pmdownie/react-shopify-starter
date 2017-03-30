import React, {Component} from 'react';

class Product extends Component {
	constructor() {
		super();

		this.addToCart = this.addToCart.bind(this);
	}

	addToCart() {
		const cart = this.props.cart.items;
		const variantObject = this.props.details.variants[0];

		cart.createLineItemsFromVariants({variant: variantObject, quantity: 1}).then(cart => {
		  this.props.addItemToCart(cart)
		});

		console.log("Adding to cart");
	}

	render() {
		return (
			<div className="Product">
				<img src={this.props.details.images[0].src} alt=""/>
				<h1>{this.props.details.title}</h1>
				<p>{this.props.details.body_html}</p>
				<button onClick={this.addToCart}>Add to Cart</button>
			</div>
		)
	}
}

export default Product;