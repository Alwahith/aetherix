"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Service Uptime" },
  { value: 24, suffix: "/7", label: "Technical Support" },
  { value: 5, suffix: "+", label: "Cloud Platforms" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#09090f] py-28 scroll-mt-[5rem]">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            OUR IMPACT
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Numbers That Matter
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Every project is built with performance, reliability and long-term growth in mind.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: index * .1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(124,58,237,.2)]"
            >
              <h3 className="text-5xl font-bold text-white">
                <CountUp
                  end={item.value}
                  decimals={item.decimals || 0}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              <p className="mt-4 text-lg text-white/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
