import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { key: "nav.services", href: "/services" },
    { key: "nav.process", href: "#process" },
    { key: "nav.caseStudies", href: "/case-studies" },
    { key: "nav.blog", href: "/blog" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 bg-background/80"
    >
      <div className={`container mx-auto px-4 h-20 flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent cursor-pointer">
          GrowthX Arabia
        </Link>

        <div className={`hidden md:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          {navItems.map((item) => (
            item.href.startsWith("/") ? (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-${item.key}`}
              >
                {t(item.key)}
              </Link>
            ) : (
              <a 
                key={item.key} 
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-${item.key}`}
              >
                {t(item.key)}
              </a>
            )
          ))}
          
          <div className={`flex items-center gap-4 ${isRTL ? "pr-4 border-r" : "pl-4 border-l"} border-white/10`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="text-xs font-bold flex items-center gap-2 hover:bg-white/5"
              data-testid="button-language-toggle"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "EN" : "AR"}
            </Button>
            <Link href="/get-started">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold" data-testid="button-get-started">
                {t("nav.getStarted")}
              </Button>
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-card border-t border-white/5"
        >
          <div className={`flex flex-col p-4 gap-4 ${isRTL ? "items-end text-right" : ""}`}>
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ) : (
                <a 
                  key={item.key} 
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </a>
              )
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="text-xs font-bold flex items-center gap-2 hover:bg-white/5 w-fit"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "EN" : "AR"}
            </Button>
            <Link href="/get-started" className="w-full" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                {t("nav.getStarted")}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
