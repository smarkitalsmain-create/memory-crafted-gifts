import { motion } from "framer-motion";
import { MessageCircle, Palette, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Share Your Memory",
    description: "Tell us about the occasion, the person, and the moments that matter most to you.",
  },
  {
    icon: Palette,
    number: "02",
    title: "We Design With Care",
    description: "Our artisans craft your gift with love, attention to detail, and a touch of magic.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Deliver Emotions",
    description: "We deliver not just gifts, but wrapped emotions that create unforgettable moments.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-blush relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-champagne/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            How the <span className="italic text-rose">Magic</span> Happens
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-sans">
            A simple, heartfelt journey from your memories to their smiles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:gap-8`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center mb-6 md:mb-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  <span className="font-serif text-6xl font-bold text-rose/20">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-sans max-w-sm mx-auto md:mx-0">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Icon circle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-20 h-20 rounded-full gradient-rose flex items-center justify-center shadow-card"
              >
                <step.icon className="w-8 h-8 text-primary-foreground" />
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-rose/30 animate-pulse-soft" />
              </motion.div>

              {/* Placeholder for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
