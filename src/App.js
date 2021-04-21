import Footer from "./components/Footer";
import Header from "./components/Header";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import ProductsContainer from "./containers/ProductsContainer";

function App() {
	return (
		<div className="App">
			<Header />
			<main id="mainContainer">
				<div className="container">
					<ProductsContainer />
					<MessageContainer />
					<CartContainer />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
