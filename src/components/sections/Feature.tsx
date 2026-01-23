"use client";

import { useEffect, useState, useRef } from "react";

export function Feature() {
    const [isVisible, setIsVisible] = useState(false);
    const frameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (frameRef.current) {
            observer.observe(frameRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-20 md:py-32 overflow-hidden md:overflow-visible bg-gray-50">
            {/* Simple subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50" />

            <div className="relative max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Left: Text */}
                    <div className="flex-1">
                        {/* Small accent text */}
                        <div
                            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            <div className="w-8 h-px bg-gray-600" />
                            <span className="text-gray-900 text-sm tracking-[0.2em] font-medium">OUR VALUE</span>
                        </div>

                        <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.3] mb-10 text-gray-950">
                            {["届", "け", "る", "。"].map((char, i) => (
                                <span
                                    key={`line1-${i}`}
                                    className={`inline-block transition-all duration-600 ease-out ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                        }`}
                                    style={{
                                        transitionDelay: `${i * 0.1}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                            <br />
                            {["響", "か", "せ", "る", "。"].map((char, i) => (
                                <span
                                    key={`line2-${i}`}
                                    className={`inline-block transition-all duration-600 ease-out ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                        }`}
                                    style={{
                                        transitionDelay: `${(i + 4) * 0.1}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                            <br />
                            <span className="relative">
                                {["熱", "狂"].map((char, i) => (
                                    <span
                                        key={`line3-${i}`}
                                        className={`inline-block text-gray-900 transition-all duration-600 ease-out ${isVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-8"
                                            }`}
                                        style={{
                                            transitionDelay: `${(i + 9) * 0.1}s`,
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                {["を", "生", "む。"].map((char, i) => (
                                    <span
                                        key={`line3b-${i}`}
                                        className={`inline-block transition-all duration-600 ease-out ${isVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-8"
                                            }`}
                                        style={{
                                            transitionDelay: `${(i + 11) * 0.1}s`,
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </h2>

                        <p
                            className={`text-[16px] md:text-[20px] text-gray-700 leading-[2.2] font-medium transition-all duration-700 ease-out ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: '1.5s' }}
                        >
                            <span className="text-gray-900 font-bold">AI</span>には届かない、最後の1マイルを繋ぐ。<br />
                            人間だけが持つ<span className="text-gray-900 font-bold">熱量</span>で、心を動かす。<br />
                            あなたのビジネスに<span className="relative inline-block">
                                <span className="relative z-10">『熱狂』</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-gray-100 -z-0" />
                            </span>を届けます。
                        </p>
                    </div>

                    {/* Right: Modern Flame Visualization - SIMPLIFIED */}
                    <div className="flex-1 flex justify-center">
                        <div ref={frameRef} className="relative w-[320px] h-[400px] md:w-[420px] md:h-[500px]">

                            {/* Simple ring instead of circuit lines */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-gray-50 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />

                            {/* Central Yacht - wave animation */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                }`}>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gray-200/20 blur-2xl" />

                                <svg
                                    width="140"
                                    height="150"
                                    viewBox="0 0 120 130"
                                    fill="none"
                                    className="md:w-[170px] md:h-[180px] relative z-10"
                                >
                                    <defs>
                                        <linearGradient id="sailGrad" x1="60" y1="10" x2="60" y2="85" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#DAA520" />
                                            <stop offset="1" stopColor="#B8860B" />
                                        </linearGradient>
                                    </defs>

                                    {/* Yacht body - rocks on waves */}
                                    <g>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="-4 60 90;4 60 90;-4 60 90"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                        {/* Main sail */}
                                        <path d="M60 10L82 80H42Z" fill="url(#sailGrad)" className="opacity-90" />
                                        {/* Jib sail */}
                                        <path d="M56 20L38 75H56Z" fill="#B8860B" opacity="0.7" />
                                        {/* Hull */}
                                        <path d="M35 83L85 83L78 93H42Z" fill="#1F2937" opacity="0.8" />
                                    </g>

                                    {/* Wave 1 */}
                                    <path fill="none" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
                                        <animate
                                            attributeName="d"
                                            values="M5 100C20 95 35 95 50 100C65 105 80 105 95 100C110 95 115 95 120 100;M5 100C20 105 35 105 50 100C65 95 80 95 95 100C110 105 115 105 120 100;M5 100C20 95 35 95 50 100C65 105 80 105 95 100C110 95 115 95 120 100"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                    {/* Wave 2 */}
                                    <path fill="none" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3">
                                        <animate
                                            attributeName="d"
                                            values="M0 112C15 109 30 109 48 112C66 115 80 115 98 112C112 109 118 109 120 112;M0 112C15 115 30 115 48 112C66 109 80 109 98 112C112 115 118 115 120 112;M0 112C15 109 30 109 48 112C66 115 80 115 98 112C112 109 118 109 120 112"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                </svg>
                            </div>

                            {/* Value indicators with connecting lines - Simplified */}
                            {/* Top - PASSION */}
                            <div
                                className={`absolute top-4 left-1/2 -translate-x-1/2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                                    }`}
                                style={{ transitionDelay: "0.4s" }}
                            >
                                <div className="relative group cursor-default text-center">
                                    <span className="block text-[10px] tracking-[0.2em] text-gray-400 mb-1">PASSION</span>
                                    <span className="block text-[20px] font-bold text-gray-900">熱狂</span>
                                </div>
                            </div>

                            {/* Right - TRUST */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 right-0 md:right-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                    }`}
                                style={{ transitionDelay: "0.6s" }}
                            >
                                <div className="text-center">
                                    <span className="block text-[10px] tracking-[0.2em] text-gray-400 mb-1">TRUST</span>
                                    <span className="block text-[20px] font-bold text-gray-900">信頼</span>
                                </div>
                            </div>

                            {/* Bottom - RESULTS */}
                            <div
                                className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: "0.8s" }}
                            >
                                <div className="text-center">
                                    <span className="block text-[10px] tracking-[0.2em] text-gray-400 mb-1">RESULTS</span>
                                    <span className="block text-[20px] font-bold text-gray-900">成果</span>
                                </div>
                            </div>

                            {/* Left - HUMAN TOUCH */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 left-0 md:left-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                                    }`}
                                style={{ transitionDelay: "1s" }}
                            >
                                <div className="text-center">
                                    <span className="block text-[10px] tracking-[0.2em] text-gray-400 mb-1">HUMAN</span>
                                    <span className="block text-[20px] font-bold text-gray-900">人間力</span>
                                </div>
                            </div>

                            {/* Center label */}
                            <div className={`absolute bottom-[38%] left-1/2 -translate-x-1/2 text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                                }`} style={{ transitionDelay: "1.2s" }}>
                                <span className="text-[10px] md:text-[11px] text-gray-600/80 tracking-[0.3em] font-medium">BEYOND AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
