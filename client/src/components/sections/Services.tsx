import { motion } from "framer-motion";
import { 
  Bot, 
  Workflow, 
  BrainCircuit, 
  MessageSquareCode, 
  Database, 
  LineChart 
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const serviceIcons = [Workflow, Bot, BrainCircuit, MessageSquareCode, Database, LineChart];

export function Services() {
  const { t, tArray } = useLanguage();
  const services = tArray("services.items");

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("services.titlePart1")} <span className="text-primary">{t("services.titlePart2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = serviceIcons[index] || Bot;
            return (
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
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
