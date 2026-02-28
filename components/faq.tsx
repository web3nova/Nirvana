"use client";

import { useState, useEffect, useRef } from 'react';

const faqs = [
    {
        question: "What's Nirvana all about?",
        answer: "Nirvana is a community and platform dedicated to guiding individuals through real wealth creation via cryptocurrency, DeFi wisdom, and Web3 innovations. We provide mentorship, resources, and the network you need to succeed.",
    },
    {
        question: "What makes Nirvana different?",
        answer: "Unlike traditional platforms, Nirvana combines practical, expert-led mentorship with an exclusive, engaging community environment. We do not just share information; we architect digital systems for financial empowerment.",
    },
    {
        question: "What's Koinophobia?",
        answer: "Koinophobia is the fear of living an ordinary life. In the Nirvana ecosystem, it represents our drive to break away from traditional financial constraints and build extraordinary wealth through Web3.",
    },
    {
        question: "What makes Nirvana different?",
        answer: "Nirvana is unique in its approach to combining high-level DeFi strategies with accessible mentorship and a strong, supportive community focused on real-world results.",
    }
];

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, vis };
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const header = useInView(0.2);
    const list   = useInView(0.1);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <style>{`
                @keyframes faq-slideLeft {
                    from { opacity: 0; transform: translateX(-36px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes faq-fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes faq-lineGrow {
                    from { transform: scaleX(0); transform-origin: left; }
                    to   { transform: scaleX(1); transform-origin: left; }
                }
                @keyframes faq-answerLine {
                    from { transform: scaleX(0); transform-origin: left; }
                    to   { transform: scaleX(1); transform-origin: left; }
                }

                .faq-heading-enter { animation: faq-slideLeft 0.7s cubic-bezier(0.22,1,0.36,1) both; }
                .faq-sub-enter     { animation: faq-slideLeft 0.7s 0.12s cubic-bezier(0.22,1,0.36,1) both; }
                .faq-bar-enter     { animation: faq-lineGrow  0.6s 0.28s cubic-bezier(0.22,1,0.36,1) both; }
                .faq-item-enter    { animation: faq-fadeUp    0.55s cubic-bezier(0.22,1,0.36,1) both; }

                .faq-row {
                    border: 1px solid transparent;
                    transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                }
                .faq-row:hover {
                    background: #EEF6FF !important;
                    border-color: rgba(43,127,255,0.18);
                    box-shadow: 0 4px 20px rgba(43,127,255,0.08);
                }
                .faq-row.is-open {
                    background: #EEF6FF !important;
                    border-color: rgba(43,127,255,0.28);
                    box-shadow: 0 6px 28px rgba(43,127,255,0.11);
                }

                .faq-toggle {
                    width: 30px; height: 30px;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                    font-size: 20px; line-height: 1;
                    font-weight: 300;
                    transition: background 0.25s ease, color 0.25s ease,
                                transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
                    background: #E2E8F0;
                    color: #64748b;
                }
                .faq-row:hover .faq-toggle,
                .faq-row.is-open .faq-toggle {
                    background: #2B7FFF;
                    color: #fff;
                    transform: rotate(180deg) scale(1.1);
                }

                .faq-question {
                    transition: color 0.25s ease;
                }
                .faq-row:hover .faq-question,
                .faq-row.is-open .faq-question {
                    color: #2B7FFF;
                }

                .faq-answer-accent {
                    display: block;
                    height: 2px;
                    border-radius: 2px;
                    background: linear-gradient(90deg, #2B7FFF 0%, rgba(43,127,255,0) 100%);
                    margin-bottom: 12px;
                    animation: faq-answerLine 0.4s cubic-bezier(0.22,1,0.36,1) both;
                }
            `}</style>

            <section className="py-16 md:py-24 bg-white w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-10 md:gap-20">

                        {/* ── Left: heading ── */}
                        <div ref={header.ref} className="md:w-1/3 flex flex-col">
                            <h2 className={`text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-4 tracking-tight ${header.vis ? "faq-heading-enter" : "opacity-0"}`}>
                                Frequently asked<br />questions
                            </h2>
                            <p className={`text-[15px] text-gray-500 max-w-sm leading-relaxed ${header.vis ? "faq-sub-enter" : "opacity-0"}`}>
                                Got questions? We've got answers to kickstart your Web3 journey with Nirvana.
                            </p>

                            {header.vis && (
                                <div className="faq-bar-enter mt-8 hidden md:block h-[3px] w-14 rounded-full bg-[#2B7FFF]" />
                            )}
                        </div>

                        {/* ── Right: accordion ── */}
                        <div ref={list.ref} className="md:w-2/3 flex flex-col gap-3 md:gap-4">
                            {faqs.map((faq, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div
                                        key={i}
                                        className={`faq-row faq-item-enter rounded-xl overflow-hidden${isOpen ? " is-open" : ""}`}
                                        style={{
                                            background: "#F7F8F9",
                                            animationDelay: list.vis ? `${i * 75}ms` : "0ms",
                                            opacity: list.vis ? undefined : 0,
                                        }}
                                    >
                                        <button
                                            onClick={() => toggle(i)}
                                            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="faq-question flex items-center gap-3 text-[15px] font-medium text-gray-900 pr-4">
                                                <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#EEF6FF] text-[#2B7FFF] text-[11px] font-semibold flex-shrink-0">
                                                    {i + 1}
                                                </span>
                                                {faq.question}
                                            </span>
                                            <span className="faq-toggle">
                                                {isOpen ? '−' : '+'}
                                            </span>
                                        </button>

                                        <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                                            {isOpen && <span className="faq-answer-accent" />}
                                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}