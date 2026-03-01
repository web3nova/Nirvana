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
      <section id="hero-section"><Hero /></section>
      <section id="about"><About /></section>
      <section id="stats"><Stats /></section>
      <section id="ecosystem"><Ecosystem /></section>
      <section id="courses"><Courses /></section>
      <section id="reviews"><Review /></section>
      <section id="partners"><PartnershipSection /></section>
      <section id="team"><Team /></section>
      <section id="faq"><Faq /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}