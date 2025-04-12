import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
