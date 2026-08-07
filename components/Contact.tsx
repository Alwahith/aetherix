import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#09090f] py-28 scroll-mt-[5rem]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500 px-5 py-2 text-sm text-violet-400">
            CONTACT US
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Tell us about your project and we'll help you turn your idea into reality.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <FaEnvelope className="text-3xl text-violet-500" />

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Email
                </h3>

                <p className="text-gray-400">
                  aetherixtechno@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <FaPhoneAlt className="text-3xl text-violet-500" />

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <FaMapMarkerAlt className="text-3xl text-violet-500" />

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Location
                </h3>

                <p className="text-gray-400">
                  Tiruchirappalli, Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <form className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="mb-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none"
            />

            <button
              className="w-full rounded-xl bg-violet-600 py-4 text-lg font-semibold text-white transition hover:bg-violet-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}