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
                            {["こ", "こ", "ろ", "ざ", "す", "。"].map((char, i) => (
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
                            {["た", "の", "し", "む", "。"].map((char, i) => (
                                <span
                                    key={`line2-${i}`}
                                    className={`inline-block transition-all duration-600 ease-out ${isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                        }`}
                                    style={{
                                        transitionDelay: `${(i + 6) * 0.1}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                            <br />
                            <span className="relative">
                                {["熱", "狂", "す", "る", "。"].map((char, i) => (
                                    <span
                                        key={`line3-${i}`}
                                        className={`inline-block text-gray-900 transition-all duration-600 ease-out ${isVisible
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
                            テクノロジーの先にある、「人の心」に寄り添っていく。<br />
                            人間だけが持つ<span className="text-gray-900 font-bold">熱量</span>で、心を動かす。<br />
                            <span className="text-gray-900 font-bold">AI</span>には埋められない、<span className="relative inline-block">
                                <span className="relative z-10">ラスト1マイル</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-gray-100 -z-0" />
                            </span>を繋いでいきます。
                        </p>
                    </div>

                    {/* Right: Compass with Values */}
                    <div className="flex-1 flex justify-center" ref={frameRef}>
                        <div className={`relative w-[440px] h-[440px] md:w-[580px] md:h-[580px] transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>

                            {/* Decorative ring */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />

                            {/* Rotating pointers on the ring - 4 arrows at diagonal positions (45°, 135°, 225°, 315°) */}
                            <div className={`absolute top-1/2 left-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] -translate-x-1/2 -translate-y-1/2 rotate-45 animate-spin-slow transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                {/* Top pointer (now at 45° position) */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg width="8" height="48" viewBox="0 0 8 48" fill="none" className="md:w-[10px] md:h-[60px]">
                                        <path d="M4 0L8 48H0L4 0Z" fill="#B8860B" />
                                    </svg>
                                </div>
                                {/* Right pointer (now at 135° position) */}
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rotate-90">
                                    <svg width="8" height="48" viewBox="0 0 8 48" fill="none" className="md:w-[10px] md:h-[60px]">
                                        <path d="M4 0L8 48H0L4 0Z" fill="#B8860B" />
                                    </svg>
                                </div>
                                {/* Bottom pointer (now at 225° position) */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180">
                                    <svg width="8" height="48" viewBox="0 0 8 48" fill="none" className="md:w-[10px] md:h-[60px]">
                                        <path d="M4 0L8 48H0L4 0Z" fill="#B8860B" />
                                    </svg>
                                </div>
                                {/* Left pointer (now at 315° position) */}
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 -rotate-90">
                                    <svg width="8" height="48" viewBox="0 0 8 48" fill="none" className="md:w-[10px] md:h-[60px]">
                                        <path d="M4 0L8 48H0L4 0Z" fill="#B8860B" />
                                    </svg>
                                </div>
                            </div>

                            {/* Compass image with rotation animation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src="/compass-values.png"
                                    alt="Company Values Compass"
                                    className="w-[280px] md:w-[380px] h-auto animate-spin-slow"
                                />
                            </div>

                            {/* Top: Will 志 */}
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`} style={{ transitionDelay: "0.4s" }}>
                                <span className="block text-[20px] md:text-[24px] font-bold text-gray-900 tracking-wider">Will</span>
                                <span className="block text-[14px] md:text-[16px] text-gray-600">志</span>
                            </div>
                            {/* Bottom: YOLO 常に楽しめ */}
                            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "0.5s" }}>
                                <span className="block text-[20px] md:text-[24px] font-bold text-gray-900 tracking-wider">YOLO</span>
                                <span className="block text-[14px] md:text-[16px] text-gray-600">常に楽しめ</span>
                            </div>
                            {/* Left: Civility 我以外皆我師 */}
                            <div className={`absolute top-1/2 left-0 -translate-y-1/2 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: "0.6s" }}>
                                <span className="block text-[20px] md:text-[24px] font-bold text-gray-900 tracking-wider">Civility</span>
                                <span className="block text-[12px] md:text-[14px] text-gray-600">我以外皆我師</span>
                            </div>
                            {/* Right: Loyalty 信じ抜く */}
                            <div className={`absolute top-1/2 right-0 -translate-y-1/2 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "0.7s" }}>
                                <span className="block text-[20px] md:text-[24px] font-bold text-gray-900 tracking-wider">Loyalty</span>
                                <span className="block text-[14px] md:text-[16px] text-gray-600">信じ抜く</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
