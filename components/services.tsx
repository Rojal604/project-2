import { Globe, Smartphone, Palette, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Creating responsive, performant websites with modern technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Building intuitive mobile applications that provide seamless user experiences.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful, user-centered interfaces that solve real problems.",
    },
    {
      icon: Zap,
      title: "Branding & Graphics",
      description: "Crafting visual identities and graphics that communicate your brand effectively.",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-card/30 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-background border border-border/40 rounded-lg p-8 hover:border-accent/50 hover:bg-background/50 transition-all group"
              >
                <Icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
