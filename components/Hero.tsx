"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#09090f]"
>
      {/* =========================
          Background Video
      ========================== */}

<div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-v2.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-[#09090f]" />

        {/* Background Glows */}

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[170px]" />

        {/* =========================
            Hero Content
        ========================== */}

<div className="relative z-20 flex h-screen items-center justify-center pt-32">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
className="mx-auto max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem]"            >
              Crafting

              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>

              <br />

              That Inspire Growth
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .3,
                duration: .8,
              }}
              className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/75 md:text-xl"
            >
              We design premium websites, scalable cloud
              infrastructure, AI-powered business solutions
              and digital experiences that help companies
              grow faster.
            </motion.p>
                        {/* CTA Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,.55)]"
              >
                <span className="relative z-10">
                  Start Your Project
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <button
                onClick={() => scrollTo("portfolio")}
                className="rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-violet-400 hover:bg-white/20"
              >
                Explore Our Work
              </button>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="mt-20 grid w-full max-w-4xl grid-cols-3 gap-6 md:gap-12"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white md:text-5xl">
                  50+
                </h3>

                <p className="mt-2 text-sm text-white/60 md:text-base">
                  Projects Delivered
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-white md:text-5xl">
                  99.9%
                </h3>

                <p className="mt-2 text-sm text-white/60 md:text-base">
                  Service Uptime
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-white md:text-5xl">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-white/60 md:text-base">
                  Technical Support
                </p>
              </div>
            </motion.div>

            {/* Scroll Indicator */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-20 flex flex-col items-center"
            >
              <div className="flex h-14 w-8 justify-center rounded-full border border-white/40">
                <div className="mt-2 h-3 w-2 rounded-full bg-white" />
              </div>

              <span className="mt-4 text-xs uppercase tracking-[0.35em] text-white/50">
                Scroll
              </span>
            </motion.div>
                        {/* Floating Background Elements */}

            <motion.div
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-20 top-32 h-4 w-4 rounded-full bg-violet-400/60 blur-sm"
            />

            <motion.div
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-24 top-44 h-5 w-5 rounded-full bg-cyan-400/60 blur-sm"
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-40 left-1/4 h-6 w-6 rounded-full bg-fuchsia-500/40 blur-md"
            />

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-28 right-1/4 h-28 w-28 rounded-full border border-violet-500/20"
            />

          </div>
        </div>

        {/* Bottom Gradient */}

        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#09090f] to-transparent" />

      </div>
    </section>
  );
}