const CategoryCard = ({ title, imageUrls }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {imageUrls.map((url, idx) => (
          <div key={idx} className="">
            <img
              src={url}
              alt="Eyeglasses"
              className="w-full h-40 object-cover rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
