import { motion } from "framer-motion";

import  {skills} from "../../data/skills";



function Skills(){


return (

<section

id="skills"

className="

min-h-screen

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

className="
text-center
mb-16
"

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

My

<span

className="

text-blue-600

dark:text-blue-400

"

>

 Skills

</span>


</h2>


<p

className="

mt-4

max-w-2xl

mx-auto


text-gray-600

dark:text-gray-400

"

>

Technologies and tools I use to build
intelligent systems and digital solutions.

</p>



</motion.div>






<div

className="

grid

md:grid-cols-2

lg:grid-cols-3


gap-8

"

>


{

skills.map((category,index)=>(


<motion.div


key={category.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.5,
delay:index*0.1
}}



whileHover={{
y:-8
}}


className="

p-8


rounded-2xl



bg-gray-100

dark:bg-slate-900



border

border-gray-200

dark:border-slate-800



hover:border-blue-500



transition



"

>


<div

className="

flex

items-center

gap-4

mb-6

"

>


<div

className="

text-4xl

text-blue-600

dark:text-blue-400

"

>

<category.icon/>

</div>



<h3

className="

text-xl

font-semibold


text-gray-900

dark:text-white

"

>

{category.title}

</h3>



</div>






<div

className="

flex

flex-wrap

gap-3

"

>


{

category.skills.map(skill=>(


<span

key={skill}

className="

px-4

py-2


rounded-full


text-sm



bg-white

dark:bg-slate-800



text-gray-700

dark:text-gray-300



border

border-gray-200

dark:border-slate-700



hover:bg-blue-600

hover:text-white



transition


"

>

{skill}


</span>


))

}



</div>



</motion.div>


))

}


</div>



</div>


</section>


)

}


export default Skills;