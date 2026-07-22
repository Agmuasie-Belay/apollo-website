import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-gray-200
        dark:border-slate-700

        bg-white/70
        dark:bg-slate-900/60

        backdrop-blur-xl

        p-8

        shadow-sm

        hover:shadow-xl
        hover:border-blue-500

        transition-all
        duration-300
      "
    >
      {/* Decorative Glow */}

      <div
        className="
          absolute

          -top-20
          -right-20

          h-44
          w-44

          rounded-full

          bg-blue-500/10

          blur-3xl

          opacity-0

          group-hover:opacity-100

          transition
        "
      />

      {/* Icon */}

      <div
        className="
          relative

          flex

          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-blue-600

          text-white

          shadow-lg
        "
      >
        <Icon size={28} />
      </div>

      {/* Title */}

      <h3
        className="
          mt-8

          text-2xl

          font-bold

          text-gray-900
          dark:text-white
        "
      >
        {feature.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4

          leading-relaxed

          text-gray-600
          dark:text-gray-300
        "
      >
        {feature.description}
      </p>

      {/* Learn More */}

      <div
        className="
          mt-8

          inline-flex

          items-center

          gap-2

          font-semibold

          text-blue-600
          dark:text-blue-400

          transition

          group-hover:gap-3
        "
      >
        Learn More

        <FiArrowRight />
      </div>
    </motion.div>
  );
}

export default FeatureCard;