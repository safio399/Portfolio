
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-secondary/50 dark:bg-secondary/10"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className={cn(
              "overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="John Doe"
              className="w-full h-auto object-cover hover-scale"
            />
          </div>
          <div
            className={cn(
              "space-y-4 transition-all duration-700 delay-300 transform",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            )}
          >
            <h3 className="text-2xl font-semibold text-primary">
              Who am I?
            </h3>
            <p className="text-lg">
              I'm a passionate web developer with 5+ years of experience creating
              modern, responsive web applications. I specialize in React,
              TypeScript, and modern frontend technologies.
            </p>
            <p className="text-lg">
              My journey in web development started when I built my first website
              at 16. Since then, I've worked with startups and established
              companies to create user-friendly interfaces and efficient backend
              systems.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading science
              fiction, or experimenting with new technologies. I believe in
              continuous learning and sharing knowledge with the community.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-medium mb-2">Let's Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
