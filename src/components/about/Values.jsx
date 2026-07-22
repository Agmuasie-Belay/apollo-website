import { motion } from "framer-motion";

import {
  FaHandshake,
  FaUsers,
  FaStar,
  FaLightbulb
} from "react-icons/fa";


const values = [

{
icon:<FaHandshake/>,
title:"Reliability",
description:
"We provide dependable travel solutions with accuracy, transparency, and professional support at every step."
},


{
icon:<FaUsers/>,
title:"Customer Focus",
description:
"We prioritize our clients' needs by providing personalized assistance and creating stress-free travel experiences."
},


{
icon:<FaStar/>,
title:"Professional Service",
description:
"Our experienced team delivers quality service through expertise, attention to detail, and commitment."
},


{
icon:<FaLightbulb/>,
title:"Innovation",
description:
"We embrace modern travel solutions and technology to improve customer experience and efficiency."
}

];



function Values(){


return (

<section

className="

px-6

lg:px-24

py-24


bg-white

dark:bg-slate-950


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

 Values

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

The principles that guide Apollo Travel
in delivering exceptional journeys.

</p>


</motion.div>







{/* Values Cards */}


<div

className="

mt-12


grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4


gap-8

"

>


{

values.map((value,index)=>(


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
amount:0.2
}}

transition={{
duration:0.6,
delay:index*0.1
}}


whileHover={{
y:-10
}}


className="

group

relative

p-7


rounded-3xl



bg-white/60

dark:bg-slate-900/60


backdrop-blur-xl


border

border-gray-200

dark:border-slate-800


shadow-lg


hover:border-blue-500


transition

"

>


{/* Icon */}


<div

className="

w-14

h-14


rounded-2xl


flex

items-center

justify-center


text-2xl


bg-blue-600


text-white


shadow-lg


group-hover:scale-110


transition-transform

"

>

{value.icon}

</div>





<h3

className="

mt-6


text-xl


font-bold


text-gray-900

dark:text-white

"

>

{value.title}

</h3>





<p

className="

mt-3


text-sm


leading-relaxed


text-gray-600

dark:text-gray-400

"

>

{value.description}

</p>




</motion.div>


))


}


</div>



</div>


</section>


)

}


export default Values;