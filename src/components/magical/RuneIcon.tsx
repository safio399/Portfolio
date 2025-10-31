import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface RuneIconProps {
  icon: LucideIcon;
  className?: string;
}

export function RuneIcon({ icon: Icon, className = "" }: RuneIconProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
      <Icon className="relative w-8 h-8 text-primary" />
    </motion.div>
  );
}
