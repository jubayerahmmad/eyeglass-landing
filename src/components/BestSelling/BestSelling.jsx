import { Products } from "../../data";
import ProductSlider from "../ProductSlider";
import SectionHeader from "../SectionHeader";

const BestSelling = () => {
  const bestSellingProducts = Products.filter(
    (products) => products.category === "Best Selling"
  );
  return (
    <section className="container mx-auto px-4 py-1.5">
      <SectionHeader title={"Best Selling"} />
      <div className="px-4">
        <ProductSlider products={bestSellingProducts} />
      </div>
    </section>
  );
};

export default BestSelling;
