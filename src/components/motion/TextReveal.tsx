import { motion, type Variants } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/cn";

interface TextRevealProps {
  text: string;
  className?: string;
  /** Seconds between each word lighting up. */
  stagger?: number;
}

const word: Variants = {
  hidden: { opacity: 0.14, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Statement text that resolves word by word as it enters the viewport. */
export function TextReveal({ text, className, stagger = 0.028 }: TextRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {words.map((item, index) => (
        <motion.span key={`${item}-${index}`} variants={word} className="inline-block">
          {item}
          {index < words.length - 1 && " "}
        </motion.span>
      ))}
    </motion.p>
  );
}
