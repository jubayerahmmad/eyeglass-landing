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

      <div className="md:flex items-center gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-64 h-[500px]">
          <div className="relative h-full w-full shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://thumbs.dreamstime.com/b/eyeglasses-dark-background-shallow-depth-field-vertical-mobile-wallpaper-eyeglasses-dark-background-shallow-depth-313318346.jpg"
                alt="BackgroundImg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="relative p-4">
              <h1 className="text-2xl font-bold text-gray-50">Eyeglasses</h1>
            </div>

            {/* Main Img */}
            <div className="relative p-4">
              <img
                src="https://i.ibb.co.com/TDH9vH61/purple-silver-purple-transparent-full.webp"
                alt="eyeglass"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            {/* Bottom Two*/}
            <div className="relative grid grid-cols-2 gap-2 p-4">
              <div className="bg-white rounded-md overflow-hidden">
                <img
                  src="https://i.ibb.co.com/Xx1sm6dN/spectacles-life-sunglass-sunglasses-wallpaper-preview.jpg"
                  alt="eyeglass"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-white rounded-md overflow-hidden">
                <img
                  src="https://i.ibb.co.com/kgF2zX2s/sameer-GMm2-QD5yco-unsplash.jpg"
                  alt="Black frame eyeglasses"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Category GRID */}
        <div className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
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
