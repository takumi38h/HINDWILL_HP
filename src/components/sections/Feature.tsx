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

                            {/* Central Flame - Cleaner, less neon */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                }`}>
                                {/* Soft warm glow behind */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gray-200/30 blur-2xl" />

                                <svg
                                    width="120"
                                    height="150"
                                    viewBox="0 0 100 130"
                                    fill="none"
                                    className="md:w-[150px] md:h-[190px] relative z-10"
                                >
                                    <defs>
                                        <linearGradient id="warmFlame" x1="50" y1="0" x2="50" y2="130" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#D1D5DB" /> {/* Gray 300 */}
                                            <stop offset="1" stopColor="#374151" /> {/* Gray 700 */}
                                        </linearGradient>
                                    </defs>

                                    {/* Outer flame shape - Cleaner fill */}
                                    <path
                                        d="M50 5 C30 35 15 60 15 85 C15 110 30 125 50 125 C70 125 85 110 85 85 C85 60 70 35 50 5Z"
                                        fill="url(#warmFlame)"
                                        className="opacity-90"
                                    >
                                        <animate attributeName="d" dur="3s" repeatCount="indefinite"
                                            values="M50 5 C30 35 15 60 15 85 C15 110 30 125 50 125 C70 125 85 110 85 85 C85 60 70 35 50 5Z;
                                                    M50 8 C32 35 18 58 18 83 C18 108 32 122 50 122 C68 122 82 108 82 83 C82 58 68 35 50 8Z;
                                                    M50 5 C30 35 15 60 15 85 C15 110 30 125 50 125 C70 125 85 110 85 85 C85 60 70 35 50 5Z"
                                        />
                                    </path>

                                    {/* Inner bright core - white/yellow for warmth */}
                                    <path
                                        d="M50 35 C38 55 30 70 30 88 C30 105 38 115 50 115 C62 115 70 105 70 88 C70 70 62 55 50 35Z"
                                        fill="#F9FAFB"
                                        className="opacity-40"
                                    >
                                        <animate attributeName="d" dur="2s" repeatCount="indefinite"
                                            values="M50 35 C38 55 30 70 30 88 C30 105 38 115 50 115 C62 115 70 105 70 88 C70 70 62 55 50 35Z;
                                                    M50 38 C40 55 33 68 33 86 C33 103 40 112 50 112 C60 112 67 103 67 86 C67 68 60 55 50 38Z;
                                                    M50 35 C38 55 30 70 30 88 C30 105 38 115 50 115 C62 115 70 105 70 88 C70 70 62 55 50 35Z"
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
