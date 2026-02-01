import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const STORAGE_KEY = "exitPopupShown";
const POPUP_DELAY = 5000;

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const handleClose = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  }, []);

  useEffect(() => {
    const hasBeenShown = localStorage.getItem(STORAGE_KEY);
    if (hasBeenShown) return;

    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        hasTriggered = true;
        timeoutId = setTimeout(() => {
          setIsOpen(true);
        }, 100);
      }
    };

    const handleDelayedShow = () => {
      if (!hasTriggered && !localStorage.getItem(STORAGE_KEY)) {
        hasTriggered = true;
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    
    const delayTimeout = setTimeout(handleDelayedShow, 30000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
      clearTimeout(delayTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
          >
            <div className="relative glass-card border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary" />
              
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white transition-colors rounded-full hover:bg-white/10"
                data-testid="button-close-exit-popup"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                  {language === "ar" ? (
                    <>انتظر! لا تفوّت <span className="text-primary">استشارتك المجانية</span></>
                  ) : (
                    <>Wait! Don't Miss Your <span className="text-primary">Free Consultation</span></>
                  )}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {language === "ar"
                    ? "احصل على تحليل مجاني لعمليات عملك واكتشف كيف يمكن للذكاء الاصطناعي والأتمتة توفير ساعات من العمل كل أسبوع."
                    : "Get a free analysis of your business operations and discover how AI and automation can save you hours of work every week."
                  }
                </p>

                <div className="space-y-3">
                  <Link href="/get-started" onClick={handleClose}>
                    <Button
                      className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-white font-semibold group"
                      data-testid="button-exit-popup-cta"
                    >
                      {language === "ar" ? "احجز استشارتك المجانية" : "Book Your Free Consultation"}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <button
                    onClick={handleClose}
                    className="text-sm text-muted-foreground hover:text-white transition-colors"
                    data-testid="button-exit-popup-dismiss"
                  >
                    {language === "ar" ? "لا شكرًا، ربما لاحقًا" : "No thanks, maybe later"}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      {language === "ar" ? "استشارة مجانية 100%" : "100% Free Consultation"}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      {language === "ar" ? "بدون التزام" : "No Obligation"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
