import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const currentYear = 2026;
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/newsletter", { email });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: language === "ar" ? "تم الاشتراك!" : "Subscribed!",
        description: language === "ar" ? "شكراً لانضمامك لنشرتنا الإخبارية." : "Thank you for joining our newsletter.",
      });
      setNewsletterEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: language === "ar" ? "خطأ" : "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      newsletterMutation.mutate(newsletterEmail);
    }
  };

  const footerLinks = language === "ar" ? {
    "الشركة": [
      { name: "عنّا", href: "#about" },
      { name: "دراسات الحالة", href: "#case-studies" },
      { name: "العملية", href: "#process" },
      { name: "تواصل معنا", href: "#contact" },
    ],
    "الخدمات": [
      { name: "استراتيجية الذكاء الاصطناعي", href: "#services" },
      { name: "أتمتة العمليات", href: "#services" },
      { name: "وكلاء ذكاء اصطناعي مخصصين", href: "#services" },
      { name: "تحليلات البيانات", href: "#services" },
    ],
    "قانوني": [
      { name: "سياسة الخصوصية", href: "/privacy-policy" },
      { name: "شروط الخدمة", href: "/terms-of-service" },
      { name: "سياسة ملفات تعريف الارتباط", href: "/cookie-policy" },
      { name: "خريطة الموقع", href: "/sitemap" },
    ],
  } : {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Process", href: "#process" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "AI Strategy", href: "#services" },
      { name: "Process Automation", href: "#services" },
      { name: "Custom AI Agents", href: "#services" },
      { name: "Data Analytics", href: "#services" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-black/80 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
              GrowthX Arabia
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-white font-heading font-bold text-lg">{title}</h4>
              <ul className="space-y-4">
                {links.map((link: { name: string; href: string }) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <motion.a
                        whileHover={{ x: 4, color: "var(--primary)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        href={link.href}
                        className="text-muted-foreground text-sm transition-colors inline-block"
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <motion.div
                        whileHover={{ x: 4, color: "var(--primary)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block"
                      >
                        <Link
                          href={link.href}
                          className="text-muted-foreground text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold text-lg">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  {language === "ar" ? "حي الملك عبدالله المالي،" : "King Abdullah Financial District,"}
                  <br />
                  {language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
              </li>
              <li>
                <a 
                  href="https://wa.me/15199333384" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-green-400 transition-colors"
                  data-testid="link-whatsapp"
                >
                  <svg className="h-5 w-5 text-green-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span dir="ltr">+1 (519) 933-3384</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@growthxarabia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs">
            © {currentYear} GrowthX Arabia. {t("footer.rights")} {language === "ar" ? "صُنع لمستقبل الشرق الأوسط." : "Built for the future of the Middle East."}
          </p>
          <div className="flex gap-8">
            <Link href="/admin" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              {language === "ar" ? "بوابة الإدارة" : "Admin Portal"}
            </Link>
            <span className="text-muted-foreground text-xs">
              {language === "ar" ? "صُنع بـ ❤️ في الرياض" : "Made with ❤️ in Riyadh"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
