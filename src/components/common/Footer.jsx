import { useEffect, useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";


import logo from "../../assets/images/stock.png";



function Footer(){


const [showTop,setShowTop] = useState(false);



useEffect(()=>{


const handleScroll =()=>{


if(window.scrollY > window.innerHeight){

setShowTop(true);

}

else{

setShowTop(false);

}


};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);




const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




const services=[

{
name:"Airline Ticketing",
path:"/services"
},

{
name:"Hotel Reservations",
path:"/services"
},

{
name:"Car Rental",
path:"/services"
},

{
name:"Corporate Travel",
path:"/services"
},

{
name:"Visa Assistance",
path:"/services"
}

];



const company=[

{
name:"About Us",
path:"/about"
},

{
name:"Our Team",
path:"/about#team"
},

{
name:"Destinations",
path:"/destinations"
},

{
name:"Travel Updates",
path:"/blog"
},

{
name:"Contact",
path:"/contact"
}

];



return(


<footer

className="

relative

pt-16

px-6

bg-gray-50

dark:bg-slate-950

text-gray-600

dark:text-gray-300

transition-colors

duration-500

"

>


<div

className="

max-w-7xl

mx-auto

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-4

gap-10

"

>


{/* BRAND */}

<div>


<div

className="

w-28

h-28

rounded-full

overflow-hidden

bg-white

shadow-lg

flex

items-center

justify-center

"

>


<img

src={logo}

alt="Apollo Travel"

className="

w-full

h-full

object-contain

"

/>


</div>




<p

className="

mt-7

leading-relaxed

"

>

Your trusted travel partner since 2019.
We create memorable journeys through
personalized services, competitive pricing,
and reliable travel solutions.

</p>



<div

className="

mt-6

space-y-3

text-sm

"

>


<div className="flex gap-3 items-center">

<FiPhone/>

+251 9XX XX XX XX

</div>


<div className="flex gap-3 items-center">

<FiMail/>

info@apollotravel.com

</div>


<div className="flex gap-3 items-center">

<FiMapPin/>

Bole Road, Addis Ababa

</div>


</div>


</div>








{/* SERVICES */}


<div>


<h3

className="

text-lg

font-bold

text-gray-900

dark:text-white

mb-5

"

>

Services

</h3>



<ul

className="

space-y-3

text-sm

"

>

{

services.map((item)=>(

<li key={item.name}>


<Link

to={item.path}

className="

group

flex

items-center

gap-2

hover:text-blue-500

transition-all

duration-300

"

>


<span

className="

transition-transform

duration-300

group-hover:translate-x-2

"

>

→

</span>


{item.name}


</Link>


</li>

))


}


</ul>


</div>










{/* SOCIAL */}


<div>


<h3

className="

text-lg

font-bold

text-gray-900

dark:text-white

mb-5

"

>

Follow Us

</h3>



<ul

className="

space-y-4

text-sm

"

>


<li className="flex gap-4 hover:text-blue-500 transition">

<FaFacebookF/>

Facebook

</li>


<li className="flex gap-4 hover:text-blue-500 transition">

<FaInstagram/>

Instagram

</li>


<li className="flex gap-4 hover:text-blue-500 transition">

<FaTelegramPlane/>

Telegram

</li>


<li className="flex gap-4 hover:text-blue-500 transition">

<FaWhatsapp/>

WhatsApp

</li>


</ul>


</div>










{/* COMPANY */}


<div>


<h3

className="

text-lg

font-bold

text-gray-900

dark:text-white

mb-5

"

>

Company

</h3>



<ul

className="

space-y-3

text-sm

"

>


{

company.map((item)=>(

<li key={item.name}>


<Link

to={item.path}

className="

group

flex

items-center

gap-2

hover:text-blue-500

transition

"

>


<span

className="

opacity-0

group-hover:opacity-100

transition

"

>

→

</span>


{item.name}


</Link>


</li>


))


}


</ul>


</div>




</div>









{/* COPYRIGHT */}



<div

className="

mt-14

border-t

border-gray-300

dark:border-white/20

pt-8

"

>


<div

className="

rounded-2xl

bg-white/70

dark:bg-white/10

backdrop-blur-xl

border

border-gray-200

dark:border-white/10

px-8

py-5

flex

flex-col

md:flex-row

justify-between

items-center

gap-3

"

>


<p

className="

font-semibold

text-gray-900

dark:text-white

"

>

© {new Date().getFullYear()} Apollo Travel Agency.
All rights reserved.

</p>



<p

className="italic"

>

"Your Journey Begins With Us"

</p>


</div>


</div>







{/* FLOATING BUTTON */}



<AnimatePresence>


{

showTop && (


<motion.button

initial={{

opacity:0,

scale:0.5

}}

animate={{

opacity:1,

scale:1

}}

exit={{

opacity:0,

scale:0.5

}}

onClick={scrollTop}

className="

fixed

right-8

bottom-8

z-50

w-16

h-16

rounded-full

bg-blue-500

text-white

shadow-xl

flex

items-center

justify-center

text-xl

hover:bg-blue-600

transition

"

>


<FiArrowUp/>


</motion.button>


)


}


</AnimatePresence>




</footer>


)

}


export default Footer;