"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  Bot,
  Globe,
  Headphones,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Modern Web Development",
    description:
      "Fast, responsive and SEO-friendly websites built with Next.js and modern technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Secure AWS deployments with scalability, monitoring and high availability.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate repetitive work and improve customer experiences with AI-powered solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "SSL, backups, email authentication and security best practices built into every project.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Reliable maintenance, updates and technical support even after your project goes live.",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description:
      "Optimized code, lightning-fast loading speeds and an exceptional user experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#09090f] py-32"
    >
      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            WHY CHOOSE AETHERIX
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Technology That
            <br />
            Helps Businesses Grow.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            We combine modern web development, cloud infrastructure,
            business productivity solutions and AI automation to build
            reliable digital experiences that scale with your business.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Start a Project
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6, delay: index * .08 }}
                className="group flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(124,58,237,.2)]"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}