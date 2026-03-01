"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const JAKARTA = jakarta.style.fontFamily;

/* ─── Badge ───────────────────────────────────────────────────── */
function NVSBadge({ label }: { label: string }) {
    // Badge sits to the left of the grid.
    // On mobile it tucks in close, on tablet it steps out, on desktop fully extends.
    return (
        <>
            {/* Mobile: sits just above/left of grid, small scale */}
            <div
                className="absolute z-10 flex items-center justify-center sm:hidden"
                style={{
                    top: "-30px",
                    left: "-8px",
                    width: "150px",
                    height: "46px",
                    backgroundColor: "#E0EDFF",
                    opacity: 0.7,
                    transform: "rotate(-1.83deg)",
                    padding: "6px 8px",
                    gap: "6px",
                }}
            >
                <Diamond size={16} />
                <span
                    style={{
                        fontFamily: JAKARTA,
                        fontWeight: 600,
                        fontSize: label.length > 5 ? "22px" : "28px",
                        lineHeight: "1",
                        letterSpacing: "-0.04em",
                        color: "#75ACFF",
                        whiteSpace: "nowrap",
                    }}
                >
                    {label}
                </span>
                <Diamond size={16} />
            </div>

            {/* Tablet: medium offset */}
            <div
                className="absolute z-10 items-center justify-center hidden sm:flex md:hidden"
                style={{
                    top: "-35px",
                    left: "-90px",
                    width: "190px",
                    height: "58px",
                    backgroundColor: "#E0EDFF",
                    opacity: 0.7,
                    transform: "rotate(-1.83deg)",
                    padding: "8px 10px",
                    gap: "8px",
                }}
            >
                <Diamond size={20} />
                <span
                    style={{
                        fontFamily: JAKARTA,
                        fontWeight: 600,
                        fontSize: label.length > 5 ? "28px" : "38px",
                        lineHeight: "1",
                        letterSpacing: "-0.04em",
                        color: "#75ACFF",
                        whiteSpace: "nowrap",
                    }}
                >
                    {label}
                </span>
                <Diamond size={20} />
            </div>

            {/* Desktop: full size, fully extended left */}
            <div
                className="absolute z-10 items-center justify-center hidden md:flex"
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
                <Diamond size={26} />
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
                <Diamond size={26} />
            </div>
        </>
    );
}

function Diamond({ size = 26 }: { size?: number }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                backgroundColor: "#75ACFF",
                borderRadius: "2px",
                transform: "rotate(137.58deg)",
                flexShrink: 0,
            }}
        />
    );
}

/* ─── Image grid
     Mobile  (<640px)  → single column, stacked
     Tablet+ (≥640px)  → alternating 2:1 / 1:2
─────────────────────────────────────────────────────────────── */
function ImageGrid({
    images,
    desktopHeight = 300,
    tabletHeight = 220,
    mobileHeight = 200,
}: {
    images: { src: string; alt: string }[];
    desktopHeight?: number;
    tabletHeight?: number;
    mobileHeight?: number;
}) {
    const pairs: { src: string; alt: string }[][] = [];
    for (let i = 0; i < images.length; i += 2) {
        pairs.push(images.slice(i, i + 2));
    }

    return (
        <div className="flex flex-col gap-3 sm:gap-4">
            {pairs.map((pair, pairIdx) => {
                const cols = pairIdx % 2 === 0 ? "2fr 1fr" : "1fr 2fr";
                return (
                    <div key={pairIdx}>
                        {/* Mobile: each image full width stacked */}
                        <div className="flex sm:hidden flex-col gap-3">
                            {pair.map((img, i) => (
                                <div key={i} className="relative w-full" style={{ height: mobileHeight }}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Tablet: alternating 2:1/1:2 at tabletHeight */}
                        <div
                            className="hidden sm:grid md:hidden gap-3"
                            style={{ gridTemplateColumns: cols }}
                        >
                            {pair.map((img, i) => (
                                <div key={i} className="relative w-full" style={{ height: tabletHeight }}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        sizes="50vw"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Desktop: alternating 2:1/1:2 at desktopHeight */}
                        <div
                            className="hidden md:grid gap-4"
                            style={{ gridTemplateColumns: cols }}
                        >
                            {pair.map((img, i) => (
                                <div key={i} className="relative w-full" style={{ height: desktopHeight }}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1440px) 50vw, 425px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* ─── Section block ──────────────────────────────────────────── */
function SectionBlock({ label, items }: { label: string; items: string[] }) {
    return (
        <div>
            <p className="font-semibold mb-2 text-[#030303] text-[16px] sm:text-[17px] md:text-[18px] leading-tight">
                {label}
            </p>
            <ul className="list-disc pl-[18px] flex flex-col gap-1 sm:gap-1.5 marker:text-[#6F6F6F] text-[14px] sm:text-[15px] md:text-[16px] leading-[160%] text-[#6F6F6F]"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

/* ─── Animated sidebar nav item ─────────────────────────────── */
function NavItem({
    label,
    active,
    onClick,
}: {
    label: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="group relative text-left px-4 py-2.5 w-full overflow-hidden text-[14px] md:text-[15px]"
            style={{
                transition: "color 0.25s ease",
                color: active ? "#030303" : "#555",
                fontWeight: active ? 600 : 400,
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
            }}
        >
            {/* Animated left border */}
            <span
                aria-hidden
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    backgroundColor: "#307CFF",
                    transform: active ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "bottom",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: "0 2px 2px 0",
                }}
            />
            {/* Background fill */}
            <span
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#F2F6FF",
                    opacity: active ? 1 : 0,
                    transition: "opacity 0.25s ease",
                    pointerEvents: "none",
                }}
            />
            {/* Hover bg */}
            {!active && (
                <span
                    aria-hidden
                    className="group-hover:opacity-100"
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#F7F9FF",
                        opacity: 0,
                        transition: "opacity 0.2s ease",
                        pointerEvents: "none",
                    }}
                />
            )}
            <span className="relative z-10">{label}</span>
        </button>
    );
}

/* ─── Section H2 ─────────────────────────────────────────────── */
function SectionH2({ children }: { children: React.ReactNode }) {
    return (
        <h2
            className="mb-3 md:mb-4 text-[22px] sm:text-[26px] md:text-[32px] text-[#030303]"
            style={{ fontWeight: 600, lineHeight: "100%", letterSpacing: "-0.02em" }}
        >
            {children}
        </h2>
    );
}

/* ════════════════════════════════════════════════════════════════
   Main component
════════════════════════════════════════════════════════════════ */
export default function Events() {
    const [activeTab, setActiveTab] = useState("nvs1-nvs2");

    const tabs = [
        { key: "nvs1-nvs2", label: "NVS1 & NVS2" },
        { key: "ama", label: "AMA sessions" },
        { key: "masterclass", label: "Exclusive virtual master class" },
    ];

    return (
        <section className="bg-white w-full py-10 sm:py-16 md:py-24" style={{ fontFamily: JAKARTA }}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 lg:gap-24">

                {/* ══ Sidebar — desktop only ══ */}
                <div className="hidden md:flex md:w-[220px] lg:w-[260px] flex-shrink-0 flex-col">
                    <h2 className="font-medium text-black mb-3 px-4 tracking-tight md:text-[20px]">
                        Events
                    </h2>

                    {/* Desktop: animated vertical nav */}
                    <nav className="flex flex-col gap-1">
                        {tabs.map(({ key, label }) => (
                            <NavItem
                                key={key}
                                label={label}
                                active={activeTab === key}
                                onClick={() => setActiveTab(key)}
                            />
                        ))}
                    </nav>
                </div>

                {/* ══ Main Content ══ */}
                <div className="flex-1 min-w-0 overflow-visible">

                    {/* ── NVS1 & NVS2 TAB ── */}
                    {activeTab === "nvs1-nvs2" && (
                        <div className="flex flex-col">

                            {/* Title */}
                            <h1
                                className="text-[#030303] mb-3 text-[28px] sm:text-[36px] md:text-[48px]"
                                style={{
                                    fontWeight: 600,
                                    lineHeight: "1.1",
                                    letterSpacing: "-0.04em",
                                    maxWidth: "620px",
                                }}
                            >
                                NVS1 & NVS2: Nirvana Village Square Events
                            </h1>

                            {/* Subtitle */}
                            <p
                                className="mb-6 sm:mb-8 text-[14px] sm:text-[15px] md:text-[16px] text-[#6F6F6F]"
                                style={{ fontWeight: 500, lineHeight: "160%", letterSpacing: "-0.02em", maxWidth: "800px" }}
                            >
                                These were two landmark offline masterclass & community meetups hosted by Nirvana Academy in 2025. They represent the organization's shift from purely virtual education to real-world, high-energy community building.
                            </p>

                            {/* Hero image */}
                            <div
                                className="relative w-full mb-8 sm:mb-10 md:mb-12"
                                style={{ height: "clamp(180px, 40vw, 500px)" }}
                            >
                                <Image
                                    src="/Rectangle 35.png"
                                    alt="Nirvana Village Square Event"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 850px"
                                    priority
                                />
                            </div>

                            {/* NVS1 text */}
                            <SectionH2>NVS1 (First Edition)</SectionH2>
                            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
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

                            {/* NVS1 grid */}
                            <div className="relative mb-10 sm:mb-14 mt-6 sm:mt-8 overflow-visible">
                                <NVSBadge label="NVS 1" />
                                <ImageGrid
                                    mobileHeight={170}
                                    tabletHeight={210}
                                    desktopHeight={300}
                                    images={[
                                        { src: "/Rectangle 36.png", alt: "NVS1 Photo 1" },
                                        { src: "/Rectangle 37.png", alt: "NVS1 Photo 2" },
                                        { src: "/Rectangle 38.png", alt: "NVS1 Photo 3" },
                                        { src: "/Rectangle 39.png", alt: "NVS1 Photo 4" },
                                    ]}
                                />
                            </div>

                            {/* NVS2 text */}
                            <SectionH2>NVS2 (Second Edition)</SectionH2>
                            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
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

                            {/* NVS2 grid */}
                            <div className="relative mb-10 sm:mb-14 mt-6 sm:mt-8 overflow-visible">
                                <NVSBadge label="NVS 2" />
                                <ImageGrid
                                    mobileHeight={170}
                                    tabletHeight={210}
                                    desktopHeight={300}
                                    images={[
                                        { src: "/Rectangle 40.png", alt: "NVS2 Photo 1" },
                                        { src: "/Rectangle 41.png", alt: "NVS2 Photo 2" },
                                        { src: "/Rectangle 42.png", alt: "NVS2 Photo 3" },
                                        { src: "/Rectangle 43.png", alt: "NVS2 Photo 4" },
                                    ]}
                                />
                            </div>

                            {/* What Made Them Special */}
                            <SectionH2>What Made Them Special</SectionH2>
                            <ol
                                className="flex flex-col gap-2 mb-8 sm:mb-12 pl-5 list-decimal text-[14px] sm:text-[15px] md:text-[16px] text-[#6F6F6F]"
                                style={{ fontWeight: 500, lineHeight: "160%", letterSpacing: "-0.02em" }}
                            >
                                <li>Hybrid Energy: Masterclass education + community bonding</li>
                                <li>Intimate Scale: Not massive conferences, but focused gatherings</li>
                                <li>Real Talk: No performative networking, genuine Web3 conversations</li>
                                <li>Alumni Focus: Rewarded committed community members</li>
                                <li>Proof of Concept: Led to larger events like OG Labs (250+) and Blockfest (4K+)</li>
                            </ol>

                            {/* Strategic Importance */}
                            <SectionH2>Strategic Importance</SectionH2>
                            <div
                                className="flex flex-col gap-2 sm:gap-3 mb-5 sm:mb-6 text-[14px] sm:text-[15px] md:text-[16px] text-[#6F6F6F]"
                                style={{ fontWeight: 500, lineHeight: "160%", letterSpacing: "-0.02em" }}
                            >
                                <p>These events were pivotal in Nirvana's evolution:</p>
                                <p>Before NVS: Purely online academy, WhatsApp community</p>
                                <p>After NVS: Hybrid organization with offline muscle, proving they could execute at scale</p>
                                <p>They established:</p>
                                <ul className="list-disc pl-[18px] flex flex-col gap-1 sm:gap-1.5 marker:text-[#6F6F6F]">
                                    <li>Nirvana's ability to host high-quality physical events</li>
                                    <li>Demand for in-person Web3 experiences in Africa</li>
                                    <li>Alumni loyalty and community strength</li>
                                    <li>Template for future hybrid events (physical + virtual)</li>
                                </ul>
                            </div>
                            <p
                                className="mb-10 sm:mb-14 text-[14px] sm:text-[15px] md:text-[16px] text-[#6F6F6F]"
                                style={{ fontWeight: 500, lineHeight: "160%", letterSpacing: "-0.02em" }}
                            >
                                <span style={{ fontWeight: 700, color: "#030303" }}>2026 Relevance:</span> These events directly informed the Lagos office strategy and hybrid cohort model planned for Q3 2026. NVS wasn't just events. It was Nirvana proving they could move from screens to real-world impact.
                            </p>

                            {/* NVS 1 & 2 combined grid */}
                            <div className="relative mb-12 sm:mb-16 mt-6 sm:mt-8 overflow-visible">
                                <NVSBadge label="NVS 1 & 2" />
                                <ImageGrid
                                    mobileHeight={160}
                                    tabletHeight={200}
                                    desktopHeight={280}
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

                    {/* ── AMA TAB ── */}
                    {activeTab === "ama" && (
                        <div className="flex flex-col">
                            <h1
                                className="text-black mb-4 text-[28px] sm:text-[36px] md:text-[48px]"
                                style={{ fontWeight: 600, lineHeight: "1.1", letterSpacing: "-0.04em" }}
                            >
                                AMA Sessions
                            </h1>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#7A7A7A] leading-relaxed mb-8">
                                Content for AMA sessions will be added here.
                            </p>
                        </div>
                    )}

                    {/* ── MASTERCLASS TAB ── */}
                    {activeTab === "masterclass" && (
                        <div className="flex flex-col">
                            <h1
                                className="text-black mb-4 text-[28px] sm:text-[36px] md:text-[48px]"
                                style={{ fontWeight: 600, lineHeight: "1.1", letterSpacing: "-0.04em" }}
                            >
                                Exclusive Virtual Master Class
                            </h1>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#7A7A7A] leading-relaxed mb-8">
                                Content for Exclusive virtual master class will be added here.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}