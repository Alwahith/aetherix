import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-[#09090f] overflow-x-hidden">

    <ScrollProgress />

    <Navbar />

        <Hero />

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <WhyChooseUs />
        </Reveal>

        <Reveal>
          <Portfolio />
        </Reveal>

        <Reveal>
          <CaseStudies />
        </Reveal>

        <Reveal>
          <Stats />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <Process />
        </Reveal>

        <Reveal>
          <Pricing />
        </Reveal>

        <Reveal>
          <FAQ />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

        <Footer />
    </main>
  );
}