import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

import serviceWorkflowAutomation from "@/assets/images/service-workflow-automation.png";
import serviceAiChatbots from "@/assets/images/service-ai-chatbots.png";
import serviceCrmAutomation from "@/assets/images/service-crm-automation.png";
import serviceDataAnalytics from "@/assets/images/service-data-analytics.png";
import serviceAiSeo from "@/assets/images/service-ai-seo.png";
import serviceAiGoogleAds from "@/assets/images/service-ai-google-ads.png";
import serviceAiLocalSeo from "@/assets/images/service-ai-local-seo.png";
import serviceAiSocialScheduling from "@/assets/images/service-ai-social-scheduling.png";

const services = [
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    titleAr: "أتمتة سير العمل",
    description: "Automate repetitive tasks and connect your entire tech stack with powerful integrations using n8n, Make, and custom solutions.",
    descriptionAr: "أتمتة المهام المتكررة وربط جميع أنظمتك التقنية مع تكاملات قوية باستخدام n8n و Make والحلول المخصصة.",
    image: serviceWorkflowAutomation,
    color: "from-orange-500 to-red-500",
    category: "Automation",
    categoryAr: "الأتمتة",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Agents",
    titleAr: "روبوتات الدردشة والوكلاء الذكية",
    description: "Deploy intelligent conversational AI that handles customer inquiries, qualifies leads, and provides 24/7 support.",
    descriptionAr: "نشر ذكاء اصطناعي محادثي ذكي يتعامل مع استفسارات العملاء ويؤهل العملاء المحتملين ويوفر دعماً على مدار الساعة.",
    image: serviceAiChatbots,
    color: "from-purple-500 to-pink-500",
    category: "AI Solutions",
    categoryAr: "حلول الذكاء الاصطناعي",
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    titleAr: "أتمتة إدارة علاقات العملاء",
    description: "Supercharge your GoHighLevel or existing CRM with automated workflows, lead nurturing, and sales pipeline optimization.",
    descriptionAr: "عزز GoHighLevel أو نظام CRM الحالي لديك بسير عمل آلي ورعاية العملاء المحتملين وتحسين خط أنابيب المبيعات.",
    image: serviceCrmAutomation,
    color: "from-green-500 to-emerald-500",
    category: "CRM",
    categoryAr: "إدارة العملاء",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Insights",
    titleAr: "تحليلات البيانات والرؤى",
    description: "Transform raw data into actionable insights with automated reporting, dashboards, and predictive analytics.",
    descriptionAr: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ مع التقارير الآلية ولوحات المعلومات والتحليلات التنبؤية.",
    image: serviceDataAnalytics,
    color: "from-blue-500 to-cyan-500",
    category: "Analytics",
    categoryAr: "التحليلات",
  },
  {
    slug: "ai-seo",
    title: "AI Automated SEO",
    titleAr: "تحسين محركات البحث بالذكاء الاصطناعي",
    description: "Leverage AI-powered SEO strategies to boost your organic rankings, optimize content, and drive sustainable traffic growth.",
    descriptionAr: "استفد من استراتيجيات تحسين محركات البحث المدعومة بالذكاء الاصطناعي لتعزيز ترتيبك العضوي وتحسين المحتوى ودفع نمو حركة المرور المستدامة.",
    image: serviceAiSeo,
    color: "from-yellow-500 to-orange-500",
    category: "SEO",
    categoryAr: "تحسين محركات البحث",
  },
  {
    slug: "ai-google-ads",
    title: "AI Automated Google Ads",
    titleAr: "إعلانات جوجل الآلية بالذكاء الاصطناعي",
    description: "Maximize your PPC performance with AI-driven campaign management, smart bidding, and automated optimization.",
    descriptionAr: "حقق أقصى أداء لإعلانات الدفع لكل نقرة مع إدارة الحملات المدعومة بالذكاء الاصطناعي والمزايدة الذكية والتحسين الآلي.",
    image: serviceAiGoogleAds,
    color: "from-red-500 to-pink-500",
    category: "Paid Ads",
    categoryAr: "الإعلانات المدفوعة",
  },
  {
    slug: "ai-local-seo",
    title: "AI Automated Local SEO",
    titleAr: "تحسين البحث المحلي بالذكاء الاصطناعي",
    description: "Dominate local search results with AI-powered Google Business Profile optimization, citations, and review management.",
    descriptionAr: "هيمن على نتائج البحث المحلي مع تحسين ملف Google Business Profile المدعوم بالذكاء الاصطناعي والاستشهادات وإدارة المراجعات.",
    image: serviceAiLocalSeo,
    color: "from-teal-500 to-green-500",
    category: "Local SEO",
    categoryAr: "البحث المحلي",
  },
  {
    slug: "ai-social-scheduling",
    title: "AI Social Media Scheduling",
    titleAr: "جدولة وسائل التواصل بالذكاء الاصطناعي",
    description: "Automate your social media presence with AI-powered content creation, optimal scheduling, and multi-platform management.",
    descriptionAr: "أتمتة تواجدك على وسائل التواصل الاجتماعي مع إنشاء المحتوى بالذكاء الاصطناعي والجدولة المثلى وإدارة المنصات المتعددة.",
    image: serviceAiSocialScheduling,
    color: "from-pink-500 to-purple-500",
    category: "Social Media",
    categoryAr: "وسائل التواصل",
  },
];

export default function Services() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                className="group"
              >
                <div 
                  className="relative h-full rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-primary/50 transition-all duration-300"
                  data-testid={`service-card-${service.slug}`}
                >
                  <div className="h-48 w-full relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={language === "ar" ? service.titleAr : service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.color} text-white`}>
                        {language === "ar" ? service.categoryAr : service.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-primary transition-colors">
                      {language === "ar" ? service.titleAr : service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {language === "ar" ? service.descriptionAr : service.description}
                    </p>

                    <Link href={`/services/${service.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full gap-2 border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all"
                        data-testid={`button-learn-more-${service.slug}`}
                      >
                        {language === "ar" ? "اعرف المزيد" : "Learn More"}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Button>
                    </Link>
                  </div>
                </div>
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
                <Button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium" data-testid="button-get-started-cta">
                  {language === "ar" ? "ابدأ الآن" : "Get Started"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
