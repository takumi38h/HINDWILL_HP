"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

const services = [
    {
        id: "consulting",
        letter: "C",
        title: "ONSULTING",
        subtitle: "戦略コンサルティング",
        description: "営業戦略の立案から組織構築まで、御社のビジネス成長を加速させる最適なソリューションをご提案。数字だけでなく、チームの熱量を引き出し、持続的な成果を実現します。",
        features: ["営業戦略立案", "組織設計", "KPI設計", "業務プロセス改善"],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-500",
    },
    {
        id: "training",
        letter: "T",
        title: "RAINING",
        subtitle: "人材育成・研修",
        description: "「売れる営業」ではなく「熱狂を生む営業」を育成。実践型研修で、お客様の心を動かすヒューマン・タッチの技術を伝授します。",
        features: ["営業研修", "ロールプレイング", "メンタリング", "スキル評価"],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
        color: "from-orange-400 to-orange-500",
        bgColor: "bg-orange-400",
    },
    {
        id: "support",
        letter: "S",
        title: "UPPORT",
        subtitle: "営業伴走支援",
        description: "営業現場に伴走し、リアルタイムで課題を解決。AIでは埋められない「ラストワンマイル」を、私たちが一緒に繋ぎます。",
        features: ["現場同行", "商談支援", "課題分析", "改善提案"],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-500",
    },
    {
        id: "outsourcing",
        letter: "O",
        title: "UTSOURCING",
        subtitle: "営業代行",
        description: "御社の営業部隊として、新規開拓から既存顧客のフォローまで代行。ビジネスアスリートが、成果にコミットします。",
        features: ["新規開拓", "アポイント獲得", "クロージング", "顧客フォロー"],
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "from-yellow-500 to-amber-500",
        bgColor: "bg-yellow-500",
    },
];

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
    const [activeService, setActiveService] = useState<string | null>(null);
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
                            src="/images/japanese_people/planning.png"
                            alt="サービス"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/80 via-black/60 to-black/40" />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-transparent" />

                    <div className="relative z-10 px-6 md:px-16 max-w-[1200px] mx-auto w-full">
                        <p
                            className={`text-orange-400 text-sm tracking-[0.3em] mb-4 transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        >
                            WHAT WE DO
                        </p>
                        <h1 key={animationKey} className="text-4xl md:text-7xl font-bold text-white mb-4 overflow-hidden">
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
                            className={`text-lg md:text-xl text-gray-300 max-w-xl transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                </svg>
                            </a>
                            <span>&gt;</span>
                            <a href="/" className="hover:text-white transition-colors">HINDWILL</a>
                            <span>&gt;</span>
                            <span className="text-white">サービス</span>
                        </div>
                    </div>
                </section>

                {/* OUR SERVICE - Intro */}
                <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent" />

                    <div className="max-w-[1200px] mx-auto px-6 relative">
                        <AnimatedSection>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-0.5 bg-orange-500" />
                                        <span className="text-orange-500 text-sm tracking-[0.2em] font-medium">OUR SERVICE</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold">
                                        <span className="text-orange-500">4</span>つのソリューションで<br />
                                        ビジネスを加速
                                    </h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed max-w-md text-[14px] md:text-[15px]">
                                    AIには届かない「ラストワンマイル」を繋ぐ。<br />
                                    人間だけが持つ熱量（ヒューマン・タッチ）で、<br />
                                    御社のビジネス成長をサポートします。
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Service Overview Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {services.map((service, index) => (
                                <AnimatedSection key={service.id} delay={index * 100}>
                                    <a
                                        href={`#${service.id}`}
                                        className="group block bg-white border border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                                        onMouseEnter={() => setActiveService(service.id)}
                                        onMouseLeave={() => setActiveService(null)}
                                    >
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                            {service.icon}
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                                {service.letter}
                                            </span>
                                            <span className="text-sm md:text-base font-bold text-gray-800">{service.title}</span>
                                        </div>
                                        <p className="text-[11px] md:text-xs text-gray-500">{service.subtitle}</p>
                                        <div className="mt-4 flex items-center gap-2 text-orange-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>詳しく見る</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </a>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Details */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/50 to-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.id} delay={100}>
                                <div
                                    id={service.id}
                                    className={`mb-16 md:mb-24 last:mb-0 scroll-mt-24`}
                                >
                                    <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                                        {/* Content */}
                                        <div className="flex-1">
                                            {/* Number badge */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                                                    <span className="text-2xl md:text-3xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                                                </div>
                                                <div className="h-px flex-1 bg-gradient-to-r from-orange-300 to-transparent" />
                                            </div>

                                            {/* Title */}
                                            <div className="mb-6">
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <span className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                                        {service.letter}
                                                    </span>
                                                    <span className="text-2xl md:text-4xl font-bold text-gray-800">{service.title}</span>
                                                </div>
                                                <p className="text-sm md:text-base text-gray-500">{service.subtitle}</p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-[2] text-[14px] md:text-[16px] mb-8">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid grid-cols-2 gap-3">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full ${service.bgColor}`} />
                                                        <span className="text-sm text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Visual */}
                                        <div className="flex-1 w-full">
                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                                {/* Gradient background */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />

                                                {/* Icon display */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="relative">
                                                        {/* Glow effect */}
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-3xl opacity-30 scale-150`} />

                                                        {/* Large icon */}
                                                        <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                                            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                                                                {service.id === 'consulting' && <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                                                                {service.id === 'training' && <><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></>}
                                                                {service.id === 'support' && <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />}
                                                                {service.id === 'outsourcing' && <path d="M13 10V3L4 14h7v7l9-11h-7z" />}
                                                            </svg>
                                                        </div>

                                                        {/* Orbiting dots */}
                                                        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                                            <div className={`absolute -top-2 left-1/2 w-3 h-3 rounded-full ${service.bgColor} opacity-60`} />
                                                        </div>
                                                        <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                                                            <div className={`absolute top-1/2 -right-2 w-2 h-2 rounded-full ${service.bgColor} opacity-40`} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Corner accents */}
                                                <div className={`absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 ${service.bgColor.replace('bg-', 'border-')} opacity-50`} />
                                                <div className={`absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 ${service.bgColor.replace('bg-', 'border-')} opacity-50`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                {/* BUSINESS - Sales Consulting */}
                <section className="py-16 md:py-28 bg-white" id="business">
                    <div className="max-w-[1200px] mx-auto px-6">
                        {/* Section Header */}
                        <AnimatedSection>
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-12 md:w-20 h-px bg-orange-300" />
                                    <span className="text-orange-500 text-sm tracking-[0.3em] font-medium">BUSINESS</span>
                                    <div className="w-12 md:w-20 h-px bg-orange-300" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                                    Sales Consulting
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 mb-6">営業支援</p>
                                <p className="text-gray-700 leading-[1.9] text-sm md:text-base max-w-2xl mx-auto">
                                    「勝てる戦略」と「動ける現場」を同時に構築。<br />
                                    成果にコミットする、ハンズオン型コンサルティングサービスです。
                                </p>
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
                                    <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-orange-200 transition-all h-full">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
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
                <section className="py-20 md:py-28 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 relative overflow-hidden" data-header-theme="light">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="max-w-[800px] mx-auto px-6 text-center relative">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                                まずはお気軽に<br className="md:hidden" />ご相談ください
                            </h2>
                            <p className="text-orange-100 mb-10 text-sm md:text-base">
                                御社の課題に合わせた最適なソリューションをご提案いたします。<br />
                                初回のご相談は無料です。
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 md:gap-4 bg-white text-orange-600 px-5 py-3 md:px-10 md:py-4 font-bold text-[11px] md:text-base hover:bg-orange-50 transition-colors group"
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
