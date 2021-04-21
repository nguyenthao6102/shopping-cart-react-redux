import React, { Component } from "react";
import * as Message from "../constants/Message";

export default class Product extends Component {
	render() {
		const { product } = this.props;

		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img src={product.image} className="img-fluid" alt={product.name} />
						<button>
							<div className="mask waves-light waves-effect waves-light"></div>
						</button>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<span>{product.name}</span>
							</strong>
						</h4>
						<ul className="rating">{this.showRating(product.rating)}</ul>
						<p className="card-text">{product.description}</p>
						<div className="card-footer">
							<span className="left">{product.price}$</span>
							<span className="right">
								<span
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									title=""
									data-original-title="Add to Cart"
									onClick={() => this.onAddToCart(product)}
								>
									<i className="fa fa-shopping-cart"></i>
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
	showRating(rating) {
		const result = [];
		for (let i = 1; i <= rating; i++) {
			result.push(
				<li key={i}>
					<i className="fa fa-star"></i>
				</li>
			);
		}
		for (let j = 1; j <= 5 - rating; j++) {
			result.push(
				<li key={j + 5}>
					<i className="fa fa-star-o"></i>
				</li>
			);
		}
		return result;
	}
	onAddToCart = (product) => {
		this.props.onAddToCart(product);
		this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
	};
}
