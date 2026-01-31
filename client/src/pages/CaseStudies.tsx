import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Clock, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import caseStudyLeadGen from "@/assets/images/case-study-lead-gen.png";
import caseStudyCrm from "@/assets/images/case-study-crm.png";
import caseStudyOnboarding from "@/assets/images/case-study-onboarding.png";
import caseStudyEcommerce from "@/assets/images/case-study-ecommerce.png";
import caseStudyBooking from "@/assets/images/case-study-booking.png";
import caseStudySocial from "@/assets/images/case-study-social.png";

const caseStudies = [
  {
    title: "Automated Lead Enrichment Pipeline",
    titleAr: "خط أنابيب إثراء العملاء المحتملين الآلي",
    client: "TechVentures Dubai",
    clientAr: "تك فينتشرز دبي",
    category: "n8n Automation",
    categoryAr: "أتمتة n8n",
    platform: "n8n",
    description: "Built an n8n workflow that automatically enriches incoming leads with company data, social profiles, and intent signals, then routes qualified leads to the right sales rep in real-time.",
    descriptionAr: "بناء سير عمل n8n يثري العملاء المحتملين تلقائياً ببيانات الشركة والملفات الاجتماعية وإشارات النية، ثم يوجه العملاء المؤهلين إلى مندوب المبيعات المناسب في الوقت الفعلي.",
    stats: [
      { label: "Lead Quality", labelAr: "جودة العملاء", value: "+85%", icon: BarChart3 },
      { label: "Response Time", labelAr: "وقت الاستجابة", value: "< 5min", icon: Clock },
      { label: "SQLs Generated", labelAr: "العملاء المؤهلين", value: "3x", icon: Users },
    ],
    image: caseStudyLeadGen
  },
  {
    title: "Multi-Channel CRM Sync",
    titleAr: "مزامنة CRM متعددة القنوات",
    client: "PropTech MENA",
    clientAr: "بروبتك الشرق الأوسط",
    category: "Make Automation",
    categoryAr: "أتمتة Make",
    platform: "Make",
    description: "Implemented a Make scenario that syncs customer data across HubSpot, WhatsApp, email campaigns, and their custom CRM, ensuring every touchpoint is tracked and automated.",
    descriptionAr: "تنفيذ سيناريو Make يزامن بيانات العملاء عبر HubSpot وواتساب وحملات البريد الإلكتروني ونظام CRM المخصص، مما يضمن تتبع وأتمتة كل نقطة اتصال.",
    stats: [
      { label: "Data Accuracy", labelAr: "دقة البيانات", value: "99.5%", icon: BarChart3 },
      { label: "Manual Entry", labelAr: "الإدخال اليدوي", value: "-95%", icon: Clock },
      { label: "Team Efficiency", labelAr: "كفاءة الفريق", value: "+40%", icon: Users },
    ],
    image: caseStudyCrm
  },
  {
    title: "Agency Client Onboarding",
    titleAr: "تأهيل عملاء الوكالة",
    client: "Digital Growth Agency",
    clientAr: "وكالة النمو الرقمي",
    category: "GHL Automation",
    categoryAr: "أتمتة GHL",
    platform: "GoHighLevel",
    description: "Created a fully automated GHL onboarding system with welcome sequences, intake forms, calendar booking, and automatic sub-account setup for new agency clients.",
    descriptionAr: "إنشاء نظام تأهيل GHL آلي بالكامل مع تسلسلات الترحيب ونماذج الاستلام وحجز التقويم وإعداد الحساب الفرعي التلقائي لعملاء الوكالة الجدد.",
    stats: [
      { label: "Onboarding Time", labelAr: "وقت التأهيل", value: "-80%", icon: Clock },
      { label: "Client Satisfaction", labelAr: "رضا العملاء", value: "4.9/5", icon: Users },
      { label: "Churn Rate", labelAr: "معدل الانسحاب", value: "-45%", icon: BarChart3 },
    ],
    image: caseStudyOnboarding
  },
  {
    title: "E-commerce Order Orchestration",
    titleAr: "تنسيق طلبات التجارة الإلكترونية",
    client: "LuxeCart Arabia",
    clientAr: "لوكس كارت العربية",
    category: "n8n + Make",
    categoryAr: "n8n + Make",
    platform: "n8n",
    description: "Designed a hybrid automation using n8n and Make that processes orders, updates inventory across 5 warehouses, triggers shipping labels, and sends personalized tracking updates.",
    descriptionAr: "تصميم أتمتة هجينة باستخدام n8n و Make تعالج الطلبات وتحدث المخزون عبر 5 مستودعات وتنشئ ملصقات الشحن وترسل تحديثات تتبع مخصصة.",
    stats: [
      { label: "Order Processing", labelAr: "معالجة الطلبات", value: "< 2min", icon: Zap },
      { label: "Shipping Errors", labelAr: "أخطاء الشحن", value: "-92%", icon: BarChart3 },
      { label: "Customer NPS", labelAr: "رضا العملاء", value: "+35pts", icon: Users },
    ],
    image: caseStudyEcommerce
  },
  {
    title: "Smart Appointment System",
    titleAr: "نظام المواعيد الذكي",
    client: "Elite Medical Center",
    clientAr: "المركز الطبي النخبة",
    category: "GHL Automation",
    categoryAr: "أتمتة GHL",
    platform: "GoHighLevel",
    description: "Built a GHL-powered appointment system with intelligent scheduling, automated reminders via SMS/WhatsApp, no-show follow-ups, and review request sequences after visits.",
    descriptionAr: "بناء نظام مواعيد مدعوم بـ GHL مع جدولة ذكية وتذكيرات آلية عبر SMS/واتساب ومتابعة عدم الحضور وتسلسلات طلب المراجعة بعد الزيارات.",
    stats: [
      { label: "No-Shows", labelAr: "عدم الحضور", value: "-70%", icon: Clock },
      { label: "Bookings", labelAr: "الحجوزات", value: "+55%", icon: BarChart3 },
      { label: "5-Star Reviews", labelAr: "تقييمات 5 نجوم", value: "3x", icon: Users },
    ],
    image: caseStudyBooking
  },
  {
    title: "Social Media Content Engine",
    titleAr: "محرك محتوى وسائل التواصل",
    client: "Influencer Hub KSA",
    clientAr: "هاب المؤثرين السعودية",
    category: "Make Automation",
    categoryAr: "أتمتة Make",
    platform: "Make",
    description: "Created a Make automation that repurposes long-form content into social posts, schedules across platforms, tracks engagement, and generates weekly performance reports automatically.",
    descriptionAr: "إنشاء أتمتة Make تعيد استخدام المحتوى الطويل كمنشورات اجتماعية وتجدولها عبر المنصات وتتبع التفاعل وتنشئ تقارير أداء أسبوعية تلقائياً.",
    stats: [
      { label: "Content Output", labelAr: "إنتاج المحتوى", value: "5x", icon: Zap },
      { label: "Engagement", labelAr: "التفاعل", value: "+120%", icon: BarChart3 },
      { label: "Hours Saved", labelAr: "ساعات موفرة", value: "25h/wk", icon: Clock },
    ],
    image: caseStudySocial
  }
];

const platformColors: Record<string, string> = {
  "n8n": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Make": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "GoHighLevel": "bg-green-500/20 text-green-400 border-green-500/30",
};

export default function CaseStudies() {
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
                <>نتائج <span className="text-primary">مثبتة</span></>
              ) : (
                <>Proven <span className="text-primary">Results</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {language === "ar" 
                ? "قصص نجاح حقيقية في الأتمتة باستخدام n8n و Make و GoHighLevel في جميع أنحاء المنطقة."
                : "Real automation success stories using n8n, Make, and GoHighLevel across the region."
              }
            </p>
            
            <div className="flex justify-center gap-2 mt-6">
              <Badge variant="outline" className={platformColors["n8n"]}>n8n</Badge>
              <Badge variant="outline" className={platformColors["Make"]}>Make</Badge>
              <Badge variant="outline" className={platformColors["GoHighLevel"]}>GoHighLevel</Badge>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-primary/50 transition-all duration-300"
                data-testid={`case-study-card-${index}`}
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={language === "ar" ? study.titleAr : study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Badge variant="outline" className={`${platformColors[study.platform]} backdrop-blur-md`}>
                      {language === "ar" ? study.categoryAr : study.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-primary mb-1">
                      {language === "ar" ? study.clientAr : study.client}
                    </h4>
                    <h3 className="text-xl font-bold font-heading mb-2">
                      {language === "ar" ? study.titleAr : study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {language === "ar" ? study.descriptionAr : study.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-lg font-bold text-white">{stat.value}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {language === "ar" ? stat.labelAr : stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium text-white">
                      {language === "ar" ? "اقرأ دراسة الحالة الكاملة" : "Read Full Case Study"}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-primary" />
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
                {language === "ar" ? "هل تريد نتائج مماثلة؟" : "Want Similar Results?"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === "ar" 
                  ? "دعنا نناقش كيف يمكننا أتمتة عملياتك وتحقيق نتائج استثنائية لعملك."
                  : "Let's discuss how we can automate your processes and achieve exceptional results for your business."
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
