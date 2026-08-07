"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  Mail,
  Bot,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, modern and responsive websites built with Next.js and React.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "AWS deployment, hosting, monitoring and scalable infrastructure.",
  },
  {
    icon: Mail,
    title: "Business Email",
    description:
      "Google Workspace and Microsoft 365 setup, migration and management.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Integrate AI-powered assistants and workflow automation into your business.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "SSL, backups, DNS, email authentication and cloud security best practices.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Continuous updates, monitoring and technical support after launch.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#09090f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Digital Solutions Built
            <br />
            For Modern Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            From websites and cloud infrastructure to business email and AI,
            Aetherix helps businesses launch, scale and grow.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-8 text-white/65">
                  {service.description}
                </p>

                <button className="mt-8 font-semibold text-violet-400 transition group-hover:text-violet-300">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}