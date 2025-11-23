import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "CEO, Tech Startup",
    content:
      "Outstanding work! The portfolio website exceeded our expectations. Professional, modern, and exactly what we needed.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Amazing attention to detail. The design is beautiful and the user experience is seamless. Highly recommended!",
    avatar: "👨‍💼",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Marketing Director",
    content: "Working with this developer was a pleasure. Great communication, timely delivery, and fantastic results.",
    avatar: "👩‍🔬",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-card/30 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Client Feedback</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background border border-border/40 rounded-lg p-8 hover:border-accent/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
