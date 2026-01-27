"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

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
            className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function ServicePage() {
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

    const title = "SERVICE";

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[50vh] md:h-[60vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/pirates_dock.jpeg"
                            alt="サービス"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-black/60 to-black/40" />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-transparent" />

                    <div className="relative z-10 px-6 md:px-16 max-w-[1200px] mx-auto w-full">
                        <p
                            className={`text-gray-600 text-sm tracking-[0.3em] mb-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                        >
                            WHAT WE DO
                        </p>
                        <h1 key={animationKey} className="text-4xl md:text-7xl font-bold text-white mb-4 overflow-hidden">
                            {title.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transition-all duration-500 ${isLoaded
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
                            className={`text-lg md:text-xl text-gray-300 max-w-xl transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "0.7s" }}
                        >
                            人間だけが持つ熱量で、<br className="md:hidden" />
                            ビジネスの成功を共に創る。
                        </p>
                    </div>

                    {/* Breadcrumb */}
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 z-10">
                        <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/70">
                            <a href="/" className="hover:text-white transition-colors">
                                <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </svg>
                            </a>
                            <span>&gt;</span>
                            <a href="/" className="hover:text-white transition-colors">HINDWILL</a>
                            <span>&gt;</span>
                            <span className="text-white">サービス</span>
                        </div>
                    </div>
                </section>

                {/* BUSINESS - Sales Consulting */}
                <section className="py-16 md:py-28 bg-white" id="business">
                    <div className="max-w-[1200px] mx-auto px-6">
                        {/* Section Header with Image */}
                        <AnimatedSection>
                            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-12 md:mb-16">
                                {/* Image */}
                                <div className="w-full md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/images/japanese_people/pirates_pointing.jpeg"
                                            alt="Sales Consulting"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </div>
                                </div>
                                {/* Text */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                                        <div className="w-12 md:w-20 h-px bg-gray-400" />
                                        <span className="text-gray-800 text-sm tracking-[0.3em] font-medium">BUSINESS</span>
                                        <div className="w-12 md:w-20 h-px bg-gray-400 md:hidden" />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                                        Sales Consulting
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-600 mb-6">営業支援</p>
                                    <p className="text-gray-700 leading-[1.9] text-sm md:text-base">
                                        「勝てる戦略」と「動ける現場」を同時に構築。<br />
                                        成果にコミットする、ハンズオン型コンサルティングサービスです。
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* 6 Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "現状把握・分析",
                                    desc: "市場環境や運営体制を深く掘り下げ、売上拡大に向けた課題と改善の余地を明確にします。"
                                },
                                {
                                    step: "02",
                                    title: "戦略設計",
                                    desc: "ターゲットニーズや競合優位性を分析し、目標（KGI/KPI）達成に向けた最短ルートの戦略を策定します。"
                                },
                                {
                                    step: "03",
                                    title: "導入準備",
                                    desc: "営業リスト、トークスクリプト、管理フォーマットなど、現場が即座に動けるための基盤を整備します。"
                                },
                                {
                                    step: "04",
                                    title: "テスト運用",
                                    desc: "実務への同席や代行を通じてPDCAを高速で回し、現場のリアルな動きをブラッシュアップします。"
                                },
                                {
                                    step: "05",
                                    title: "仕組みの最適化",
                                    desc: "運用データに基づき、成功確率の高い「営業の型」を構築。仮説検証を繰り返し、再現性を高めます。"
                                },
                                {
                                    step: "06",
                                    title: "本運用・拡大",
                                    desc: "完成した「型」をチーム全体へ展開。組織の拡大と継続的なコンサルティングで、成果を最大化させます。"
                                },
                            ].map((item, index) => (
                                <AnimatedSection key={index} delay={index * 100}>
                                    <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-gray-200 transition-all h-full">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                                                {item.step}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                                <p className="text-gray-600 text-sm md:text-[15px] leading-[1.9]">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" data-header-theme="light">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="max-w-[800px] mx-auto px-6 text-center relative">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                                まずはお気軽に<br className="md:hidden" />ご相談ください
                            </h2>
                            <p className="text-gray-100 mb-10 text-sm md:text-base">
                                御社の課題に合わせた最適なソリューションをご提案いたします。<br />
                                初回のご相談は無料です。
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 md:gap-4 bg-white text-gray-900 px-5 py-3 md:px-10 md:py-4 font-bold text-[11px] md:text-base hover:bg-gray-50 transition-colors group"
                            >
                                <span>HINDWILLに問い合わせる</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
