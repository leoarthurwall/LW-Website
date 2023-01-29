import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
