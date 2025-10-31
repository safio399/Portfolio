import { Navbar } from "@/components/navbar-magical";
import { HeroSection } from "@/components/sections/hero-section-magical";
import { AboutSection } from "@/components/sections/about-section-magical";
import { SkillsSection } from "@/components/sections/skills-section-magical";
import { ProjectsSection } from "@/components/sections/projects-section-magical";
import { ContactSection } from "@/components/sections/contact-section-magical";
import { Footer } from "@/components/footer-magical";
import { ParticleBackground } from "@/components/magical/ParticleBackground";
import { CursorGlow } from "@/components/magical/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
