import Analytics from "./Components/Analytics";

import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import NewsLetter from "./Components/NewsLetter";


const App = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Analytics />
			<NewsLetter />
			<Cards/>
			<Footer/>
		</>
	);
};
export default App;
