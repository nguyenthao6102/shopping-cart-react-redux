const initialState = [
	{
		id: 1,
		name: "Iphone 7 plus",
		image: "https://phuckhangmobile.com/file/iphone-7-plus-do-900-19485f.jpg",
		description: "Điện thoại xịn lắm",
		price: 500,
		inventory: 10,
		rating: 4,
	},
	{
		id: 2,
		name: "Iphone 6 plus",
		image:
			"https://didongthongminh.vn/upload_images/2019/06/iphone6s-plus-gold.png",
		description: "Điện thoại không xịn lắm",
		price: 300,
		inventory: 13,
		rating: 3,
	},
	{
		id: 3,
		name: "Samsung galaxy ngu",
		image:
			"https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-xanhduong-600x600-200x200.jpg",
		description: "Điện thoại ngu lắm lắm",
		price: 100,
		inventory: 15,
		rating: 5,
	},
];
const products = (state = initialState, action) => {
	switch (action.type) {
		default:
			return [...state];
	}
};

export default products;
