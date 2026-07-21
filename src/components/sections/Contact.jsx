import { motion } from "framer-motion";

import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";


function Contact(){


return (

<section

id="contact"

className="

min-h-screen

px-6

lg:px-24

py-24


bg-white

dark:bg-slate-900


transition-colors

duration-500

"

>


<div

className="

max-w-6xl

mx-auto

"


>


{/* Heading */}


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

Let's

<span

className="text-blue-500"

>

 Connect

</span>

</h2>



<p

className="

mt-5

text-gray-600

dark:text-gray-400

max-w-2xl

mx-auto

"

>

Have a project idea, research collaboration,
training opportunity, or technology initiative?
I would love to hear from you.

</p>


</motion.div>







<div

className="

grid

lg:grid-cols-2

gap-10

"


>





{/* Information Card */}



<motion.div


initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}



className="

p-8

rounded-3xl


bg-gray-100/70

dark:bg-slate-950/60


backdrop-blur-xl


border

border-gray-200

dark:border-slate-700


"

>


<h3

className="

text-2xl

font-bold

text-gray-900

dark:text-white

"

>

Contact Information

</h3>



<p

className="

mt-4

text-gray-600

dark:text-gray-400

"

>

Feel free to reach out for collaborations,
software projects, AI research, or STEM
education initiatives.

</p>





<div

className="

mt-8

space-y-5

"

>



<a

href="mailto:agmuasie.b@gmail.com"

className="

flex

items-center

gap-4


text-gray-700

dark:text-gray-300


hover:text-blue-500


transition

"

>

<FaEnvelope className="text-xl"/>

agmuasie.b@gmail.com

</a>





<a

href="https://github.com/Agmuasie-Belay"

target="_blank"

rel="noopener noreferrer"

className="

flex

items-center

gap-4


text-gray-700

dark:text-gray-300


hover:text-blue-500


transition

"

>


<FaGithub className="text-xl"/>

GitHub

</a>





<a

href="https://linkedin.com/in/agmuasie-belay"

target="_blank"

rel="noopener noreferrer"

className="

flex

items-center

gap-4


text-gray-700

dark:text-gray-300


hover:text-blue-500


transition

"

>

<FaLinkedin className="text-xl"/>

LinkedIn

</a>



</div>


</motion.div>









{/* Form */}



<motion.form


initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}



className="

p-8

rounded-3xl


bg-white/60

dark:bg-slate-900/60


backdrop-blur-xl


border

border-gray-200

dark:border-slate-700


space-y-5

"


>



<input

type="text"

placeholder="Your Name"

className="

w-full

px-5

py-3


rounded-xl


bg-gray-100

dark:bg-slate-800


text-gray-900

dark:text-white


outline-none


focus:ring-2

focus:ring-blue-500

"

/>





<input

type="email"

placeholder="Email Address"

className="

w-full

px-5

py-3


rounded-xl


bg-gray-100

dark:bg-slate-800


text-gray-900

dark:text-white


outline-none


focus:ring-2

focus:ring-blue-500

"

/>







<textarea

rows="5"

placeholder="Your Message"

className="

w-full

px-5

py-3


rounded-xl


bg-gray-100

dark:bg-slate-800


text-gray-900

dark:text-white


outline-none


focus:ring-2

focus:ring-blue-500

"

/>





<button

type="submit"

className="

px-8

py-3


rounded-xl


bg-blue-600

hover:bg-blue-700


text-white


font-semibold


transition


shadow-lg


"

>

Send Message

</button>



</motion.form>





</div>



</div>


</section>


)

}


export default Contact;