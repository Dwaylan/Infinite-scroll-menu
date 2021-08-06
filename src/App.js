import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Menu />
      <Gallery />
      <Footer />
    </div>


  );
}

export default App;
