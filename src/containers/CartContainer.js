import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as Message from "../constants/Message";
import CartResult from "../components/CartResult";
class CartContainer extends Component {
	render() {
		const { cart } = this.props;
		return (
			<Cart>
				{this.showCart(cart)}
				{this.showTotalAmount(cart)}
			</Cart>
		);
	}
	showCart(cart) {
		let result = (
			<tr>
				<td>{Message.MSG_CART_EMPTY}</td>
			</tr>
		);
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return <CartItem key={index} item={item} />;
			});
		}
		return result;
	}
	showTotalAmount = (cart) => {
		let result = null;
		if (cart.length > 0) {
			return <CartResult cart={cart} />;
		}
		return result;
	};
}

CartContainer.propTypes = {
	cart: propTypes.arrayOf(
		propTypes.shape({
			product: propTypes.shape({
				id: propTypes.number.isRequired,
				name: propTypes.string.isRequired,
				image: propTypes.string.isRequired,
				description: propTypes.string.isRequired,
				price: propTypes.number.isRequired,
				inventory: propTypes.number.isRequired,
				rating: propTypes.number.isRequired,
			}),
			quantity: propTypes.number.isRequired,
		})
	).isRequired,
};
const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};
export default connect(mapStateToProps, null)(CartContainer);
