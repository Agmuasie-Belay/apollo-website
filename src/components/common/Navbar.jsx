import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import { useLocation, useNavigate } from "react-router-dom";

import { navLinks } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";


function Navbar() {


  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");


  const navigate = useNavigate();

  const location = useLocation();



  // Navigation Logic

  const scrollToSection = (href) => {


    setOpen(false);



    // For section based scrolling

    if(href.startsWith("#")){


      const section = document.querySelector(href);



      if(section){

        section.scrollIntoView({

          behavior:"smooth",

          block:"start"

        });

      }


      return;

    }



    // For React Router pages

    navigate(href);


  };






  // Active Navigation Logic

  useEffect(()=>{


    const currentPath = location.pathname;



    const currentLink = navLinks.find(

      (link)=>link.href === currentPath

    );



    if(currentLink){

      setActiveSection(
        currentLink.name.toLowerCase()
      );

    }

    else{

      setActiveSection("home");

    }



  },[location.pathname]);






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

px-0

lg:px-0

py-0 


bg-gradient-to-b

from-black/40

to-transparent


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



backdrop-blur-xl



bg-white/60

dark:bg-slate-900/60



border

border-white/30

dark:border-slate-700



shadow-lg

"

>


{/* LOGO */}


<button

onClick={()=>scrollToSection("/")}

className="

text-left

text-slate-900

dark:text-white

"

>


<div

className="

leading-tight

"

>

<span

className="

text-2xl

font-bold

tracking-[0.15em]

"

>

APOLLO

</span>


<span

className="

block

text-xs

uppercase

tracking-[0.35em]

text-blue-600

dark:text-blue-400

"

>

Travel Agency

</span>


</div>


</button>





{/* DESKTOP MENU */}


<nav

className="

hidden

md:flex

items-center

gap-7

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

font-medium


${
activeSection === link.name.toLowerCase()

?

"text-blue-600 dark:text-blue-400"

:

"text-slate-700 dark:text-slate-200"

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
activeSection === link.name.toLowerCase()

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



{/* BOOK NOW BUTTON */}


<a

href="/contact"

onClick={()=>setOpen(false)}

className="

ml-3

px-5

py-2.5


rounded-full


bg-blue-600


text-white


font-semibold


hover:bg-blue-700


transition


shadow-md

"

>

Book Now

</a>



<ThemeToggle />


</nav>







{/* MOBILE CONTROLS */}


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

text-slate-700

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







{/* MOBILE MENU */}


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



bg-white/90

dark:bg-slate-900/90



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
activeSection === link.name.toLowerCase()

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





<button

onClick={()=>scrollToSection("/contact")}

className="

mt-3

rounded-full

bg-blue-600

py-3

text-white

font-semibold

"

>

Book Your Trip

</button>



</nav>



</motion.div>


)


}


</AnimatePresence>




</motion.header>


);


}


export default Navbar;