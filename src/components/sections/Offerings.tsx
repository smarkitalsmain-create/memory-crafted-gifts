import { motion } from "framer-motion";
import { 
  BookOpen, 
  Camera, 
  Newspaper, 
  Gift, 
  Heart, 
  Mail, 
  Sparkles,
  Package,
  PenTool
} from "lucide-react";

const offerings = [
  {
    icon: BookOpen,
    title: "Personalized Magazines",
    description: "Your story, beautifully bound in a premium custom magazine",
  },
  {
    icon: Camera,
    title: "Personalized Polaroids",
    description: "Instant memories frozen in nostalgic polaroid-style prints",
  },
  {
    icon: Newspaper,
    title: "Newspaper-Style Gifts",
    description: "Headlines of love - your moments in vintage newsprint",
  },
  {
    icon: Gift,
    title: "Flower & Chocolate Bouquets",
    description: "Handcrafted arrangements that speak the language of love",
  },
  {
    icon: Heart,
    title: "Memory Cards",
    description: "Intimate keepsakes capturing your most treasured moments",
  },
  {
    icon: Sparkles,
    title: "Gift Concierge",
    description: "Let us curate the perfect gift experience for you",
  },
  {
    icon: PenTool,
    title: "Handwritten Letters",
    description: "Words penned on vintage paper with authentic emotion",
  },
  {
    icon: Mail,
    title: "Postcards & Notes",
    description: "Small tokens of affection that travel with meaning",
  },
  {
    icon: Package,
    title: "Curated Gift Hampers",
    description: "Thoughtfully assembled collections of joy and delight",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Offerings = () => {
  return (
    <section className="py-24 gradient-soft">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            What We <span className="italic text-rose">Create</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Each gift is a handcrafted expression of love, designed to make hearts flutter
            and eyes glisten with joyful tears.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="gradient-card rounded-2xl p-8 h-full shadow-soft transition-all duration-500 hover:shadow-hover hover:-translate-y-2 border border-border/50 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl gradient-rose flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <offering.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-rose transition-colors duration-300">
                    {offering.title}
                  </h3>

                  {/* Description - revealed on hover */}
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {offering.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose/5 rounded-full blur-2xl group-hover:bg-rose/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;
