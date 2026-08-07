'use client';

import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Terminal,
  Microscope,
  Rocket,
  Shield
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your business goals, challenges, and vision to create a tailored solution strategy.",
    Icon: Search,
    color: "from-violet-600 to-fuchsia-500",
    delay: 0
  },
  {
    id: 2,
    title: "Design",
    description: "Creating intuitive user experiences and beautiful interfaces that align with your brand identity.",
    Icon: Layout,
    color: "from-cyan-400 to-blue-500",
    delay: 0.1
  },
  {
    id: 3,
    title: "Development",
    description: "Building robust, scalable applications using modern technologies and best practices.",
    Icon: Terminal,
    color: "from-emerald-400 to-green-500",
    delay: 0.2
  },
  {
    id: 4,
    title: "Testing",
    description: "Rigorous quality assurance to ensure performance, security, and reliability across all devices.",
    Icon: Microscope,
    color: "from-amber-400 to-yellow-500",
    delay: 0.3
  },
  {
    id: 5,
    title: "Deployment",
    description: "Seamless launch with minimal downtime and comprehensive monitoring for optimal performance.",
    Icon: Rocket,
    color: "from-pink-400 to-red-500",
    delay: 0.4
  },
  {
    id: 6,
    title: "Support",
    description: "Ongoing maintenance, updates, and technical support to ensure long-term success.",
    Icon: Shield,
    color: "from-blue-400 to-indigo-500",
    delay: 0.5
  }
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[#09090f] py-28 scroll-mt-[5rem]">
      <div className="absolute inset-0 h-[500px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            OUR PROCESS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            From Vision to Reality
            <br />
            Our Proven 6-Step Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            We follow a transparent, collaborative process that ensures your project
            is delivered on time, on budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-[80px] -translate-x-1/2 h-[calc(100%-160px)] w-0.5 bg-white/10" />

          {/* Steps */}
          {processSteps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: step.id % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: step.delay }}
              className="mb-12 flex"
            >
              {/* Step Circle */}
              <div className="relative z-10 flex-shrink-0 h-14 w-14">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 via-white/10 to-transparent/20 blur-3x"></div>
                <div className="relative rounded-full h-14 w-14 border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-xl transition-all duration-300">
                  <step.Icon className="text-2xl" />
                </div>
              </div>

              {/* Step Content */}
              <div className="ml-6 mb-4 w-full max-w-lg space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-white/5 via-white/10 to-transparent/20 backdrop-blur-xl flex items-center justify-center text-xs font-bold text-white/80">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>

                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Animated Gradient Underline */}
                <div className="relative h-0.5 mt-2">
                  <div className="absolute left-0 h-0.5 w-0 bg-gradient-to-tr {step.color} transition-width duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Line for Mobile */}
        <div className="mt-12 hidden lg:block">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}