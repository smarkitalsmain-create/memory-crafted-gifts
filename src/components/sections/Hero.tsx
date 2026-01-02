import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/ui/FloatingElements";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      <FloatingElements />

      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-rose-deep tracking-tight">
            Magz<span className="text-rose">ME</span>
          </h1>
        </motion.div>

        {/* Tagline with animated words */}
        <motion.div className="mb-12 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-2xl md:text-4xl text-foreground/80 leading-relaxed"
          >
            Turning{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="italic text-rose"
            >
              memories
            </motion.span>{" "}
            into{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-semibold"
            >
              meaningful gifts
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans font-light"
        >
          Personalized magazines, polaroids, handwritten letters & curated gift hampers
          crafted with love for your most cherished moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="gradient-rose text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
          >
            Create a Personalized Gift
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-rose text-rose hover:bg-rose hover:text-primary-foreground px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore Corporate Gifting
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-rose/40 rounded-full flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-rose/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
