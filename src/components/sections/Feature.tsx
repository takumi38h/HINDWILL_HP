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
        <section className="relative py-20 md:py-32 overflow-hidden md:overflow-visible">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="relative max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Left: Text */}
                    <div className="flex-1">
                        {/* Small accent text */}
                        <div
                            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        >
                            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />
                            <span className="text-orange-600 text-sm tracking-[0.2em] font-medium">OUR VALUE</span>
                        </div>

                        <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.3] mb-10">
                            {["届", "け", "る", "。"].map((char, i) => (
                                <span
                                    key={`line1-${i}`}
                                    className={`inline-block transition-all duration-600 ease-out ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${i * 0.1}s`,
                                        textShadow: char === "。" ? "none" : "2px 2px 0 rgba(249, 115, 22, 0.1)"
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                            <br />
                            {["響", "か", "せ", "る", "。"].map((char, i) => (
                                <span
                                    key={`line2-${i}`}
                                    className={`inline-block transition-all duration-600 ease-out ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${(i + 4) * 0.1}s`,
                                        textShadow: char === "。" ? "none" : "2px 2px 0 rgba(249, 115, 22, 0.1)"
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
                                        className={`inline-block text-orange-600 transition-all duration-600 ease-out ${
                                            isVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-8"
                                        }`}
                                        style={{
                                            transitionDelay: `${(i + 9) * 0.1}s`,
                                            textShadow: "3px 3px 0 rgba(249, 115, 22, 0.2)"
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                {["を", "生", "む", "。"].map((char, i) => (
                                    <span
                                        key={`line3b-${i}`}
                                        className={`inline-block transition-all duration-600 ease-out ${
                                            isVisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-8"
                                        }`}
                                        style={{
                                            transitionDelay: `${(i + 11) * 0.1}s`,
                                            textShadow: char === "。" ? "none" : "2px 2px 0 rgba(249, 115, 22, 0.1)"
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </h2>

                        <p
                            className={`text-[16px] md:text-[20px] text-gray-600 leading-[2.2] font-medium transition-all duration-700 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: '1.5s' }}
                        >
                            <span className="text-orange-600 font-bold">AI</span>には届かない、最後の1マイルを繋ぐ。<br />
                            人間だけが持つ<span className="text-orange-600 font-bold">熱量</span>で、心を動かす。<br />
                            あなたのビジネスに<span className="relative inline-block">
                                <span className="relative z-10">『熱狂』</span>
                                <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200/60 -z-0" />
                            </span>を届けます。
                        </p>
                    </div>

                    {/* Right: Modern Flame Visualization */}
                    <div className="flex-1 flex justify-center">
                        <div ref={frameRef} className="relative w-[320px] h-[400px] md:w-[420px] md:h-[500px]">

                            {/* Background circuit lines - AI aesthetic */}
                            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 500">
                                <defs>
                                    <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#F97316" stopOpacity="0"/>
                                        <stop offset="50%" stopColor="#F97316" stopOpacity="1"/>
                                        <stop offset="100%" stopColor="#F97316" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                <path d="M0 250 H150 M250 250 H400" stroke="url(#circuitGrad)" strokeWidth="1" className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>
                                <path d="M200 0 V180 M200 320 V500" stroke="url(#circuitGrad)" strokeWidth="1" className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>
                                <circle cx="200" cy="250" r="120" stroke="#F97316" strokeWidth="1" fill="none" strokeDasharray="8 8" className={`transition-all duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}/>
                            </svg>

                            {/* Orbiting particles */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[260px] md:h-[260px] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
                                </div>
                                <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]">
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-orange-300 rounded-full" />
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
                                </div>
                            </div>

                            {/* Central Flame - Geometric/Modern style */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                            }`}>
                                {/* Glow rings */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/10 blur-xl animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-orange-400/30 to-amber-400/20 blur-lg" />

                                <svg
                                    width="120"
                                    height="150"
                                    viewBox="0 0 100 130"
                                    fill="none"
                                    className="md:w-[150px] md:h-[190px] relative z-10"
                                >
                                    <defs>
                                        <linearGradient id="modernFlame1" x1="50" y1="0" x2="50" y2="130" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FBBF24"/>
                                            <stop offset="0.3" stopColor="#F97316"/>
                                            <stop offset="0.7" stopColor="#EA580C"/>
                                            <stop offset="1" stopColor="#9A3412"/>
                                        </linearGradient>
                                        <linearGradient id="modernFlame2" x1="50" y1="30" x2="50" y2="110" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FEF3C7"/>
                                            <stop offset="0.5" stopColor="#FBBF24"/>
                                            <stop offset="1" stopColor="#F59E0B"/>
                                        </linearGradient>
                                        <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="4" result="blur"/>
                                            <feMerge>
                                                <feMergeNode in="blur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Outer flame shape */}
                                    <path
                                        d="M50 5 C30 35 15 60 15 85 C15 110 30 125 50 125 C70 125 85 110 85 85 C85 60 70 35 50 5Z"
                                        fill="url(#modernFlame1)"
                                        filter="url(#flameGlow)"
                                    >
                                        <animate attributeName="d" dur="2s" repeatCount="indefinite"
                                            values="M50 5 C30 35 15 60 15 85 C15 110 30 125 50 125 C70 125 85 110 85 85 C85 60 70 35 50 5Z;
                                                    M50 8 C32 35 18 58 18 83 C18 108 32 122 50 122 C68 122 82 108 82 83 C82 58 68 35 50 8Z;
                                                    M50 5 C30 35 15 60 15 85 C15 110 30 125 50 125 C70 125 85 110 85 85 C85 60 70 35 50 5Z"
                                        />
                                    </path>

                                    {/* Inner bright core */}
                                    <path
                                        d="M50 35 C38 55 30 70 30 88 C30 105 38 115 50 115 C62 115 70 105 70 88 C70 70 62 55 50 35Z"
                                        fill="url(#modernFlame2)"
                                    >
                                        <animate attributeName="d" dur="1.5s" repeatCount="indefinite"
                                            values="M50 35 C38 55 30 70 30 88 C30 105 38 115 50 115 C62 115 70 105 70 88 C70 70 62 55 50 35Z;
                                                    M50 38 C40 55 33 68 33 86 C33 103 40 112 50 112 C60 112 67 103 67 86 C67 68 60 55 50 38Z;
                                                    M50 35 C38 55 30 70 30 88 C30 105 38 115 50 115 C62 115 70 105 70 88 C70 70 62 55 50 35Z"
                                        />
                                    </path>

                                    {/* Core highlight */}
                                    <ellipse cx="50" cy="95" rx="12" ry="15" fill="#FEF3C7" opacity="0.8">
                                        <animate attributeName="ry" dur="1s" repeatCount="indefinite" values="15;13;15"/>
                                        <animate attributeName="opacity" dur="1s" repeatCount="indefinite" values="0.8;0.6;0.8"/>
                                    </ellipse>
                                </svg>
                            </div>

                            {/* Value indicators with connecting lines */}
                            {/* Top - PASSION */}
                            <div
                                className={`absolute top-4 left-1/2 -translate-x-1/2 transition-all duration-700 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                                }`}
                                style={{ transitionDelay: "0.4s" }}
                            >
                                <div className="relative group cursor-default">
                                    <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gradient-to-b from-orange-400 to-transparent" />
                                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-transform">
                                        <span className="block text-[9px] tracking-[0.2em] opacity-80">PASSION</span>
                                        <span className="block text-[22px] md:text-[26px] font-bold leading-tight">熱狂</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right - TRUST */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 right-2 md:right-4 transition-all duration-700 ${
                                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                                style={{ transitionDelay: "0.6s" }}
                            >
                                <div className="relative group cursor-default">
                                    <div className="absolute top-1/2 -left-8 w-8 h-px bg-gradient-to-l from-orange-400 to-transparent" />
                                    <div className="bg-white border-2 border-orange-200 px-5 py-2.5 rounded-lg shadow-lg hover:border-orange-400 transition-colors">
                                        <span className="block text-[9px] tracking-[0.2em] text-orange-400">TRUST</span>
                                        <span className="block text-[22px] md:text-[26px] font-bold text-orange-600 leading-tight">信頼</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom - RESULTS */}
                            <div
                                className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-700 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                                style={{ transitionDelay: "0.8s" }}
                            >
                                <div className="relative group cursor-default">
                                    <div className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-t from-orange-400 to-transparent" />
                                    <div className="bg-white border-2 border-orange-200 px-5 py-2.5 rounded-lg shadow-lg hover:border-orange-400 transition-colors">
                                        <span className="block text-[9px] tracking-[0.2em] text-orange-400">RESULTS</span>
                                        <span className="block text-[22px] md:text-[26px] font-bold text-orange-600 leading-tight">成果</span>
                                    </div>
                                </div>
                            </div>

                            {/* Left - HUMAN TOUCH */}
                            <div
                                className={`absolute top-1/2 -translate-y-1/2 left-2 md:left-4 transition-all duration-700 ${
                                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                                }`}
                                style={{ transitionDelay: "1s" }}
                            >
                                <div className="relative group cursor-default">
                                    <div className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-r from-orange-400 to-transparent" />
                                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-lg shadow-xl shadow-orange-500/30 transform hover:scale-105 transition-transform">
                                        <span className="block text-[8px] tracking-[0.15em] opacity-80">HUMAN TOUCH</span>
                                        <span className="block text-[20px] md:text-[24px] font-bold leading-tight">人間力</span>
                                    </div>
                                </div>
                            </div>

                            {/* Center label */}
                            <div className={`absolute bottom-[38%] left-1/2 -translate-x-1/2 text-center transition-all duration-1000 ${
                                isVisible ? "opacity-100" : "opacity-0"
                            }`} style={{ transitionDelay: "1.2s" }}>
                                <span className="text-[10px] md:text-[11px] text-orange-400 tracking-[0.3em] font-medium">BEYOND AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
