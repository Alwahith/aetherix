'use client';

import { motion } from "framer-motion";

const faqItems = [
  {
    id: 1,
    question: "What makes Aetherix different from other web development agencies?",
    answer: "We combine award-winning design with cutting-edge technology to create digital experiences that not only look stunning but also drive measurable business results. Our process is transparent, collaborative, and focused on your long-term success."
  },
  {
    id: 2,
    question: "How long does a typical website project take?",
    answer: "Timeline varies based on project scope, but most websites are completed within 6-12 weeks. We provide a detailed project timeline during the discovery phase and keep you updated throughout the entire process."
  },
  {
    id: 3,
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! All our websites include ongoing maintenance options. We offer various support packages ranging from basic updates to comprehensive management including security monitoring, performance optimization, and content updates."
  },
  {
    id: 4,
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely. We build websites with SEO best practices from the ground up and can integrate with your digital marketing strategies. We also offer ongoing SEO optimization and digital marketing services to help you grow your online presence."
  },
  {
    id: 5,
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including Next.js, React, Tailwind CSS, Node.js, Python, AWS, Docker, Kubernetes, and various AI/ML frameworks. We stay current with emerging technologies to provide the best solutions for our clients."
  },
  {
    id: 6,
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients worldwide. Our remote-first approach allows us to collaborate effectively with businesses across different time zones while maintaining clear communication and project transparency."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#09090f] py-28 scroll-mt-[5rem]">
      <div className="absolute inset-0 h-[500px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Get the Answers
            <br />
            You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            We've compiled answers to our most common questions to help you understand
            our process, pricing, and what it's like to work with Aetherix.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: item.id * 0.05 }}
              className="border-t border-white/10"
            >
              <div className="py-6 flex items-center justify-between">
                <button
                  onClick={() => {}}
                  className="w-full text-left text-lg font-semibold flex items-center justify-between text-white/90 hover:text-violet-400 transition"
                >
                  <span>{item.question}</span>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    className="transition-transform duration-300"
                  >
                    +
                  </motion.span>
                </button>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 'auto', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .4 }}
                className="overflow-hidden text-white/60 ps-[1.5rem] pt-4"
              >
                <p className="leading-relaxed">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}