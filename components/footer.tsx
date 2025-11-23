import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="border-t border-border/40 bg-primary/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-semibold text-lg mb-2">Portfolio</p>
            <p className="text-foreground/60 text-sm">Crafting digital experiences with passion & precision.</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8">
          <p className="text-center text-foreground/60 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
