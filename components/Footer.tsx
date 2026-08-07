import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Aetherix
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Premium website development,
              cloud hosting and AI-powered
              digital solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-violet-400 transition">Website Development</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition">Cloud Hosting</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition">SEO</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition">AI Automation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-violet-400 transition">About</a></li>
              <li><a href="#portfolio" className="hover:text-violet-400 transition">Portfolio</a></li>
              <li><a href="#case-studies" className="hover:text-violet-400 transition">Case Studies</a></li>
              <li><a href="#testimonials" className="hover:text-violet-400 transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#process" className="hover:text-violet-400 transition">Our Process</a></li>
              <li><a href="#pricing" className="hover:text-violet-400 transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-violet-400 transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-violet-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 text-white transition hover:bg-violet-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 text-white transition hover:bg-violet-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 text-white transition hover:bg-violet-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 text-white transition hover:bg-violet-600"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Aetherix. All rights reserved.
        </div>

      </div>
    </footer>
  );
}