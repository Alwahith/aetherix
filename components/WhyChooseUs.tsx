import {
  FaRocket,
  FaShieldAlt,
  FaCloud,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-4xl text-violet-500" />,
    title: "Fast Delivery",
    desc: "Launch your website in days, not weeks.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-violet-500" />,
    title: "Secure & Reliable",
    desc: "Enterprise-grade hosting with SSL and backups.",
  },
  {
    icon: <FaCloud className="text-4xl text-violet-500" />,
    title: "Cloud Infrastructure",
    desc: "Hosted on AWS and modern cloud platforms.",
  },
  {
    icon: <FaHeadset className="text-4xl text-violet-500" />,
    title: "24/7 Support",
    desc: "We're available whenever you need help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#09090f]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500 px-5 py-2 text-sm text-violet-400">
            WHY CHOOSE US
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Why Choose Aetherix?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            We combine design, development, cloud infrastructure,
            and AI to help businesses grow online.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(123,57,252,0.3)]"
            >
              {item.icon}

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}