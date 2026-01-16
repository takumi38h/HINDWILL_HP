"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState, useRef } from "react";

const crewMembers = [
    { name: "SHO", role: "Captain / Generalist", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=SHO&backgroundColor=c0aede" },
    { name: "KAKA", role: "Creator / Designer", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=KAKA&backgroundColor=d1d4f9" },
    { name: "YUMA", role: "Architect / Manager", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=YUMA&backgroundColor=ffd5dc" },
    { name: "HIRONII", role: "Analyst / Director", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=HIRONII&backgroundColor=c0e8de" },
    { name: "YUYA", role: "Strategist / Technical Director", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=YUYA&backgroundColor=ffdfbf" },
    { name: "VOQ", role: "Designer / Musician", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=VOQ&backgroundColor=b6e3f4" },
    { name: "MARCY", role: "Analyst / SEO Consultant", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=MARCY&backgroundColor=ffd5dc" },
    { name: "RENN", role: "Musician / Sound Creator", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=RENN&backgroundColor=d1d4f9" },
    { name: "GOKI", role: "Director / Choreographer", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=GOKI&backgroundColor=c0aede" },
    { name: "SATO", role: "Casting Director", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=SATO&backgroundColor=c0e8de" },
    { name: "KEITAN", role: "Planner / Event Director", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=KEITAN&backgroundColor=ffdfbf" },
    { name: "OSMAN", role: "Producer", avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=OSMAN&backgroundColor=b6e3f4" },
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
                    className={`inline-block transition-all duration-500 ease-out ${
                        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
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
                className={`absolute inset-0 z-10 bg-gradient-to-b from-gray-300 via-gray-100 to-white transition-transform duration-500 ease-out ${
                    isVisible ? "translate-x-full" : "translate-x-0"
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
            className={`transition-all duration-700 ease-out h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
            <main>
                {/* Hero */}
                <section className="h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1600&q=80"
                            alt="海賊の子供"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white px-8 md:px-16 relative z-10">
                        <p className="text-sm tracking-[0.3em] text-gray-300 mb-4">何者？</p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                            <AnimatedText text="WE ARE" />
                        </h1>
                    </div>
                    {/* Breadcrumb */}
                    <div className="absolute bottom-8 left-6 md:left-12 z-10">
                        <p className="text-xs text-gray-300 tracking-wider">
                            KAIZOKU &gt; 何者？
                        </p>
                    </div>
                </section>

                {/* Best Practice Best Partner */}
                <section className="py-24 md:py-32 relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80"
                            alt="子供たち"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-white/80" />
                    </div>
                    <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
                        <AnimatedSection>
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                                <span className="relative inline-block">
                                    <span>Best Practice</span>
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="3" />
                                        <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="3" />
                                    </svg>
                                </span><br />
                                Best Partner
                            </h2>
                            <p className="text-xl md:text-2xl font-bold mb-12 mt-8 text-gray-700">
                                最適に仕事をこなすよりも<br />
                                最高のパフォーマンスを発揮する仲間として
                            </p>
                            <div className="mx-auto">
                                <p className="text-gray-600 leading-[2] text-[15px] mb-6">
                                    ユーザーとのコミュニケーション方法が多様化した現代。<br />
                                    ATL、BTL、マス、デジタルといった領域の垣根が無くなり、<br />
                                    様々な分野の専門知を融合してコミュニケーション全体を設計することが求められます。
                                </p>
                                <p className="text-gray-600 leading-[2] text-[15px] mb-6">
                                    その時に課題となるのが、プロジェクトを進め構築していく<br />
                                    「コミュニケーションデザイン＆プロデュース力」。
                                </p>
                                <p className="text-gray-600 leading-[2] text-[15px]">
                                    言われた通りにつくるだけでは、私たちの存在意義はありません。<br />
                                    みなさまのベストパートナーとして、<br />
                                    プロジェクトごとのニーズに合った効果を上げるための<br />
                                    価値あるコミュニケーションをつくります。
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* 理念 */}
                <section className="bg-white relative">
                    {/* 理念 + STAY INNOCENT */}
                    <div className="bg-gray-100 py-8 md:py-12">
                        <AnimatedSection>
                            <div className="px-8 md:px-16">
                                <p className="text-xl md:text-2xl tracking-[0.2em] text-gray-800 mb-2 font-bold">理念</p>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
                                    STAY INNOCENT
                                </h2>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 items-stretch -mt-24 md:-mt-32">
                        {/* 左側：テキスト */}
                        <AnimatedSection delay={200}>
                            <div className="px-8 md:px-16 py-8 pt-32 md:pt-40 relative z-10">
                                <p className="text-2xl md:text-3xl font-bold mb-8 leading-tight text-gray-700">
                                    こどものままで。<br />
                                    自由な発想で。
                                </p>
                                <div>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        大人になると、いいも悪いも色々と制限を設けてしまう(設けられてしまうということも)。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        当然、ビジネスマナーやビジネスルールは守ります。そんなものは本やネットを見れば学べるし覚えて体現すれば良い事。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        でも、大人としてこどものままで生きることは、とっても難しい。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] font-medium">
                                        こどものように発想や動きに制限なく、仕事もプライベートも人生そのものを楽しんで前向きに無邪気に取り組む事ができれば、それはもう最高であり、最強でしょう。だからこそのこの理念なんです。
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* 右側：画像 */}
                        <ImageReveal className="h-full">
                            <div className="h-full bg-gray-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                                    alt="絶景"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ImageReveal>
                    </div>
                </section>

                {/* 社名の由来 */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="grid md:grid-cols-2 gap-0 items-stretch">
                        {/* 左側：画像 */}
                        <ImageReveal className="h-full">
                            <div className="h-full bg-gray-50 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80"
                                    alt="海"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ImageReveal>

                        {/* 右側：テキスト */}
                        <AnimatedSection delay={200}>
                            <div className="px-8 md:px-16 py-8">
                                <p className="text-xl md:text-2xl tracking-[0.2em] text-gray-800 mb-4 font-bold">社名の由来</p>
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                    職業、<br />海賊です。
                                </h2>
                                <div>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        日本だとはじめて会った人との会話では、パーソナルなことよりもビジネスのことを聞かれる事がとても多い。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        あなたの職業は何ですか？という質問に対して、「職業、海賊です。」と言えたら面白いなと思ってこの社名になりました。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        そして、よく言われるのが、「ONEPIECE（ワンピース）好きなんですね！」
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        そりゃあ、世界中で愛されている漫画ですから、好きですが…<br />
                                        それよりも本当は、"海賊"自体が好きなんです。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] mb-6 font-medium">
                                        少々荒っぽいかも知れないが、さまざまな才能を持った仲間たちが集い、根幹には大きな"志"があり、その行動には、"信念"があり、"ルール（掟や約束）"は絶対守る。といった、「海賊」の生き様が大好きなんです。
                                    </p>
                                    <p className="text-gray-700 leading-[2] text-[15px] font-medium">
                                        自分は幕末が好きです。春秋戦国時代が最高です。というのに似た感じで、カリブの大海原で自由を求めて暴れまわった「海賊」たちのように信念を持って動く会社です。
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* CREW */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <AnimatedSection>
                            <div className="text-center mb-16">
                                <p className="text-sm tracking-[0.2em] text-gray-400 mb-6">TEAM</p>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">CREW</h2>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    机上の空論は嫌いですが、<br />
                                    動くことと成果を出すことは大好物な一味。
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {crewMembers.map((member, index) => (
                                <AnimatedSection key={member.name} delay={index * 100}>
                                    <div className="group">
                                        <div className="aspect-square bg-gray-100 mb-4 overflow-hidden rounded-full">
                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-400 mb-1">{member.role}</p>
                                        <p className="text-lg font-bold">{member.name}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-4 pb-16 md:pt-5 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <AnimatedSection>
                            <a
                                href="/contact"
                                className="inline-block border border-black px-16 py-5 text-sm tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            >
                                KAIZOKUに問い合わせてみる →
                            </a>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
