"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Aetherix Website",
    category: "Corporate Website",
    tech: ["Next.js", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    live: "#",
    github: "#",
  },
  {
    title: "AWS Cloud Platform",
    category: "Cloud Infrastructure",
    tech: ["AWS", "EC2", "Route53"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    live: "#",
    github: "#",
  },
  {
    title: "Business Email Setup",
    category: "Google Workspace",
    tech: ["Google Workspace", "Microsoft 365"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    live: "#",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#09090f] py-32 scroll-mt-[6rem]">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Selected Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            A collection of websites, cloud solutions and digital products
            built with performance, security and modern design in mind.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project,index)=>(
            <motion.div
              key={project.title}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:.6,delay:index*0.1}}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,.18)] transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full min-h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-4xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-white/65">
                    Premium digital solution designed for speed,
                    scalability and an exceptional user experience.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tech.map((tag)=>(
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-4">
                    <a
                      href={project.live}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
                    >
                      <ExternalLink size={18}/>
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}