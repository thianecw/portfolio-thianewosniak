import { Header } from "./components/Header";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import Projects from "./pages/Projects";
import { Skills } from "./pages/Skills";

function App() {
	return (
		<>
			<Header />
			<section id="home">
				<Home />
			</section>

			<section id="skills">
				<Skills />
			</section>

			<section id="projects">
				<Projects />
			</section>

			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</>
	);
}

export default App;
