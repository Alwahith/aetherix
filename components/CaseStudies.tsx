'use client';

import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    client: "Fortune 500 Financial Institution",
    industry: "Financial Services",
    problem: "Legacy infrastructure was causing slow deployment cycles, high maintenance costs, and scalability limitations that hindered business growth.",
    solution: "Architected and executed a complete cloud migration to AWS with microservices architecture, CI/CD pipelines, and automated scaling.",
    process: [
      "Assessment & Planning: 3-week comprehensive audit of existing infrastructure",
      "Architecture Design: Cloud-native architecture with microservices and containers",
      "Migration Execution: Phased migration with zero downtime using blue-green deployment",
      "Optimization: Performance tuning, cost optimization, and security hardening",
      "Training & Handover: Knowledge transfer and documentation for client team"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Monitoring"],
    results: [
      { metric: "Deployment Time", value: "90% Faster", detail: "From weeks to hours" },
      { metric: "Operational Costs", value: "40% Reduction", detail: "Through resource optimization" },
      { metric: "System Uptime", value: "99.95%", detail: "Improved from 98.2%" },
      { metric: "Team Productivity", value: "60% Increase", detail: "Automated workflows" }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600",
    live: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI-Powered Customer Service Platform",
    client: "Global E-commerce Retailer",
    industry: "Retail & E-commerce",
    problem: "Customer service team was overwhelmed with repetitive inquiries, leading to slow response times and inconsistent customer experiences.",
    solution: "Developed an AI-powered chatbot and ticketing system that automated 70% of common inquiries while providing seamless handoff to human agents for complex issues.",
    process: [
      "Discovery: Analyzed customer service logs and identified common inquiry patterns",
      "AI Model Training: Custom NLP model trained on historical customer interactions",
      "Integration: Seamless integration with existing CRM and communication channels",
      "Testing & Refinement: Continuous learning and improvement based on real interactions",
      "Launch & Optimization: Phased rollout with A/B testing and performance monitoring"
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS"],
    results: [
      { metric: "Response Time", value: "80% Faster", detail: "Average response under 30 seconds" },
      { metric: "Customer Satisfaction", value: "35% Increase", detail: "Improved CSAT scores" },
      { metric: "Agent Efficiency", value: "50% More Tickets", detail: "Handled per agent per day" },
      { metric: "Cost Savings", value: "$2.3M Annual", detail: "Reduced operational costs" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
    live: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Digital Transformation Platform",
    client: "Healthcare Technology Startup",
    industry: "Healthcare & SaaS",
    problem: "Fragmented systems and manual processes were slowing down product development and creating compliance risks in a highly regulated industry.",
    solution: "Built a unified digital platform that integrated electronic health records, telemedicine, and AI diagnostics while ensuring HIPAA compliance and scalability.",
    process: [
      "Compliance Analysis: Thorough review of HIPAA and healthcare data requirements",
      "Platform Architecture: Secure, scalable architecture with microservices and data encryption",
      "Core Development: EHR integration, telemedicine features, and AI diagnostic tools",
      "Security Implementation: End-to-end encryption, access controls, and audit trails",
      "Validation & Launch: Comprehensive testing, compliance certification, and phased rollout"
    ],
    technologies: ["Next.js", "Python", "AWS", "PostgreSQL", "GraphQL", "Docker"],
    results: [
      { metric: "Time to Market", value: "70% Faster", detail: "Feature releases accelerated" },
      { metric: "User Adoption", value: "94% Satisfaction", detail: "Among healthcare providers" },
      { metric: "System Performance", value: "2.5x Speed", detail: "Improved response times" },
      { metric: "Compliance Score", value: "100%", detail: "Achieved HIPAA compliance" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600",
    live: "#",
    github: "#"
  }
];

export default function CaseStudies() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="case-studies" className="relative bg-[#09090f] py-28 scroll-mt-[5rem]">
      <div className="absolute inset-0 h-[600px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-violet-600/10 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            CASE STUDIES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Proven Results
            <br />
            For Industry Leaders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Each case study demonstrates our ability to solve complex business challenges
            with innovative technology solutions that deliver measurable ROI.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: study.id * 0.08 }}
              className="group border border-white/10 bg-white/5 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.3)]"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#09090f] to-transparent/0" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-xs font-bold text-white">
                    {study.id}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                </div>

                <div className="space-y-2 text-sm text-white/60">
                  <p><span className="font-semibold text-white">Client:</span> {study.client}</p>
                  <p><span className="font-semibold text-white">Industry:</span> {study.industry}</p>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-1">The Challenge</h4>
                  <p className="text-white/70 leading-relaxed">{study.problem}</p>

                  <h4 className="text-lg font-semibold text-white mb-1 mt-4">Our Solution</h4>
                  <p className="text-white/70 leading-relaxed">{study.solution}</p>
                </div>

                {/* Process Timeline */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Our Process</h4>
                  <div className="space-y-2">
                    {study.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-3 w-3 rounded-full bg-violet-400/50 mt-1"></div>
                        <div>
                          <p className="text-white/80 font-medium">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Results Delivered</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {study.results.map((result) => (
                      <div key={result.metric} className="p-3 rounded-lg border border-white/10 bg-white/3">
                        <h5 className="font-semibold text-white">{result.metric}</h5>
                        <p className="text-white/60 text-sm">{result.value}</p>
                        <p className="text-white/40 text-xs">{result.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={study.live}
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                  >
                    View Live
                  </a>
                  <a
                    href={study.github}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}