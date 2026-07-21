import { motion } from "framer-motion";
import RoleSwitcher from "../ui/RoleSwitcher";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

import {
  FiDownload
} from "react-icons/fi";

import portfolio from "../../assets/images/portfolio.webp";


function Hero(){

return (

<section
id="home"

className="
min-h-screen

flex
items-center

px-6
lg:px-24

pt-24

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

w-full

grid

lg:grid-cols-2

gap-12

items-center

"

>



{/* TEXT CONTENT */}

<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<p

className="
text-blue-600
dark:text-blue-400

text-lg

font-medium

mb-4

"

>

Hello, I'm

</p>



<h1

className="

text-4xl

sm:text-5xl

lg:text-6xl

font-extrabold

leading-tight

text-gray-900

dark:text-white

"

>

Agmuasie

<span

className="
text-blue-600
dark:text-blue-400
"

>

 Belay

</span>


</h1>




<div className="mt-5">

<RoleSwitcher />

</div>




<p

className="

mt-6

max-w-xl

text-lg

leading-relaxed

text-gray-600

dark:text-gray-400

"

>

I design intelligent systems, modern web applications,
and educational technologies by combining artificial
intelligence, software engineering, and engineering
principles.

</p>





{/* BUTTONS */}


<div

className="
flex

flex-wrap

gap-4

mt-8

"

>


<a

href="/Agmuasie_CV.pdf"

download

className="

inline-flex

items-center

gap-2

px-6

py-3

rounded-full

bg-blue-600

text-white

font-semibold

hover:bg-blue-700

transition

"

>

<FiDownload/>

Download CV

</a>





<a

href="#contact"

className="

px-6

py-3

rounded-full

border

border-blue-600

text-blue-600

dark:text-blue-400

hover:bg-blue-600

hover:text-white

transition

"

>

Contact Me

</a>



</div>





{/* SOCIAL LINKS */}

<div

className="

flex

gap-6

mt-8

text-2xl

"

>


<a

href="https://github.com/Agmuasie-Belay"

target="_blank"

rel="noreferrer"

className="

text-gray-700

dark:text-gray-300

hover:text-blue-500

transition

"

>

<FaGithub/>

</a>





<a

href="https://linkedin.com/in/agmuasie-belay"

target="_blank"

rel="noreferrer"

className="

text-gray-700

dark:text-gray-300

hover:text-blue-500

transition

"

>

<FaLinkedin/>

</a>





<a

href="#"

className="

text-gray-700

dark:text-gray-300

hover:text-blue-500

transition

"

>

<FaYoutube/>

</a>



</div>




</motion.div>







{/* IMAGE */}

<motion.div


initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}


className="

flex

justify-center

"

>


<div

className="
relative
"

>


<div

className="

absolute

inset-0

rounded-full

bg-blue-500

blur-3xl

opacity-30

animate-pulse

"

/>




<img

src={portfolio}

alt="Agmuasie Belay"

className="

relative

w-48

h-48


lg:w-64

lg:h-64


object-cover


rounded-full


border-4

border-blue-500


shadow-2xl


"

>


</img>


</div>


</motion.div>




</div>


</section>


)

}


export default Hero;