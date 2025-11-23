import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for getting started",
    features: ["Single page website", "Responsive design", "Basic SEO optimization", "3 revision rounds"],
  },
  {
    name: "Standard",
    price: "$2,499",
    description: "Great for growing businesses",
    popular: true,
    features: [
      "Multi-page website",
      "Advanced functionality",
      "SEO & analytics setup",
      "5 revision rounds",
      "Free hosting & domain (1 year)",
    ],
  },
  {
    name: "Premium",
    price: "$4,999",
    description: "For comprehensive solutions",
    features: [
      "Custom web application",
      "API integration",
      "Advanced SEO strategy",
      "Unlimited revisions",
      "Free hosting & domain (2 years)",
      "Post-launch support",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Pricing Plans</h2>
        <p className="text-center text-foreground/60 mb-12">Choose the perfect plan for your project</p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border transition-all ${
                plan.popular
                  ? "bg-primary/10 border-accent/50 ring-2 ring-accent/30 scale-105"
                  : "bg-background border-border/40 hover:border-accent/50"
              } p-8`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
              <p className="text-4xl font-bold text-accent mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "border border-accent/50 text-accent hover:bg-accent/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
