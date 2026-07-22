import { useRef, useState } from "react";

import SectionTitle from "../ui/SectionTitle";
import DestinationCard from "../ui/DestinationCard";

import { destinations } from "../../data/destinations";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectFade,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PopularDestinations() {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
      py-24
      px-6
      lg:px-24

      bg-white
      dark:bg-slate-950
    "
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          badge="Popular Destinations"
          title="Explore the World"
          description="Explore our most loved destinations around the world."
        />

        {/* ===================== */}
        {/* FEATURED DESTINATION */}
        {/* ===================== */}

        <Swiper
          modules={[
            EffectFade,
            Navigation,
            Pagination,
            Autoplay,
          ]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          speed={1200}
          className="destinationSwiper mt-14"
        >
          {destinations.map((destination) => (
            

            <SwiperSlide key={destination.name}>
  {({ isActive }) => (
    <DestinationCard
      destination={destination}
      isActive={isActive}
    />
  )}
</SwiperSlide>
          ))}
        </Swiper>

        {/* ===================== */}
        {/* DESTINATION GRID */}
        {/* ===================== */}

        <div className="mt-20">

          <h3
            className="
            text-2xl
            font-bold
            text-center

            text-gray-900
            dark:text-white
          "
          >
            Browse Destinations
          </h3>

          <div
            className="
            mt-10

            grid

            grid-cols-1

            md:grid-cols-2

            lg:grid-cols-4

            gap-6
          "
          >
            {destinations.map((destination, index) => (
              <button
                key={destination.name}
                onClick={() => {
                  swiperRef.current.slideToLoop(index);
                }}
                className="
                  group
                  text-left
                "
              >
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-2xl

                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "ring-2 ring-blue-500"
                        : ""
                    }
                  `}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="
                      h-56
                      w-full
                      object-cover

                      transition-transform
                      duration-500

                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0

                      bg-gradient-to-t

                      from-black/80

                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                    "
                  >
                    <p
                      className="
                        text-blue-300
                        text-sm
                      "
                    >
                      {destination.country}
                    </p>

                    <h4
                      className="
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      {destination.name}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;