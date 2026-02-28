"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const JAKARTA = jakarta.style.fontFamily;

/* ─── Badge — absolutely positioned, does NOT affect grid layout ── */
function NVSBadge({ label }: { label: string }) {
    return (
        <div
            className="absolute z-10 flex items-center justify-center"
            style={{
                top: "-35px",
                left: "-150px",
                width: "233px",
                height: "71px",
                backgroundColor: "#E0EDFF",
                opacity: 0.7,
                transform: "rotate(-1.83deg)",
                padding: "10px",
                gap: "10px",
            }}
        >
            <Diamond />
            <span
                style={{
                    fontFamily: JAKARTA,
                    fontWeight: 600,
                    fontSize: label.length > 5 ? "36px" : "48px",
                    lineHeight: "51px",
                    letterSpacing: "-0.04em",
                    color: "#75ACFF",
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </span>
            <Diamond />
        </div>
    );
}

function Diamond() {
    return (
        <div
            style={{
                width: "26px",
                height: "26px",
                backgroundColor: "#75ACFF",
                borderRadius: "2px",
                transform: "rotate(137.58deg)",
                flexShrink: 0,
            }}
        />
    );
}

/* ─── Alternating grid: pairs of [2fr 1fr] then [1fr 2fr] ─────── */
function ImageGrid({ images, height = 300 }: { images: { src: string; alt: string }[]; height?: number }) {
    // chunk images into pairs
    const pairs = [];
    for (let i = 0; i < images.length; i += 2) {
        pairs.push(images.slice(i, i + 2));
    }

    return (
        <div className="flex flex-col gap-4">
            {pairs.map((pair, pairIdx) => {
                const is2_1 = pairIdx % 2 === 0; // even → 2:1, odd → 1:2
                const cols = is2_1 ? "2fr 1fr" : "1fr 2fr";
                return (
                    <div
                        key={pairIdx}
                        style={{
                            display: "grid",
                            gridTemplateColumns: cols,
                            gap: "16px",
                        }}
                    >
                        {pair.map((img, i) => (
                            <div key={i} className="relative" style={{ height }}>
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

/* ─── Section block (label + bullet list) ────────────────────── */
function SectionBlock({ label, items }: { label: string; items: string[] }) {
    return (
        <div>
            <p className="font-medium mb-2 text-[#030303]" style={{ fontSize: "18px", lineHeight: "100%" }}>
                {label}
            </p>
            <ul
                className="list-disc pl-[18px] flex flex-col gap-1.5 marker:text-[#6F6F6F]"
                style={{ fontWeight: 500, fontSize: "16px", lineHeight: "160%", letterSpacing: "-0.02em", color: "#6F6F6F" }}
            >
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    );
}

export default function Events() {
    const [activeTab, setActiveTab] = useState("nvs1-nvs2");

    return (
        <section className="bg-white w-full py-16 md:py-24" style={{ fontFamily: JAKARTA }}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12 md:gap-24">

                {/* ── Sidebar ── */}
                <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col">
                    <h2 className="text-[20px] font-medium text-black mb-4 px-4 tracking-tight">Events</h2>
                    <nav className="flex flex-col gap-2">
                        {[
                            { key: "nvs1-nvs2", label: "NVS1 & NVS2" },
                            { key: "ama", label: "AMA sessions" },
                            { key: "masterclass", label: "Exclusive virtual master class" },
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`text-left px-4 py-2.5 text-[14px] md:text-[15px] transition-colors border-l-2 ${
                                    activeTab === key
                                        ? "border-[#307CFF] bg-[#F2F6FF] text-black font-medium"
                                        : "border-transparent text-[#111] hover:bg-gray-50 bg-transparent"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ── Main Content ── */}
                <div className="flex-1 max-w-[850px]">

                    {/* ══════════════ NVS1 & NVS2 TAB ══════════════ */}
                    {activeTab === "nvs1-nvs2" && (
                        <div className="flex flex-col">

                            {/* Page title */}
                            <h1
                                className="text-[#030303] mb-3"
                                style={{ fontWeight: 600, fontSize: "48px", lineHeight: "51px", letterSpacing: "-0.04em", maxWidth: "620px" }}
                            >
                                NVS1 & NVS2: Nirvana Village Square Events
                            </h1>
                            <p
                                className="mb-8 max-w-[800px]"
                                style={{ fontWeight: 500, fontSize: "16px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#6F6F6F" }}
                            >
                                These were two landmark offline masterclass & community meetups hosted by Nirvana Academy in 2025. They represent the organization's shift from purely virtual education to real-world, high-energy community building.
                            </p>

                            {/* Hero image — Rectangle 35 */}
                            <div className="relative w-full mb-12" style={{ height: "500px" }}>
                                <Image src="/Rectangle 35.png" alt="Nirvana Village Square Event" fill className="object-cover" />
                            </div>

                            {/* ── NVS1 text ── */}
                            <h2 className="mb-4" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#030303" }}>
                                NVS1 (First Edition)
                            </h2>
                            <div className="flex flex-col gap-6 md:gap-8 mb-12">
                                <SectionBlock
                                    label="What it was:"
                                    items={[
                                        "Intimate offline gathering for 50 selected alumni from Nirvana cohorts",
                                        "Deep networking + DeFi masterclass",
                                        'Focused on "real talks" and personal connections ve birthed good products in web3',
                                    ]}
                                />
                                <SectionBlock
                                    label="Key characteristics:"
                                    items={[
                                        "Exclusive (50 handpicked participants)",
                                        "High-touch, intimate vibe",
                                        "Emphasis on alumni who had already proven commitment",
                                        "Blend of education + relationship building",
                                    ]}
                                />
                                <SectionBlock
                                    label="Impact:"
                                    items={[
                                        "Created \"moments we'll never forget\" (Testimonial)",
                                        "Set the standard for Nirvana's offline events",
                                        "Proved demand for in-person experiences",
                                        "A number of collaborations that have birthed good products in web3",
                                    ]}
                                />
                            </div>

                            {/* ── NVS1 image grid — Rectangle 36–39 ── */}
                            <div className="relative mb-16 mt-8">
                                <NVSBadge label="NVS 1" />
                                <ImageGrid
                                    height={300}
                                    images={[
                                        { src: "/Rectangle 36.png", alt: "NVS1 Photo 1" },
                                        { src: "/Rectangle 37.png", alt: "NVS1 Photo 2" },
                                        { src: "/Rectangle 38.png", alt: "NVS1 Photo 3" },
                                        { src: "/Rectangle 39.png", alt: "NVS1 Photo 4" },
                                    ]}
                                />
                            </div>

                            {/* ── NVS2 text ── */}
                            <h2 className="mt-8 mb-4" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#030303" }}>
                                NVS2 (Second Edition)
                            </h2>
                            <div className="flex flex-col gap-6 md:gap-8 mb-12">
                                <SectionBlock
                                    label="What it was:"
                                    items={[
                                        "Expanded to 60+ builders",
                                        "4+ hours of masterclass-level discussions",
                                        'Featured chaotic Q&A and "pure energy"',
                                        "Vox pop chaos (unscripted, raw interactions)",
                                    ]}
                                />
                                <SectionBlock
                                    label="Key characteristics:"
                                    items={[
                                        "Larger scale but still intimate (60 participants)",
                                        "Extended duration (4+ hours)",
                                        "Unfiltered, high-energy format",
                                        "More interactive and spontaneous than NVS1",
                                    ]}
                                />
                                <SectionBlock
                                    label="Impact:"
                                    items={[
                                        "Demonstrated Nirvana could scale the format while maintaining quality",
                                        '"Chaos" became a signature element',
                                        "Solidified offline events as core to the brand",
                                    ]}
                                />
                            </div>

                            {/* ── NVS2 image grid — Rectangle 40–43 ── */}
                            <div className="relative mb-16 mt-8">
                                <NVSBadge label="NVS 2" />
                                <ImageGrid
                                    height={300}
                                    images={[
                                        { src: "/Rectangle 40.png", alt: "NVS2 Photo 1" },
                                        { src: "/Rectangle 41.png", alt: "NVS2 Photo 2" },
                                        { src: "/Rectangle 42.png", alt: "NVS2 Photo 3" },
                                        { src: "/Rectangle 43.png", alt: "NVS2 Photo 4" },
                                    ]}
                                />
                            </div>

                            {/* ── What Made Them Special ── */}
                            <h2 className="mt-8 mb-4" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#030303" }}>
                                What Made Them Special
                            </h2>
                            <ol
                                className="flex flex-col gap-2 mb-16 pl-5 list-decimal"
                                style={{ fontWeight: 500, fontSize: "16px", lineHeight: "160%", letterSpacing: "-0.02em", color: "#6F6F6F" }}
                            >
                                <li>Hybrid Energy: Masterclass education + community bonding</li>
                                <li>Intimate Scale: Not massive conferences, but focused gatherings</li>
                                <li>Real Talk: No performative networking, genuine Web3 conversations</li>
                                <li>Alumni Focus: Rewarded committed community members</li>
                                <li>Proof of Concept: Led to larger events like OG Labs (250+) and Blockfest (4K+)</li>
                            </ol>

                            {/* ── Strategic Importance ── */}
                            <h2 className="mb-4" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "100%", letterSpacing: "-0.02em", color: "#030303" }}>
                                Strategic Importance
                            </h2>
                            <div
                                className="flex flex-col gap-3 mb-6"
                                style={{ fontWeight: 500, fontSize: "16px", lineHeight: "160%", letterSpacing: "-0.02em", color: "#6F6F6F" }}
                            >
                                <p>These events were pivotal in Nirvana's evolution:</p>
                                <p>Before NVS: Purely online academy, WhatsApp community</p>
                                <p>After NVS: Hybrid organization with offline muscle, proving they could execute at scale</p>
                                <p>They established:</p>
                                <ul className="list-disc pl-[18px] flex flex-col gap-1.5 marker:text-[#6F6F6F]">
                                    <li>Nirvana's ability to host high-quality physical events</li>
                                    <li>Demand for in-person Web3 experiences in Africa</li>
                                    <li>Alumni loyalty and community strength</li>
                                    <li>Template for future hybrid events (physical + virtual)</li>
                                </ul>
                            </div>
                            <p
                                className="mb-16"
                                style={{ fontWeight: 500, fontSize: "16px", lineHeight: "160%", letterSpacing: "-0.02em", color: "#6F6F6F" }}
                            >
                                <span style={{ fontWeight: 700, color: "#030303" }}>2026 Relevance:</span> These events directly informed the Lagos office strategy and hybrid cohort model planned for Q3 2026. NVS wasn't just events. It was Nirvana proving they could move from screens to real-world impact.
                            </p>

                            {/* ── NVS 1 & 2 combined image grid — Rectangle 44–51 ── */}
                            <div className="relative mb-16 mt-8">
                                <NVSBadge label="NVS 1 & 2" />
                                <ImageGrid
                                    height={280}
                                    images={[
                                        { src: "/Rectangle 44.png", alt: "NVS1&2 Photo 1" },
                                        { src: "/Rectangle 45.png", alt: "NVS1&2 Photo 2" },
                                        { src: "/Rectangle 46.png", alt: "NVS1&2 Photo 3" },
                                        { src: "/Rectangle 47.png", alt: "NVS1&2 Photo 4" },
                                        { src: "/Rectangle 48.png", alt: "NVS1&2 Photo 5" },
                                        { src: "/Rectangle 49.png", alt: "NVS1&2 Photo 6" },
                                        { src: "/Rectangle 50.png", alt: "NVS1&2 Photo 7" },
                                        { src: "/Rectangle 51.png", alt: "NVS1&2 Photo 8" },
                                    ]}
                                />
                            </div>

                        </div>
                    )}

                    {/* ══════════════ AMA TAB ══════════════ */}
                    {activeTab === "ama" && (
                        <div className="flex flex-col">
                            <h1 className="text-[48px] font-semibold leading-[51px] text-black mb-4" style={{ letterSpacing: "-0.04em" }}>
                                AMA Sessions
                            </h1>
                            <p className="text-[16px] text-[#7A7A7A] leading-relaxed mb-8">
                                Content for AMA sessions will be added here.
                            </p>
                        </div>
                    )}

                    {/* ══════════════ MASTERCLASS TAB ══════════════ */}
                    {activeTab === "masterclass" && (
                        <div className="flex flex-col">
                            <h1 className="text-[48px] font-semibold leading-[51px] text-black mb-4" style={{ letterSpacing: "-0.04em" }}>
                                Exclusive Virtual Master Class
                            </h1>
                            <p className="text-[16px] text-[#7A7A7A] leading-relaxed mb-8">
                                Content for Exclusive virtual master class will be added here.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}