"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export function Mission() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 500);
                }
            },
            { threshold: 0.8 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 md:py-28 bg-white overflow-x-hidden">
            <div className="max-w-[900px] mx-auto px-6 text-center">
                {/* Main Copy */}
                <h2 className="text-[22px] md:text-[32px] lg:text-[38px] font-bold leading-[1.6] mb-10">
                    Beyond the Technology.<br />
                    テクノロジーが届かない、最後の1マイルを。
                </h2>

                {/* CTA Button */}
                <Link
                    href="/weare"
                    className="inline-flex items-center gap-4 px-8 py-3 border border-black text-black text-[13px] font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300 group"
                >
                    <span>WE ARE?</span>
                    <span className="animate-arrowMove text-lg">→</span>
                </Link>
            </div>

            {/* Mission Photo Area - positioned to the left */}
            <div ref={sectionRef} className="mt-16 md:mt-24 relative">
                <div className="mr-auto rounded-r-lg overflow-hidden" style={{ width: '85%' }}>
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                        {/* Background Image */}
                        <img
                            src="/images/japanese_people/weare_hero.png"
                            alt="Creative digital"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>
                </div>
                {/* The feature text - aligned to page right edge, partially hidden */}
                <span
                    className={`absolute bottom-0 right-0 text-[12vw] md:text-[10vw] font-bold text-gray-200 whitespace-nowrap tracking-tighter leading-none select-none pointer-events-none transition-all duration-1000 ease-out ${isVisible ? 'translate-x-[15%] translate-y-1/2 opacity-100' : 'translate-x-full translate-y-1/2 opacity-0'
                        }`}
                >
                    The feature
                </span>
            </div>
        </section>
    );
}
