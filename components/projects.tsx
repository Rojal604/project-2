"use client"

import Image from "next/image"

const projects = [
  { id: 1, title: "Project One", category: "Website", image: "/project-website.png" },
  { id: 2, title: "Project Two", category: "App", image: "/project-app.png" },
  { id: 3, title: "Project Three", category: "UI/UX", image: "/project-uiux.png" },
  { id: 4, title: "Project Four", category: "Website", image: "/project-website-2.png" },
  { id: 5, title: "Project Five", category: "App", image: "/project-app-2.png" },
  { id: 6, title: "Project Six", category: "Branding", image: "/project-branding.png" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer overflow-hidden rounded-lg relative aspect-square">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/70">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
