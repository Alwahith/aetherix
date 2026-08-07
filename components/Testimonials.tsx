"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    initials: "SJ",
    review:
      "Aetherix delivered a fast, modern website that exceeded our expectations. Communication and execution were excellent.",
  },
  {
    name: "Michael Chen",
    role: "Founder, CloudEdge",
    initials: "MC",
    review:
      "From cloud deployment to business email setup, everything was handled professionally. Highly recommended.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    initials: "ED",
    review:
      "The team transformed our online presence with a beautiful design and outstanding performance.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#09090f] py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            TESTIMONIALS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            We focus on delivering quality, performance and long-term value for every project.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(124,58,237,.2)]"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="mr-1 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-white/75">
                “{item.review}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 font-bold text-white">
                  {item.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-white/60">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}