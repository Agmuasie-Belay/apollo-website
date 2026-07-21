import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaUsers,
  FaCode,
  FaRobot
} from "react-icons/fa";

import Counter from "../ui/Counter";


const achievements = [

{
icon:<FaGraduationCap/>,
number:6,
suffix:"+",
title:"Years Teaching"
},

{
icon:<FaUsers/>,
number:500,
suffix:"+",
title:"Learners Mentored"
},

{
icon:<FaCode/>,
number:10,
suffix:"+",
title:"Technology Projects"
},

{
icon:<FaRobot/>,
number:0,
suffix:"",
title:"AI Research Focus"
}

];



function About(){


return (

<section

id="about"

className="

min-h-screen

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


grid

lg:grid-cols-2


gap-16


items-center

"

>


{/* LEFT CONTENT */}


<motion.div


initial={{
opacity:0,
x:-50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:0.7
}}

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

About

<span className="text-blue-600 dark:text-blue-400">

 Me

</span>

</h2>



<p

className="

mt-6

text-lg

leading-relaxed


text-gray-700

dark:text-gray-300

"

>

I am Agmuasie Belay, an Electrical and Computer
Engineering professional, AI practitioner, software
developer, and STEM educator from Ethiopia.

</p>




<p

className="

mt-4

leading-relaxed


text-gray-600

dark:text-gray-400

"

>

My work combines artificial intelligence,
software engineering, control systems, and
technology education. I develop web applications,
machine learning solutions, and intelligent systems
that solve real-world problems.

</p>




<p

className="

mt-4

leading-relaxed


text-gray-600

dark:text-gray-400

"

>

Beyond technology development, I am passionate
about empowering learners through STEM education,
career development, and accessible digital solutions.

</p>



</motion.div>







{/* ACHIEVEMENTS */}


<motion.div


initial={{
opacity:0,
x:50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:0.7
}}



className="

grid

grid-cols-2

gap-5

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
duration:0.2
}}



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

mb-4


text-blue-600

dark:text-blue-400

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

item.title === "AI Research Focus"

?

"AI"

:

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


export default About;