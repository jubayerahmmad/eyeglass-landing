import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductCard = ({ product }) => {
  const {
    name,
    stock,
    rating,
    reviewCount,
    originalPrice,
    discountPrice,
    discount,
    image,
  } = product;

  return (
    <div className="mx-2 rounded-lg overflow-hidden border border-gray-200 shadow-lg p-2 h-96">
      <div className="relative bg-gray-100 rounded-t-full p-8 flex justify-center items-center">
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded">
            {discount}% OFF
          </div>
        )}
        {/*Imafge */}
        <img src={image} alt={name} className="h-36 w-full object-cover" />
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
            <AiOutlineEye className="text-gray-700" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
            <AiOutlineHeart className="text-gray-700" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
            <AiOutlineShoppingCart className="text-gray-700" />
          </button>
        </div>
      </div>
      {/* Details */}
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <div className={`text-sm ${stock ? "text-green-500" : "text-red-500"}`}>
          {stock ? "In Stock" : "Out of Stock"}
        </div>
        <div className="flex items-center mt-1">
          {/* Rating */}
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={
                  i < Math.floor(rating) ? "text-cyan-500" : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm ml-1 text-gray-600">
            {rating} {reviewCount ? `/ ${reviewCount} Reviews` : ""}
          </span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-gray-400 line-through text-sm">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-cyan-500 font-medium ml-2">
            ${discountPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
