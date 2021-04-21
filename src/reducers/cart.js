import * as types from "../constants/ActionType";
const data = JSON.parse(localStorage.getItem("CART"));
const initialState = data ? data : [];
// const initialState = [
// 	{
// 		product: {
// 			id: 1,
// 			name: "Iphone 7 plus",
// 			image: "https://phuckhangmobile.com/file/iphone-7-plus-do-900-19485f.jpg",
// 			description: "Điện thoại xịn lắm",
// 			price: 500,
// 			inventory: 10,
// 			rating: 4,
// 		},
// 		quantity: 5,
// 	},
// 	{
// 		product: {
// 			id: 3,
// 			name: "Samsung galaxy ngu",
// 			image:
// 				"https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-xanhduong-600x600-200x200.jpg",
// 			description: "Điện thoại ngu lắm lắm",
// 			price: 100,
// 			inventory: 15,
// 			rating: 5,
// 		},
// 		quantity: 3,
// 	},
// ];
const cart = (state = initialState, action) => {
	const { product, quantity } = action;
	let index = -1;
	switch (action.type) {
		case types.ADD_TO_CART:
			index = state.findIndex((x) => x.product.id === product.id);
			if (index !== -1) {
				state[index].quantity += quantity;
			} else {
				state.push({
					product,
					quantity,
				});
			}
			localStorage.setItem("CART", JSON.stringify(state));
			return [...state];
		case types.DELETE_PRODUCT_IN_CART:
			index = state.findIndex((x) => x.product.id === product.id);
			if (index !== -1) {
				state.splice(index, 1);
			}
			localStorage.setItem("CART", JSON.stringify(state));
			return [...state];
		case types.UPDATE_PRODUCT_IN_CART:
			index = state.findIndex((x) => x.product.id === product.id);
			if (index !== -1) {
				state[index].quantity = +quantity;
			}
			localStorage.setItem("CART", JSON.stringify(state));
			return [...state];
		default:
			return [...state];
	}
};

export default cart;
