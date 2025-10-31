import { motion } from "framer-motion";
import { Scroll, Wand2, Code2, Sparkles } from "lucide-react";
import { RuneIcon } from "@/components/magical/RuneIcon";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Scroll className="w-8 h-8 text-secondary" />
            <span className="magical-text-glow">The Codex of Origins</span>
          </h2>
          <p className="text-muted-foreground text-lg italic">
            "Every great magician has a story..."
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="parchment p-8 md:p-12 rounded-lg space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-primary/30 rounded-full blur-sm"
                />
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <Wand2 className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold rune-text mb-1">The Magician</h3>
                <p className="text-muted-foreground italic">Keeper of Digital Spells</p>
              </div>
            </div>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                In the realm where logic meets imagination, I wander as a{" "}
                <span className="font-semibold text-primary">conjurer of code</span> and{" "}
                <span className="font-semibold text-accent">architect of digital experiences</span>.
                Apprenticed in the arts of{" "}
                <span className="rune-text">Pythonic Sorcery</span>,{" "}
                <span className="rune-text">JavaScript Enchantments</span>, and{" "}
                <span className="rune-text">React Rituals</span>.
              </p>

              <p>
                My journey began in ancient libraries of computer science, where I discovered
                the fundamental spells that power the modern web. Through years of study and
                practice, I've mastered the art of transforming abstract concepts into tangible,
                elegant solutions.
              </p>

              <p>
                Each project is a new grimoire, filled with carefully crafted incantations that
                solve real-world challenges. From conjuring responsive interfaces to weaving
                complex data structures, I approach every task with the precision of a master
                craftsman and the creativity of an artist.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
                <div className="text-center p-4 rounded-lg bg-card/30">
                  <RuneIcon icon={Code2} className="mx-auto mb-2" />
                  <p className="font-semibold text-primary">5+ Years</p>
                  <p className="text-sm text-muted-foreground">of Spellcrafting</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/30">
                  <RuneIcon icon={Sparkles} className="mx-auto mb-2" />
                  <p className="font-semibold text-accent">50+ Spells</p>
                  <p className="text-sm text-muted-foreground">Successfully Cast</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/30">
                  <RuneIcon icon={Wand2} className="mx-auto mb-2" />
                  <p className="font-semibold text-secondary">∞ Magic</p>
                  <p className="text-sm text-muted-foreground">Always Learning</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center pt-6 border-t border-border/50 mt-8"
            >
              <p className="text-sm text-muted-foreground italic">
                "Any sufficiently advanced technology is indistinguishable from magic."
              </p>
              <p className="text-xs text-muted-foreground mt-1">- Arthur C. Clarke</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
