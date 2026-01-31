import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Workflow, Bot, Users, BarChart3, Search, Target, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language-context";

const services = [
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    titleAr: "أتمتة سير العمل",
    description: "Automate repetitive tasks and connect your entire tech stack with powerful integrations using n8n, Make, and custom solutions.",
    descriptionAr: "أتمتة المهام المتكررة وربط جميع أنظمتك التقنية مع تكاملات قوية باستخدام n8n و Make والحلول المخصصة.",
    icon: Workflow,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Agents",
    titleAr: "روبوتات الدردشة والوكلاء الذكية",
    description: "Deploy intelligent conversational AI that handles customer inquiries, qualifies leads, and provides 24/7 support.",
    descriptionAr: "نشر ذكاء اصطناعي محادثي ذكي يتعامل مع استفسارات العملاء ويؤهل العملاء المحتملين ويوفر دعماً على مدار الساعة.",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    titleAr: "أتمتة إدارة علاقات العملاء",
    description: "Supercharge your GoHighLevel or existing CRM with automated workflows, lead nurturing, and sales pipeline optimization.",
    descriptionAr: "عزز GoHighLevel أو نظام CRM الحالي لديك بسير عمل آلي ورعاية العملاء المحتملين وتحسين خط أنابيب المبيعات.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Insights",
    titleAr: "تحليلات البيانات والرؤى",
    description: "Transform raw data into actionable insights with automated reporting, dashboards, and predictive analytics.",
    descriptionAr: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ مع التقارير الآلية ولوحات المعلومات والتحليلات التنبؤية.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    slug: "ai-seo",
    title: "AI Automated SEO",
    titleAr: "تحسين محركات البحث بالذكاء الاصطناعي",
    description: "Leverage AI-powered SEO strategies to boost your organic rankings, optimize content, and drive sustainable traffic growth.",
    descriptionAr: "استفد من استراتيجيات تحسين محركات البحث المدعومة بالذكاء الاصطناعي لتعزيز ترتيبك العضوي وتحسين المحتوى ودفع نمو حركة المرور المستدامة.",
    icon: Search,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    slug: "ai-google-ads",
    title: "AI Automated Google Ads",
    titleAr: "إعلانات جوجل الآلية بالذكاء الاصطناعي",
    description: "Maximize your PPC performance with AI-driven campaign management, smart bidding, and automated optimization.",
    descriptionAr: "حقق أقصى أداء لإعلانات الدفع لكل نقرة مع إدارة الحملات المدعومة بالذكاء الاصطناعي والمزايدة الذكية والتحسين الآلي.",
    icon: Target,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  {
    slug: "ai-local-seo",
    title: "AI Automated Local SEO",
    titleAr: "تحسين البحث المحلي بالذكاء الاصطناعي",
    description: "Dominate local search results with AI-powered Google Business Profile optimization, citations, and review management.",
    descriptionAr: "هيمن على نتائج البحث المحلي مع تحسين ملف Google Business Profile المدعوم بالذكاء الاصطناعي والاستشهادات وإدارة المراجعات.",
    icon: MapPin,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
  },
];

export default function Services() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {language === "ar" ? (
                <>خدماتنا <span className="text-primary">المتميزة</span></>
              ) : (
                <>Our <span className="text-primary">Services</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {language === "ar" 
                ? "حلول ذكاء اصطناعي وأتمتة شاملة مصممة لتحويل أعمالك وتسريع نموك في المنطقة."
                : "Comprehensive AI and automation solutions designed to transform your business and accelerate growth across the region."
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div 
                    className={`group relative h-full rounded-2xl overflow-hidden glass-card border ${service.borderColor} hover:border-primary/50 transition-all duration-300 cursor-pointer`}
                    data-testid={`service-card-${service.slug}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`h-8 w-8 bg-gradient-to-br ${service.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                        <service.icon className={`h-8 w-8 absolute`} style={{ 
                          background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                          WebkitBackgroundClip: 'text',
                          color: service.color.includes('orange') ? '#f97316' : 
                                 service.color.includes('purple') ? '#a855f7' :
                                 service.color.includes('green') ? '#22c55e' :
                                 service.color.includes('blue') ? '#3b82f6' :
                                 service.color.includes('yellow') ? '#eab308' :
                                 service.color.includes('red') ? '#ef4444' :
                                 service.color.includes('teal') ? '#14b8a6' : '#00d4ff'
                        }} />
                      </div>

                      <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-primary transition-colors">
                        {language === "ar" ? service.titleAr : service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {language === "ar" ? service.descriptionAr : service.description}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>{language === "ar" ? "اعرف المزيد" : "Learn More"}</span>
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass-card border border-white/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                {language === "ar" ? "لست متأكداً من أين تبدأ؟" : "Not Sure Where to Start?"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === "ar" 
                  ? "احجز استشارة مجانية وسنساعدك في تحديد أفضل الحلول لاحتياجات عملك."
                  : "Book a free consultation and we'll help you identify the best solutions for your business needs."
                }
              </p>
              <Link href="/get-started">
                <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors" data-testid="button-get-started-cta">
                  {language === "ar" ? "ابدأ الآن" : "Get Started"}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
