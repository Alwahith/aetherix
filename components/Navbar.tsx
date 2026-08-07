"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
<header className="fixed inset-x-0 top-0 z-50">
        <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-full border transition-all duration-300 ${
  scrolled
    ? "border-white/10 bg-black/70 px-10 py-4 backdrop-blur-2xl"
    : "border-transparent bg-transparent px-10 py-6"
}`}
      >
        <button
          onClick={() => goTo("home")}
          className="text-3xl font-semibold tracking-tight text-white"
        >
          Aetherix
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => goTo(link.id)}
                className="text-white/90 transition hover:text-violet-400"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => goTo("contact")}
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Start Project
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {open && (
        <div className="mx-auto mt-3 w-[92%] max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl lg:hidden">
          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  className="w-full text-left text-lg text-white transition hover:text-violet-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <button
              onClick={() => goTo("contact")}
              className="mt-4 w-full rounded-full bg-violet-600 py-3 font-semibold text-white"
            >
              Start Project
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}