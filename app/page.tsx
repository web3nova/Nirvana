import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
 import Courses from "@/components/courses";
 import Team from "@/components/team";
 import Ecosystem from "@/components/ourecosystem";
 import PartnershipSection from "@/components/Patnership";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/About";
import Review from "@/components/reveiw";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Ecosystem/>
      <Courses/>
      < Review/>
      <PartnershipSection/>
      <Team />
      <Faq />
      <Contact/>
      <Footer />
    </div>
  );
}