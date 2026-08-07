"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#09090f]" />

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-6 pt-52 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-[7rem]"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Digital
          </span>
          <br />
          Experiences That
          <br />
          Drive Business Growth
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 max-w-2xl text-xl leading-9 text-white/70"
        >
          Aetherix builds premium websites, cloud infrastructure,
          business email solutions and AI-powered automation
          designed to help modern businesses grow faster.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-col gap-5 sm:flex-row"
        >
          <button
            onClick={scrollToContact}
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,.6)]"
          >
            Start Your Project
          </button>

          <button
            onClick={scrollToPortfolio}
            className="rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            Explore Our Work
          </button>
        </motion.div>

      </div>
    </section>
  );
}