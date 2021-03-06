import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Products from "../components/Products";
import propTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions";

class ProductsContainer extends Component {
	render() {
		const { products } = this.props;
		return <Products>{this.showProducts(products)}</Products>;
	}
	showProducts(products) {
		let result = null;
		const { onAddToCart, onChangeMessage } = this.props;

		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<Product
						key={index}
						product={product}
						onAddToCart={onAddToCart}
						onChangeMessage={onChangeMessage}
					/>
				);
			});
		}
		return result;
	}
}
ProductsContainer.propTypes = {
	products: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.number.isRequired,
			name: propTypes.string.isRequired,
			image: propTypes.string.isRequired,
			description: propTypes.string.isRequired,
			price: propTypes.number.isRequired,
			inventory: propTypes.number.isRequired,
			rating: propTypes.number.isRequired,
		})
	).isRequired,
	onChangeMessage: propTypes.func.isRequired,
};
const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			dispatch(actAddToCart(product, 1));
		},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
