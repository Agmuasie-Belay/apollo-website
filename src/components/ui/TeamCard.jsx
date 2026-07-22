import { motion } from "framer-motion";


function TeamCard({ member }) {


return (

<motion.div

className="
relative
h-[320px]
rounded-3xl
overflow-hidden
group
shadow-xl
"


whileHover={{
y:-10
}}


transition={{
duration:0.3
}}

>


{/* Profile Image */}


<img

src={member.image}

alt={member.name}

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






{/* Dark Gradient */}


<div

className="

absolute

inset-0

bg-gradient-to-t

from-black/90

via-black/30

to-transparent

"

/>









{/* Glass Information Panel */}



<motion.div


className="

absolute

bottom-0

left-0

w-full


h-[25%]


group-hover:h-full


transition-all

duration-500


p-6


bg-white/10


dark:bg-black/30


backdrop-blur-xl


border-t

border-white/20


flex

flex-col

"

>







{/* Always visible */}



<div

className="

shrink-0

"

>


<h3

className="

text-2xl

font-bold

text-white

"

>

{member.name}

</h3>




<p

className="

text-blue-300

font-medium

mt-1

"

>

{member.role}

</p>



</div>









{/* Hover Content */}



<div

className="

opacity-0

translate-y-5


group-hover:opacity-100

group-hover:translate-y-0


transition-all

duration-500


mt-5

"

>



<p

className="

text-gray-200

text-sm

leading-relaxed

"

>

{member.bio}

</p>






{/* Expertise Tags */}



<div

className="

flex

flex-wrap

gap-2

mt-5

"

>


{

member.expertise.map((item)=>(


<span

key={item}

className="

px-3

py-1

rounded-full

text-xs

bg-white/20

text-white

backdrop-blur-md

"

>

{item}

</span>


))


}



</div>




</div>






</motion.div>



</motion.div>


)

}


export default TeamCard;