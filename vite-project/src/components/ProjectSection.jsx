
import OnlineTicket from "../assets/images/Online_Ticket.png";
import portfolio from "../assets/images/portfolio.png";
import attary from "../assets/images/Attary.png";
import ipams from "../assets/images/IPAMS.png";
import Resume from "../assets/images/Resume.png";
import social from "../assets/images/social.png";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
const projects = [
    {

        id: 1,
        title: "Portfolio",
        description: "A project that I made using ReactJS",
        image: portfolio,
        tags: ["ReactJS", "TailwindCSS", "ViteJS"],
        link: "",
        github: "https://github.com/Sajadssa/NewPortfolio.git"
    },
    {

        id: 2,
        title: "Attary",
        description: "A project about a web application that I made using javascript",
        image: attary,
        tags: ["HTML/CSS", "Javascript", "VueJS"],
        link: "https://pharmacology2022.netlify.app/",
        github: "https://github.com/Sajadssa/pharmacology.git"
    }
    ,
    {

        id: 3,
        title: "Online Ticket Purchase",
        description: "A project about a website that buy tickets online and simulation Wallet",
        image: OnlineTicket,
        tags: ["PHP", "Hack", "JavaScript", "MySQL"],
        link: "Need to Apache Sever",
        github: "https://github.com/Sajadssa/online_ticket_purchase.git"
    },

    {

        id: 4,
        title: "Medical Integrated Management System",
        description: "A project about a system that helps doctors to admit patients and manage their patients",
        image: ipams,
        tags: ["C#", "SQL Server", ".NET Framework"],
        link: "Need to Run SQL Server ",
        github: "https://github.com/Sajadssa/Intelligent-Patient-Admission-Management-System.git"
    },
    {

        id: 5,
        title: "Sajad Resume",
        description: "a project about resume of my and myskills and experiences and projects and achievements",
        image: Resume,
        tags: ["HTML/CSS", "Javascript", "VueJS"],
        link: "https://sajadsaeediazadresume.netlify.app/",
        github: "https://github.com/Sajadssa/responsive-portfolio-website-Sajad-main.git"
    },

    {

        id: 6,
        title: "Social Media Clone",
        description: "A project about a system that helps doctors to admit patients and manage their ",
        image: social,
        tags: ["HTML/CSS", "Javascript", "VueJS"],
        link: "#",
        github: "https://github.com/Sajadssa/Responsive-Social-media.git"
    },
]




export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

            </div>


            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-purple-500">Projects</span></h2>

            <p className="text-center text-muted-foreground  mb-12 max-w-2xl mx-auto">
                I have worked on many projects in my career, and I'm proud to show you some of them. These projects showcase my skills in various technologies and demonstrate my ability to solve complex problems.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs border ">
                        <div className="h-40 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap gap-3 mb-4 items-center justify-center ">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground ">

                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className=" text-xl font-semibold mb-2 ">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3 ml-2 mb-2">
                                <a href={project.link} target="_blank" className="text-foreground/80 hover:text-purple-500/80 transition-colors duration-300">

                                    <ExternalLink size={20} />
                                </a>
                                <a href={project.github} target="_blank" className="text-foreground/80 hover:text-purple-500/80 transition-colors duration-300">
                                    <GithubIcon size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
<div className="text-center mt-12" >
    <a> 
Check out My Github <ArrowRight />
    </a>
</div>

            
        </section>
    )
}