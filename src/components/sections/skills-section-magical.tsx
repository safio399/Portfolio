import { motion } from "framer-motion";
import { BookOpen, Code, Database, Palette, Server, Zap } from "lucide-react";
import { SpellCard } from "@/components/magical/SpellCard";
import { RuneIcon } from "@/components/magical/RuneIcon";

const skills = [
  {
    icon: Code,
    title: "Frontend Conjuring",
    description: "React • TypeScript • Tailwind CSS • Framer Motion",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Server,
    title: "Backend Alchemy",
    description: "Node.js • Python • PostgreSQL • RESTful APIs • Express.js",
    color: "from-accent/20 to-secondary/20",
  },
  {
    icon: Database,
    title: "Data Enchantments",
    description: "SQL • NoSQL • API Design • Data Modeling",
    color: "from-secondary/20 to-primary/20",
  },
  {
    icon: Palette,
    title: "Design Sorcery",
    description: "UI/UX • Figma • Responsive Design • Accessibility",
    color: "from-primary/20 to-purple-500/20",
  },
  {
    icon: Zap,
    title: "Performance Magic",
    description: "Optimization • Caching • Lazy Loading • Bundling",
    color: "from-purple-500/20 to-accent/20",
  },
  {
    icon: BookOpen,
    title: "DevOps Rituals",
    description: "Docker • CI/CD • Git • Cloud Deployment",
    color: "from-accent/20 to-primary/20",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 magical-text-glow">
            The Grimoire of Ascendance
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            "Collected knowledge from countless hours of study and practice"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SpellCard key={skill.title} delay={index * 0.1}>
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl`} />
                
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <RuneIcon icon={skill.icon} />
                    <h3 className="text-xl font-bold rune-text">{skill.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                </div>
              </div>
            </SpellCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground italic">
            "The path of mastery is eternal. Every day brings new spells to learn."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
