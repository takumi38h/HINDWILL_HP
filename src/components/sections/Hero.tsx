"use client";

import { useEffect, useState } from "react";

export function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Start animation after mount
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const line1 = "Beyond the";
    const line2 = "Technology.";

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12">
                {/* Main Heading */}
                <h1
                    className="text-white font-medium"
                    style={{
                        fontSize: 'clamp(42px, 8vw, 90px)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {/* Line 1: I creative */}
                    <span className="block overflow-hidden">
                        {line1.split("").map((char, index) => (
                            <span
                                key={`line1-${index}`}
                                className={`inline-block transition-all duration-500 ${
                                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                                }`}
                                style={{
                                    transitionDelay: `${0.4 + index * 0.05}s`,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                    {/* Line 2: to win. */}
                    <span className="block overflow-hidden">
                        {line2.split("").map((char, index) => (
                            <span
                                key={`line2-${index}`}
                                className={`inline-block transition-all duration-500 ${
                                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                                }`}
                                style={{
                                    transitionDelay: `${0.4 + (line1.length + index) * 0.05}s`,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </span>
                </h1>
                {/* Subtitle - Below main heading */}
                <p
                    className={`text-white text-[13px] md:text-[14px] mt-6 tracking-[0.02em] transition-all duration-700 ${
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "1.2s" }}
                >
                    テクノロジーが届かない、最後の1マイルを。
                </p>
            </div>

            {/* Social Icons - Right Side */}
            <div
                className={`absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 transition-all duration-700 ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: "1.2s" }}
            >
                {/* Facebook */}
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    aria-label="Facebook"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>
                {/* X (Twitter) */}
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    aria-label="X"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                {/* Instagram */}
                <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    aria-label="Instagram"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute right-6 md:right-10 bottom-8 flex flex-col items-center gap-2 transition-all duration-700 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "1.4s" }}
            >
                <span
                    className="text-white/60 text-[11px] tracking-[0.15em]"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    SCROLL
                </span>
                <div className="w-[1px] h-10 bg-white/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white animate-scrollFill" />
                </div>
            </div>
        </section>
    );
}
