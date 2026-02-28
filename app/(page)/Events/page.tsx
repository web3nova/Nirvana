import Events from "@/components/events";
import  Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EventsPage() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Events />
            <Footer />
        </div>
    );
}