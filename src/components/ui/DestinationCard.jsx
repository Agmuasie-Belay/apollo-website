import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

function DestinationCard({
  destination,
  isActive,
})  {
  return (
    <motion.div
      initial={{
        scale: 1.08,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 5,
        ease: "easeOut",
      }}
      className="
        relative
        h-[520px]
        overflow-hidden
        rounded-3xl
      "
    >
      <motion.img
  src={destination.image}
  alt={destination.name}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
  "
  initial={{
    scale: 1.15,
    opacity: 0,
  }}
  animate={
    isActive
      ? {
          scale: [1.15, 1, 1],
          opacity: [0, 1, 1],
        }
      : {
          scale: 0.92,
          opacity: 0,
        }
  }
  transition={{
    duration: 5,
    ease: "easeInOut",
  }}
/>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
        "
      />

     {/* Glass Background Animation */}

<motion.div

initial={{
  opacity:1
}}

animate={{
  opacity:[
    1,
    0.5,
    0
  ]
}}

transition={{
  duration:5,
  times:[
    0,
    0.5,
    1
  ],
  ease:"easeInOut"
}}

className="
absolute
inset-0

bg-white/30

backdrop-blur-xl

"
/>



{/* Glass Content */}

<div

className="
absolute
bottom-0
left-0
right-0

p-8

border-t
border-white/20

"

>

<div
className="
flex
items-center
gap-2
text-blue-300
"
>

<FiMapPin />

{destination.country}

</div>



<h2
className="
mt-3
text-5xl
font-bold
text-white
"
>

{destination.name}

</h2>



<p
className="
mt-5
max-w-2xl
text-white/80
leading-relaxed
"
>

{destination.description}

</p>



<a

href={destination.link}

className="
mt-8
inline-flex
items-center
gap-2
text-blue-300
font-semibold
hover:text-white
transition
"

>

Explore Destination

<FiArrowRight />

</a>


</div>
    </motion.div>
  );
}

export default DestinationCard;