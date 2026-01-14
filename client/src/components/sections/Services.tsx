import { motion } from "framer-motion";
import { 
  Bot, 
  Workflow, 
  BrainCircuit, 
  MessageSquareCode, 
  Database, 
  LineChart 
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    description: "Intelligent conversational agents that handle customer support, sales qualification, and internal queries 24/7."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "End-to-end automation of repetitive tasks using custom workflows that integrate with your existing software stack."
  },
  {
    icon: BrainCircuit,
    title: "Custom LLM Solutions",
    description: "Fine-tuned Large Language Models trained on your specific business data for highly accurate generation and analysis."
  },
  {
    icon: MessageSquareCode,
    title: "Natural Language Processing",
    description: "Advanced NLP pipelines to extract insights, sentiment, and key data points from unstructured text documents."
  },
  {
    icon: Database,
    title: "Intelligent Data Entry",
    description: "Automated data extraction and entry systems that eliminate manual errors and speed up processing times."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "AI-driven forecasting models to predict market trends, inventory needs, and customer behavior patterns."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We deploy sophisticated AI solutions tailored to solve complex business challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}