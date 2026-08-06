import {
  FaGlobe,
  FaServer,
  FaCloud,
  FaRobot,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-4xl text-violet-500" />,
    title: "Website Development",
    description:
      "Modern, responsive websites built with Next.js, React, and Tailwind CSS.",
  },
  {
    icon: <FaServer className="text-4xl text-violet-500" />,
    title: "Web Hosting",
    description:
      "Fast, secure hosting with SSL, CDN, and automatic backups.",
  },
  {
    icon: <FaCloud className="text-4xl text-violet-500" />,
    title: "Cloud Solutions",
    description:
      "AWS-powered cloud infrastructure and scalable deployments.",
  },
  {
    icon: <FaRobot className="text-4xl text-violet-500" />,
    title: "AI Automation",
    description:
      "Integrate AI chatbots, workflows, and business automation.",
  },
  {
    icon: <FaSearch className="text-4xl text-violet-500" />,
    title: "SEO Optimization",
    description:
      "Improve search rankings with technical SEO and performance tuning.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-violet-500" />,
    title: "Security & Maintenance",
    description:
      "Website monitoring, updates, malware protection, and backups.",
  },
];

export default function Services() {
  return (
<section className="relative overflow-hidden bg-[#09090f] py-24">
          <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-white">
          Our Services
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Everything you need to build, launch, and grow your online presence.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(123,57,252,0.15)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(123,57,252,0.35)]"            >
              {service.icon}

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}