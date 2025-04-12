import { Products } from "../../data";
import ProductSlider from "../ProductSlider";
import SectionHeader from "../SectionHeader";

const FlashSale = () => {
  const FlashSaleProducts = Products.filter(
    (products) => products.category === "Discounted" && products.discount >= 20
  );
  return (
    <section className="container mx-auto px-4 py-1.5">
      <SectionHeader title={"Flash Sale"} />
      {/* static countdown */}
      <div className="flex items-center justify-between bg-white rounded-full py-2 px-6 shadow-sm max-w-4xl mb-6">
        <div className="text-base md:text-2xl font-bold text-gray-900">
          Deal of The Day
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-950 ">End in:</span>
          <p className="bg-cyan-400 rounded-md text-white font-semibold sm:p-1">
            00D
          </p>
          <p className="bg-cyan-400 rounded-md text-white font-semibold sm:p-1">
            00H
          </p>
          <p className="bg-cyan-400 rounded-md text-white font-semibold sm:p-1">
            00M
          </p>
          <p className="bg-cyan-400 rounded-md text-white font-semibold sm:p-1">
            00S
          </p>
        </div>
      </div>
      <div className="px-4">
        <ProductSlider products={FlashSaleProducts} />
      </div>
    </section>
  );
};

export default FlashSale;
