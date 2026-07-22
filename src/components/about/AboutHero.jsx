import { motion } from "framer-motion";

import aboutImage from "../../assets/service_images/flight.png";


function AboutHero(){

return (

<section

className="

relative

h-[70vh]

overflow-hidden

flex

items-center

justify-center

"

>


{/* Background */}

<img

src={aboutImage}

alt="Apollo Travel"

className="

absolute

inset-0

w-full

h-full

object-cover

"

/>



{/* Overlay */}

<div

className="

absolute

inset-0

bg-gradient-to-r

from-slate-950/90

via-slate-900/60

to-transparent

"

/>





<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}


className="

relative

z-10

text-center

max-w-4xl

px-6

"

>


<span

className="

inline-flex

rounded-full

px-5

py-2


bg-white/10

backdrop-blur-md


border

border-white/20


text-blue-200


font-medium

"

>

About Apollo Travel

</span>





<h1

className="

mt-6

text-5xl

md:text-6xl

font-bold

text-white

"

>

Your Trusted Travel Partner

</h1>





<p

className="

mt-5

text-xl

text-slate-200

"

>

Since 2019, helping individuals,
organizations, and businesses explore
the world with confidence.

</p>


</motion.div>



</section>

)

}


export default AboutHero;