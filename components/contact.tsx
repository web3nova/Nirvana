import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const FLOATING_TICKER_ITEMS = Array(12).fill("NIRVANA ACADEMY");

export default function Contact() {
    return (
        <>
            <style>{`
                @keyframes scrollRight {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                @keyframes floatBand {
                    0%   { transform: rotate(1.03deg) translateY(0px); }
                    50%  { transform: rotate(1.03deg) translateY(-5px); }
                    100% { transform: rotate(1.03deg) translateY(0px); }
                }

                .contact-ticker-outer {
                    width: 110%;
                    margin-left: -5%;
                    background: #E0EDFF;
                    padding: 10px 0;
                    height: 71px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    transform: rotate(1.03deg);
                    transform-origin: center center;
                    animation: floatBand 4s ease-in-out infinite;
                    box-sizing: border-box;
                }

                .contact-ticker-track {
                    display: inline-flex;
                    align-items: center;
                    white-space: nowrap;
                    animation: scrollRight 28s linear infinite;
                    will-change: transform;
                }

                .contact-ticker-label {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-weight: 600;
                    font-size: 48px;
                    line-height: 51px;
                    letter-spacing: -0.04em;
                    color: #75ACFF;
                    display: inline-flex;
                    align-items: center;
                    padding: 0 10px;
                    user-select: none;
                    gap: 10px;
                }

                .contact-ticker-diamond {
                    display: inline-block;
                    width: 26px;
                    height: 26px;
                    background-color: #75ACFF;
                    transform: rotate(45deg);
                    border-radius: 2px;
                    flex-shrink: 0;
                    opacity: 0.85;
                }
            `}</style>

            {/* Floating Ticker Band */}
            <div style={{ width: '100%', overflow: 'hidden', position: 'relative', padding: '28px 0', backgroundColor: '#ffffff' }}>
                <div className="contact-ticker-outer">
                    <div className="contact-ticker-track">
                        {FLOATING_TICKER_ITEMS.map((label, i) => (
                            <span key={i} className="contact-ticker-label">
                                {label}
                                <span aria-hidden="true" className="contact-ticker-diamond" />
                            </span>
                        ))}
                        {FLOATING_TICKER_ITEMS.map((label, i) => (
                            <span key={"b" + i} className="contact-ticker-label">
                                {label}
                                <span aria-hidden="true" className="contact-ticker-diamond" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <section
                className="py-20 bg-white font-jakarta"
                style={{ position: 'relative', overflow: 'hidden' }}
            >
                <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2
                            className="text-black mb-3"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 500,
                                fontSize: '48px',
                                lineHeight: '47.2px',
                                letterSpacing: '-0.05em',
                                textAlign: 'center',
                            }}
                        >
                            Contact Us
                        </h2>
                        <p
                            className="text-gray-500 max-w-md mx-auto"
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '100%',
                                letterSpacing: '-0.02em',
                                textAlign: 'center',
                            }}
                        >
                            Got a question or ready to join the crew?<br />
                            Reach out—we&apos;re here to vibe and build.
                        </p>
                    </div>

                    {/* Main Content Box */}
                    <div className="max-w-[1000px] mx-auto bg-[#FAFAFA] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 lg:gap-8 justify-between shadow-sm border border-gray-100/50">

                        {/* Left Column: Contact Info */}
                        <div className="w-full md:w-[40%] flex flex-col gap-6 justify-start pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#F1F1F1] rounded-[14px] flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-black" strokeWidth={2} />
                                </div>
                                <span className="text-gray-600 text-sm font-medium">Decentralized HQ, Blockchain City</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#F1F1F1] rounded-[14px] flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-black" strokeWidth={2} />
                                </div>
                                <span className="text-gray-600 text-sm font-medium">support@nirvana.academy</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#F1F1F1] rounded-[14px] flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-[22px] h-[22px] fill-black">
                                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.59,67.59,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.33,46,96.22,53,91.08,65.69,84.69,65.69Z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 text-sm font-medium">@NirvanaCrew#1234</span>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="w-full md:w-[60%] flex flex-col gap-4">
                            <div className="bg-white rounded-xl p-4 flex flex-col justify-center border border-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all shadow-sm">
                                <label htmlFor="name" className="text-[11px] font-semibold text-gray-800 mb-1 cursor-pointer tracking-wide">Name</label>
                                <input type="text" id="name" placeholder="John Doe" className="w-full bg-transparent outline-none text-gray-900 placeholder-[#9CA3AF] text-[15px] font-medium" />
                            </div>
                            <div className="bg-white rounded-xl p-4 flex flex-col justify-center border border-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all shadow-sm">
                                <label htmlFor="email" className="text-[11px] font-semibold text-gray-800 mb-1 cursor-pointer tracking-wide">Email address</label>
                                <input type="email" id="email" placeholder="example@email.com" className="w-full bg-transparent outline-none text-gray-900 placeholder-[#9CA3AF] text-[15px] font-medium" />
                            </div>
                            <div className="bg-white rounded-xl p-4 flex flex-col border border-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all shadow-sm min-h-[160px]">
                                <label htmlFor="message" className="text-[11px] font-semibold text-gray-800 mb-2 cursor-pointer tracking-wide">How can we help you?</label>
                                <textarea id="message" placeholder="Write here" className="w-full bg-transparent outline-none text-gray-900 placeholder-[#9CA3AF] text-[15px] font-medium resize-none flex-grow"></textarea>
                            </div>
                            <div className="mt-2 flex">
                                <button type="button" className="bg-[#2D73FF] hover:bg-[#2563EB] text-white font-medium text-[15px] px-10 py-3.5 rounded-full transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-blue-500/20">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}