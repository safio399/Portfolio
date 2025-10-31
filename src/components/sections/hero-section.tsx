
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const titles = ["Web Developer", "UI/UX Designer", "Problem Solver"];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else if (displayText.length === currentTitle.length) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause before deleting
      } else if (displayText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient pt-20">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm John Doe
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-6 h-14">
          <span>{displayText}</span>
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-foreground/80">
          I build modern, responsive websites and applications with cutting-edge technologies.
          Passionate about creating elegant solutions to complex problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="animate-fade-in animate-delay-300">
            <a href="#projects" className="flex items-center">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="animate-fade-in animate-delay-500">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
