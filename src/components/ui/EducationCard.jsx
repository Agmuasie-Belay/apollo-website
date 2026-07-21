import { motion } from "framer-motion";

import {
FaGraduationCap,
FaCertificate
} from "react-icons/fa";


function EducationCard({item}){


const icon =
item.type==="Academic"
?
<FaGraduationCap/>
:
<FaCertificate/>;



return (

<motion.div

whileHover={{
y:-10
}}

transition={{
duration:0.3
}}

className="

group

relative

p-8

rounded-3xl


bg-white/60

dark:bg-slate-900/60


backdrop-blur-xl


border

border-gray-200

dark:border-slate-700


hover:border-blue-500


shadow-lg


transition-all


"


>


{/* Glow */}

<div

className="

absolute

inset-0

rounded-3xl

bg-blue-500/10

opacity-0

group-hover:opacity-100

blur-xl

transition

"

/>





<div className="relative">



<div

className="

text-blue-500

text-4xl

mb-5

"

>

{icon}

</div>



<h3

className="

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

mt-2

text-blue-500

font-medium

"

>

{item.institution}

</p>



<span

className="

inline-block

mt-4

px-4

py-1

rounded-full


text-sm


bg-blue-100

dark:bg-blue-900


text-blue-700

dark:text-blue-300

"

>

{item.period}

</span>




<p

className="

mt-5

text-gray-600

dark:text-gray-400

"

>

{item.description}

</p>





<div

className="

mt-5

flex

flex-wrap

gap-2

"

>

{

item.focus.map(skill=>(


<span

key={skill}

className="

px-3

py-1

rounded-full


text-xs


bg-gray-200

dark:bg-slate-800


text-gray-700

dark:text-gray-300

"

>

{skill}

</span>


))

}

</div>




<div

className="

mt-5

text-sm

italic

text-gray-500

dark:text-gray-400

"

>

{item.highlight}

</div>



</div>



</motion.div>


)

}


export default EducationCard;