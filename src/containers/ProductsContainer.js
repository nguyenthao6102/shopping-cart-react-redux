import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Products from "../components/Products";
import propTypes from "prop-types";

class ProductsContainer extends Component {
	render() {
		const { products } = this.props;
		return <Products>{this.showProducts(products)}</Products>;
	}
	showProducts(products) {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product key={index} product={product} />;
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
};
const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};
export default connect(mapStateToProps, null)(ProductsContainer);