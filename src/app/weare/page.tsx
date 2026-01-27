"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, useRef } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

const crewMembers = [
    { name: "橋爪 拓海", role: "代表取締役", avatar: "/images/japanese_people/ceo_takumi.jpg" },
];

function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
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

    return (
        <span key={animationKey} className={className}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-500 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`}
                    style={{ transitionDelay: `${(text.length - 1 - index) * 0.08}s` }}
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
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_hero.png"
                            alt="Hero image"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white px-6 md:px-16 relative z-10">
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4">
                            <AnimatedText text="WE ARE" />
                        </h1>
                        <p className="text-xs md:text-sm tracking-[0.3em] text-gray-300">何者？</p>
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
                            <span className="text-white">何者？</span>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 md:py-32 relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_hero.png"
                            alt="Background"
                            className="w-full h-full object-cover grayscale opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
                    </div>
                    <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
                        <AnimatedSection>
                            {/* Label with decorative lines */}
                            <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
                                <div className="w-12 md:w-20 h-px bg-gray-400" />
                                <p className="text-xs md:text-sm tracking-[0.3em] text-gray-800 font-medium">Mission</p>
                                <div className="w-12 md:w-20 h-px bg-gray-400" />
                            </div>

                            {/* Main title */}
                            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
                                Beyond the Technology.
                            </h2>

                            {/* Japanese subtitle */}
                            <p className="text-sm md:text-lg tracking-[0.15em] text-gray-800 font-medium">
                                テクノロジーが届かない、最後の1マイルを。
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="bg-white relative">
                    {/* Vision header */}
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-8 md:py-14">
                        <AnimatedSection>
                            <div className="px-6 md:px-16 text-center md:text-left">
                                <p className="text-xs md:text-sm tracking-[0.3em] text-gray-800 font-medium mb-3">Vision</p>
                                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                                    Be the Hero
                                </h2>
                                <p className="text-sm md:text-lg tracking-[0.15em] text-gray-800 font-medium">
                                    「次世代が夢を描ける、活気ある社会へ」
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 items-stretch">
                        {/* 左側：テキスト */}
                        <AnimatedSection delay={200}>
                            <div className="px-6 md:px-16 py-10 md:py-16 relative z-10">
                                <div>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] mb-4 md:mb-6 font-medium">
                                        若者が未来を諦めるのは、楽しそうに働く大人を見たことがないからだ。働くことは、本当はもっと自由で、熱狂的だ。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] font-medium">
                                        だからこそ、人が成長できる仕事と環境をつくり続ける。
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* 右側：画像 */}
                        <ImageReveal className="h-full">
                            <div className="h-full bg-gray-50 overflow-hidden min-h-[300px] md:min-h-[400px]">
                                <img
                                    src="/images/japanese_people/weare_hero_pirates.jpeg"
                                    alt="絶景"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ImageReveal>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-12 md:w-20 h-px bg-gray-400" />
                                    <p className="text-xs md:text-sm tracking-[0.3em] text-gray-800 font-medium">VALUES</p>
                                    <div className="w-12 md:w-20 h-px bg-gray-400" />
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">私たちの価値観</h2>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-6 md:space-y-8">
                            {/* Value 1 */}
                            <AnimatedSection delay={100}>
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                            01
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">GIVE FIRST</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">期待を超える貢献を</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>まずは自分から。相手の想像を一段上回る価値を提供し続けよう。その積み重ねが信頼となり、最終的に自分を動かす大きな力に変わる。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Value 2 */}
                            <AnimatedSection delay={200}>
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                            02
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">ALWAYS ENJOY</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">挑戦のドラマを楽しもう</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>失敗のない道に成長はない。あえて困難な道を選び、壁を乗り越えていく姿を見せよう。誰もが憧れる、挑戦に満ちた物語の主人公であれ。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Value 3 */}
                            <AnimatedSection delay={300}>
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                            03
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">SHARE ENTHUSIASM</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">熱狂を分かち合う</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>ひとりの成果より、チームの感動を。同じ志を持つ仲間と高みを目指し、成し遂げた瞬間の熱狂を分かち合う。それこそが、私たちが働く最大の理由だ。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Value 4 */}
                            <AnimatedSection delay={400}>
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                            04
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">STAY HUNGRY</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">誠実に、どん欲に</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>結果には誇りを、プロセスには謙虚さを。自分の未熟さを認め、周囲から学ぶ素直さを忘れない。その泥臭い努力が、圧倒的な実力を作る。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
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
                                className="inline-block border border-gray-800 text-gray-800 px-5 md:px-16 py-3 md:py-5 text-[11px] md:text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300"
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
