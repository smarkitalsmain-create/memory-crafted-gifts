import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rose-deep text-primary-foreground relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary-foreground/20" />

      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-3xl font-bold mb-4">
              Magz<span className="text-champagne">ME</span>
            </h3>
            <p className="text-primary-foreground/80 font-sans leading-relaxed max-w-md mb-6">
              At MagzME, we believe every gift should tell a story. 
              We transform your cherished memories into handcrafted keepsakes 
              that speak louder than words ever could.
            </p>
            <p className="text-sm text-primary-foreground/60 font-sans italic">
              "Because the best gifts aren't bought – they're felt."
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-champagne transition-colors duration-300">
                  Personalized Magazines
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-champagne transition-colors duration-300">
                  Gift Hampers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-champagne transition-colors duration-300">
                  Corporate Gifting
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-champagne transition-colors duration-300">
                  Gift Concierge
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-champagne transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-champagne transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-sans text-sm">Chat on WhatsApp</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-champagne transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-sans text-sm">hello@magzme.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-champagne hover:text-rose-deep transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-champagne hover:text-rose-deep transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-primary-foreground/60 text-sm font-sans flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-champagne fill-champagne" /> by MagzME
          </p>
          <p className="text-primary-foreground/40 text-sm font-sans">
            © {new Date().getFullYear()} MagzME. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
