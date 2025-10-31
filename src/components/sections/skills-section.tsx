
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "CI/CD", "Jest", "Figma"],
  },
];

export function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <Card
              key={skillGroup.category}
              className={cn(
                "overflow-hidden transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20",
                {
                  "transition-delay-200": groupIndex === 1,
                  "transition-delay-400": groupIndex === 2,
                }
              )}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className={cn(
                        "flex items-center transition-all",
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4",
                        {
                          "transition-delay-100": skillIndex === 0,
                          "transition-delay-200": skillIndex === 1,
                          "transition-delay-300": skillIndex === 2,
                          "transition-delay-400": skillIndex === 3,
                          "transition-delay-500": skillIndex === 4,
                        }
                      )}
                    >
                      <svg
                        className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
