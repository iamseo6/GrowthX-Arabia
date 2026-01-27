import { Link } from "wouter";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const footerLinks = {
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
              Pioneering AI automation in the Middle East. We help businesses scale through intelligent digital transformation and cutting-edge automation solutions.
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
                {links.map((link) => (
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
            <h4 className="text-white font-heading font-bold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>King Abdullah Financial District,<br />Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+966 11 234 5678</span>
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
            © {currentYear} GrowthX Arabia. All rights reserved. Built for the future of the Middle East.
          </p>
          <div className="flex gap-8">
            <Link href="/admin" className="text-muted-foreground hover:text-primary text-xs transition-colors">
              Admin Portal
            </Link>
            <span className="text-muted-foreground text-xs">
              Made with ❤️ in Riyadh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
