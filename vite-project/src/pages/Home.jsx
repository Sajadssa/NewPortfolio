import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";



export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
           {/*Theme Toggle */}
           <ThemeToggle />

            {/*Background Effects */}
            <StarBackground />
            {/* Navbar */}
<Navbar />
            {/*Main Content */}

            {/*Footer */}

        </div>
    )
}

