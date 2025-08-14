import { ArrowUp } from "lucide-react"

export const FooterSection = () => {
    return <footer className="py-12 px-4 bg-card relative text-center text-muted-foreground flex flex-wrap gap-4 justify-between flex-col md:flex-row md: items-center mt-12 border-t border-border">
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Sajad. All rights reserved.</p>

<a href="#hero" className="p-2 rounded-full bg-secondary/80 text-purple-500 hover:text-purple-500 transition-colors animate-bounce duration-300foreground hover:bg-secondary/80 transition-colors animate-bounce duration-300">
<ArrowUp size={20}  />
</a>


    </footer>
}