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

            <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Left: Text */}
                    <div className="flex-1 md:pl-2 flex flex-col justify-center">
                        <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-[1.3] mb-10 text-gray-950">
                            {["こ", "こ", "ろ", "ざ", "す", "。", "た", "の", "し", "む", "。"].map((char, i) => (
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
                            <span className="relative">
                                {["熱", "狂", "す", "る", "。"].map((char, i) => (
                                    <span
                                        key={`line2-${i}`}
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
                            className={`text-[18px] md:text-[20px] text-gray-700 leading-[2] font-medium transition-all duration-700 ease-out ${isVisible
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
                    <div className="flex-1 flex justify-center md:justify-end" ref={frameRef}>
                        <div className={`relative w-[660px] h-[660px] md:w-[870px] md:h-[870px] transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                            {/* Will Logo Compass */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src="/will-logo-compass.png"
                                    alt="Will Logo Compass"
                                    className="w-[570px] md:w-[750px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
