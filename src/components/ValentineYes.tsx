import { motion } from "framer-motion";
import HeartExplosion from "./HeartExplosion";

interface ValentineYesProps {
  videoSrc: string;
}

const ValentineYes = ({ videoSrc }: ValentineYesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative text-center px-6 py-12 max-w-2xl mx-auto"
    >
      <HeartExplosion />

      {/* Floating Heart */}
      <motion.div
        className="text-8xl mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        💖
      </motion.div>

      {/* Video Card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-3xl overflow-hidden shadow-romantic border-4 border-primary/30 mb-8"
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[320px] md:h-[420px] object-cover"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Overlay text */}
        <motion.div
          className="absolute bottom-6 w-full text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white text-lg md:text-xl font-medium">
            This moment is ours 💕
          </p>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.h1
        className="font-romantic text-4xl md:text-6xl text-primary mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Yayyyy! 🎉
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-foreground/80 mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I knew you’d say yes 💕
      </motion.p>

      <motion.p
        className="text-lg text-muted-foreground mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        From now on… it’s always us ✨
      </motion.p>

      {/* Floating Hearts */}
      <div className="flex justify-center gap-4">
        {["💗", "💖", "💕", "💓", "💝"].map((heart, i) => (
          <motion.span
            key={i}
            className="text-3xl"
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            {heart}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ValentineYes;
