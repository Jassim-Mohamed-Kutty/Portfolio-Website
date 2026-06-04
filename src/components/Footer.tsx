import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-glass-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-9 w-9 rounded-lg gradient-primary grid place-items-center font-bold text-background">J</div>
              <span className="font-display font-semibold text-foreground text-lg">Jassim Mohamed Kutty</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Data Analyst | Power BI Developer | Analytics Engineer</p>
            <p className="text-sm text-muted-foreground italic max-w-md">
              "Building analytics solutions that turn data into business value."
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Work", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-2">
              {[
                { icon: Mail, href: "mailto:jassimkutty19@gmail.com", label: "Email" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-xl glass glass-hover grid place-items-center text-muted-foreground hover:text-primary"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jassim Mohamed Kutty. All rights reserved.</p>
          <p>{"\n"}</p>
        </div>
      </div>
    </footer>
  );
}
