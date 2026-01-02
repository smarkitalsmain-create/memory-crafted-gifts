import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Award, Calendar, Briefcase, Star } from "lucide-react";

const corporateOfferings = [
  { icon: Users, label: "Employee Welcome Kits" },
  { icon: Award, label: "Client Appreciation Gifts" },
  { icon: Calendar, label: "Festival & Milestone Hampers" },
  { icon: Briefcase, label: "Bulk Personalized Magazines" },
  { icon: Star, label: "Custom Branding Options" },
];

const CorporateGifting = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,hsl(var(--rose))_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-rose/10 text-rose text-sm font-medium mb-6">
              For Businesses
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Corporate Gifting,
              <br />
              <span className="italic text-rose">Made Personal</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-sans leading-relaxed">
              Elevate your corporate relationships with gifts that feel genuine, 
              not generic. From employee appreciation to client milestones, 
              we help you express gratitude in a way that resonates.
            </p>

            {/* Offerings list */}
            <div className="space-y-4 mb-10">
              {corporateOfferings.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-rose group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-foreground group-hover:text-rose transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="gradient-rose text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              Request a Corporate Quote
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl gradient-hero rotate-3" />
              <div className="absolute inset-0 rounded-3xl bg-card shadow-card -rotate-3 flex items-center justify-center overflow-hidden">
                {/* Gift box illustration */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-48 h-48 rounded-2xl gradient-rose shadow-hover flex items-center justify-center"
                  >
                    <div className="absolute inset-x-0 top-1/2 h-4 bg-champagne/60" />
                    <div className="absolute inset-y-0 left-1/2 w-4 bg-champagne/60 -translate-x-1/2" />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <div className="w-16 h-8 relative">
                        <div className="absolute left-0 w-8 h-8 border-4 border-champagne rounded-full border-b-transparent border-l-transparent rotate-45" />
                        <div className="absolute right-0 w-8 h-8 border-4 border-champagne rounded-full border-b-transparent border-r-transparent -rotate-45" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating elements around */}
                  <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-12 -right-8 w-16 h-20 bg-card rounded-sm shadow-soft p-1"
                  >
                    <div className="w-full h-3/4 bg-blush rounded-sm" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-12 w-12 h-14 bg-card rounded-sm shadow-soft p-1"
                  >
                    <div className="w-full h-3/4 bg-rose-light/30 rounded-sm" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGifting;
