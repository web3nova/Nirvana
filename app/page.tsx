import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Courses from "@/components/courses";
import Review from "@/components/reveiw";
import Footer from "@/components/footer";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Courses/>
     <Team />

      
      <Faq />
   
      <Footer />
    </div>
  );
}