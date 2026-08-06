import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
    </main>
  );
}