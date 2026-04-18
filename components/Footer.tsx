"use client";

const footerLinks = {
  Resources: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Confidentiality Agreement", href: "#" },
  ],
  Support: [
    { label: "Contact Support", href: "mailto:contact@imindps.com" },
    { label: "FAQ", href: "#faq" },
    { label: "Patient Portal", href: "#" },
  ],
};

const socialIcons = [
  { icon: "share", label: "Share" },
  { icon: "public", label: "Website" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Brand */}
        <div className="space-y-6">
          <a
            href="#"
            className="text-xl font-bold text-sky-900 tracking-tighter font-headline block"
            aria-label="Sanctuary home"
          >
            Sanctuary
          </a>
          <p className="text-slate-500 font-inter text-xs leading-relaxed max-w-sm">
            Providing professional, ethical, and compassionate psychological
            services in Dumaguete since 2015. Our clinic is dedicated to
            fostering mental well-being through evidence-based interventions.
          </p>
          <div className="flex gap-4" aria-label="Social links">
            {socialIcons.map((social) => (
              <a
                key={social.icon}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white hover:-translate-y-1 duration-200"
              >
                <span className="material-symbols-outlined text-sm">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h5 className="text-sky-800 font-bold text-xs uppercase tracking-widest">
                {section}
              </h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-sky-600 transition-colors font-inter text-xs block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200/60">
        <p className="text-center text-slate-400 font-inter text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Sanctuary Mental Health. All rights
          reserved. Licensed professionals only.
        </p>
      </div>
    </footer>
  );
}
