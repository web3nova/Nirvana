"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const events = [
  {
    id: 1,
    title: "Nirvana Village Square (NVS)",
    image: "/nirvana-village-square.svg",
    href: "/Events",
  },
  {
    id: 2,
    title: "AMA sessions",
    image: "/ama-sessions.svg",
    href: "/Events",
  },
  {
    id: 3,
    title: "Exclusive virtual master class",
    image: "/exclusive-virtual-masterclass.svg",
    href: "/Events",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className={`${jakarta.className} w-full bg-white py-[72px] mt-[20px] px-6 md:px-12`}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <h2
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "47.2px",
              letterSpacing: "-0.05em",
              textAlign: "center",
              color: "#030303",
              margin: 0,
            }}
          >
            Events
          </h2>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "18px",
              letterSpacing: "-0.36px",
              textAlign: "center",
              color: "#6F6F6F",
              margin: 0,
              width: 474,
              maxWidth: "100%",
              height: 46,
            }}
          >
            Stay ahead of the game with exclusive events designed to level up
            your Web3 knowledge and network with idols.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 justify-items-center">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group cursor-pointer"
              style={{
                textDecoration: "none",
                /* Card container exact specs */
                width: 392,
                maxWidth: "100%",
                height: 387,
                borderRadius: 15,
                background: "#F7F8F9",
                paddingTop: 5,
                paddingRight: 5,
                paddingBottom: 23,
                paddingLeft: 5,
                gap: 12,
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
            >
              {/* Image — fills remaining height above text block */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  flex: 1,
                  borderRadius: 11,
                  background: "#E8E8E8",
                  minHeight: 0,
                }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text — sits in the bottom padding area */}
              <div
                className="flex flex-col"
                style={{ gap: 2, paddingLeft: 8, paddingRight: 8, flexShrink: 0 }}
              >
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    fontSize: 21,
                    lineHeight: "32px",
                    letterSpacing: "-1px",
                    color: "#333333",
                  }}
                >
                  {event.title}
                </span>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "-0.15px",
                    color: "rgba(51,51,51,0.5)",
                    transition: "color 0.2s ease",
                  }}
                  className="group-hover:!text-[#2B7FFF]"
                >
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── See all button ── */}
        <div className="flex justify-center">
          <Link
            href="/Events"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: 131.82,
              height: 50,
              borderRadius: 111,
              paddingTop: 15,
              paddingRight: 31,
              paddingBottom: 15,
              paddingLeft: 31,
              background: "#2B7FFF",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            }}
            className="hover:bg-[#1a6ff0] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(43,127,255,0.35)] active:translate-y-0"
          >
            <span
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "100%",
                letterSpacing: "-0.01em",
                color: "#fff",
              }}
            >
              See all
            </span>
            {/* Arrow */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}