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
            { threshold: 0.5 }
        );

        if (frameRef.current) {
            observer.observe(frameRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden md:overflow-visible">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    {/* Left: Text */}
                    <div className="flex-1">
                        <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-bold leading-[1.4] mb-8">
                            {["届", "け", "る", "。"].map((char, i) => (
                                <span
                                    key={`line1-${i}`}
                                    className={`inline-block transition-all duration-500 ease-out ${
                                        isVisible
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-4"
                                    }`}
                                    style={{ transitionDelay: `${i * 0.15}s` }}
                                >
                                    {char}
                                </span>
                            ))}
                            <br />
                            {["響", "か", "せ", "る", "。"].map((char, i) => (
                                <span
                                    key={`line2-${i}`}
                                    className={`inline-block transition-all duration-500 ease-out ${
                                        isVisible
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-4"
                                    }`}
                                    style={{ transitionDelay: `${(i + 4) * 0.15}s` }}
                                >
                                    {char}
                                </span>
                            ))}
                            <br />
                            {["熱", "狂", "を", "生", "む", "。"].map((char, i) => (
                                <span
                                    key={`line3-${i}`}
                                    className={`inline-block transition-all duration-500 ease-out ${
                                        isVisible
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-4"
                                    }`}
                                    style={{ transitionDelay: `${(i + 9) * 0.15}s` }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h2>
                        <p
                            className={`text-[18px] md:text-[22px] text-gray-600 leading-[2] font-medium transition-all duration-700 ease-out ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: '2.2s' }}
                        >
                            AIには届かない、最後の1マイルを繋ぐ。<br />
                            人間だけが持つ熱量で、心を動かす。<br />
                            あなたのビジネスに『熱狂』を届けます。
                        </p>
                    </div>

                    {/* Right: Star/Compass - All rotating together */}
                    <div className="flex-1 flex justify-center">
                        <div ref={frameRef} className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                            {/* 3-sided frame - animated in sequence: top, left, bottom (hidden on mobile) */}
                            {/* Top line */}
                            <div
                                className={`hidden md:block absolute -top-12 -left-16 h-[5px] bg-orange-500 origin-left transition-transform duration-700 ease-out ${
                                    isVisible ? "scale-x-100" : "scale-x-0"
                                }`}
                                style={{ width: '100vw' }}
                            />
                            {/* Left vertical line */}
                            <div
                                className={`hidden md:block absolute -top-12 -left-16 w-[5px] bg-orange-500 origin-top transition-transform duration-700 ease-out ${
                                    isVisible ? "scale-y-100" : "scale-y-0"
                                }`}
                                style={{
                                    height: 'calc(100% + 96px)',
                                    transitionDelay: '0.5s'
                                }}
                            />
                            {/* Bottom line */}
                            <div
                                className={`hidden md:block absolute -bottom-12 -left-16 h-[5px] bg-orange-500 origin-left transition-transform duration-700 ease-out ${
                                    isVisible ? "scale-x-100" : "scale-x-0"
                                }`}
                                style={{
                                    width: '100vw',
                                    transitionDelay: '1s'
                                }}
                            />

                            {/* Rotating container - star and labels rotate together */}
                            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                                {/* 4-pointed star */}
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path
                                        d="M50 5 L54 46 L95 50 L54 54 L50 95 L46 54 L5 50 L46 46 Z"
                                        fill="#F97316"
                                    />
                                </svg>

                                {/* Labels - rotate with star */}
                                {/* Top-Right - PASSION/熱狂 */}
                                <div className="absolute top-[18%] right-[18%] text-center">
                                    <span className="block text-[9px] md:text-[13px] text-gray-400 tracking-[0.1em]">PASSION</span>
                                    <span className="block text-[16px] md:text-[24px] font-bold">熱狂</span>
                                </div>

                                {/* Bottom-Right - HUMAN TOUCH/人間力 */}
                                <div className="absolute bottom-[18%] right-[8%] md:right-[12%] text-center">
                                    <span className="block text-[8px] md:text-[13px] text-gray-400 tracking-[0.1em]">HUMAN TOUCH</span>
                                    <span className="block text-[14px] md:text-[24px] font-bold">人間力</span>
                                </div>

                                {/* Bottom-Left - RESULTS/成果 */}
                                <div className="absolute bottom-[18%] left-[14%] md:left-[18%] text-center">
                                    <span className="block text-[9px] md:text-[13px] text-gray-400 tracking-[0.1em]">RESULTS</span>
                                    <span className="block text-[16px] md:text-[24px] font-bold">成果</span>
                                </div>

                                {/* Top-Left - TRUST/信頼 */}
                                <div className="absolute top-[18%] left-[18%] text-center">
                                    <span className="block text-[9px] md:text-[13px] text-gray-400 tracking-[0.1em]">TRUST</span>
                                    <span className="block text-[16px] md:text-[24px] font-bold">信頼</span>
                                </div>
                            </div>

                            {/* Center dot - Fixed */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full z-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
