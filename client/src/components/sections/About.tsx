import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-black/40 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl rounded-2xl" />
            <div className="glass-card p-1 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="bg-gradient-to-br from-background via-background/90 to-background/50 p-8 md:p-12 rounded-xl h-full flex flex-col justify-center min-h-[400px]">
                <h3 className="text-3xl font-heading font-bold mb-6">
                  Bridging the gap between <br />
                  <span className="text-primary">Human Potential</span> & <br />
                  <span className="text-accent">Artificial Intelligence</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 2024, GrowthX Arabia was born from a simple observation: businesses in the region are ready for AI, but lack the specialized implementation partners to make it a reality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We aren't just developers; we are strategic partners who understand the unique business landscape of the Arab world. Our mission is to accelerate the region's digital transformation through practical, high-impact AI solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-white">GrowthX</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a team of AI researchers, software engineers, and business strategists dedicated to bringing Silicon Valley innovation to the Middle East.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">3+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Research</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Regional Focus</p>
              </div>
            </div>

            <Button variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/10 pl-0 text-lg">
              Meet the Team <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}