"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, useRef } from "react";

const crewMembers = [
    { name: "橋爪 拓海", role: "代表取締役", avatar: "/images/japanese_people/ceo_takumi.png" },
];

function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <span className={className}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-500 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                        }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
}

function ImageReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`relative h-full overflow-hidden ${className}`}>
            {children}
            <div
                className={`absolute inset-0 z-10 bg-gradient-to-b from-gray-300 via-gray-100 to-white transition-transform duration-500 ease-out ${isVisible ? "translate-x-full" : "translate-x-0"
                    }`}
            />
        </div>
    );
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function WeArePage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_hero.png"
                            alt="Hero image"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white px-6 md:px-16 relative z-10">
                        <p className="text-xs md:text-sm tracking-[0.3em] text-gray-300 mb-2 md:mb-4">何者？</p>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold">
                            <AnimatedText text="WE ARE" />
                        </h1>
                    </div>
                    {/* Breadcrumb */}
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 z-10">
                        <p className="text-[10px] md:text-xs text-gray-300 tracking-wider">
                            HINDWILL &gt; 何者？
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 md:py-32 relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_hero.png"
                            alt="Background"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-white/80" />
                    </div>
                    <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
                        <AnimatedSection>
                            <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 mb-4 md:mb-6">MISSION</p>
                            <h2 className="text-xl md:text-4xl font-bold mb-4 leading-tight">
                                Beyond the Technology.
                            </h2>
                            <p className="text-base md:text-2xl font-bold mb-8 md:mb-12 mt-6 md:mt-8 text-gray-700">
                                テクノロジーが届かない、最後の1マイルを。
                            </p>
                            <div className="mx-auto">
                                <p className="text-gray-600 leading-[2] text-[14px] md:text-[15px] mb-6">
                                    効率や正解は、AIに譲ればいい。
                                    これからの時代、最後に価値を持つのは、人の心を震わせる「熱狂」だ。
                                </p>
                                <p className="text-gray-600 leading-[2] text-[14px] md:text-[15px]">
                                    我々は、人間だけが持つ熱量（ヒューマン・タッチ）で、
                                    AIには埋められない「ラストワンマイル」を繋いでいく。
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="bg-white relative">
                    {/* Vision + BE THE HERO */}
                    <div className="bg-gray-100 py-6 md:py-12">
                        <AnimatedSection>
                            <div className="px-6 md:px-16">
                                <p className="text-base md:text-2xl tracking-[0.2em] text-gray-800 mb-2 font-bold">VISION</p>
                                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold">
                                    Be the Hero
                                </h2>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 items-stretch -mt-16 md:-mt-32">
                        {/* 左側：テキスト */}
                        <AnimatedSection delay={200}>
                            <div className="px-6 md:px-16 py-6 md:py-8 pt-24 md:pt-40 relative z-10">
                                <p className="text-xl md:text-3xl font-bold mb-6 md:mb-8 leading-tight text-gray-700">
                                    子供が早く大人になりたくなる、<br />
                                    背中を見せる。
                                </p>
                                <div>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] mb-4 md:mb-6 font-medium">
                                        若者が未来を諦めているのは、楽しそうに働く大人がいないからだ。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] mb-4 md:mb-6 font-medium">
                                        我々は、誰よりもストイックに、誰よりも楽しそうに働く「ビジネスアスリート」だ。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] mb-4 md:mb-6 font-medium">
                                        「仕事って、こんなに面白いんだぞ」
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] font-medium">
                                        そう背中で語れるカッコいい大人が増えれば、未来は勝手に明るくなる。
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* 右側：画像 */}
                        <ImageReveal className="h-full">
                            <div className="h-full bg-gray-50 overflow-hidden">
                                <img
                                    src="/images/japanese_people/weare_vision.png"
                                    alt="絶景"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ImageReveal>
                    </div>
                </section>

                {/* TEAM */}
                <section className="py-16 md:py-32 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-10 md:mb-16">
                                <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 mb-4 md:mb-6">TEAM</p>
                                <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">MEMBER</h2>
                                <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed">
                                    熱狂を生み出すプロフェッショナル集団
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="flex justify-center">
                            {crewMembers.map((member, index) => (
                                <AnimatedSection key={member.name} delay={index * 100}>
                                    <div className="group text-center">
                                        <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 mb-2 md:mb-4 overflow-hidden rounded-full mx-auto">
                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <p className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">{member.role}</p>
                                        <p className="text-sm md:text-lg font-bold">{member.name}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-4 pb-12 md:pt-5 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <a
                                href="/contact"
                                className="inline-block border border-black px-8 md:px-16 py-4 md:py-5 text-xs md:text-sm tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            >
                                HINDWILLに問い合わせてみる →
                            </a>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
