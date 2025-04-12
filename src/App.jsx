import "./App.css";
import EyeglassCategories from "./components/EyeglassCategories/EyeglassCategories";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="bg-cyan-50/40">
      <Header />
      <HeroCarousel />
      <EyeglassCategories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
