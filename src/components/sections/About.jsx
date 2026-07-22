import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaPlaneDeparture,
  FaUsers,
  FaGlobeAfrica,
  FaStar,
} from "react-icons/fa";

import Counter from "../ui/Counter";


// Statistics

const achievements = [

{
icon:<FaUsers />,
number:1000,
suffix:"+",
title:"Happy Travelers"
},

{
icon:<FaGlobeAfrica />,
number:50,
suffix:"+",
title:"Destinations"
},

{
icon:<FaPlaneDeparture />,
number:5,
suffix:"+",
title:"Years Experience"
},

{
icon:<FaStar />,
number:99,
suffix:"%",
title:"Customer Satisfaction"
}

];





import TeamCard from "../ui/TeamCard";


import { team } from "../../data/team";


function About(){


const [startCounter,setStartCounter] = useState(false);



return (

<section

id="about"

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




{/* ================= TITLE ================= */}



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
once:true
}}


className="text-center max-w-3xl mx-auto"

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

About Apollo Travel

</h2>



<div

className="

mt-4

text-blue-600

dark:text-blue-400

font-semibold

text-lg

"

>

Your Trusted Travel Partner Since 2019

</div>



<p

className="

mt-6

text-gray-600

dark:text-gray-300

text-lg

leading-relaxed

"

>

Apollo Travel Agency has been helping
individuals, organizations, and corporate
clients explore the world with confidence
through reliable travel solutions and
personalized service.

</p>



</motion.div>









{/* ================= MISSION VISION ================= */}



{/* ================= MISSION & VISION ================= */}


<div

className="

mt-16

grid

lg:grid-cols-2

gap-8

"

>



{/* Mission Card */}


<motion.div


initial={{
opacity:0,
x:-40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true,
amount:0.3
}}


transition={{
duration:0.7
}}



className="

relative

overflow-hidden

p-8


rounded-3xl



bg-white/40

dark:bg-slate-900/40



backdrop-blur-xl



border

border-white/40

dark:border-slate-700/50



shadow-xl



hover:-translate-y-2

transition-all

duration-300

"

>


{/* Gradient Glow */}

<div

className="

absolute

top-0

right-0

w-32

h-32


bg-blue-400/20

rounded-full

blur-3xl

"

>



</div>



<div className="relative z-10">


<h3

className="

text-2xl

font-bold

text-gray-900

dark:text-white

"

>

Our Mission

</h3>



<p

className="

mt-5

leading-relaxed

text-gray-700

dark:text-gray-300

"

>

To make world-class travel accessible
through exceptional service, competitive
prices, and personalized travel solutions
that create memorable journeys for every
traveler.

</p>



</div>


</motion.div>









{/* Vision Card */}


<motion.div


initial={{
opacity:0,
x:40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true,
amount:0.3
}}


transition={{
duration:0.7
}}



className="

relative

overflow-hidden

p-8


rounded-3xl



bg-white/40

dark:bg-slate-900/40



backdrop-blur-xl



border

border-white/40

dark:border-slate-700/50



shadow-xl



hover:-translate-y-2

transition-all

duration-300

"

>


{/* Gradient Glow */}

<div

className="

absolute

bottom-0

left-0

w-32

h-32


bg-blue-500/20

rounded-full

blur-3xl

"

>


</div>




<div className="relative z-10">


<h3

className="

text-2xl

font-bold

text-gray-900

dark:text-white

"

>

Our Vision

</h3>



<p

className="

mt-5

leading-relaxed

text-gray-700

dark:text-gray-300

"

>

To become East Africa's leading travel
agency, recognized for innovation,
reliability, and customer-centered
services that inspire people to explore
the world.

</p>



</div>


</motion.div>



</div>










{/* ================= STATISTICS ================= */}



<motion.div


onViewportEnter={()=>setStartCounter(true)}


whileInView={{
opacity:1,
y:0
}}


initial={{
opacity:0,
y:40
}}


viewport={{
once:true
}}



className="

mt-20

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-6

"

>



{

achievements.map((item,index)=>(


<div

key={index}

className="

p-6

rounded-2xl


bg-white

dark:bg-slate-950


border

border-gray-200

dark:border-slate-800


shadow-sm

hover:border-blue-500

transition

"

>


<div

className="

text-3xl

text-blue-600

dark:text-blue-400

mb-4

"

>

{item.icon}

</div>



<h3

className="

text-3xl

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


</div>


))

}


</motion.div>









{/* ================= TEAM ================= */}



{/* ================= TEAM ================= */}


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

className="mt-24"

>


<h2

className="

text-4xl

lg:text-5xl

font-bold

text-center

text-gray-900

dark:text-white

"

>

Our Team

</h2>




<p

className="

mt-4

max-w-2xl

mx-auto

text-center

text-gray-600

dark:text-gray-300

text-lg

"

>

Meet the dedicated travel professionals behind
Apollo Travel, committed to creating smooth,
memorable, and personalized journeys.

</p>






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

team.map((member,index)=>(


<TeamCard

key={index}

member={member}

/>


))


}



</div>



</motion.div>







</div>


</section>


)

}


export default About;