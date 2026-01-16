"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const services = [
    {
        id: "planning",
        title: "PLANNING",
        description: "企業のマーケティング戦略と目指すゴール、ターゲットニーズを叶えるプロモーション施策のプランニングを行います。",
        image: "/images/japanese_people/planning.png",
    },
    {
        id: "creative",
        title: "CREATIVE",
        description: "ターゲットユーザーに情報を的確に伝えるデザイン～感性に訴えかけ共感を呼び起こす、課題解決のためのクリエイティブ開発。",
        image: "/images/japanese_people/creative.png",
    },
    {
        id: "development",
        title: "DEVELOPMENT",
        description: "WEBシステム・アプリ開発等、テクノロジー面のパートナーとなり業務の効率化及び、新たな収益を見据えた仕組みの開発。",
        image: "/images/japanese_people/development.png",
    },
    {
        id: "entertainment",
        title: "ENTERTAINMENT",
        description: "音楽、映像、イベントの企画制作・運営、アーティスト・タレント育成及びキャスティング。",
        image: "/images/japanese_people/entertainment.png",
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
        <section ref={sectionRef} className="py-16 md:py-24 bg-white">
            {/* Container with left margin area and slider */}
            <div className="flex">
                {/* Left margin area - fixed, cards won't enter here */}
                <div
                    className="shrink-0 flex items-start justify-center pt-2"
                    style={{ width: `${leftOffset}px` }}
                >
                    <h2
                        className={`text-[14px] md:text-[16px] lg:text-[18px] font-bold tracking-[0.3em] text-black transition-all duration-1000 ease-out ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ writingMode: "vertical-rl" }}
                    >
                        SERVICE LIST
                    </h2>
                </div>
                {/* Slider Container - overflow hidden so cards clip here */}
                <div
                    className={`flex-1 overflow-hidden transition-all duration-1000 ease-out ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-24"
                    }`}
                    style={{ transitionDelay: '1s' }}
                >
                    {/* Slider Track */}
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${translateX}px)`,
                            transition: isTransitioning ? "transform 0.5s ease-out" : "none",
                        }}
                    >
                    {duplicatedServices.map((service, index) => (
                        <Link
                            key={`${service.id}-${index}`}
                            href={`/service#${service.id}`}
                            className="shrink-0 mr-6 group"
                            style={{ width: cardWidth }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] bg-white overflow-hidden mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[0.85]"
                                />
                            </div>

                            {/* Content - letter overlaps image bottom */}
                            <div className="flex items-start justify-between -mt-12 relative z-10">
                                <div className="flex-1">
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-5xl md:text-6xl font-bold leading-none tracking-tight">
                                            {service.title.charAt(0)}
                                        </span>
                                        <span className="text-lg md:text-xl font-bold tracking-wide ml-1">
                                            {service.title.slice(1)}
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-gray-600 leading-relaxed pr-4">
                                        {service.description}
                                    </p>
                                </div>
                                {/* Arrow */}
                                <div className="mt-2">
                                    <svg
                                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
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
