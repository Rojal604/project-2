import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              Hi, I design & develop <span className="text-accent">digital experiences.</span>
            </h1>
            <p className="text-lg text-foreground/60">Web Development • App Development • UI/UX Design</p>
            <div className="flex gap-4 pt-4">
              <button className="bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2 group">
                Hire Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-accent/50 text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors">
                View Work
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50" />
              <Image
                src="/hero-image.png"
                alt="Hero Image"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
