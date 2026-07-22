import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaPlaneDeparture, FaHotel, FaCar, FaBuilding } from "react-icons/fa";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  const services = [
    {
      icon: <FaPlaneDeparture />,
      title: "Airline",
      subtitle: "Ticketing",
    },

    {
      icon: <FaHotel />,
      title: "Hotels",
      subtitle: "Reservations",
    },

    {
      icon: <FaCar />,
      title: "Car",
      subtitle: "Rentals",
    },

    {
      icon: <FaBuilding />,
      title: "Corporate",
      subtitle: "Travel",
    },
  ];

  return (
    <section
      id="home"
      className="
relative
min-h-screen
overflow-hidden
"
    >
      {/* Background Image */}

      <img
        src={heroImage}
        alt="
Apollo Travel Agency helping travelers explore destinations worldwide
"
        className="
absolute
inset-0
w-full
h-full
object-cover
object-center
"
      />

      {/* Premium Gradient Overlay */}

      <div
        className="
absolute
inset-0

bg-gradient-to-r

from-slate-950/95

via-slate-900/70

via-50%

to-transparent

"
      />

      {/* Soft Dark Layer */}

      <div
        className="
absolute
inset-0

bg-black/20

dark:bg-slate-900/40

"
      />

      {/* Content */}

      <div
        className="
relative
z-10

max-w-7xl

mx-auto

min-h-screen

flex

items-center

px-6

lg:px-24

pt-24

"
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
max-w-2xl
"
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
inline-flex
items-center

rounded-full

border

border-white/20

bg-white/10

backdrop-blur-md

px-5

py-2

text-sm

font-medium

text-white

"
          >
            Trusted Travel Partner Since 2019
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
            }}
            className="

mt-6

text-5xl

md:text-6xl

lg:text-7xl

font-bold

leading-tight

text-white

"
          >
            Discover the World
            <br />
            <span
              className="
text-blue-400
"
            >
              with Confidence
            </span>
          </motion.h1>

          {/* Service line */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
            }}
            className="

mt-4

text-xl

text-blue-100

font-medium

"
          >
            Airline Ticketing • Hotel Reservations • Car Rentals
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
            }}
            className="

mt-6

text-sm

md:text-lg

leading-relaxed

text-slate-300

"
          >
            Whether you're planning a family vacation, a business trip, or your
            next adventure, Apollo Travel Agency delivers reliable travel
            solutions with exceptional customer service, competitive pricing,
            and personalized support.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
            }}
            className="

mt-10

flex

flex-wrap

gap-4

"
          >
            <a
              href="#contact"
              className="

inline-flex

items-center

gap-2

rounded-full

bg-blue-600

px-7

py-4

font-semibold

text-white

hover:bg-blue-700

transition

"
            >
              Plan Your Journey
              <FiArrowRight />
            </a>

            <a
              href="#services"
              className="

inline-flex

items-center

rounded-full

border

border-white/30

bg-white/10

backdrop-blur-md

px-7

py-4

text-white

hover:bg-white/20

transition

"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust Indicators */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
            }}
            className="

mt-14

grid

grid-cols-2

gap-5

md:grid-cols-4

"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="
flex
items-center
gap-3
text-white
"
              >
                <div
                  className="
text-blue-400
text-xl
"
                >
                  {service.icon}
                </div>

                <div>
                  <p
                    className="
font-semibold
"
                  >
                    {service.title}
                  </p>

                  <p
                    className="
text-sm

text-slate-300

"
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
absolute

bottom-8

left-1/2

-translate-x-1/2

text-white/70

text-2xl

"
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;
