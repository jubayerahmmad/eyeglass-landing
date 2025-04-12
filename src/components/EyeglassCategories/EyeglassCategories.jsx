import SectionHeader from "../SectionHeader";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Men",
    imageUrls: [
      "https://i.ibb.co.com/Y4rdBRGm/eyeglassw.jpg",
      "https://i.ibb.co.com/kgF2zX2s/sameer-GMm2-QD5yco-unsplash.jpg",
      "https://i.ibb.co.com/Kx7qD9BS/Hasd.jpg",
    ],
  },
  {
    title: "Women",
    imageUrls: [
      "https://i.ibb.co.com/TDH9vH61/purple-silver-purple-transparent-full.webp",
      "https://i.ibb.co.com/Kx7qD9BS/Hasd.jpg",
      "https://i.ibb.co.com/kgF2zX2s/sameer-GMm2-QD5yco-unsplash.jpg",
    ],
  },
  {
    title: "Baby",
    imageUrls: [
      "https://i.ibb.co.com/TDH9vH61/purple-silver-purple-transparent-full.webp",
      "https://i.ibb.co.com/8LkT7xZJ/8213-c187-1.webp",
      "https://i.ibb.co.com/Kx7qD9BS/Hasd.jpg",
    ],
  },
  {
    title: "Young Fashion",
    imageUrls: [
      "https://i.ibb.co.com/kgF2zX2s/sameer-GMm2-QD5yco-unsplash.jpg",
      "https://i.ibb.co.com/TDH9vH61/purple-silver-purple-transparent-full.webp",
      "https://i.ibb.co.com/Kx7qD9BS/Hasd.jpg",
    ],
  },
];

const EyeglassCategories = () => {
  return (
    <section className="container mx-auto px-4 py-1.5">
      <SectionHeader title={"Eyeglasses Categories"} />

      <div className="flex gap-4">
        <div className="w-64"></div>
        {/* Category GRID */}
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {categories.map((category, idx) => (
            <CategoryCard
              key={idx}
              title={category.title}
              imageUrls={category.imageUrls}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EyeglassCategories;
