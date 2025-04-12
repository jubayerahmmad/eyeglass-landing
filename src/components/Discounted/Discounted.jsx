import { Products } from "../../data";
import ProductSlider from "../ProductSlider";
import SectionHeader from "../SectionHeader";

const Discounted = () => {
  const DiscountedProducts = Products.filter(
    (products) => products.category === "Discounted"
  );
  return (
    <section className="container mx-auto px-4 py-1.5">
      <SectionHeader title={"Discounted Offer"} />
      <div className="px-4">
        <ProductSlider products={DiscountedProducts} />
      </div>
    </section>
  );
};

export default Discounted;
