import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Reveiw from "@/components/reveiw";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/*
        Navbar is sticky — stays at top as you scroll to About, Review etc.
        Hero card connects flush beneath it (no top margin, no top border-radius).
        Together they look like one card on the hero, but navbar stays
        pinned at the top for all other sections.
      */}
      <Navbar />
      <Hero />
      <About />
      <Reveiw />
      <Footer />
    </div>
  );
}