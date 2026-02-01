import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  useEffect(() => {
    // Show popup after 15 seconds or when user scrolls 50% of the page
    const hasSeenPopup = localStorage.getItem("newsletter_popup_seen");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter_popup_seen", "true");
  };

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      const res = await apiRequest("POST", "/api/newsletter", { email });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: isRTL ? "تم الاشتراك!" : "Subscribed!",
        description: isRTL ? "شكراً لانضمامك لنشرتنا الإخبارية." : "Thank you for joining our newsletter.",
      });
      setEmail("");
      closePopup();
    },
    onError: (error: Error) => {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      mutation.mutate(email);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full max-w-md glass-card p-8 border border-white/10 shadow-2xl ${isRTL ? "rtl" : "ltr"}`}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-1 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/20 mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3">
                {isRTL ? "ابقَ على اطلاع" : "Stay in the Loop"}
              </h2>
              
              <p className="text-gray-400 mb-8">
                {isRTL 
                  ? "احصل على آخر أخبار الذكاء الاصطناعي والأتمتة في الشرق الأوسط مباشرة في بريدك الإلكتروني."
                  : "Get the latest AI and automation news in the Middle East delivered straight to your inbox."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder={isRTL ? "البريد الإلكتروني" : "Email Address"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 pr-12"
                  />
                  <Mail className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 ${isRTL ? "left-4" : "right-4"}`} />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      {isRTL ? "اشترك الآن" : "Subscribe Now"}
                      <Send className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-6">
                {isRTL 
                  ? "نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت."
                  : "We respect your privacy. Unsubscribe at any time."}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
