import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, ExternalLink, Github } from "lucide-react";
import { SpellCard } from "@/components/magical/SpellCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  
  {
    title: "Spell of Data Divination",
    incantation: "Transforming raw data into prophetic insights",
    description: "A real-time inventory management dashboard integrated with IoT (ESP32 + RFID) for automated stock tracking. Supports CRUD operations for items, automatic quantity updates upon item scans, and low-stock notifications to warehouse managers.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    tags: ["React", "Express.js", "FireBase", "C++"],
    liveLink: "#",
    githubLink: "#",
    color: "from-blue-500/30 to-cyan-500/30",
  },
  
  {
    title: "Spell of AI Augmentation",
    incantation: "Harnessing artificial intelligence for mortal needs",
    description: "An AI system that analyzes blood test results using machine learning to detect illnesses, identify anomalies, and support faster, more accurate medical decisions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "SQL", "React", "XGBoost"],
    liveLink: "#",
    githubLink: "#",
    color: "from-orange-500/30 to-red-500/30",
  },
  {
    title: "Spell of Mobile Mastery",
    incantation: "Pocket-sized magic for the modern wanderer",
    description: "A smart mobile application for tracking budgets and expenses, enhanced with a built-in AI chatbot that helps users make better financial decisions and manage everyday spending..",
    image: "https://plus.unsplash.com/premium_vector-1732276706953-bcdf8d9ac942?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    tags: ["React Native", "Expo", "Python", "TypeScript"],
    liveLink: "#",
    githubLink: "#",
    color: "from-indigo-500/30 to-purple-500/30",
  },
  {
    title: "Spell of API Orchestration",
    incantation: "Binding cloud and code into a harmony of services",
    description: "A cloud-based task management application built with modular services for user authentication, task creation, and notifications. Deployed on a cloud platform with RESTful APIs to ensure scalability, reliability, and real-time synchronization across devices.",
    image: "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    tags: ["Node.js", "Firebase", "React", "Docker"],
    liveLink: "#",
    githubLink: "#",
    color: "from-yellow-500/30 to-amber-500/30",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Flame className="w-8 h-8 text-secondary" />
            <span className="magical-text-glow">The Archive of Spells</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            "Each spell represents countless hours of dedication and mastery"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <SpellCard 
              key={project.title} 
              delay={index * 0.1}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 rune-text group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground italic mb-3 min-h-[40px]">
                "{project.incantation}"
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="secondary" className="bg-muted">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </SpellCard>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto parchment">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl rune-text text-primary">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base italic text-muted-foreground">
                  "{selectedProject.incantation}"
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-50`} />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 rune-text">The Grimoire Entry</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 rune-text">Arcane Components</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button asChild className="flex-1">
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Spell
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Runes
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
