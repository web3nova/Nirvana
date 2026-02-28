import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const JAKARTA = jakarta.style.fontFamily;

const Ecosystem = () => {
    return (
        <section className="bg-white w-full">
            <div className="px-6 md:px-16 py-12 max-w-[1440px] mx-auto w-full" style={{ fontFamily: JAKARTA }}>

                {/* ── HEADER ── */}
                <div className="flex flex-col items-center justify-center mb-10 md:mb-14 px-4 text-center">
                    <h1 className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-tighter font-medium text-black leading-tight">Our Ecosystem</h1>
                    <p className="text-[15px] sm:text-[16px] md:text-[18px] mt-2 md:mt-3 text-[#7A7A7A] max-w-[480px] leading-relaxed">
                        A comprehensive platform designed to support<br className="hidden sm:block" /> your Web3 journey from learning to building.
                    </p>
                </div>

                {/* ── ROW 1: Photo | Social | Nirvana Labs ── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[311.291fr_295.255fr_589.567fr] items-stretch gap-[9px] mb-[9px]"
                >

                    {/* C-1: PHOTO CARD */}
                    <div className="relative overflow-hidden w-full h-[350px] lg:h-[391.472px]" style={{ borderRadius: "11.32px" }}>
                        <Image src="/Rectangle 28.png" fill className="object-cover" alt="Ecosystem" />
                        {/* Centered the logo pill inside the photo card to match the visual reference */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image src="/Frame 102.png" width={217} height={44} className="h-[44px] w-auto object-contain" alt="logo pill" />
                        </div>
                    </div>

                    {/* C-2: SOCIAL CARD */}
                    <div className="flex flex-col overflow-hidden bg-[#F7F8F9] relative w-full min-h-[350px] lg:h-[391.472px]" style={{ borderRadius: "11.32px" }}>
                        <div className="relative z-10 p-6 md:p-8 pb-0">
                            <p className="text-[24px] md:text-[28px] tracking-tight font-semibold leading-[1.1] text-black" style={{ fontFamily: JAKARTA }}>
                                Follow us on all<br />platform.
                            </p>
                            <div className="flex pt-4 md:pt-5 w-full max-w-[199px]">
                                {/* Unified Social Icons */}
                                <Image src="/Frame 113.png" width={199} height={46} className="h-auto w-full object-contain" alt="Social Platforms" />
                            </div>
                        </div>
                        {/* → Using newly uploaded vector graphic spanning exactly from left to right */}
                        <div className="absolute bottom-0 left-0 w-full h-[184px] pointer-events-none">
                            <Image src="/vector.png" fill className="object-cover object-bottom" alt="Wave decoration" />
                        </div>
                    </div>

                    {/* C-3: NIRVANA LABS CARD — no images */}
                    <div className="flex flex-col bg-[#F7F8F9] p-6 w-full min-h-[300px] lg:h-[391.472px]" style={{ borderRadius: "11.32px" }}>
                        <div className="mt-auto">
                            <p className="text-xl font-semibold mb-1 text-black" style={{ fontFamily: JAKARTA }}>Nirvana Labs</p>
                            <p className="text-sm text-black mb-3" style={{ fontFamily: JAKARTA }}>
                                Our innovation hub where cutting-edge Web3 research meets practical application.
                            </p>
                            <a href="#" className="text-sm font-semibold text-black flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: JAKARTA }}>
                                Explore <span>→</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* ── ROW 2: DAO Governance | Blue Brand Card | Community Hub ── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[556.551fr_294.312fr_311.291fr] items-stretch gap-[9px]"
                >

                    {/* C-4: DAO GOVERNANCE CARD — no images */}
                    <div className="flex flex-col bg-[#F7F8F9] p-6 md:p-8 relative overflow-hidden w-full min-h-[350px] lg:h-[391.472px]" style={{ borderRadius: "11.32px" }}>
                        <div className="mt-auto relative z-10">
                            <p className="text-[24px] md:text-[28px] tracking-tight font-semibold mb-2 text-black" style={{ fontFamily: JAKARTA }}>DAO Governance</p>
                            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700 mb-5 max-w-[85%] md:max-w-[75%]" style={{ fontFamily: JAKARTA }}>
                                Community-driven decision making. Shape the future of Web3 education together.
                            </p>
                            <a href="#" className="text-sm font-semibold text-black flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: JAKARTA }}>
                                Explore <span>→</span>
                            </a>
                        </div>
                        {/* Avatar circles using the uploaded frame */}
                        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-[100px] md:w-[139px] flex">
                            <Image src="/Frame 51.png" width={139} height={46} className="h-auto w-full object-contain" alt="Avatars" />
                        </div>
                    </div>

                    {/* C-5: BLUE BRAND CARD */}
                    <div
                        className="flex flex-col items-center justify-center relative overflow-hidden w-full h-[350px] lg:h-[391.472px]"
                        style={{ borderRadius: "11.32px", backgroundColor: "#307CFF" }}
                    >
                        <Image src="/Frame 44.png" fill className="object-cover" alt="Nirvana Academy Brand Card" />
                    </div>

                    {/* C-6: COMMUNITY HUB CARD — no images */}
                    <div className="flex flex-col bg-[#F7F8F9] p-6 md:p-8 w-full min-h-[300px] lg:h-[391.472px]" style={{ borderRadius: "11.32px" }}>
                        <div className="mt-auto">
                            <span className="inline-block bg-[#e2e2e2] text-gray-700 text-xs px-3 py-1 rounded-full mb-4 font-medium" style={{ fontFamily: JAKARTA }}>
                                Coming Soon
                            </span>
                            <p className="text-[24px] md:text-[28px] tracking-tight font-semibold mb-2 text-black" style={{ fontFamily: JAKARTA }}>Community Hub</p>
                            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700" style={{ fontFamily: JAKARTA }}>
                                Connect, collaborate, and grow with fellow Web3 enthusiasts worldwide.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Ecosystem;