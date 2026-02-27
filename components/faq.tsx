"use client";

import { useState } from 'react';

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

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20">

                    {/* Left Column - Heading */}
                    <div className="md:w-1/3 flex flex-col">
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-4 tracking-tight">
                            Frequently asked<br />questions
                        </h2>
                        <p className="text-[15px] text-gray-500 max-w-sm leading-relaxed">
                            Got questions? We've got answers to kickstart your Web3 journey with Nirvana.
                        </p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="md:w-2/3 flex flex-col gap-3 md:gap-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F8F9] rounded-xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-[15px] font-medium text-gray-900 pr-8">
                                        {faq.question}
                                    </span>
                                    <span className="text-gray-500 font-light text-xl lex-shrink-0">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-[14px] text-gray-600 leading-relaxed border-t border-gray-200 pt-4 mt-1">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
