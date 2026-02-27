import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Reveiw from "@/components/reveiw";
import Hero from "@/components/hero";
import About from "@/components/About";
<<<<<<< HEAD
import Team from "@/components/team";
import Faq from "@/components/faq";
import Stats from "@/components/stats";
=======
import Partnership from "@/components/Patnership";  
>>>>>>> 9ffcadcb5dd60cf06e3da89714dcbdcc8ca420f1

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Team />
      <Faq />
      <Stats />
      <Reveiw />
      <Contact />
      <About />
      <Reveiw />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-700">
          This is a simple Next.js application with a navbar and footer.
        </p>
      </main>
      <Partnership />
      <Footer />
    </div>
  );
}