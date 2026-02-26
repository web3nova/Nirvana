import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Reveiw from "@/components/reveiw";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <div className="hero-container">
      <Navbar />
      <Hero/>
      </div>
      <Reveiw />


      <Footer />
    </div>
  );
}
