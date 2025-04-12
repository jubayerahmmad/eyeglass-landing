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
      <div className="lg:flex items-center justify-between text-center bg-white rounded-full py-2 px-6 shadow-sm max-w-3xl mb-6">
        <div className="text-xl md:text-2xl font-bold text-gray-900">
          Deal of The Day
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-sm mr-2 text-gray-950 ">End in:</span>

          <div className="bg-cyan-400 rounded-md flex items-center justify-center w-10 h-10 text-white font-bold">
            00D
          </div>

          <div className="bg-cyan-400 rounded-md flex items-center justify-center w-10 h-10 text-white font-bold">
            00H
          </div>

          <div className="bg-cyan-400 rounded-md flex items-center justify-center w-10 h-10 text-white font-bold">
            00M
          </div>

          <div className="bg-cyan-400 rounded-md flex items-center justify-center w-10 h-10 text-white font-bold">
            00S
          </div>
        </div>
      </div>
      <div className="px-4">
        <ProductSlider products={FlashSaleProducts} />
      </div>
    </section>
  );
};

export default FlashSale;
