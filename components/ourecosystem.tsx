"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const JAKARTA = jakarta.style.fontFamily;

const ANIM_STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-22px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes cardFlip {
    0%   { opacity: 0; transform: perspective(900px) rotateX(20deg) translateY(40px); }
    100% { opacity: 1; transform: perspective(900px) rotateX(0deg) translateY(0); }
  }
  @keyframes swoopLeft {
    0%   { opacity: 0; transform: translateX(70px) rotate(4deg); }
    100% { opacity: 1; transform: translateX(0) rotate(0deg); }
  }
  @keyframes swoopRight {
    0%   { opacity: 0; transform: translateX(-70px) rotate(-4deg); }
    100% { opacity: 1; transform: translateX(0) rotate(0deg); }
  }
  @keyframes popBounce {
    0%   { opacity: 0; transform: scale(0.72); }
    60%  { opacity: 1; transform: scale(1.05); }
    80%  { opacity: 1; transform: scale(0.97); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes revealUp {
    0%   { opacity: 0; transform: translateY(55px) skewY(4deg); }
    100% { opacity: 1; transform: translateY(0) skewY(0deg); }
  }
  @keyframes charDrop {
    0%   { opacity: 0; transform: translateY(-32px) rotate(-8deg); }
    100% { opacity: 1; transform: translateY(0) rotate(0deg); }
  }
  .char-anim { display: inline-block; opacity: 0; }
  .char-anim.visible { animation: charDrop 0.48s cubic-bezier(0.22, 1, 0.36, 1) both; }

  .anim-item { opacity: 0; will-change: transform, opacity; }
  .anim-item.visible {
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-duration: 0.75s;
    opacity: 1;
  }
  .anim-fade-up.visible { animation-name: fadeUp; }
  .anim-scale.visible   { animation-name: scaleIn; }
  .anim-slide-r.visible { animation-name: slideRight; }

  @media (max-width: 767px) {
    .anim-item.visible { animation-duration: 0.72s; opacity: 1; }
    .mob-flip.visible    { animation-name: cardFlip;   animation-duration: 0.82s; animation-fill-mode: both; }
    .mob-swoop-l.visible { animation-name: swoopLeft;  animation-duration: 0.65s; animation-fill-mode: both; }
    .mob-swoop-r.visible { animation-name: swoopRight; animation-duration: 0.65s; animation-fill-mode: both; }
    .mob-pop.visible     { animation-name: popBounce;  animation-duration: 0.75s; animation-timing-function: ease-out; animation-fill-mode: both; }
    .mob-reveal.visible  { animation-name: revealUp;   animation-duration: 0.72s; animation-fill-mode: both; }

    @keyframes lineGrow {
      from { transform: scaleX(0); transform-origin: left; }
      to   { transform: scaleX(1); transform-origin: left; }
    }
    .card-accent {
      position: absolute; bottom: 0; left: 0; right: 0;
      height: 3px; transform: scaleX(0); transform-origin: left;
      border-radius: 0 0 11px 11px;
    }
    .anim-item.visible .card-accent {
      animation: lineGrow 0.55s 0.48s cubic-bezier(0.22,1,0.36,1) both;
    }
  }

  @keyframes orbFloat1 {
    0%, 100% { transform: translate(0,0) scale(1); }
    33%       { transform: translate(14px,-20px) scale(1.06); }
    66%       { transform: translate(-9px,12px) scale(0.96); }
  }
  @keyframes orbFloat2 {
    0%, 100% { transform: translate(0,0) scale(1); }
    40%       { transform: translate(-16px,14px) scale(1.09); }
    70%       { transform: translate(11px,-9px) scale(0.94); }
  }
  .orb1 { animation: orbFloat1  6s ease-in-out infinite; }
  .orb2 { animation: orbFloat2  8s ease-in-out infinite; }
  .orb3 { animation: orbFloat1 10s 2s ease-in-out infinite; }

  @media (min-width: 768px) {
    .mobile-orbs { display: none; }
    .eco-card {
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.35s cubic-bezier(0.22,1,0.36,1);
    }
    .eco-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.09); }
  }

  /* ── Explore link — default black, highlights when CARD is hovered ── */
  .explore-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: transparent;
  }
  .explore-link span {
    display: inline-block;
    transition: transform 0.25s ease;
  }
  /* Trigger on card hover, not link hover */
  .eco-card:hover .explore-link {
    color: #2B7FFF;
    text-decoration-color: #2B7FFF;
  }
  .eco-card:hover .explore-link span { transform: translateX(5px); }

  /* ── Blue card shimmer ── */
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  .blue-card::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.13) 50%, transparent 60%);
    background-size: 800px 100%;
    animation: shimmer 3.5s infinite linear;
    pointer-events: none; border-radius: inherit; z-index: 2;
  }

  /* ── Pulsing dot ── */
  @keyframes pulse-dot {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.4; transform: scale(0.65); }
  }
  .pulse-dot {
    display: inline-block; width: 6px; height: 6px;
    border-radius: 50%; background: #888;
    margin-right: 6px; vertical-align: middle;
    animation: pulse-dot 1.6s ease-in-out infinite;
  }
`;

interface AnimatedTitleProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

function AnimatedTitle({ text, className, style }: AnimatedTitleProps) {
    const ref = useRef<HTMLHeadingElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);

    useEffect(() => {
        if (!isMobile || !ref.current) return;
        const chars = ref.current.querySelectorAll<HTMLElement>(".char-anim");
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    chars.forEach((c, i) => { setTimeout(() => c.classList.add("visible"), i * 30); });
                    obs.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [isMobile]);

    if (!isMobile) {
        return (
            <h1 className={`anim-item anim-fade-up ${className ?? ""}`} style={style}>{text}</h1>
        );
    }

    return (
        <h1 ref={ref} className={className} style={{ ...style, opacity: 1 }}>
            {text.split("").map((ch, i) => (
                <span key={i} className="char-anim" style={{ animationDelay: `${i * 30}ms` }}>
                    {ch === " " ? "\u00A0" : ch}
                </span>
            ))}
        </h1>
    );
}

function useReveal() {
    const ref = useRef<HTMLElement | null>(null);
    useEffect(() => {
        if (!ref.current) return;
        const items = ref.current.querySelectorAll(".anim-item");
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
            },
            { threshold: 0.1 }
        );
        items.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
    return ref;
}

const cardTitleStyle: React.CSSProperties = {
    fontFamily   : JAKARTA,
    fontWeight   : 500,
    fontSize     : "30px",
    lineHeight   : "47.81px",
    letterSpacing: "-1.89px",
};

const Ecosystem = () => {
    const ref = useReveal();

    return (
        <>
            <style>{ANIM_STYLES}</style>
            <section className="bg-white w-full mb-[70px]" ref={ref}>
                <div className="px-6 md:px-16 py-12 max-w-[1440px] mx-auto w-full">

                    {/* ── HEADER ── */}
                    <div className="flex flex-col items-center justify-center mb-10 md:mb-14 px-4 text-center relative">
                        <div className="mobile-orbs pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="orb1 absolute -top-4 left-2 w-28 h-28 rounded-full bg-blue-100 opacity-60 blur-2xl" />
                            <div className="orb2 absolute bottom-0 right-2 w-36 h-36 rounded-full bg-indigo-100 opacity-40 blur-3xl" />
                            <div className="orb3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-sky-100 opacity-30 blur-2xl" />
                        </div>

                        {/* "Our Ecosystem" — exact spec */}
                        <AnimatedTitle
                            text="Our Ecosystem"
                            className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] relative z-10"
                            style={{
                                fontFamily   : JAKARTA,
                                fontWeight   : 500,
                                fontSize     : "48px",
                                lineHeight   : "47.2px",
                                letterSpacing: "-0.05em",
                                textAlign    : "center",
                                animationDelay: "0ms",
                                margin       : 0,
                                color        : "#030303",
                            }}
                        />

                        {/* Subtitle — exact spec */}
                        <p
                            className="anim-item anim-fade-up"
                            style={{
                                fontFamily   : JAKARTA,
                                fontWeight   : 500,
                                fontSize     : "18px",
                                lineHeight   : "100%",
                                letterSpacing: "-0.02em", /* -2% */
                                textAlign    : "center",
                                color        : "#7A7A7A",
                                marginTop    : "12px",
                                maxWidth     : "480px",
                                animationDelay: "140ms",
                            }}
                        >
                            A comprehensive platform designed to support<br className="hidden sm:block" /> your Web3 journey from learning to building.
                        </p>
                    </div>

                    {/* ── ROW 1 ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[311.291fr_295.255fr_589.567fr] items-stretch gap-[9px] mb-[9px]">

                        {/* C-1: PHOTO */}
                        <div
                            className="anim-item anim-scale mob-pop eco-card relative overflow-hidden w-full h-[350px] lg:h-[391.472px]"
                            style={{ borderRadius: "11.32px", animationDelay: "60ms" }}
                        >
                            <Image src="/Rectangle 28.png" fill className="object-cover" alt="Ecosystem" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src="/Frame 102.png" width={217} height={44} className="h-[44px] w-auto object-contain" alt="logo pill" />
                            </div>
                        </div>

                        {/* C-2: SOCIAL */}
                        <div
                            className="anim-item anim-fade-up mob-swoop-l eco-card flex flex-col overflow-hidden bg-[#F7F8F9] relative w-full min-h-[350px] lg:h-[391.472px]"
                            style={{ borderRadius: "11.32px", animationDelay: "150ms" }}
                        >
                            <div className="relative z-10 p-6 md:p-8 pb-0">
                                <p style={{ ...cardTitleStyle, color: "#000" }}>
                                    Follow us on all<br />platform.
                                </p>
                                <div className="flex pt-4 md:pt-5 w-full max-w-[199px]">
                                    <Image src="/Frame 113.png" width={199} height={46} className="h-auto w-full object-contain" alt="Social Platforms" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[184px] pointer-events-none">
                                <Image src="/Vector.png" fill className="object-cover object-bottom" alt="Wave decoration" />
                            </div>
                        </div>

                        {/* C-3: NIRVANA LABS */}
                        <div
                            className="anim-item anim-fade-up mob-reveal eco-card flex flex-col bg-[#F7F8F9] p-6 w-full min-h-[300px] lg:h-[391.472px]"
                            style={{ borderRadius: "11.32px", animationDelay: "240ms" }}
                        >
                            <div className="mt-auto">
                                <p style={{ ...cardTitleStyle, color: "#000", marginBottom: "8px" }}>Nirvana Labs</p>
                                <p style={{ fontFamily: JAKARTA, fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "rgba(3,3,3,0.6)", marginBottom: "20px", maxWidth: "75%" }}>
                                    Our innovation hub where cutting-edge Web3 research meets practical application.
                                </p>
                                <a href="#" className="explore-link" style={{ fontFamily: JAKARTA }}>
                                    Explore <span>→</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* ── ROW 2 ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[556.551fr_294.312fr_311.291fr] items-stretch gap-[9px]">

                        {/* C-4: DAO GOVERNANCE */}
                        <div
                            className="anim-item anim-slide-r mob-swoop-r eco-card flex flex-col bg-[#F7F8F9] p-6 md:p-8 relative overflow-hidden w-full min-h-[350px] lg:h-[391.472px]"
                            style={{ borderRadius: "11.32px", animationDelay: "80ms" }}
                        >
                            <div className="mt-auto relative z-10">
                                <p style={{ ...cardTitleStyle, color: "#000", marginBottom: "8px" }}>DAO Governance</p>
                                <p style={{ fontFamily: JAKARTA, fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "rgba(3,3,3,0.6)", marginBottom: "20px", maxWidth: "75%" }}>
                                    Community-driven decision making. Shape the future of Web3 education together.
                                </p>
                                <a href="#" className="explore-link" style={{ fontFamily: JAKARTA }}>
                                    Explore <span>→</span>
                                </a>
                            </div>
                            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-[100px] md:w-[139px] flex">
                                <Image src="/Frame 51 (1).png" width={139} height={46} className="h-auto w-full object-contain" alt="Avatars" />
                            </div>
                        </div>

                        {/* C-5: BLUE BRAND */}
                        <div
                            className="anim-item anim-scale mob-flip blue-card eco-card flex flex-col items-center justify-center relative overflow-hidden w-full h-[350px] lg:h-[391.472px]"
                            style={{ borderRadius: "11.32px", backgroundColor: "#307CFF", animationDelay: "180ms" }}
                        >
                            <Image src="/Frame 44.png" fill className="object-cover" alt="Nirvana Academy Brand Card" />
                        </div>

                        {/* C-6: COMMUNITY HUB */}
                        <div
                            className="anim-item anim-fade-up mob-pop eco-card flex flex-col bg-[#F7F8F9] p-6 md:p-8 w-full min-h-[300px] lg:h-[391.472px]"
                            style={{ borderRadius: "11.32px", animationDelay: "280ms" }}
                        >
                            <div className="mt-auto">
                                <span
                                    className="inline-flex items-center bg-[rgba(43,127,255,0.2)] border border-[rgba(43,127,255,0.5)] text-gray-700 text-xs px-3 py-1 rounded-full mb-4 font-medium"
                                    style={{ fontFamily: JAKARTA }}
                                >
                                    <span className="pulse-dot" />
                                    Coming Soon
                                </span>
                                <p style={{ ...cardTitleStyle, color: "#000", marginBottom: "8px" }}>Community Hub</p>
                                <p style={{ fontFamily: JAKARTA, fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "rgba(3,3,3,0.6)" }}>
                                    Connect, collaborate, and grow with fellow Web3 enthusiasts worldwide.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Ecosystem;