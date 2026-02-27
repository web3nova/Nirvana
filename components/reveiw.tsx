import Image from "next/image";

export default function Reveiw() {
    return (
        <section className="py-24 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 z-20 relative">
                    <h2 className="text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.04em] mb-4">
                        <span className="text-[#8C939A] font-medium">Read reviews,</span><br />
                        <span className="text-black font-semibold">learning made easy</span>
                    </h2>
                    <p className="text-[#8C939A] text-[15px] sm:text-[17px] font-medium max-w-[400px] mx-auto leading-snug">
                        See how our courses have empowered learners to reach new milestones.
                    </p>
                </div>

                {/* Collage & Quote Container */}
                <div className="relative min-h-[500px] md:min-h-[600px] w-full max-w-[1000px] mx-auto flex items-center justify-center pt-8 md:pt-0">

                    {/* Central Quote Block */}
                    <div className="relative z-20 bg-white/80 backdrop-blur-sm p-6 rounded-2xl max-w-[280px] md:translate-x-[-40px] md:translate-y-[120px]">
                        <span className="text-[60px] md:text-[80px] leading-none text-black font-serif absolute -top-4 md:-top-8 left-2">“</span>
                        <p className="text-black text-[15px] md:text-[17px] font-medium leading-snug pt-6 md:pt-10">
                            From graduates<br />who've transformed<br />their careers
                        </p>
                    </div>

                    {/* Image 1: Main Ape Avatar (Large, Left) */}
                    <div className="absolute left-[5%] md:left-[0%] top-[20%] md:top-[10%] w-[180px] sm:w-[220px] md:w-[360px] aspect-square rounded-full overflow-hidden z-10">
                        <Image
                            src="image 24.jpg" // Using the ape avatar
                            alt="Graduate review"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover bg-[#F2EFE6]"
                        />
                    </div>

                    {/* Image 2: Woman in Green (Medium-Small, Top Center-Left) */}
                    <div className="absolute left-[35%] md:left-[32%] -top-[10%] md:top-[5%] w-[100px] sm:w-[120px] md:w-[150px] aspect-square rounded-full overflow-hidden z-10">
                        <Image
                            src="image 25.jpg" // Substitute green lady
                            alt="Graduate review"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover bg-[#93A575]"
                        />
                    </div>

                    {/* Image 3: Guy in Black Shirt (Medium, Center) */}
                    <div className="absolute left-[50%] md:left-[45%] top-[5%] md:top-[12%] w-[140px] sm:w-[180px] md:w-[260px] aspect-square rounded-full overflow-hidden border-[8px] border-white z-[15] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                        <Image
                            src="/image 26.jpg" // Substitute desk guy
                            alt="Graduate review"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover bg-[#EAE7FA]"
                        />
                    </div>

                    {/* Image 4: Avatar with Glasses (Small, Top Right) */}
                    <div className="absolute right-[5%] md:right-[10%] -top-[5%] md:top-[2%] w-[90px] sm:w-[110px] md:w-[140px] aspect-square rounded-full overflow-hidden z-10">
                        <Image
                            src="/image 27.jpg" // Substitute pixel glasses guy
                            alt="Graduate review"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover bg-[#F0EBE1]"
                        />
                    </div>

                    {/* Image 5: Woman Touching Face (Medium-Large, Bottom Right) */}
                    <div className="absolute right-[10%] md:right-[8%] top-[40%] md:top-[40%] w-[160px] sm:w-[190px] md:w-[220px] aspect-square rounded-full overflow-hidden border-[8px] border-white z-10 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                        <Image
                            src="/image 28.jpg" // Substitute brown background lady
                            alt="Graduate review"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover bg-[#D5BFA7]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
