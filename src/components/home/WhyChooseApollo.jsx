import { motion } from "framer-motion";

import FeatureCard from "../ui/FeatureCard";
import SectionTitle from "../ui/SectionTitle";

import { whyChooseApollo } from "../../data/whyChooseApollo";

function WhyChooseApollo() {
  return (
    <section
      className="
        px-6
        lg:px-24
        py-24

        bg-gray-50
        dark:bg-slate-900

        transition-colors
        duration-500
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* Section Title */}

        <SectionTitle
          badge="Why Choose Apollo"
          title="Travel Made Simple, Reliable & Personal"
          description="We combine industry expertise, exceptional customer service, and reliable travel solutions to make every journey smooth, memorable, and stress-free."
        />

        {/* Feature Grid */}

        <div
          className="
            mt-16

            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4

            gap-8
          "
        >
          {whyChooseApollo.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseApollo;