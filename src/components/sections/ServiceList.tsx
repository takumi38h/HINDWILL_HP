"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const services = [
    {
        id: "consulting",
        title: "CONSULTING",
        description: "営業戦略の立案から組織構築まで、御社のビジネス成長を加速させる最適なソリューションをご提案。数字だけでなく、チームの熱量を引き出します。",
        image: "/images/japanese_people/pirates_pointing.jpeg",
    },
    {
        id: "training",
        title: "TRAINING",
        description: "「売れる営業」ではなく「熱狂を生む営業」を育成。実践型研修で、お客様の心を動かすヒューマン・タッチの技術を伝授します。",
        image: "/images/japanese_people/pirates_treasure.jpeg",
    },
    {
        id: "support",
        title: "SUPPORT",
        description: "営業現場に伴走し、リアルタイムで課題を解決。AIでは埋められない「ラストワンマイル」を、私たちが一緒に繋ぎます。",
        image: "/images/japanese_people/pirates_beach_duo.jpeg",
    },
    {
        id: "outsourcing",
        title: "OUTSOURCING",
        description: "御社の営業部隊として、新規開拓から既存顧客のフォローまで代行。ビジネスアスリートが、成果にコミットします。",
        image: "/images/japanese_people/pirates_telescope.jpeg",
    },
];

// Duplicate for seamless loop
const duplicatedServices = [...services, ...services];

export function ServiceList() {
    const [cardWidth, setCardWidth] = useState(360);
    const [leftOffset, setLeftOffset] = useState(128);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Intersection Observer for entrance animation
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

    useEffect(() => {
        const updateSizes = () => {
            if (window.innerWidth >= 1024) {
                setCardWidth(360);
                setLeftOffset(200); // left margin for SERVICE LIST text
            } else if (window.innerWidth >= 768) {
                setCardWidth(320);
                setLeftOffset(150); // left margin for tablet
            } else {
                setCardWidth(window.innerWidth - 80);
                setLeftOffset(80); // left margin for mobile
            }
        };
        updateSizes();
        window.addEventListener("resize", updateSizes);
        return () => window.removeEventListener("resize", updateSizes);
    }, []);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= services.length) {
                    // Reset without transition
                    setIsTransitioning(false);
                    return 0;
                }
                setIsTransitioning(true);
                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Re-enable transition after reset
    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    const gap = 24;
    const translateX = currentIndex * (cardWidth + gap);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-gray-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

            {/* Container with left margin area and slider */}
            <div className="relative flex">
                {/* Left margin area - fixed, cards won't enter here */}
                <div
                    className="shrink-0 flex flex-col items-center justify-start pt-2 gap-8"
                    style={{ width: `${leftOffset}px` }}
                >
                    <h2
                        className={`text-[14px] md:text-[16px] lg:text-[18px] font-bold tracking-[0.3em] text-gray-900 transition-all duration-1000 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ writingMode: "vertical-rl" }}
                    >
                        SERVICE LIST
                    </h2>

                    {/* Progress indicators */}
                    <div
                        className={`hidden md:flex flex-col gap-2 transition-all duration-1000 ${
                            isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: "1.2s" }}
                    >
                        {services.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-8 rounded-full transition-all duration-300 ${
                                    (currentIndex % services.length) === i
                                        ? "bg-gradient-to-b from-gray-800 to-gray-600 scale-y-110"
                                        : "bg-gray-200"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Slider Container - overflow hidden so cards clip here */}
                <div
                    className={`flex-1 overflow-hidden transition-all duration-1000 ease-out ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-24"
                    }`}
                    style={{ transitionDelay: '0.8s' }}
                >
                    {/* Slider Track */}
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${translateX}px)`,
                            transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
                        }}
                    >
                    {duplicatedServices.map((service, index) => (
                        <Link
                            key={`${service.id}-${index}`}
                            href={`/service#${service.id}`}
                            className="shrink-0 mr-6 group"
                            style={{ width: cardWidth }}
                        >
                            {/* Image with hover glow */}
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden mb-6 rounded-sm">
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/0 to-gray-800/0 group-hover:from-gray-600/10 group-hover:to-gray-800/20 transition-all duration-500 z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                                {/* Bottom gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content - letter overlaps image bottom */}
                            <div className="flex items-start justify-between -mt-12 relative z-10">
                                <div className="flex-1">
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-5xl md:text-6xl font-bold leading-none tracking-tight bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-gray-700 transition-all duration-300">
                                            {service.title.charAt(0)}
                                        </span>
                                        <span className="text-lg md:text-xl font-bold tracking-wide ml-1 text-gray-800">
                                            {service.title.slice(1)}
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-gray-600 leading-relaxed pr-4 group-hover:text-gray-800 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                                {/* Arrow with hover animation */}
                                <div className="mt-2 p-2 rounded-full bg-transparent group-hover:bg-gray-100 transition-all duration-300">
                                    <svg
                                        className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transform group-hover:translate-x-1 transition-all duration-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
