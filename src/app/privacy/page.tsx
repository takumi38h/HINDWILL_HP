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
            className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function PrivacyPage() {
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

    const title = "PRIVACY POLICY";

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_vision.png"
                            alt="ビジネス"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/70 to-black/60" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 key={animationKey} className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 overflow-hidden">
                            {title.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transition-all duration-500 ${
                                        isLoaded
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 translate-x-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${(title.length - 1 - index) * 0.05}s`,
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>
                        <p
                            className={`text-sm md:text-lg text-gray-300 transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: "1s" }}
                        >
                            プライバシーポリシー
                        </p>
                    </div>
                    {/* Breadcrumb */}
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 z-10">
                        <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/70">
                            <Link href="/" className="hover:text-white transition-colors">
                                <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                </svg>
                            </Link>
                            <span>&gt;</span>
                            <Link href="/" className="hover:text-white transition-colors">HINDWILL</Link>
                            <span>&gt;</span>
                            <span className="text-white">プライバシーポリシー</span>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[900px] mx-auto px-6">
                        <AnimatedSection>
                            <div className="mb-10 md:mb-14">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">個人情報保護方針</h2>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose">
                                    株式会社HINDWILL（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）その他の関連法令を遵守するとともに、以下のプライバシーポリシー（以下「本ポリシー」といいます）に従い、適切な取扱い及び保護に努めます。
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-8 md:space-y-12">
                            <AnimatedSection delay={100}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">1</span>
                                        個人情報の定義
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12">
                                        本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報、すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、または個人識別符号が含まれるものを指します。
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={150}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">2</span>
                                        個人情報の収集方法
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12">
                                        当社は、お客様から個人情報を収集する際には、適法かつ公正な手段により、お客様ご本人の同意を得た上で収集いたします。当社は、以下の方法で個人情報を収集することがあります。
                                    </p>
                                    <ul className="mt-4 space-y-2 pl-11 md:pl-12">
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>お問い合わせフォームからのご連絡</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>電話、メール、書面等によるお問い合わせ</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>名刺交換等の商談・打ち合わせ</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>契約締結時の書類提出</span>
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={200}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">3</span>
                                        個人情報の利用目的
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12 mb-4">
                                        当社は、収集した個人情報を以下の目的のために利用いたします。
                                    </p>
                                    <ul className="space-y-2 pl-11 md:pl-12">
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>当社サービスの提供・運営</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>お客様からのお問い合わせへの対応</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>契約の履行、請求書の発行等の事務処理</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>当社サービスに関する情報のご案内</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>サービス改善のための分析・調査</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>その他上記利用目的に付随する目的</span>
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={250}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">4</span>
                                        個人情報の第三者提供
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12 mb-4">
                                        当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                                    </p>
                                    <ul className="space-y-2 pl-11 md:pl-12">
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>法令に基づく場合</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき</span>
                                        </li>
                                        <li className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">•</span>
                                            <span>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</span>
                                        </li>
                                    </ul>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={300}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">5</span>
                                        個人情報の安全管理
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12">
                                        当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、組織的、人的、物理的および技術的な安全管理措置を講じます。また、個人情報を取り扱う従業員に対しては、適切な監督を行います。
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={350}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">6</span>
                                        個人情報の開示・訂正・削除
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12">
                                        お客様は、当社に対し、個人情報保護法の定めに従い、ご自身の個人情報の開示、訂正、追加、削除、利用停止または消去を請求することができます。ご請求の際は、下記お問い合わせ窓口までご連絡ください。本人確認をさせていただいた上で、適切に対応いたします。
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={400}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">7</span>
                                        Cookieの使用について
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12">
                                        当社ウェブサイトでは、お客様の利便性向上およびサービス改善のため、Cookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定によりCookieを無効にすることができます。ただし、Cookieを無効にした場合、当社ウェブサイトの一部機能がご利用いただけなくなる可能性があります。
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={450}>
                                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">8</span>
                                        プライバシーポリシーの変更
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose pl-11 md:pl-12">
                                        当社は、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。重要な変更がある場合は、当社ウェブサイト上でお知らせいたします。
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={500}>
                                <div className="bg-orange-50 rounded-lg p-6 md:p-8 border border-orange-100">
                                    <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold">9</span>
                                        お問い合わせ窓口
                                    </h3>
                                    <div className="pl-11 md:pl-12">
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                                            個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。
                                        </p>
                                        <div className="bg-white rounded-lg p-4 md:p-6">
                                            <p className="font-bold text-gray-900 text-sm md:text-base mb-3">株式会社HINDWILL</p>
                                            <div className="text-sm md:text-base text-gray-700">
                                                <p className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Email: takumi1127h@gmail.com</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection delay={550}>
                            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200 text-center">
                                <p className="text-gray-500 text-xs md:text-sm">
                                    制定日：2024年1月1日<br />
                                    最終改定日：2024年1月1日
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-4 pb-12 md:pt-5 md:pb-20 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <Link
                                href="/contact"
                                className="inline-block border border-orange-500 text-orange-500 px-5 md:px-16 py-3 md:py-5 text-[11px] md:text-sm tracking-wider hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                お問い合わせはこちら →
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
