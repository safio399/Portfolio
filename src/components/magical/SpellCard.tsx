import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SpellCardProps {
  children: ReactNode;
  delay?: number;
  onClick?: () => void;
}

export function SpellCard({ children, delay = 0, onClick }: SpellCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="spell-card p-6 cursor-pointer group"
    >
      {children}
    </motion.div>
  );
}
