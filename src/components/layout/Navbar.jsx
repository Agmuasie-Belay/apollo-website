import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import { navLinks } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";


function Navbar() {


  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");



  // Smooth scrolling

  const scrollToSection = (href) => {

    const section = document.querySelector(href);


    if(section){

      section.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }


    setOpen(false);

  };





  // Scroll spy

 
useEffect(() => {

  const handleScroll = () => {

    const scrollPosition = window.scrollY + 200;


    let currentSection = "home";


    navLinks.forEach((link) => {

      const section = document.querySelector(link.href);


      if (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;


        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {

          currentSection = link.href.replace("#", "");

        }

      }

    });


    setActiveSection(currentSection);

  };


  window.addEventListener(
    "scroll",
    handleScroll
  );


  handleScroll();


  return () => {

    window.removeEventListener(
      "scroll",
      handleScroll
    );

  };


}, []);



return (

<motion.header

initial={{
  y:-100,
  opacity:0
}}

animate={{
  y:0,
  opacity:1
}}

transition={{
  duration:0.6
}}

className="
fixed
top-0
left-0

z-50

w-full

px-6
lg:px-20

py-4

bg-linear-to-b

from-white/30
to-transparent

dark:from-slate-900/30

backdrop-blur-xl


"

>

<div

className="

max-w-7xl
mx-auto


flex
items-center
justify-between


px-6
py-3


rounded-2xl


backdrop-blur-xl


bg-white/60

dark:bg-slate-900/60


border

border-gray-200

dark:border-slate-700


shadow-lg

"


>


{/* Logo */}


<button

onClick={()=>scrollToSection("#home")}

className="

text-2xl

font-bold

tracking-wide


text-blue-600

dark:text-blue-400

"

>

Agmuasie

</button>






{/* Desktop Menu */}



<nav

className="

hidden

md:flex

items-center

gap-8

"

>


{

navLinks.map((link)=>(


<button


key={link.name}


onClick={()=>scrollToSection(link.href)}



className={`
relative
group

transition

${
activeSection === link.href.replace("#","")

?

"text-blue-600 dark:text-blue-400"

:

"text-gray-700 dark:text-gray-200"

}

hover:text-blue-500

`}


>


{link.name}



<span

className={`
absolute

left-0

-bottom-1


h-0.5


bg-blue-500


transition-all

duration-300


${
activeSection === link.href.replace("#","")

?

"w-full"

:

"w-0 group-hover:w-full"

}

`}


/>



</button>


))


}



<ThemeToggle />


</nav>







{/* Mobile Controls */}



<div

className="

flex

items-center

gap-4

md:hidden

"

>


<ThemeToggle />



<button

onClick={()=>setOpen(!open)}

aria-label="Toggle Menu"


className="

text-2xl


text-gray-700

dark:text-white


"

>


{

open

?

<FiX/>

:

<FiMenu/>

}


</button>


</div>





</div>








{/* Mobile Menu */}



<AnimatePresence>


{

open && (


<motion.div


initial={{

opacity:0,

y:-10

}}


animate={{

opacity:1,

y:0

}}


exit={{

opacity:0,

y:-10

}}


transition={{

duration:0.25

}}


className="

md:hidden


mt-3


mx-auto


max-w-7xl



rounded-2xl


overflow-hidden



backdrop-blur-xl



bg-white/80

dark:bg-slate-900/80



border

border-gray-200

dark:border-slate-700



shadow-xl

"

>



<nav

className="

flex

flex-col

gap-5


p-6

"

>


{


navLinks.map((link)=>(


<button


key={link.name}


onClick={()=>scrollToSection(link.href)}



className={`
text-left

text-lg


transition


${
activeSection === link.href.replace("#","")

?

"text-blue-600 dark:text-blue-400"

:

"text-gray-700 dark:text-gray-200"

}


hover:text-blue-500

`}



>


{link.name}


</button>



))


}



</nav>



</motion.div>


)


}


</AnimatePresence>



</motion.header>


);


}


export default Navbar;