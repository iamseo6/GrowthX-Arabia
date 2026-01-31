import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Bot, 
  Workflow, 
  BrainCircuit, 
  MessageSquareCode, 
  Database, 
  LineChart,
  Search,
  Target,
  MapPin,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { servicesData } from "@/lib/services-data";

const serviceIcons = [Workflow, Bot, BrainCircuit, LineChart, Search, Target, MapPin];

export function Services() {
  const { t, language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

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
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[index] || Bot;
            const title = language === "ar" ? service.titleAr : service.title;
            const description = language === "ar" ? service.descriptionAr : service.description;
            
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer h-full"
                  data-testid={`service-card-${service.slug}`}
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 font-heading ${isRTL ? "text-right" : ""}`}>{title}</h3>
                  <p className={`text-muted-foreground leading-relaxed mb-4 ${isRTL ? "text-right" : ""}`}>
                    {description}
                  </p>
                  <div className={`flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                    <span>{isRTL ? "اعرف المزيد" : "Learn More"}</span>
                    <ArrowIcon className="h-4 w-4" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
