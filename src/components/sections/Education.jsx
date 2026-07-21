import { motion } from "framer-motion";

import EducationCard from "../ui/EducationCard";

import { education } from "../../data/education";


function Education(){


const academic = education.filter(
(item)=>item.type==="Academic"
);


const certifications = education.filter(
(item)=>item.type==="Certification"
);



return (

<section

id="education"

className="

min-h-screen

px-6

lg:px-24

py-24


bg-gray-50

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



{/* Header */}

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

transition={{
duration:0.6
}}

className="
text-center
mb-20
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

Education &

<span

className="

text-blue-500

"

>

 Professional Journey

</span>


</h2>



<p

className="

mt-5

max-w-3xl

mx-auto


text-gray-600

dark:text-gray-400

"

>

A journey from electrical and computer engineering 
to intelligent systems, artificial intelligence,
software development, and technology education.

</p>


</motion.div>









{/* Academic Section */}


<motion.h3

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="

text-3xl

font-bold

mb-8

text-gray-900

dark:text-white

"

>


🎓 Academic Foundation

</motion.h3>






<div

className="

grid

md:grid-cols-2

gap-8

mb-20

"


>


{

academic.map((item,index)=>(


<motion.div

key={item.title}

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
delay:index*0.15
}}

>


<EducationCard

item={item}

/>


</motion.div>


))

}


</div>









{/* Certification Section */}



<motion.h3

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="

text-3xl

font-bold

mb-8

text-gray-900

dark:text-white

"

>


🚀 Continuous Learning

</motion.h3>







<div

className="

grid

md:grid-cols-2

lg:grid-cols-3

gap-8

"


>


{

certifications.map((item,index)=>(


<motion.div

key={item.title}


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
delay:index*0.15
}}

>


<EducationCard

item={item}

/>


</motion.div>


))

}


</div>





</div>


</section>


)

}


export default Education;