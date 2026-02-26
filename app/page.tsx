import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Reveiw from "@/components/reveiw";
import Hero from "@/components/hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
      <Navbar />
      <Hero/>
      </div>
      <About/>
      <Reveiw />


      <Footer />
    </div>
  );
}
