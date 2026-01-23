"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, useRef } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

const crewMembers = [
    { name: "橋爪 拓海", role: "代表取締役", avatar: "/images/japanese_people/ceo_takumi.png" },
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
                                <p className="text-xs md:text-sm tracking-[0.3em] text-gray-800 font-medium">MISSION</p>
                                <div className="w-12 md:w-20 h-px bg-gray-400" />
                            </div>

                            {/* Main title */}
                            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
                                熱狂で、世界を動かす。
                            </h2>

                            {/* English subtitle */}
                            <p className="text-sm md:text-lg tracking-[0.15em] text-gray-800 font-medium italic">
                                Ignite the World.
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
                                <p className="text-xs md:text-sm tracking-[0.3em] text-gray-800 font-medium mb-3">VISION</p>
                                <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                                    誇れる航海を、誇れる仲間と。
                                </h2>
                                <p className="text-sm md:text-lg tracking-[0.15em] text-gray-800 font-medium italic">
                                    A Voyage Worth Living.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 items-stretch">
                        {/* 左側：テキスト */}
                        <AnimatedSection delay={200}>
                            <div className="px-6 md:px-16 py-10 md:py-16 relative z-10">
                                <p className="text-xl md:text-2xl font-bold mb-6 md:mb-8 leading-tight text-gray-800">
                                    本気で生きる人が集まり、<br />
                                    背中で語り合える組織であり続ける。
                                </p>
                                <div>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] mb-4 md:mb-6 font-medium">
                                        若者が未来を諦めているのは、楽しそうに働く大人がいないからだ。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] mb-4 md:mb-6 font-medium">
                                        我々は、誰よりもストイックに、誰よりも楽しそうに働く「ビジネスアスリート」だ。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[13px] md:text-[15px] font-medium">
                                        そう背中で語れるカッコいい大人が増えれば、未来は勝手に明るくなる。
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* 右側：画像 */}
                        <ImageReveal className="h-full">
                            <div className="h-full bg-gray-50 overflow-hidden min-h-[300px] md:min-h-[400px]">
                                <img
                                    src="/images/japanese_people/weare_vision.png"
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
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">人生を、本気で使え</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">Life Is the Voyage.</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>時間は有限だ。<br />惰性で生きるほど、人生は長くない。</p>
                                                <p>志を掲げて、熱狂しよう。<br />人の心を動かす仕事は、熱量からしか生まれない。</p>
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
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">かっこよくあれ</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">Stay Cool. Stay Foolish.</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>人生も、仕事も、振る舞いも。<br />自分の生き方を、自分で誇れるか。</p>
                                                <p>ダサいことはしない。<br />人のせいにしない。<br />誰のことも見下さない。</p>
                                                <p className="font-medium text-gray-800">楽な道より、誇れる選択を。</p>
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
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">逆境を楽しめ</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">Embrace the Storm.</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>逆境のない人生なんてつまらない。<br />ピンチが来たら「面白くなってきた」と笑え。</p>
                                                <p className="font-medium text-gray-800">修羅場は、志を試される舞台だ。</p>
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
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">背中で語れ</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">Be the Captain.</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>一番ストイックに、一番楽しそうに。<br />その背中が、次の世代の未来になる。</p>
                                                <p className="font-medium text-gray-800">語るな、走れ。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Value 5 */}
                            <AnimatedSection delay={500}>
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                            05
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">稼ぐことは、愛だ</h3>
                                            <p className="text-sm md:text-base text-gray-800 italic mb-4">Earn for the Crew.</p>
                                            <div className="text-gray-700 text-sm md:text-[15px] leading-[1.9] space-y-2">
                                                <p>守るために、結果を出す。<br />仲間、家族、約束。</p>
                                                <p className="font-medium text-gray-800">全てに、責任を持て。</p>
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
