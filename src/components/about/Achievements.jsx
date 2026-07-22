import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaCalendarCheck,
  FaBuilding,
  FaPlane,
  FaHeadset,
} from "react-icons/fa";

import Counter from "../ui/Counter";


const achievements = [

{
icon:<FaCalendarCheck/>,
number:2019,
suffix:"",
title:"Established Since"
},

{
icon:<FaBuilding/>,
number:50,
suffix:"+",
title:"Corporate Clients"
},

{
icon:<FaPlane/>,
number:4,
suffix:"",
title:"Travel Services"
},

{
icon:<FaHeadset/>,
number:24,
suffix:"/7",
title:"Customer Support"
}

];



function Achievements(){

const [startCounter,setStartCounter]=useState(false);


return (

<section

className="

relative

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


{/* Title */}

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

Our

<span

className="

text-blue-600

dark:text-blue-400

"

>

 Achievements

</span>

</h2>



<p

className="

mt-4

text-gray-600

dark:text-gray-300

"

>

Milestones that reflect our commitment
to delivering reliable travel experiences.

</p>


</motion.div>







{/* Cards */}

<motion.div

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

onViewportEnter={()=>setStartCounter(true)}


transition={{
duration:0.7
}}


className="

mt-12

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-6

"

>


{

achievements.map((item,index)=>(


<motion.div

key={index}


whileHover={{
y:-8
}}


transition={{
duration:0.25
}}


className="

p-8

rounded-3xl



bg-white/60

dark:bg-slate-950/50


backdrop-blur-xl



border

border-gray-200

dark:border-slate-800


shadow-lg


"

>


{/* Icon */}

<div

className="

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







{/* Number */}

<h3

className="

mt-6

text-4xl


font-bold


text-gray-900

dark:text-white

"

>


{

startCounter &&

<Counter

target={item.number}

suffix={item.suffix}

/>

}


</h3>







<p

className="

mt-2


text-gray-600

dark:text-gray-400

"

>

{item.title}

</p>



</motion.div>


))

}


</motion.div>


</div>


</section>


)

}


export default Achievements;