import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I cried when I opened it. It felt like holding our entire love story in my hands.",
    author: "Priya S.",
    occasion: "Anniversary Gift",
  },
  {
    quote: "This didn't feel like a gift. It felt like a memory I could touch.",
    author: "Arjun M.",
    occasion: "Birthday Gift for Mom",
  },
  {
    quote: "Our employees were speechless. Finally, corporate gifts that mean something.",
    author: "Neha K.",
    occasion: "Corporate Welcome Kits",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-blush relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Words from the <span className="italic text-rose">Heart</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-sans">
            Real emotions, real moments, real connections we've helped create
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft h-full transition-all duration-500 hover:shadow-hover hover:-translate-y-2 border border-border/30">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center mb-6 group-hover:bg-rose/20 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-rose" />
                </div>

                {/* Quote text */}
                <p className="font-serif text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center text-primary-foreground font-medium text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.occasion}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-rose/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
