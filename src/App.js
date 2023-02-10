import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <Nav />
      <Menu />
      <Home />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
