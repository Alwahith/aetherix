"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <h1 className="text-3xl font-bold text-white">Aetherix</h1>

        <ul className="hidden gap-8 text-white md:flex">
          <li>Home</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>

        <div className="hidden gap-3 md:flex">
          <button className="rounded-lg bg-white px-4 py-2 text-black">
            Sign In
          </button>

          <button className="rounded-lg bg-violet-600 px-4 py-2 text-white">
            Get Started
          </button>
        </div>

        <button className="text-white md:hidden">
          <Menu />
        </button>
      </nav>
    </header>
  );
}