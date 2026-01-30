import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const stepIcons = [Search, PenTool, Code2, Rocket];

export function Process() {
  const { t, tArray } = useLanguage();
  const steps = tArray("process.steps");

  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("process.titlePart1")} <span className="text-primary">{t("process.titlePart2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step: any, index: number) => {
              const Icon = stepIcons[index] || Search;
              return (
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
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="text-xs text-primary font-bold mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3 font-heading">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
