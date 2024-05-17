import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Slider = ({ places }) => {
  return (
    <div className="flex items-center w-[85%] mx-auto justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        autoplay={{ delay: 2500 }}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="w-full my-24"
      >
        {places.data.map((place) => {
          const imageURL = place.attributes.Image.data.map((image) => {
            return "http://localhost:1337" + image.attributes.url;
          });
          return (
            <SwiperSlide key={place.id}>
              <div className="flex flex-col gap-4 mb-20 group relative shadow-lg text-white px-6 py-8 h-[310px] max-w-[350px] overflow-hidden cursor-pointer bg-white ">
                <div
                  className="absolute m-3 inset-0 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${imageURL})`,
                  }}
                >
                  <div className="absolute bottom-0 px-4 w-full">
                    <h3 className="font-bold mt-1">{place.attributes.Title}</h3>
                    <p className="text-sm mb-3">{place.attributes.Location}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-30" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
