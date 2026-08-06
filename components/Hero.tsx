export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      {/* Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="rounded-md bg-violet-600 px-3 py-1 text-sm font-medium text-white">
            New
          </span>

          <span className="text-sm text-white">
            Welcome to Aetherix
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Build Stunning Websites
          <br />
          That Grow Your Business
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg text-white/80">
          We design, develop, host and manage modern websites with
          cloud infrastructure, business email, SEO and AI-powered
          solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
            Get Started
          </button>

          <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}