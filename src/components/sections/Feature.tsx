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

                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center" ref={frameRef}>
                        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                            <img
                                src="/compass-values.png"
                                alt="Company Values Compass"
                                className="w-[280px] md:w-[380px] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
