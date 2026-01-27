import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your current workflows, identify bottlenecks, and pinpoint high-impact automation opportunities."
  },
  {
    icon: PenTool,
    title: "Strategy & Design",
    description: "Our architects design a custom AI roadmap and technical blueprint tailored to your specific business goals."
  },
  {
    icon: Code2,
    title: "Development",
    description: "We build and train your custom AI agents, ensuring seamless integration with your existing software stack."
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deployment, team training, and continuous optimization to ensure your AI systems evolve with your business."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From analysis to deployment, we follow a rigorous methodology to ensure success.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10"
              >
                <div className="glass-card p-8 rounded-2xl border border-white/5 h-full hover:border-primary/50 transition-colors text-center group">
                  <div className="h-16 w-16 mx-auto rounded-full bg-background border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}