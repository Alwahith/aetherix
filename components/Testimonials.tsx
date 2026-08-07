const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechNova Inc.",
    review:
      "Aetherix transformed our online presence. The website is fast, modern, and exceeded our expectations.",
  },
  {
    name: "Michael Brown",
    company: "CloudEdge Solutions",
    review:
      "Excellent communication and outstanding AWS hosting setup. Highly recommended!",
  },
  {
    name: "Emily Davis",
    company: "Bright Digital",
    review:
      "Professional design, responsive support, and a seamless development process from start to finish.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#09090f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-violet-500 px-5 py-2 text-sm text-violet-400">
            TESTIMONIALS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Trusted by businesses for modern websites and cloud solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(123,57,252,0.25)]"
            >
              <div className="mb-5 flex text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="leading-8 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-violet-400">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}