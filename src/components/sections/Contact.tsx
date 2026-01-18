"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useMemo } from "react";

export function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Generate particles only once
    const particles = useMemo(() =>
        [...Array(15)].map((_, i) => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${4 + Math.random() * 3}s`,
            size: `${3 + Math.random() * 5}px`,
        }))
    , []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" data-header-theme="light">
            {/* Dynamic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900" />

            {/* Animated gradient overlay */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(ellipse at 30% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(249, 115, 22, 0.4) 0%, transparent 50%)",
                }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/20"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            animation: `floatParticle ${particle.duration} ease-in-out infinite`,
                            animationDelay: particle.delay,
                        }}
                    />
                ))}
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative max-w-[800px] mx-auto px-6 text-center text-white">
                {/* Title with animation */}
                <div className="overflow-hidden">
                    <h2
                        className={`text-[32px] md:text-[42px] font-bold mb-3 transition-all duration-700 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                        style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
                    >
                        CONTACT
                    </h2>
                </div>
                <p
                    className={`text-[14px] text-orange-200 mb-10 transition-all duration-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "0.2s" }}
                >
                    お問い合わせ
                </p>

                {/* Description */}
                <p
                    className={`text-[15px] md:text-[16px] text-white/90 leading-[2.2] mb-12 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "0.4s" }}
                >
                    セールスコンサルティングのご相談など、<br />
                    お気軽にお問い合わせください。
                </p>

                {/* CTA Button with glow effect */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "0.6s" }}
                >
                    <Link
                        href="/contact"
                        className="relative inline-flex items-center gap-2 md:gap-4 px-5 py-3 md:px-8 md:py-4 bg-white text-gray-900 text-[12px] md:text-[14px] font-bold hover:bg-gray-50 transition-all duration-300 group overflow-hidden"
                    >
                        {/* Shine effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                        <span className="relative z-10">お問い合わせはこちら</span>

                        {/* Arrow with circle background */}
                        <span className="relative z-10 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                            <svg
                                className="w-3 h-3 md:w-4 md:h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Additional info */}
                <p
                    className={`mt-8 text-[12px] text-white/60 transition-all duration-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "0.8s" }}
                >
                    24時間受付中 / 通常2営業日以内にご返信いたします
                </p>
            </div>
        </section>
    );
}
