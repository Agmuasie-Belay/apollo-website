import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";


function MainLayout({children}){


return (

<div

className="
min-h-screen

bg-white

dark:bg-slate-950

transition-colors

duration-500

"

>


<ScrollToTop />


<Navbar />


<main>

{children}

</main>


<Footer />


</div>

);


}


export default MainLayout;