import { Instagram, Linkedin, Mail, MapPin, Phone, Send, TwitchIcon, TwitterIcon, X } from "lucide-react"
import { cn } from "../lib/utils"
  import { ToastContainer, toast,Bounce,Slide } from 'react-toastify';
  

export const ContactSection = () => {
 const notify = () => toast("Thanks for Sending Message");
    return (
        <section id="contact" className="py-24 px-4 lg:px-24 relative bg-secondary/30 ">
            <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-purple-500">Touch</span></h2>


            <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
                Feel free to reach out to me with any questions or inquiries about my portfolio or any other projects I've worked on. I'm always open to collaboration and would love to hear from you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


{/* CONTACT FORM */}
<div className="bg-card p-8 rounded-lg shadow-xs">
<h3 className="text-2xl font-semibold mb-6">Send me a Message</h3>


<form className="space-y-6">
    <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2" >
       Your Name
</label>
<input type="text"
id="name"
name="name"
className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="sajad saeedi..." />

    </div>


       <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2" >
       Your Email
</label>
<input type="email"
id="email"
name="email"
className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="sajad saeediazad0007@gmail.com..." />

    </div>


      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2" >
       Your Message
</label>
<textarea id="message"
name="message"
className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none " placeholder="Hello, I'm interested in your work..." />

    </div>

    <button type="submit" className={cn("cosmic-button bg-purple-500 w-full flex items-center justify-center text-white gap-2")} onClick={notify}>
        <Send size={16}  />
         <ToastContainer 
         position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}

  />
        Send Message
    </button>
</form>
</div>
<div className="space-y-8 shadow-xs bg-card p-8 rounded-lg">
 
    <h3 className="text-2xl font-semibold mb-6  ">Contact Information</h3>
    {/* CONTACT INFORMATION */}
    <div className="space-y-6 justify-center">
        
        {/* EMAIL */}
<div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-purple-500/4">
    <Mail className="h-6 w-6 text-primary" /> 
    </div>
    <div>
    <h4 className="font-medium flex">Email</h4> 
    <a href="mailto:sajadsaeediazad0007@gmail.com" class="text-muted-foreground text-xs md:text-sm text-wrap hover:text-purple-500 transition-colors">sajadsaeediazad0007@gmail.com
        </a>   
    </div>

    <div />

    </div>
{/* PHONE */}

<div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-purple-500/4">
    <Phone className="h-6 w-6 text-primary" /> 
    </div>
    <div>
    <h4 className=" font-medium flex ">Phone</h4> 
    <a href="tel:+989917540483" className="text-muted-foreground text-sm hover:text-purple-500  transition-colors  ">
      +98-991-7540483
        </a>   
    </div>

    <div />

    </div>


{/* LOCATION */}
<div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-purple-500/4">
    <MapPin className="h-6 w-6 text-primary" /> 
    </div>
    <div>
    <h4 className=" font-medium flex">Location</h4> 
    <a className="text-muted-foreground text-sm hover:text-purple-500 transition-colors ">
       Iran, Khuzestan, Ahvaz, Bahonar isar5
        </a>   
    </div>

    <div />

    </div>

{/* SOCIAL MEDIA */}

    <div className="pt-8 ">
<h4 className="font-medium mb-4">Social Media</h4>
<div className="flex space-x-4 justify-center">
    <a href="https://www.linkedin.com/feed/" target="_blank">
     <Linkedin className="h-6 w-6 text-primary" />   
    </a>
     <a href="https://www.instagram.com/" target="_blank">
     <Instagram className="h-6 w-6 text-primary" />   
    </a>
      <a href="https://x.com/home" target="_blank">
     <TwitterIcon className="h-6 w-6 text-primary" />   
    </a>


</div>
    </div>



</div>



            </div>

            </div>
            </div>
        </section>
    )
}
