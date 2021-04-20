import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message";
import Products from "./components/Products";

function App() {
	return (
		<div className="App">
			<Header />
			<main id="mainContainer">
				<div className="container">
					<Products />
					<Message />
					<Cart />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
