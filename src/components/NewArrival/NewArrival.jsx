import { Products } from "../../data";
import ProductSlider from "../ProductSlider";
import SectionHeader from "../SectionHeader";

const NewArrival = () => {
  const NewArrivalProducts = Products.filter(
    (products) => products.category === "New Arrival"
  );
  return (
    <section className="container mx-auto px-4 py-1.5">
      <SectionHeader title={"New Arrival"} />
      <div className="px-4">
        <ProductSlider products={NewArrivalProducts} />
      </div>
    </section>
  );
};

export default NewArrival;
