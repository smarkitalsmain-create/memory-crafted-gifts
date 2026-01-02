import { motion } from "framer-motion";

const FloatingElements = () => {
  const petals = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating petals */}
      {petals.map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-rose-light/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `-${5 + (i % 3) * 3}%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(i) * 50],
            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating polaroid frames */}
      <motion.div
        className="absolute top-20 right-[15%] w-16 h-20 bg-card rounded-sm shadow-soft opacity-40"
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-3/4 bg-blush rounded-sm m-1" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[10%] w-12 h-16 bg-card rounded-sm shadow-soft opacity-30"
        animate={{
          y: [10, -15, 10],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-3/4 bg-blush rounded-sm m-1" />
      </motion.div>

      {/* Floating hearts/petals */}
      <motion.div
        className="absolute top-1/3 left-[5%] text-rose-light/50 text-4xl"
        animate={{
          y: [-20, 20, -20],
          x: [-5, 5, -5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✿
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-[8%] text-champagne/60 text-3xl"
        animate={{
          y: [20, -20, 20],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ❀
      </motion.div>

      {/* Soft glowing orbs */}
      <motion.div
        className="absolute bottom-1/4 right-[20%] w-32 h-32 rounded-full bg-rose/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-[25%] w-24 h-24 rounded-full bg-champagne/20 blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingElements;
