import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { FileText } from "lucide-react";

export default function Sitemap() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const sections = language === "ar" ? [
    { 
      title: "الرئيسية", 
      links: [
        { name: "الصفحة الرئيسية", href: "/" },
        { name: "ابدأ الآن", href: "/get-started" },
      ] 
    },
    { 
      title: "الخدمات", 
      links: [
        { name: "جميع الخدمات", href: "/services" },
        { name: "أتمتة سير العمل", href: "/services/workflow-automation" },
        { name: "روبوتات الدردشة الذكية", href: "/services/ai-chatbots" },
        { name: "أتمتة إدارة العملاء", href: "/services/crm-automation" },
        { name: "تحليلات البيانات", href: "/services/data-analytics" },
        { name: "تحسين محركات البحث", href: "/services/ai-seo" },
        { name: "إعلانات جوجل الآلية", href: "/services/ai-google-ads" },
        { name: "تحسين البحث المحلي", href: "/services/ai-local-seo" },
        { name: "جدولة وسائل التواصل", href: "/services/ai-social-scheduling" },
      ]
    },
    { 
      title: "الشركة", 
      links: [
        { name: "عنّا", href: "/#about" },
        { name: "دراسات الحالة", href: "/case-studies" },
        { name: "العملية", href: "/#process" },
        { name: "تواصل معنا", href: "/#contact" },
      ]
    },
    { 
      title: "المدونة", 
      links: [
        { name: "جميع المقالات", href: "/blog" },
        { name: "الذكاء الاصطناعي في الشرق الأوسط", href: "/blog/ai-automation-transforming-middle-east-business" },
        { name: "5 أتمتات لسير العمل", href: "/blog/5-workflow-automations-every-business-needs" },
        { name: "دليل SEO للأسواق العربية", href: "/blog/ultimate-guide-ai-seo-arabic-markets" },
      ]
    },
    { 
      title: "قانوني", 
      links: [
        { name: "سياسة الخصوصية", href: "/privacy-policy" },
        { name: "شروط الخدمة", href: "/terms-of-service" },
        { name: "سياسة ملفات تعريف الارتباط", href: "/cookie-policy" },
      ]
    },
  ] : [
    { 
      title: "Main", 
      links: [
        { name: "Home", href: "/" },
        { name: "Get Started", href: "/get-started" },
      ] 
    },
    { 
      title: "Services", 
      links: [
        { name: "All Services", href: "/services" },
        { name: "Workflow Automation", href: "/services/workflow-automation" },
        { name: "AI Chatbots & Agents", href: "/services/ai-chatbots" },
        { name: "CRM Automation", href: "/services/crm-automation" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "AI Automated SEO", href: "/services/ai-seo" },
        { name: "AI Google Ads", href: "/services/ai-google-ads" },
        { name: "AI Local SEO", href: "/services/ai-local-seo" },
        { name: "AI Social Scheduling", href: "/services/ai-social-scheduling" },
      ]
    },
    { 
      title: "Company", 
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Process", href: "/#process" },
        { name: "Contact", href: "/#contact" },
      ]
    },
    { 
      title: "Blog", 
      links: [
        { name: "All Articles", href: "/blog" },
        { name: "AI in Middle East", href: "/blog/ai-automation-transforming-middle-east-business" },
        { name: "5 Workflow Automations", href: "/blog/5-workflow-automations-every-business-needs" },
        { name: "Arabic SEO Guide", href: "/blog/ultimate-guide-ai-seo-arabic-markets" },
      ]
    },
    { 
      title: "Legal", 
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-policy" },
      ]
    },
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-heading font-bold mb-4 text-white text-center">
          {language === "ar" ? "خريطة الموقع" : "Site Map"}
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {language === "ar" 
            ? "تصفح جميع صفحات موقعنا بسهولة"
            : "Browse all pages of our website easily"
          }
        </p>

        <div className="flex justify-center mb-12">
          <a 
            href="/sitemap.xml" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/30 transition-colors"
            data-testid="link-xml-sitemap"
          >
            <FileText className="w-4 h-4" />
            {language === "ar" ? "تحميل خريطة XML" : "Download XML Sitemap"}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-lg font-heading font-bold text-primary border-b border-primary/30 pb-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
