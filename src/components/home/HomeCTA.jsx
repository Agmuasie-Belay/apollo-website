import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPhoneCall,
} from "react-icons/fi";


import ctaImage from "../../assets/service_images/flight.png"


function HomeCTA(){

return (

<section

className="

relative

py-28

px-6

lg:px-24

overflow-hidden

"

>


{/* Background Image */}

<img

src={ctaImage}

alt="Travel with Apollo"

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

via-slate-900/70

to-slate-900/50

"

/>





{/* Content */}

<div

className="

relative

z-10

max-w-5xl

mx-auto

text-center

"

>


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
duration:0.7
}}


className="

rounded-3xl

p-10

md:p-14


bg-white/10

dark:bg-black/30


backdrop-blur-xl


border

border-white/20


shadow-2xl

"

>


{/* Badge */}

<span

className="

inline-flex

px-5

py-2

rounded-full


bg-blue-500/20


border

border-blue-400/30


text-blue-200


text-sm

font-semibold

"

>

Your Journey Starts Here

</span>





<h2

className="

mt-6

text-4xl

md:text-5xl

lg:text-6xl


font-bold


text-white

"

>

Ready to Explore
the World?

</h2>





<p

className="

mt-6

max-w-3xl

mx-auto


text-lg


leading-relaxed


text-slate-200

"

>

Whether you are planning a vacation,
business trip, or corporate travel,
Apollo Travel provides reliable solutions
to make your journey smooth and memorable.

</p>





{/* Buttons */}


<div

className="

mt-10

flex

flex-wrap

justify-center

gap-5

"

>


<a

href="#contact"

className="

inline-flex

items-center

gap-2


rounded-full


bg-blue-600


px-8

py-4


font-semibold


text-white


hover:bg-blue-700


transition


shadow-lg

"

>

Book Your Trip

<FiArrowRight/>

</a>





<a

href="tel:+251XXXXXXXXX"

className="

inline-flex

items-center

gap-2


rounded-full


border

border-white/30


bg-white/10


backdrop-blur-md


px-8

py-4


font-semibold


text-white


hover:bg-white/20


transition

"

>

<FiPhoneCall/>

Contact Us

</a>


</div>



</motion.div>


</div>



</section>


)

}


export default HomeCTA;