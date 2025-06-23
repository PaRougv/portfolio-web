import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Homepage = () =>{
    return (
        <div>
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* BackRound Effects */}
            <StarBackground />
            {/* NavBar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
            </main>

            {/* Footer */}
        </div>
    );
};