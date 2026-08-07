'use client';

import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 1,
    title: "Startup",
    price: "$49",
    period: "per month",
    features: [
      "Basic Website (5 pages)",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Email Support",
      "3 Months Maintenance"
    ],
    popular: false,
    buttonText: "Get Started",
    color: "from-violet-600 to-fuchsia-500"
  },
  {
    id: 2,
    title: "Professional",
    price: "$149",
    period: "per month",
    features: [
      "Advanced Website (15 pages)",
      "Custom UI/UX Design",
      "Advanced SEO & Analytics",
      "Priority Email & Phone Support",
      "6 Months Maintenance",
      "Content Management System",
      "E-commerce Integration"
    ],
    popular: true,
    buttonText: "Choose Plan",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$399",
    period: "per month",
    features: [
      "Unlimited Pages",
      "Custom Web Applications",
      "Enterprise SEO Strategy",
      "24/7 Dedicated Support",
      "12 Months Maintenance",
      "Custom Software Development",
      "AI Automation Integration",
      "Cloud Infrastructure Setup",
      "Security & Compliance",
      "Performance Optimization"
    ],
    popular: false,
    buttonText: "Contact Us",
    color: "from-emerald-400 to-green-500"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#09090f] py-28 scroll-mt-[5rem]">
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
            PRICING PLANS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Transparent Pricing
            <br />
            For Every Business Stage
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Choose the plan that fits your needs. All plans include ongoing support
            and can be customized to your specific requirements.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: plan.id * 0.08 }}
              className={`group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] ${plan.popular ? 'scale-105' : ''}` }
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>

                <div className="flex items-baseline gap-3 mb-4">
                  <p className="text-4xl font-bold text-white">{plan.price}</p>
                  <p className="text-sm text-white/60">{plan.period}</p>
                </div>

                <ul className="space-y-3 text-white/65">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-3 w-3 rounded-full bg-violet-400/50 mt-1"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full rounded-full bg-gradient-to-tr {plan.color} py-3 font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}