import { motion } from "framer-motion";

import {
  FaBullseye,
  FaGlobeAmericas,
} from "react-icons/fa";


const items = [

{
icon:<FaBullseye/>,
title:"Our Mission",

description:
"To provide exceptional travel experiences by delivering reliable, affordable, and personalized travel solutions that make every journey simple, comfortable, and memorable."

},


{
icon:<FaGlobeAmericas/>,
title:"Our Vision",

description:
"To become a leading travel agency in East Africa, recognized for innovation, trust, and customer-focused services that inspire people to explore the world."

}

];



function MissionVision(){


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


{/* Section Header */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:0.3
}}

transition={{
duration:0.6
}}

className="text-center"

>


<h2

className="

text-4xl

lg:text-5xl

font-bold

text-gray-900

dark:text-white

"

>

Mission

<span

className="

text-blue-600

dark:text-blue-400

"

>

 & Vision

</span>

</h2>



<p

className="

mt-4

max-w-2xl

mx-auto


text-gray-600

dark:text-gray-300

"

>

Our commitment to delivering trusted travel
solutions and creating meaningful journeys.

</p>


</motion.div>





{/* Cards */}


<div

className="

mt-12

grid

md:grid-cols-2

gap-8

"

>


{

items.map((item,index)=>(


<motion.div

key={index}


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:0.3
}}

transition={{
duration:0.6,
delay:index*0.15
}}


whileHover={{
y:-8
}}


className="

relative

overflow-hidden

rounded-3xl


p-8



bg-white/40

dark:bg-slate-800/40


backdrop-blur-xl


border

border-white/30

dark:border-slate-700/50


shadow-xl


"

>


{/* Decorative glow */}

<div

className="

absolute

top-0

right-0

w-40

h-40


bg-blue-500/20


blur-3xl


rounded-full

"

/>





{/* Icon */}


<div

className="

relative

w-14

h-14


flex

items-center

justify-center


rounded-2xl


bg-blue-600


text-white


text-2xl


shadow-lg

"

>

{item.icon}

</div>





<h3

className="

relative

mt-6

text-2xl

font-bold


text-gray-900

dark:text-white

"

>

{item.title}

</h3>





<p

className="

relative

mt-4


leading-relaxed


text-gray-700

dark:text-gray-300

"

>

{item.description}

</p>



</motion.div>


))


}


</div>


</div>


</section>


)

}


export default MissionVision;