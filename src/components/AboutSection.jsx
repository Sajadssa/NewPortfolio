import { Activity, Airplay, Briefcase, Code, Code2, Database, DecimalsArrowRightIcon, DessertIcon, Globe2Icon, GlobeLock, Icon, LucideAngry, Paintbrush2Icon, PaintBucketIcon, Star, User, User2 } from "lucide-react";

export const AboutSection = () => {
    return ( 
        <section id="about" className="py-24 px-4 relative">
<div className="container mx-auto max-w-5xl">
    <h2 className="text-4xl font-bold text-center mb-8 mt-24">
        About <span className=" text-purple-500">Me</span>
    </h2>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Passionate Web Developer </h3>
<p className="text-muted-foreground">I am a passionate web developer with a strong focus on user experience and design. With a degree in Computer Science, I have a deep understanding of web technologies and a keen eye for detail.I am always looking for new challenges and opportunities to grow as a developer.</p>


<p className="text-muted-foreground"> I am a self-motivated individual who thrives on challenges and is always seeking new opportunities to learn and grow. I am a quick learner and a team player who is always willing to help others. I am also a problem solver who is always looking for ways to improve and optimize my work.</p>


<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
    <a href="#contact" className="cosmic-button text-white bg-purple-500 hover:bg-purple-600 text-sm font-medium py-3 px-6 rounded-full shadow-sm hover:shadow-lg"> Let's Connect!

    </a>


    <a href="#" className="px-6 py-2 rounded-full border border-purple-700 text-primary hover:bg-primary/10 transition-colors duration-300 hover:text-purple-400 "> Download Resume

    </a>

</div>
    </div>
    <div className="grid grid-cols-1 gap-6">
<div className="gradient-border p-2 card-hover bg-primary/10">
    <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-primary/10">
        <Code2 className=" text-purple-500 w-5 h-5 flex items-center justify-center rounded-full animate-bounce hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 shadow-purple-500/50" />
        </div>
<div className="text-left ">
    <h4 className="font-semibold text-lg">Web Development</h4>
    <p className="text-muted-foreground">
        Web developer,with extensive knowledge and years of experience,working in web technologies
    </p>
</div>
    </div>
</div>


<div className="gradient-border p-2 card-hover bg-primary/10">
    <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-primary/10">
        <User2 className=" text-purple-500 w-5 h-5 flex items-center justify-center rounded-full animate-bounce hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 shadow-purple-500/50" />
        </div>
<div className="text-left ">
    <h4 className="font-semibold text-lg">Ui/Ux Design</h4>
    <p className="text-muted-foreground">
        Ui/Ux design,delivering quality work. Fluent in designing
    </p>
</div>

    </div>
</div>

<div className="gradient-border p-2 card-hover bg-primary/10">
    <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-primary/10">
        <Database className=" text-purple-500 w-5 h-5 flex items-center justify-center rounded-full animate-bounce hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 shadow-purple-500/50" />
        </div>
        <div className="text-left ">
    <h4 className="font-semibold text-lg">Databases Development</h4>
    <p className="text-muted-foreground">
       implementing databases with Microsoft Access platform and SQL Server Ability to produce software under Windows with C#
    </p>
</div>
    </div>
</div>





    </div>
   
</div>


        </section>
     );
}
 
