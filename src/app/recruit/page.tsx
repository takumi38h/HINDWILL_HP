"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

export default function RecruitPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const { isPageReady } = usePageReady();

    useEffect(() => {
        if (isPageReady) {
            setAnimationKey(prev => prev + 1);
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            setIsLoaded(false);
        }
    }, [isPageReady]);

    const title = "RECRUIT";

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_hero.png"
                            alt="絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 key={animationKey} className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 overflow-hidden">
                            {title.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transition-all duration-500 ${
                                        isLoaded
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 translate-x-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${(title.length - 1 - index) * 0.08}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>
                        <p
                            className={`text-sm md:text-lg text-gray-300 transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: "0.7s" }}
                        >
                            採用情報
                        </p>
                    </div>
                    {/* Breadcrumb */}
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 z-10">
                        <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/70">
                            <a href="/" className="hover:text-white transition-colors">
                                <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                </svg>
                            </a>
                            <span>&gt;</span>
                            <a href="/" className="hover:text-white transition-colors">HINDWILL</a>
                            <span>&gt;</span>
                            <span className="text-white">採用情報</span>
                        </div>
                    </div>
                </section>

                {/* Message */}
                <section className="py-20 md:py-32 relative overflow-hidden">
                    {/* Background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-orange-50/30" />

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

                    {/* Large decorative text in background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                        <span className="text-[120px] md:text-[200px] lg:text-[280px] font-bold text-gray-100/60 whitespace-nowrap tracking-tight">
                            HERO
                        </span>
                    </div>

                    <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
                        {/* Decorative line above title */}
                        <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                            <div className="w-8 md:w-12 h-px bg-orange-400" />
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <div className="w-8 md:w-12 h-px bg-orange-400" />
                        </div>

                        <h2
                            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: "0.3s" }}
                        >
                            <span className="text-gray-900">Be the </span>
                            <span className="text-orange-500 relative">
                                Hero
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-300" viewBox="0 0 100 12" preserveAspectRatio="none">
                                    <path d="M0,8 Q25,0 50,8 T100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>

                        <p
                            className={`text-gray-600 leading-[2] text-base md:text-lg lg:text-xl mb-6 transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                            style={{ transitionDelay: "0.5s" }}
                        >
                            HINDWILLでは、テクノロジーが届かない「ラストワンマイル」を<br className="hidden md:inline" />
                            人間の熱量で繋いでいく仲間を募集しています。
                        </p>

                        <p
                            className={`text-gray-600 leading-[2] text-base md:text-lg lg:text-xl transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                            style={{ transitionDelay: "0.7s" }}
                        >
                            誰よりもストイックに、誰よりも楽しそうに働く<br className="hidden md:inline" />
                            <span className="font-bold text-gray-900">「ビジネスアスリート」</span>として一緒に働きませんか？
                        </p>

                    </div>
                </section>

                {/* Vision */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                            {/* Left: Text */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-0.5 bg-orange-500" />
                                    <span className="text-orange-500 text-sm tracking-[0.15em] font-medium">OUR VISION</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">私たちが目指すこと</h3>
                                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                                    子供が早く大人になりたくなる、<br />背中を見せる。
                                </p>
                                <p className="text-gray-600 leading-[2] text-sm md:text-base">
                                    若者が未来を諦めているのは、楽しそうに働く大人がいないからだ。<br />
                                    「仕事って、こんなに面白いんだぞ」そう背中で語れるカッコいい大人が増えれば、未来は勝手に明るくなる。
                                </p>
                            </div>

                            {/* Right: Image */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                        alt="チームワーク"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 md:mt-16 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 md:gap-4 px-5 md:px-10 py-3 md:py-4 bg-white text-black border border-black text-[11px] md:text-base font-bold tracking-wider hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors group"
                            >
                                <span>応募・お問い合わせ</span>
                                <span className="w-5 h-5 md:w-6 md:h-6 bg-black/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
