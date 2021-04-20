import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message";
import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";

function App() {
	return (
		<div className="App">
			<Header />
			<main id="mainContainer">
				<div className="container">
					<ProductsContainer />
					<Message />
					<CartContainer />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
