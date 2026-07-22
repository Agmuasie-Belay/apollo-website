import { motion } from "framer-motion";

import { services } from "../../data/services";

import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";


function FeaturedServices(){


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

"

>



{/* Section Header */}


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

text-center

max-w-3xl

mx-auto

"

>


<SectionTitle
          badge="Featured Services"
          title="Everything You Need For Your Journey"
          description="From flight bookings to complete travel management,
Apollo Travel provides reliable solutions that make
every journey simple and memorable."
        />
</motion.div>







{/* Service Cards */}


<div

className="

mt-14

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-8

"

>


{

services.map((service,index)=>service.featured?(


<motion.div

key={service.title}


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


 <ServiceCard

service={service}

/>


</motion.div>


):(<div></div>))


}


</div>


</div>


</section>

);


}


export default FeaturedServices;