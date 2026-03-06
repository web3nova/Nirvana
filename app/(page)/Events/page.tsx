import Events from "@/components/events";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EventsPage() {
    return (
        <div className="overflow-x-hidden">
            <Navbar forceLight />
            {/* pt-[90px] clears the fixed navbar (72px height + 6px top offset + breathing room) */}
            <div className="pt-[90px]">
                <Events />
                <Footer />
            </div>
        </div>
    );
}