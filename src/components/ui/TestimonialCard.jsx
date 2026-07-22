import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState } from "react";
function getAvatarColor(name) {
  const colors = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
];
  

  const index =
    name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return colors[index];
}
function getInitials(name) {
  
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function TestimonialCard({ testimonial }) {
  const [imageError, setImageError] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        h-full
        rounded-3xl
        border
        border-gray-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-950
        shadow-lg
        p-8
      "
    >
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-blue-500/30" />

      {/* Rating */}
      <div className="flex gap-1 mt-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar
            key={i}
            className="text-yellow-400 text-sm"
          />
        ))}
      </div>

      {/* Review */}
      <p
        className="
          mt-6
          leading-relaxed
          italic
          text-gray-600
          dark:text-gray-300
        "
      >
        "{testimonial.review}"
      </p>

      {/* Client */}
      <div className="flex items-center gap-4 mt-8">

        {testimonial.image && !imageError ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="
              w-16
              h-16
              rounded-full
              object-cover
              border-2
              border-blue-500
            "
          />
        ) : (
          <div
            className={`
              w-16
              h-16
              rounded-full
              flex
              items-center
              justify-center
              bg-gradient-to-br
              ${getAvatarColor(testimonial.name)}
              text-white
              font-bold
              text-xl
              
            `}
          >
            {getInitials(testimonial.name)}
          </div>
        )}

        <div>
          <h3
            className="
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            {testimonial.name}
          </h3>

          <p className="text-blue-600 dark:text-blue-400 text-sm">
            {testimonial.role}
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {testimonial.company}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default TestimonialCard;