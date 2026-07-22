import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";


function ServiceCard({service}){


return (

<motion.div

whileHover={{
y:-10
}}

transition={{
duration:0.3
}}

className="

relative

h-[380px]

rounded-3xl

overflow-hidden

group

shadow-xl

"

>


{/* Background Image */}

<img

src={service.image}

alt={service.title}

className="

absolute

inset-0

w-full

h-full

object-cover

transition-transform

duration-700

group-hover:scale-110

"

/>



{/* Gradient Overlay */}

<div

className="

absolute

inset-0

bg-gradient-to-t

from-black/90

via-black/40

to-transparent

"

/>





{/* Glass Content */}


<div

className="

absolute

bottom-0

left-0

right-0


p-6


bg-white/10

dark:bg-black/30


backdrop-blur-xl


border-t

border-white/20


"

>


<h3

className="

text-2xl

font-bold

text-white

"

>

{service.title}

</h3>



<p

className="

mt-3

text-sm

leading-relaxed

text-white/80

"

>

{service.description}

</p>




<a

href={service.link}

className="

inline-flex

items-center

gap-2

mt-5


text-blue-300

font-semibold


hover:text-white


transition

"

>

Explore Service

<FiArrowRight/>

</a>


</div>


</motion.div>

);


}


export default ServiceCard;