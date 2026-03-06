"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const quickLinks = ["Home", "About", "Courses", "Launches", "Team"];
const offerings = [
  "DeFi Education",
  "Token Launches",
  "NFT Drops",
  "Airdrop Hunting",
  "Trading Tools",
];
const contactItems = [
  "Discord: @NirvanaOrion#1234",
  "Email: support@nirvana.academy",
  "Decentralized HQ, Blockchain City, Web3 Realm",
];

const socialIcons: Record<string, React.ReactNode> = {
  instagram: (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  x: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  facebook: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-sm leading-5 tracking-[-0.15px] font-normal transition-colors duration-150 no-underline"
      style={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.6)" }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="
        w-[99.5%] mx-auto
        bg-[#111111] text-white overflow-hidden
        rounded-tl-[36px] rounded-tr-[36px]
        sm:rounded-tl-[52px] sm:rounded-tr-[52px]
        md:rounded-tl-[80px] md:rounded-tr-[80px]
        lg:rounded-tl-[100px] lg:rounded-tr-[100px]
        xl:rounded-tl-[142px] xl:rounded-tr-[142px]
        font-[Plus_Jakarta_Sans,sans-serif]
        box-border
      "
    >

      {/* ── Newsletter ── */}
      <section
        className="
          flex flex-col items-center
          gap-3
          px-5 pt-11 pb-9
          sm:px-8 sm:pt-14 sm:pb-11
          md:px-12 md:pt-16 md:pb-12
          lg:px-20 lg:pt-20 lg:pb-16
          xl:px-[120px] xl:pt-20 xl:pb-16
          2xl:px-40 2xl:pt-24 2xl:pb-20
        "
      >
        {/* Title */}
        <h2
          className="
            m-0 text-center font-medium text-white
            text-[clamp(24px,7.5vw,32px)] leading-tight
            tracking-[-0.05em]
            sm:text-[32px] sm:leading-[32px]
            md:text-[36px] md:leading-[36px]
            lg:text-[40px] lg:leading-[40px]
            xl:text-[48px] xl:leading-[47.2px]
            2xl:text-[56px] 2xl:leading-[54px]
          "
        >
          Join our Newsletter
        </h2>

        {/* Subtitle */}
        <p
          className="
            m-0 text-center font-medium text-[#999999]
            tracking-[-0.02em] leading-none
            text-[13px]
            sm:text-[14px]
            md:text-[15px]
            lg:text-[16px]
            xl:text-[18px]
            2xl:text-[20px]
          "
        >
          Stay in the loop with airdrops, launches, and DeFi secrets.
        </p>

        {/* Input row */}
        <div
          className="
            flex items-center mt-4 w-full gap-1.5
            bg-[#1c1c1c] border border-[#282828] rounded-full
            pl-4 pr-[5px] py-[5px]
            max-w-full
            md:max-w-[420px]
            xl:max-w-[460px]
            2xl:max-w-[540px]
          "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="
              flex-1 min-w-0 bg-transparent border-none outline-none
              text-white text-sm leading-6 tracking-[-0.15px]
              placeholder:text-[#4a4a4a]
            "
          />
          <button
            className="
              flex-shrink-0 h-12 bg-[#2563eb] text-white
              border-none rounded-full cursor-pointer
              font-normal text-base leading-6 tracking-[-0.31px]
              text-center whitespace-nowrap
              transition-colors duration-150
              hover:bg-[#1d4ed8]
              px-5 sm:px-[31px]
              w-auto sm:w-[137px]
              text-[14px] sm:text-[16px]
              h-[42px] sm:h-12
            "
          >
            Subscribe
          </button>
        </div>

        {/* Note */}
        <p className="m-0 text-center font-normal text-[#444444] text-sm leading-5 tracking-[-0.15px]">
          Join 50,000+ subscribers. Unsubscribe anytime.
        </p>
      </section>

      {/* ── Divider ── */}
      <hr
        className="
          border-none border-t border-[#1e1e1e]
          mx-5
          sm:mx-7
          md:mx-10
          lg:mx-[60px]
          xl:mx-20
          2xl:mx-[120px]
        "
      />

      {/* ── Links grid ── */}
      <div
        className="
          grid gap-7
          grid-cols-1
          px-5 pt-8 pb-7
          sm:grid-cols-2 sm:gap-7 sm:px-7 sm:pt-9 sm:pb-8
          md:grid-cols-3 md:gap-8 md:px-10 md:pt-10 md:pb-9
          lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-7 lg:px-[60px] lg:pt-11 lg:pb-9
          xl:grid-cols-[1.6fr_1fr_1fr_1.4fr] xl:gap-10 xl:px-20 xl:pt-[52px] xl:pb-11
          2xl:gap-14 2xl:px-[120px] 2xl:pt-16 2xl:pb-14
        "
      >

        {/* Brand — full row on sm/md */}
        <div
          className="
            flex flex-col gap-3
            sm:col-span-2
            md:col-span-3
            lg:col-span-1
          "
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Nirvana Academy"
              width={150}
              height={150}
            />
          </div>
          <p className="m-0 font-normal text-[12px] leading-[1.65] tracking-[-0.01em] text-[#555555] max-w-[170px] lg:max-w-[150px] xl:max-w-[180px] 2xl:max-w-[210px]">
            Join the family across our socials for real-time updates and vibes.
          </p>
          <div className="flex gap-2 mt-0.5">
            {Object.entries(socialIcons).map(([key, icon]) => (
              <a
                key={key}
                href="#"
                aria-label={key}
                className="
                  w-[30px] h-[30px] flex items-center justify-center
                  border border-[#252525] rounded-[7px]
                  text-[#606060] no-underline bg-transparent
                  transition-colors duration-150
                  hover:border-[#444444] hover:text-white
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[13px] leading-5 tracking-[-0.01em] text-white m-0 mb-4 2xl:text-sm">
            Quick Links
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l}><NavLink href="#">{l}</NavLink></li>
            ))}
          </ul>
        </div>

        {/* Our Offering */}
        <div>
          <h4 className="font-semibold text-[13px] leading-5 tracking-[-0.01em] text-white m-0 mb-4 2xl:text-sm">
            Our Offering
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {offerings.map((o) => (
              <li key={o}><NavLink href="#">{o}</NavLink></li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-[13px] leading-5 tracking-[-0.01em] text-white m-0 mb-4 2xl:text-sm">
            Contact Us
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {contactItems.map((c) => (
              <li key={c}>
                <span className="font-normal text-sm leading-5 tracking-[-0.15px] text-white/60">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Wordmark ── */}
      <div className="w-[98%] mx-auto overflow-hidden pt-5 xl:pt-9 2xl:pt-11">
        <span
          className="block font-extrabold leading-none tracking-[-0.04em] text-white text-center w-full"
          style={{ fontSize: "clamp(30px, 9.5vw, 149.11px)" }}
        >
          Nirvana Academy
        </span>
        {/* Line below the wordmark text, not full width */}
        <div className="w-[98%] mx-auto mt-3 xl:mt-5 border-t border-[#2a2a2a]" />
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="
          flex justify-center
          px-5 pt-3 pb-5
          sm:px-7 sm:pt-3.5 sm:pb-5
          md:px-10 md:pt-4 md:pb-6
          lg:px-[60px] lg:pt-4 lg:pb-6
          xl:px-20 xl:pt-5 xl:pb-7
          2xl:px-[120px] 2xl:pt-5 2xl:pb-9
        "
      >
        <p className="m-0 font-normal text-[10px] sm:text-[11px] uppercase tracking-[0.06em] text-[#363636]">
          © 2025 · Copyright Nirvana |{" "}
          <Link href="#" className="text-[#363636] no-underline hover:text-[#666666] transition-colors duration-150">
            Privacy
          </Link>
        </p>
      </div>

    </footer>
  );
}