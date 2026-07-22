import { motion } from "framer-motion";

import companyImage from "../../assets/service_images/flight.png";


function CompanyStory(){

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


grid

lg:grid-cols-2


gap-16


items-center

"

>


{/* IMAGE */}

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
once:true,
amount:0.3
}}

transition={{
duration:0.7
}}


className="

relative

"

>


<div

className="

absolute

inset-0

bg-blue-500/20

blur-3xl

rounded-3xl

"

/>



<img

src={companyImage}

alt="Apollo Travel Office"

className="

relative

rounded-3xl

shadow-2xl

w-full

h-[450px]

object-cover

border

border-gray-200

dark:border-slate-800

"

/>


</motion.div>





{/* CONTENT */}

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
once:true,
amount:0.3
}}

transition={{
duration:0.7
}}

>


<span

className="

inline-flex

px-4

py-2

rounded-full


bg-blue-100

dark:bg-blue-900/40


text-blue-600

dark:text-blue-400


text-sm

font-semibold

"

>

Company Story

</span>





<h2

className="

mt-6

text-4xl

lg:text-5xl

font-bold


text-gray-900

dark:text-white

"

>

About Apollo Travel

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

Established in 2019, Apollo Travel Agency
has been providing reliable and personalized
travel solutions for individuals, corporate
organizations, NGOs, and business travelers.

</p>





<p

className="

mt-5

leading-relaxed


text-gray-600

dark:text-gray-400

"

>

From airline ticketing and hotel reservations
to car rental services and corporate travel
management, we help our clients experience
smooth, convenient, and memorable journeys.

</p>





<p

className="

mt-5

leading-relaxed


text-gray-600

dark:text-gray-400

"

>

With a commitment to professionalism,
customer satisfaction, and dependable service,
Apollo Travel connects Ethiopia with destinations
around the world.

</p>





</motion.div>


</div>


</section>

)

}


export default CompanyStory;