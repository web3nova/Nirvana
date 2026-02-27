"use client";

import React, { useRef, useState, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus",
});

const stats = [
    {
        bgText: "Graduates",
        number: "10K+",
        label: "Graduates",
        height: "160px"
    },
    {
        bgText: "Cohorts",
        number: "12",
        label: "Cohorts",
        height: "200px"
    },
    {
        bgText: "Members",
        number: "15K",
        label: "Community members",
        height: "260px"
    },
    {
        bgText: "Followings",
        number: "21K",
        label: "Twitter followings",
        height: "320px"
    }
];

export default function Stats() {
    const [centers, setCenters] = useState<{ x: number, y: number }[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [renderState, setRenderState] = useState({ x: 0, y: 0, angle: 0, opacity: 0, scaleX: 1, scaleY: 1 });

    // Core animation states
    const animRef = useRef({
        index: 0,
        t: 0,
        phase: 'fading_in' as 'moving' | 'squashing' | 'squashing_at_end' | 'unsquashing' | 'unsquashing_at_end' | 'pausing' | 'pausing_at_end' | 'fading_out' | 'fading_in',
        phaseStartTime: 0
    });

    // Locate precise top-center of each card on mount and resize
    useEffect(() => {
        const updateLayout = () => {
            const newCenters: { x: number; y: number }[] = [];
            cardRefs.current.forEach((card) => {
                if (card) {
                    newCenters.push({
                        x: card.offsetLeft + card.offsetWidth / 2,
                        y: card.offsetTop - 5 // Rest exactly on the top edge
                    });
                }
            });
            setCenters(newCenters);

            // Re-sync render instantly
            if (newCenters.length > 0) {
                setRenderState(prev => ({
                    ...prev,
                    x: newCenters[0].x,
                    y: newCenters[0].y,
                    opacity: 1
                }));
            }
        };

        const timer = setTimeout(updateLayout, 100);
        window.addEventListener('resize', updateLayout);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateLayout);
        };
    }, []);

    // Frame-by-frame bouncy arrow mechanics
    useEffect(() => {
        if (centers.length < 2) return;

        let reqId: number;
        const DURATION = 800;  // realistic drop velocity
        const SQUASH = 100;    // ms squashed flat
        const UNSQUASH = 150;  // ms returning to shape
        const PAUSE = 250;     // ms sitting still
        const WAIT_TOTAL = SQUASH + UNSQUASH + PAUSE;

        const getTrajectory = (idx: number, t: number) => {
            const p0 = centers[idx];
            const p2 = centers[idx + 1];

            // Determine if the bounce should be vertical (desktop) or horizontal-bowed (mobile)
            const dx = p2.x - p0.x;
            const dy = p2.y - p0.y;
            const isVerticalList = Math.abs(dx) < Math.abs(dy);

            let p1;
            if (isVerticalList) {
                // Bow out to the right side on mobile
                const bowWidth = 70;
                p1 = { x: p0.x + bowWidth, y: p0.y + dy / 2 };
            } else {
                // Height of bounce depends heavily on distance for natural feel
                const bounceHeight = 120;
                p1 = { x: p0.x + dx / 2, y: Math.min(p0.y, p2.y) - bounceHeight };
            }

            // Linear T creates perfect gravity parabolas (constant X vel, accelerating Y vel)
            const mt = 1 - t;
            const x = mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x;
            const y = mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y;

            // Calculate pointing angle matching exact curve
            const dxdt = 2 * mt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
            const dydt = 2 * mt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
            const angle = Math.atan2(dydt, dxdt) * (180 / Math.PI);

            return { x, y, angle };
        }

        const loop = (time: number) => {
            const s = animRef.current;
            if (s.phaseStartTime === 0) s.phaseStartTime = time;

            let elapsed = time - s.phaseStartTime;
            let x = 0, y = 0, angle = 0, opacity = 1, scaleX = 1, scaleY = 1;

            const setRestingEnd = () => {
                const traj = getTrajectory(s.index - 1, 1);
                x = traj.x;
                y = traj.y;
                angle = traj.angle;
            };

            const calculateWaitAngle = (waitElapsed: number) => {
                const a1 = getTrajectory(s.index - 1, 1).angle;
                if (s.phase.includes('_at_end')) return a1;

                const a2 = getTrajectory(s.index, 0).angle;
                const prog = Math.min(waitElapsed / WAIT_TOTAL, 1);
                const ease = prog * prog * (3 - 2 * prog); // ease-in-out rotation
                return a1 + (a2 - a1) * ease;
            };

            if (s.phase === 'fading_in') {
                const start = getTrajectory(0, 0);
                x = start.x; y = start.y; angle = start.angle;
                opacity = Math.min(elapsed / 300, 1);
                if (opacity >= 1) {
                    s.phase = 'moving';
                    s.phaseStartTime = time;
                    s.t = 0;
                }
            }
            else if (s.phase === 'moving') {
                s.t = elapsed / DURATION;
                if (s.t >= 1) {
                    s.t = 1;
                    s.index++;
                    s.phase = (s.index >= centers.length - 1) ? 'squashing_at_end' : 'squashing';
                    s.phaseStartTime = time;
                    elapsed = 0;
                }

                if (s.phase === 'moving') {
                    const traj = getTrajectory(s.index, s.t);
                    x = traj.x; y = traj.y; angle = traj.angle;
                }
            }

            if (s.phase.startsWith('squashing')) {
                let sqT = Math.min(elapsed / SQUASH, 1);
                scaleX = 1 + sqT * 0.4; // flatten wide
                scaleY = 1 - sqT * 0.4; // compress vertically
                setRestingEnd();
                angle = calculateWaitAngle(elapsed);

                if (sqT >= 1) {
                    s.phase = s.phase === 'squashing' ? 'unsquashing' : 'unsquashing_at_end';
                    s.phaseStartTime = time;
                }
            }
            else if (s.phase.startsWith('unsquashing')) {
                let unT = Math.min(elapsed / UNSQUASH, 1);
                scaleX = 1.4 - unT * 0.4; // snap back from wide
                scaleY = 0.6 + unT * 0.4; // stretch back up
                setRestingEnd();
                angle = calculateWaitAngle(SQUASH + elapsed);

                if (unT >= 1) {
                    s.phase = s.phase === 'unsquashing' ? 'pausing' : 'pausing_at_end';
                    s.phaseStartTime = time;
                }
            }
            else if (s.phase.startsWith('pausing')) {
                setRestingEnd();
                angle = calculateWaitAngle(SQUASH + UNSQUASH + elapsed);

                if (elapsed >= PAUSE) {
                    if (s.phase === 'pausing') {
                        s.phase = 'moving';
                        s.t = 0;
                    } else {
                        s.phase = 'fading_out';
                    }
                    s.phaseStartTime = time;
                }
            }
            else if (s.phase === 'fading_out') {
                setRestingEnd();
                opacity = 1 - Math.min(elapsed / 300, 1);
                if (opacity <= 0) {
                    s.index = 0;
                    s.phase = 'fading_in';
                    s.phaseStartTime = time;
                }
            }

            setRenderState({ x, y, angle, opacity, scaleX, scaleY });
            reqId = requestAnimationFrame(loop);
        };

        reqId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(reqId);
    }, [centers]);

    return (
        <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full pb-4">
                    <div className="relative pt-6 md:pt-12">

                        {/* Header Text */}
                        <div className="relative md:absolute top-0 left-0 md:left-4 z-30 mb-8 md:mb-0 text-center md:text-left">
                            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-medium text-black leading-[1.1] md:leading-[1.05] tracking-[-0.05em]">
                                Our numbers don't <span className="font-[family-name:var(--font-nanum-pen)] text-[40px] sm:text-[44px] md:text-[60px] leading-none align-baseline tracking-normal">lie</span>, they<br className="hidden md:block" />
                                <span className="md:hidden"> </span>speak for themselves.
                            </h2>
                        </div>

                        <div className="relative md:h-[400px] mt-8 md:mt-24 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-5 w-full">

                            {/* Dynamic Generated Dashed Connecting Arcs */}
                            {centers.length > 1 && (
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
                                    {centers.slice(0, -1).map((p0, i) => {
                                        const p2 = centers[i + 1];
                                        const dx = p2.x - p0.x;
                                        const dy = p2.y - p0.y;
                                        const isVerticalList = Math.abs(dx) < Math.abs(dy);

                                        let p1;
                                        if (isVerticalList) {
                                            p1 = { x: p0.x + 70, y: p0.y + dy / 2 };
                                        } else {
                                            p1 = { x: p0.x + dx / 2, y: Math.min(p0.y, p2.y) - 120 };
                                        }
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

                            {/* Bouncing Arrow Head */}
                            {centers.length > 1 && (
                                <div
                                    className="absolute left-0 top-0 z-20 pointer-events-none flex items-center justify-center will-change-transform"
                                    style={{
                                        transform: `translate(${renderState.x}px, ${renderState.y}px) scale(${renderState.scaleX}, ${renderState.scaleY}) translate(-12px, -12px) rotate(${renderState.angle}deg)`,
                                        opacity: renderState.opacity,
                                        width: '24px',
                                        height: '24px',
                                        transformOrigin: '50% 50%'
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}

                            {/* Stat Cards */}
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    ref={(el) => { cardRefs.current[index] = el; }}
                                    className={`relative z-10 w-full max-w-[320px] md:max-w-none md:w-auto md:flex-1 rounded-[32px] overflow-hidden bg-gradient-to-b from-[#F3F6FA] to-white/30 flex flex-col items-center justify-center border border-[#F3F6FA] h-[160px] md:h-[var(--desktop-h)] ${plusJakarta.variable} font-[family-name:var(--font-plus)]`}
                                    style={{ '--desktop-h': stat.height } as React.CSSProperties}
                                >
                                    <div className="absolute top-6 w-full text-center select-none pointer-events-none px-4">
                                        <span className="text-[28px] md:text-[38px] font-bold text-[#E2E8F0]/50 tracking-[-0.03em]">
                                            {stat.bgText}
                                        </span>
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center mt-6 md:mt-8">
                                        <span className="text-4xl md:text-[54px] font-bold text-gray-900 leading-none mb-1 tracking-[-0.05em]">
                                            {stat.number}
                                        </span>
                                        <span className="text-sm md:text-[13px] lg:text-sm text-gray-500 font-medium whitespace-nowrap tracking-wide">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
