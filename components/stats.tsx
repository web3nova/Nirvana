"use client";

import React, { useRef, useState, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus",
});

const stats = [
    { bgText: "Graduates",  number: "10K+", label: "Graduates",         height: "160px", raw: 10000, suffix: "K+",  divisor: 1000 },
    { bgText: "Cohorts",    number: "12",   label: "Cohorts",            height: "200px", raw: 12,    suffix: "",    divisor: 1    },
    { bgText: "Members",    number: "15K",  label: "Community members",  height: "260px", raw: 15000, suffix: "K",   divisor: 1000 },
    { bgText: "Followings", number: "21K",  label: "Twitter followings", height: "320px", raw: 21000, suffix: "K",   divisor: 1000 },
];

/* ── Easing ── */
function easeOutExpo(t: number) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ── Single counting number hook ── */
function useCountUp(target: number, duration: number, started: boolean) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (!started) return;

        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);
            setCount(Math.round(eased * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [started, target, duration]);

    return count;
}

/* ── Individual stat card ── */
function StatCard({
    stat,
    index,
    cardRef,
}: {
    stat: typeof stats[0];
    index: number;
    cardRef: (el: HTMLDivElement | null) => void;
}) {
    const cardElRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    /* Intersection observer — starts counter when card enters viewport */
    useEffect(() => {
        const el = cardElRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.35 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    /* Staggered start per card */
    const [started, setStarted] = useState(false);
    useEffect(() => {
        if (!visible) return;
        const t = setTimeout(() => setStarted(true), index * 160);
        return () => clearTimeout(t);
    }, [visible, index]);

    /* The actual count — always counts in whole display units */
    const displayTarget = stat.divisor > 1 ? stat.raw / stat.divisor : stat.raw;
    const counted = useCountUp(displayTarget, 1800, started);

    /* Format display string */
    const display = `${counted}${stat.suffix}`;

    return (
        <div
            ref={(el) => { cardElRef.current = el; cardRef(el); }}
            className={`
                relative z-10 w-full max-w-[320px] md:max-w-none md:w-auto md:flex-1
                rounded-[32px] overflow-hidden
                bg-gradient-to-b from-[#F3F6FA] to-white/30
                flex flex-col items-center justify-center
                border border-[#F3F6FA]
                h-[160px] md:h-[var(--desktop-h)]
                ${plusJakarta.variable} font-[family-name:var(--font-plus)]
                transition-all duration-700
            `}
            style={{ "--desktop-h": stat.height } as React.CSSProperties}
        >
            {/* Background label */}
            <div className="absolute top-6 w-full text-center select-none pointer-events-none px-4">
                <span className="text-[28px] md:text-[38px] font-bold text-[#E2E8F0]/50 tracking-[-0.03em]">
                    {stat.bgText}
                </span>
            </div>

            {/* Number + label */}
            <div className="relative z-10 flex flex-col items-center mt-6 md:mt-8">
                <span
                    className="text-4xl md:text-[54px] font-bold text-gray-900 leading-none mb-1 tracking-[-0.05em] tabular-nums"
                    style={{
                        /* Subtle scale-in as counting starts */
                        transition: "transform 0.3s ease",
                        transform : started ? "scale(1)" : "scale(0.88)",
                    }}
                >
                    {display}
                </span>
                <span className="text-sm md:text-[13px] lg:text-sm text-gray-500 font-medium whitespace-nowrap tracking-wide">
                    {stat.label}
                </span>
            </div>

            {/* Flash highlight that fires once counting starts */}
            {started && (
                <span
                    className="absolute inset-0 rounded-[32px] pointer-events-none"
                    style={{
                        background : "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.10) 0%, transparent 70%)",
                        animation  : "flashIn 0.6s ease forwards",
                    }}
                />
            )}
        </div>
    );
}

/* ── Main export ── */
export default function Stats() {
    const [centers, setCenters] = useState<{ x: number; y: number }[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [renderState, setRenderState] = useState({
        x: 0, y: 0, angle: 0, opacity: 0, scaleX: 1, scaleY: 1,
    });

    /* Layout measurement */
    useEffect(() => {
        const updateLayout = () => {
            const newCenters: { x: number; y: number }[] = [];
            cardRefs.current.forEach((card) => {
                if (card) {
                    newCenters.push({
                        x: card.offsetLeft + card.offsetWidth / 2,
                        y: card.offsetTop - 5,
                    });
                }
            });
            setCenters(newCenters);
            if (newCenters.length > 0) {
                setRenderState(prev => ({ ...prev, x: newCenters[0].x, y: newCenters[0].y, opacity: 1 }));
            }
        };
        const t = setTimeout(updateLayout, 100);
        window.addEventListener("resize", updateLayout);
        return () => { clearTimeout(t); window.removeEventListener("resize", updateLayout); };
    }, []);

    /* Bouncing arrow animation */
    const animRef = useRef({
        index: 0, t: 0,
        phase: "fading_in" as
            | "moving" | "squashing" | "squashing_at_end"
            | "unsquashing" | "unsquashing_at_end"
            | "pausing" | "pausing_at_end"
            | "fading_out" | "fading_in",
        phaseStartTime: 0,
    });

    useEffect(() => {
        if (centers.length < 2) return;
        let reqId: number;
        const DURATION = 800, SQUASH = 100, UNSQUASH = 150, PAUSE = 250;
        const WAIT_TOTAL = SQUASH + UNSQUASH + PAUSE;

        const getTrajectory = (idx: number, t: number) => {
            const p0 = centers[idx], p2 = centers[idx + 1];
            const dx = p2.x - p0.x, dy = p2.y - p0.y;
            const isVert = Math.abs(dx) < Math.abs(dy);
            const p1 = isVert
                ? { x: p0.x + 70, y: p0.y + dy / 2 }
                : { x: p0.x + dx / 2, y: Math.min(p0.y, p2.y) - 120 };
            const mt = 1 - t;
            const x = mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x;
            const y = mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y;
            const dxdt = 2 * mt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
            const dydt = 2 * mt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
            return { x, y, angle: Math.atan2(dydt, dxdt) * (180 / Math.PI) };
        };

        const loop = (time: number) => {
            const s = animRef.current;
            if (s.phaseStartTime === 0) s.phaseStartTime = time;
            const elapsed = time - s.phaseStartTime;
            let x = 0, y = 0, angle = 0, opacity = 1, scaleX = 1, scaleY = 1;

            const setEnd = () => {
                const traj = getTrajectory(s.index - 1, 1);
                x = traj.x; y = traj.y; angle = traj.angle;
            };
            const waitAngle = (e: number) => {
                const a1 = getTrajectory(s.index - 1, 1).angle;
                if (s.phase.includes("_at_end")) return a1;
                const a2 = getTrajectory(s.index, 0).angle;
                const prog = Math.min(e / WAIT_TOTAL, 1);
                const ease = prog * prog * (3 - 2 * prog);
                return a1 + (a2 - a1) * ease;
            };

            if (s.phase === "fading_in") {
                const start = getTrajectory(0, 0);
                x = start.x; y = start.y; angle = start.angle;
                opacity = Math.min(elapsed / 300, 1);
                if (opacity >= 1) { s.phase = "moving"; s.phaseStartTime = time; s.t = 0; }
            } else if (s.phase === "moving") {
                s.t = elapsed / DURATION;
                if (s.t >= 1) {
                    s.t = 1; s.index++;
                    s.phase = s.index >= centers.length - 1 ? "squashing_at_end" : "squashing";
                    s.phaseStartTime = time;
                }
                if (s.phase === "moving") {
                    const traj = getTrajectory(s.index, s.t);
                    x = traj.x; y = traj.y; angle = traj.angle;
                }
            }
            if (s.phase.startsWith("squashing")) {
                const sq = Math.min(elapsed / SQUASH, 1);
                scaleX = 1 + sq * 0.4; scaleY = 1 - sq * 0.4;
                setEnd(); angle = waitAngle(elapsed);
                if (sq >= 1) { s.phase = s.phase === "squashing" ? "unsquashing" : "unsquashing_at_end"; s.phaseStartTime = time; }
            } else if (s.phase.startsWith("unsquashing")) {
                const un = Math.min(elapsed / UNSQUASH, 1);
                scaleX = 1.4 - un * 0.4; scaleY = 0.6 + un * 0.4;
                setEnd(); angle = waitAngle(SQUASH + elapsed);
                if (un >= 1) { s.phase = s.phase === "unsquashing" ? "pausing" : "pausing_at_end"; s.phaseStartTime = time; }
            } else if (s.phase.startsWith("pausing")) {
                setEnd(); angle = waitAngle(SQUASH + UNSQUASH + elapsed);
                if (elapsed >= PAUSE) {
                    s.phase = s.phase === "pausing" ? "moving" : "fading_out";
                    s.t = 0; s.phaseStartTime = time;
                }
            } else if (s.phase === "fading_out") {
                setEnd(); opacity = 1 - Math.min(elapsed / 300, 1);
                if (opacity <= 0) { s.index = 0; s.phase = "fading_in"; s.phaseStartTime = time; }
            }

            setRenderState({ x, y, angle, opacity, scaleX, scaleY });
            reqId = requestAnimationFrame(loop);
        };

        reqId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(reqId);
    }, [centers]);

    return (
        <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
            {/* Keyframe for card flash */}
            <style>{`
                @keyframes flashIn {
                    0%   { opacity: 0; }
                    30%  { opacity: 1; }
                    100% { opacity: 0; }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full pb-4">
                    <div className="relative pt-6 md:pt-12">

                        {/* Header */}
                        <div className="relative md:absolute top-0 left-0 md:left-4 z-30 mb-8 md:mb-0 text-center md:text-left">
                            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-medium text-black leading-[1.1] md:leading-[1.05] tracking-[-0.05em]">
                                Our numbers don't{" "}
                                <span className="font-[family-name:var(--font-nanum-pen)] text-[40px] sm:text-[44px] md:text-[60px] leading-none align-baseline tracking-normal">
                                    lie
                                </span>
                                , they
                                <br className="hidden md:block" />
                                <span className="md:hidden"> </span>
                                speak for themselves.
                            </h2>
                        </div>

                        <div className="relative md:h-[400px] mt-8 md:mt-24 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-5 w-full">

                            {/* Dashed arcs */}
                            {centers.length > 1 && (
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
                                    {centers.slice(0, -1).map((p0, i) => {
                                        const p2 = centers[i + 1];
                                        const dx = p2.x - p0.x, dy = p2.y - p0.y;
                                        const isVert = Math.abs(dx) < Math.abs(dy);
                                        const p1 = isVert
                                            ? { x: p0.x + 70, y: p0.y + dy / 2 }
                                            : { x: p0.x + dx / 2, y: Math.min(p0.y, p2.y) - 120 };
                                        return (
                                            <path
                                                key={i}
                                                d={`M ${p0.x},${p0.y} Q ${p1.x},${p1.y} ${p2.x},${p2.y}`}
                                                fill="none"
                                                stroke="#60A5FA"
                                                strokeWidth="2.5"
                                                strokeDasharray="8 8"
                                                strokeLinecap="round"
                                            />
                                        );
                                    })}
                                </svg>
                            )}

                            {/* Bouncing arrow */}
                            {centers.length > 1 && (
                                <div
                                    className="absolute left-0 top-0 z-20 pointer-events-none flex items-center justify-center will-change-transform"
                                    style={{
                                        transform: `translate(${renderState.x}px,${renderState.y}px) scale(${renderState.scaleX},${renderState.scaleY}) translate(-12px,-12px) rotate(${renderState.angle}deg)`,
                                        opacity  : renderState.opacity,
                                        width    : "24px",
                                        height   : "24px",
                                        transformOrigin: "50% 50%",
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}

                            {/* Stat cards */}
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    stat={stat}
                                    index={index}
                                    cardRef={(el) => { cardRefs.current[index] = el; }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}