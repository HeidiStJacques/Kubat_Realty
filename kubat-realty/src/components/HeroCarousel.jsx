import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

export default function HeroCarousel() {

  const slides = [
    {
      image: "/images/Austin-Sullivan-River-running-through-rocks.jpg",
      credit: "Photo by Austin Sullivan",
      alt: "Waterfall in the New Hampshire Lakes Region"
    },
    {
      image: "/images/Camden-Mountain-Shot.jpg",
      credit: "Photo by Camden",
      alt: "Mountain landscape in the Lakes Region"
    },
    {
      image: "/images/Josh-Meyer-Pond-in-Autumn.jpg",
      credit: "Photo by Josh Meyer",
      alt: "Autumn pond reflection"
    },
    {
      image: "/images/Mike-Birdy-Road-Covered-in-leaves.jpg",
      credit: "Photo by Mike Bird",
      alt: "Leaf covered forest path"
    },
    {
      image: "/images/Pond-in-Autumn.jpg",
      credit: "Photo by Mohan Nannapaneni",
      alt: "Autumn lake scenery"
    },
    {
      image: "/images/Zach-the-Shoota-Gorgeous-View.jpg",
      credit: "Photo by Zach Debottis",
      alt: "Sunset over mountains"
    },
    {
      image: "/images/Mike-Birdy-Leaves-in-Autumn.jpg",
      credit: "Photo by Mike Bird",
      alt: "Forest trail in fall"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 6000 }}
        className="w-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative w-full h-[160px] md:h-[200px] lg:h-[240px] overflow-hidden">

              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* text */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">

                <div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Find Your Dream Home
                  </h1>

                  <p className="text-xs opacity-90">
                    Kubat Realty
                  </p>
                </div>

              </div>

              {/* photo credit */}
              <div className="absolute bottom-1 right-3 text-white text-[10px] opacity-70">
                {slide.credit}
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}
