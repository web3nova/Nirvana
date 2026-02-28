"use client";

import React, { useState, useEffect } from "react";

const PROFILES = [
    { img: "/image 24.jpg", quote: "From graduates who've transformed their careers", name: "Learner 1" },
    { img: "/image 25.jpg", quote: "The curriculum is perfect for beginners and experts alike.", name: "Learner 2" },
    { img: "/image 26.png", quote: "I landed my dream job within weeks of finishing.", name: "Learner 3" },
    { img: "/image 27.jpg", quote: "Best educational investment I have ever made.", name: "Learner 4" },
    { img: "/image 28.jpg", quote: "Interactive, engaging, and incredibly effective!", name: "Learner 5" },
];

const desktopPositions = [
    { left: "2%",  top: "18.5%", width: "35%", zIndex: 20 }, // 0: Large Left (main)
    { left: "36%", top: "6%",    width: "13%", zIndex: 10 }, // 1: Woman Top Center
    { left: "50%", top: "16%",   width: "27%", zIndex: 0  }, // 2: Man Center Right
    { left: "78%", top: "14%",   width: "15%", zIndex: 10 }, // 3: Anime Top Right
    { left: "66%", top: "48.8%", width: "24%", zIndex: 10 }, // 4: Woman Bottom Right
];

const mobilePositions = [
    { left: "25%", top: "5%",  width: "50%", zIndex: 20 },
    { left: "68%", top: "40%", width: "26%", zIndex: 10 },
    { left: "50%", top: "65%", width: "30%", zIndex: 0  },
    { left: "15%", top: "62%", width: "24%", zIndex: 10 },
    { left: "5%",  top: "30%", width: "28%", zIndex: 10 },
];

/* Blue glow ring applied to whichever image is in the "main" slot (posIndex === 0) */
const MAIN_SHADOW =
    "0 0 0 4px #ffffff, 0 0 0 8px #2B7FFF, 0 0 32px 10px rgba(43,127,255,0.40)";

export default function Review() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % 5);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden font-jakarta">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-[56px] leading-[1.1] font-normal text-gray-500 tracking-tight">
                        Read reviews,<br />
                        <span className="text-black font-medium">learning made easy</span>
                    </h2>
                    <p className="mt-6 text-gray-500 text-sm md:text-base max-w-[280px] md:max-w-sm mx-auto leading-relaxed flex">
                        See how our courses have empowered learners to reach new milestones.
                    </p>
                </div>

                {/* ── Desktop / Tablet ── */}
                <div className="hidden md:grid grid-cols-12 grid-rows-6 relative w-full max-w-5xl mx-auto aspect-[1.8] mt-16 md:mt-24">
                    <div className="absolute inset-0 pointer-events-none z-10">
                        {PROFILES.map((profile, idx) => {
                            const posIndex = (idx - activeIndex + 5) % 5;
                            const pos = desktopPositions[posIndex];
                            const isMain = posIndex === 0;
                            return (
                                <div
                                    key={idx}
                                    className="absolute rounded-full aspect-square overflow-hidden pointer-events-auto"
                                    style={{
                                        left: pos.left,
                                        top: pos.top,
                                        width: pos.width,
                                        zIndex: pos.zIndex,
                                        transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                        boxShadow: isMain ? MAIN_SHADOW : "0 1px 4px rgba(0,0,0,0.12)",
                                    }}
                                >
                                    <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Quote block */}
                    <div className="col-start-5 col-end-9 row-start-4 row-end-6 flex flex-col items-start z-30 pr-4 mt-8 pointer-events-none">
                        <div className="text-6xl lg:text-[80px] font-serif font-black text-black leading-none mb-2 z-10 pointer-events-auto">"</div>
                        <div className="relative w-full h-[150px] z-10 pointer-events-auto">
                            {PROFILES.map((profile, idx) => (
                                <p
                                    key={idx}
                                    className="absolute top-0 left-0 text-xs lg:text-[15px] font-medium text-black leading-tight max-w-[150px]"
                                    style={{
                                        opacity: activeIndex === idx ? 1 : 0,
                                        transition: "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                        pointerEvents: activeIndex === idx ? "auto" : "none",
                                    }}
                                >
                                    {profile.quote}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Mobile ── */}
                <div className="md:hidden flex flex-col items-center mt-16 pb-10">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {PROFILES.map((profile, idx) => {
                            const posIndex = (idx - activeIndex + 5) % 5;
                            const pos = mobilePositions[posIndex];
                            const isMain = posIndex === 0;
                            return (
                                <div
                                    key={idx}
                                    className="absolute rounded-full aspect-square overflow-hidden"
                                    style={{
                                        left: pos.left,
                                        top: pos.top,
                                        width: pos.width,
                                        zIndex: pos.zIndex,
                                        transition: "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                        boxShadow: isMain ? MAIN_SHADOW : "0 1px 4px rgba(0,0,0,0.12)",
                                    }}
                                >
                                    <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center px-6 mt-8 flex flex-col items-center w-full z-20">
                        <div className="text-6xl font-serif font-black text-black leading-none mb-2">"</div>
                        <div className="relative w-full h-[100px] flex justify-center mt-2">
                            {PROFILES.map((profile, idx) => (
                                <p
                                    key={idx}
                                    className="absolute top-0 text-[15px] font-medium text-black leading-tight max-w-[250px]"
                                    style={{
                                        opacity: activeIndex === idx ? 1 : 0,
                                        transition: "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                        pointerEvents: activeIndex === idx ? "auto" : "none",
                                    }}
                                >
                                    {profile.quote}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}