const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-8 max-w-4xl mx-auto">
      <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">{title}</h2>
      <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
    </div>
  );
};

export default SectionHeader;
