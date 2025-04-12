import "./App.css";
import AllProduct from "./components/AllProduct/AllProduct";
import BestSelling from "./components/BestSelling/BestSelling";
import Discounted from "./components/Discounted/Discounted";
import EyeglassCategories from "./components/EyeglassCategories/EyeglassCategories";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import NewArrival from "./components/NewArrival/NewArrival";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="bg-cyan-50/40">
      <Header />
      <HeroCarousel />
      <EyeglassCategories />
      <AllProduct />
      <BestSelling />
      <Discounted />
      <NewArrival />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
