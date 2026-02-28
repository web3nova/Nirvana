import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Team from "@/components/team";
import Faq from "@/components/faq";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
 
      <Team />
      
      <Faq />
      <About />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-700">
          This is a simple Next.js application with a navbar and footer.
        </p>
      </main>
      <Footer />
    </div>
  );
}