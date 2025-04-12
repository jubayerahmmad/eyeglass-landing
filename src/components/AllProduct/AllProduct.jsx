import { Products } from "../../data";
import ProductSlider from "../ProductSlider";
import SectionHeader from "../SectionHeader";

const AllProduct = () => {
  return (
    <section className="container mx-auto px-4 py-1.5">
      <SectionHeader title={"All Products"} />
      <div className="px-4">
        <ProductSlider products={Products} />
      </div>
    </section>
  );
};

export default AllProduct;
