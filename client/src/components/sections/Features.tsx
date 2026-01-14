import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 relative bg-black/40">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              Why leading companies choose <span className="text-accent">GrowthX</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "Rapid Implementation", desc: "Deploy AI solutions in weeks, not months." },
                { title: "Enterprise Grade Security", desc: "Bank-level encryption and data privacy compliance." },
                { title: "Scalable Architecture", desc: "Systems that grow effortlessly with your business volume." },
                { title: "ROI Focused", desc: "Every solution is designed to deliver measurable business impact." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center h-48">
              <span className="text-5xl font-bold text-primary mb-2">98%</span>
              <span className="text-muted-foreground">Accuracy Rate</span>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center h-48 translate-y-8">
              <span className="text-5xl font-bold text-accent mb-2">10x</span>
              <span className="text-muted-foreground">ROI Average</span>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center h-48">
              <span className="text-5xl font-bold text-white mb-2">24/7</span>
              <span className="text-muted-foreground">Operations</span>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center h-48 translate-y-8">
              <span className="text-5xl font-bold text-primary mb-2">50+</span>
              <span className="text-muted-foreground">Enterprise Clients</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}