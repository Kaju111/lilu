import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeartExplosion from "./HeartExplosion";
import ValentineYes from "./ValentineYes";

const ValentineCard = () => {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);

  const noMessages = [
    "No 😢",
    "Soch lo... 🥺",
    "Please? 💔",
    "Ek baar aur socho? 🥹",
    "Mai ro dunga! 😭",
    "Dil toot jayega! 💔",
    "Are you sure? 🥺",
    "Phir se socho! 😿",
  ];

  const handleNoHover = () => {
    const maxX = 200;
    const maxY = 150;
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => Math.min(prev + 1, noMessages.length - 1));
    handleNoHover();
  };

  if (answer === "yes") {
    return <ValentineYes videoSrc="/lilu.mp4" />;
  }
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic max-w-lg mx-4 bg-pink-200"
    >
      {/* Decorative hearts */}
      <motion.div
        className="absolute -top-6 -left-6 text-5xl"
        animate={{ rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute -top-4 -right-4 text-4xl"
        animate={{ rotate: [10, -10, 10], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-3xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        💗
      </motion.div>

      {/* Main heart icon */}
      <motion.div
        className="text-7xl md:text-8xl text-center mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        💝
      </motion.div>

      {/* Question */}
      <motion.h1
        className="font-romantic text-3xl md:text-5xl text-center text-primary mb-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Will You Be
      </motion.h1>
      <motion.h2
        className="font-romantic text-4xl md:text-6xl text-center text-gradient mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        My Valentine? 💕
      </motion.h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative">
        <motion.button
          onClick={() => setAnswer("yes")}
          className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-xl rounded-full shadow-glow hover:shadow-romantic transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Yes! 💖
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.button
            key={noClickCount}
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="px-8 py-3 bg-secondary text-secondary-foreground font-medium text-lg rounded-full border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
            style={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            whileHover={{ scale: 0.9 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
              opacity: 1,
            }}
            transition={{
              delay: noClickCount === 0 ? 0.7 : 0,
              type: "spring",
              stiffness: 300,
            }}
          >
            {noMessages[noClickCount]}
          </motion.button>
        </AnimatePresence>
      </div>

      {noClickCount > 2 && (
        <motion.p
          className="text-center text-sm text-muted-foreground mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hint: The "Yes" button is easier to click! 😉
        </motion.p>
      )}
    </motion.div>
  );
};

export default ValentineCard;
