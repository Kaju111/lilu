import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen gradient-romantic flex flex-col items-center justify-center relative overflow-hidden bg-pink-200">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-destructive/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <ValentineCard />
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-8 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["🌸", "💕", "🌸", "💕", "🌸"].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-2xl"
            animate={{
              y: [0, -5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
