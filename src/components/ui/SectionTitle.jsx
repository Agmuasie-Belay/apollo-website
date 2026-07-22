import { motion } from "framer-motion";

function SectionTitle({
  badge,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <motion.div
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
        duration: 0.6,
      }}
      className={`
        flex
        flex-col
        ${alignment}

        max-w-3xl

        ${
          align === "center"
            ? "mx-auto"
            : ""
        }
      `}
    >
      {/* Badge */}

      {badge && (
        <span
          className="
            inline-flex

            items-center

            rounded-full

            border

            border-blue-200
            dark:border-blue-800

            bg-blue-50
            dark:bg-blue-900/30

            px-4

            py-2

            text-sm

            font-semibold

            tracking-wide

            text-blue-600
            dark:text-blue-400
          "
        >
          {badge}
        </span>
      )}

      {/* Title */}

      <h2
        className="
          mt-6

          text-4xl

          md:text-5xl

          font-bold

          leading-tight

          text-gray-900
          dark:text-white
        "
      >
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p
          className="
            mt-6

            text-lg

            leading-relaxed

            text-gray-600
            dark:text-gray-300
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;