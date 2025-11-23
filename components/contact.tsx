"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-card/30 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Let's Work Together</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-border/40 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-border/40 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-background border border-border/40 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-background border border-border/40 rounded-lg p-8">
              <Mail className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:hello@example.com" className="text-accent hover:underline">
                hello@example.com
              </a>
            </div>
            <div className="bg-background border border-border/40 rounded-lg p-8">
              <MapPin className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-foreground/70">San Francisco, California, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
