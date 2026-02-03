import { motion } from "framer-motion";

const HeartExplosion = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    emoji: ["💕", "💖", "💗", "💓", "💝", "✨", "🌸"][
      Math.floor(Math.random() * 7)
    ],
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 400,
    scale: 0.5 + Math.random() * 1,
    duration: 1 + Math.random() * 1,
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-2xl"
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
            opacity: 0,
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default HeartExplosion;
