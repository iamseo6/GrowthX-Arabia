import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

export default function Sitemap() {
  const sections = [
    { title: "Main", links: [{ name: "Home", href: "/" }] },
    { title: "Services", links: [
      { name: "AI Strategy", href: "/#services" },
      { name: "Process Automation", href: "/#services" },
      { name: "Custom AI Agents", href: "/#services" },
      { name: "Data Analytics", href: "/#services" },
    ]},
    { title: "Company", links: [
      { name: "About Us", href: "/#about" },
      { name: "Case Studies", href: "/#case-studies" },
      { name: "Process", href: "/#process" },
      { name: "Contact", href: "/#contact" },
    ]},
    { title: "Legal", links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ]},
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-heading font-bold mb-12 text-white text-center">Site Map</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h2 className="text-xl font-heading font-bold text-primary">{section.title}</h2>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
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
