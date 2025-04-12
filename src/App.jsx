import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="bg-cyan-50/40">
      <Header />
      <HeroCarousel />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
