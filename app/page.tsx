import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />

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
