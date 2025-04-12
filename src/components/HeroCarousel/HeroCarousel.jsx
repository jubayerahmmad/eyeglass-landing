import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSidebar from "./BannerSidebar";
const HeroCarousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto">
        <Slider {...settings}>
          {/* 1 */}
          <div className="my-6">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left sidebar */}
              <BannerSidebar />
              {/* Main content */}
              <div className="flex-1 p-2 md:p-4 ">
                <div className="">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Text content */}
                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                      <p className="text-blue-400 mb-2 text-sm md:text-base">
                        Coming Soon April
                      </p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        NEW FASHION
                        <br />
                        & MODERN
                        <br />
                        EYEGLASSES
                      </h1>

                      <div className="mt-6 md:mt-8">
                        <button className="bg-gray-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-md flex items-center text-sm md:text-base">
                          Discover Models
                          <svg
                            className="ml-2 w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                      <div className="">
                        <img
                          src="https://i.ibb.co.com/M0VgX3T/9eb7a5dd-c30a-4ce9-bae7-8047a5958c7a-removalai-preview.png"
                          alt="Modern eyeglass"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----/----- */}
          {/* 2 */}
          <div className="my-6">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left sidebar */}
              <BannerSidebar />
              {/* Main content */}
              <div className="flex-1 p-2 md:p-4 ">
                <div className="">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Text content */}
                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                      <p className="text-blue-400 mb-2 text-sm md:text-base">
                        Coming Soon April
                      </p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        NEW FASHION
                        <br />
                        & MODERN
                        <br />
                        EYEGLASSES
                      </h1>

                      <div className="mt-6 md:mt-8">
                        <button className="bg-gray-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-md flex items-center text-sm md:text-base">
                          Discover Models
                          <svg
                            className="ml-2 w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                      <div className="">
                        <img
                          src="https://i.ibb.co.com/yc3TSdVN/74dc5b5b-1b8f-4b87-ba2c-a0dfb50ec30a-removalai-preview.png"
                          alt="Modern eyeglass"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----/----- */}
        </Slider>
      </div>
    </div>
  );
};

export default HeroCarousel;
