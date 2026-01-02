import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Heart, Gift } from "lucide-react";

const chatMessages = [
  { type: "user", text: "It's my mom's 60th birthday and I have no idea what to get her..." },
  { type: "concierge", text: "Tell me about her! What makes her smile? Any favorite memories you share?" },
  { type: "user", text: "She loves her garden, our old family photos, and chai time with us kids 💕" },
  { type: "concierge", text: "I have the perfect idea ✨ A personalized magazine with your family's story, wrapped in a flower bouquet. She'll cry happy tears!" },
];

const GiftConcierge = () => {
  return (
    <section className="py-24 gradient-soft relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 right-10 text-6xl opacity-10">✿</div>
      <div className="absolute bottom-10 left-10 text-4xl opacity-10">❀</div>

      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Phone frame */}
              <div className="bg-card rounded-[2.5rem] shadow-card p-3 border border-border">
                {/* Phone notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-full" />
                
                {/* Chat container */}
                <div className="bg-blush rounded-[2rem] pt-10 pb-6 px-4 min-h-[400px]">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border/30 mb-4">
                    <div className="w-10 h-10 rounded-full gradient-rose flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Gift Concierge</p>
                      <p className="text-xs text-muted-foreground">Here to help ✨</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3">
                    {chatMessages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                            message.type === "user"
                              ? "bg-rose text-primary-foreground rounded-br-sm"
                              : "bg-card text-foreground shadow-soft rounded-bl-sm"
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input area */}
                  <div className="mt-4 flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
                    <MessageCircle className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Tell us about your gift dilemma...</span>
                  </div>
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full gradient-rose flex items-center justify-center shadow-card"
              >
                <Heart className="w-7 h-7 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose/10 text-rose text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Personal Assistance
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Not sure what
              <br />
              <span className="italic text-rose">to gift?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
              Let our Gift Concierge be your personal gifting assistant. 
              Share your story, and we'll curate something truly special 
              that speaks from your heart.
            </p>
            <p className="text-foreground font-medium mb-8">
              Because the best gifts come from understanding, not guessing.
            </p>
            <Button
              size="lg"
              className="gradient-rose text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Concierge
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftConcierge;
