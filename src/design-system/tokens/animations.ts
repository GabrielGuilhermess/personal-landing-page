import type { Variants } from "framer-motion";
import { motion } from "./foundations";

const staticState = { opacity: 1, y: 0, scale: 1 } as const;

export const fadeInUp: Variants = {
  hidden: staticState,
  visible: staticState,
};

export const staggerContainer: Variants = {
  hidden: staticState,
  visible: staticState,
};

export const staggerItem: Variants = {
  hidden: staticState,
  visible: staticState,
};

export const scaleIn: Variants = {
  hidden: staticState,
  visible: staticState,
};

export const transition = {
  fast: { duration: motion.fast / 1000, ease: [0.2, 0.8, 0.2, 1] },
  normal: { duration: motion.normal / 1000, ease: [0.2, 0.8, 0.2, 1] },
  slow: { duration: motion.slow / 1000, ease: [0.2, 0.8, 0.2, 1] },
} as const;

export const viewportConfig = { once: true, margin: "-40px" } as const;
