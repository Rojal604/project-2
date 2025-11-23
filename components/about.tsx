import { Code, Smartphone, Palette, Sparkles } from "lucide-react"

export default function About() {
  const skills = [
    { icon: Code, label: "Web Development", color: "text-accent" },
    { icon: Smartphone, label: "App Development", color: "text-accent" },
    { icon: Palette, label: "UI/UX Design", color: "text-accent" },
    { icon: Sparkles, label: "Branding", color: "text-accent" },
  ]

  return (
    <section id="about" className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <p className="text-lg text-foreground/70 leading-relaxed">
            I'm a passionate designer and developer who creates beautiful, functional digital experiences. With
            expertise in web development, mobile apps, and UI/UX design, I help businesses and individuals bring their
            ideas to life with clean code and thoughtful design.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            I believe in creating solutions that are not only visually appealing but also performant and accessible. My
            goal is to craft digital products that make a positive impact and provide genuine value to users.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.label}
                className="bg-card border border-border/40 rounded-lg p-6 text-center hover:border-accent/50 transition-colors"
              >
                <Icon className={`${skill.color} mx-auto mb-3`} size={28} />
                <p className="font-semibold text-foreground">{skill.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
