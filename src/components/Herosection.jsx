import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10 ">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
<span className="opacity-0 animate-fade-in"> Hi , I'm</span>
<span className="text-purple-500 ml-1 opacity-0 animate-fade-in-delay-1"> Sajad</span>
<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Saeedi Azad</span>



            </h1>
<p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
  I'm a passionate and hardworking professional with a strong background in web development, UI/UX design, and database management. 
 


</p>

<div className="pt-4 opacity-0 animate-fade-in-delay-4">
  <a href="#projects" className="cosmic-button color-gradient bg-gradient-to-r from-purple-500 to-purple-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 opacity-0 animate-fade-in-delay-4">
    View Projects
  </a>
</div>
        </div>



    </div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2  animate-bounce flex flex-col items-center ">
<span className="text-muted-foreground animate-fade-in-delay-2 mb-2">Scroll</span>
<ArrowDown className="w-5 h-5  text-purple-500 hover:  animate-bounce" />
</div>


    </section>
  );
};