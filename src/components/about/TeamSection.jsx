import { motion } from "framer-motion";

import TeamCard from "../ui/TeamCard";

import { team } from "../../data/team";


function TeamSection(){


return (

<section

className="

mt-24

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

Our Team

</h2>



<p

className="

mt-4

max-w-2xl

mx-auto


text-lg

text-gray-600

dark:text-gray-300

leading-relaxed

"

>

Meet the dedicated travel professionals behind
Apollo Travel, committed to creating smooth,
memorable, and personalized journeys.

</p>



</motion.div>







{/* ================= TEAM CARDS ================= */}



<div

className="

mt-12
mx-4
lg:mx-8
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4


gap-8

"

>


{

team.map((member,index)=>(


<motion.div


key={member.name}


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
duration:0.5,
delay:index*0.1
}}



>


<TeamCard

member={member}

/>



</motion.div>


))


}



</div>



</div>


</section>


)

}


export default TeamSection;