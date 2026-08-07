import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Corporate Business Website",
    category: "Web Development",
    tech: "Next.js • Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    title: "AWS Cloud Infrastructure",
    category: "Cloud Solutions",
    tech: "AWS • EC2 • Route53",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
  },
  {
    title: "E-Commerce Store",
    category: "Online Store",
    tech: "React • Stripe",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#09090f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-violet-500 px-5 py-2 text-sm text-violet-400">
            OUR WORK
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Explore some of the websites and cloud solutions we've built.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-violet-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {project.tech}
                </p>

                <div className="mt-6 flex gap-3">
  <a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700"
  >
    <FaExternalLinkAlt />
    Live
  </a>

  <a
    href="https://github.com/Alwahith"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white transition hover:bg-white/10"
  >
    <FaGithub />
    Code
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}