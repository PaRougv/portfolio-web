import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
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
                <SkillsSection />
                <ContactSection />
            </main>

            {/* Footer */}
        </div>
    );
};