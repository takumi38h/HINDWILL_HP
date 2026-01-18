"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

const faqs = [
    {
        question: "どのようなサービスを提供していますか？",
        answer: "セールスコンサルティング事業を中心に、お客様のビジネス成長をサポートするサービスを提供しています。",
    },
    {
        question: "相談は無料ですか？",
        answer: "はい、初回のご相談は無料で承っております。お気軽にお問い合わせください。",
    },
    {
        question: "遠方でも対応可能ですか？",
        answer: "はい、オンラインでのお打ち合わせも対応しております。全国どこからでもご依頼いただけます。",
    },
    {
        question: "どのような業種の企業が対象ですか？",
        answer: "業種を問わず、様々な企業様のご相談を承っております。まずはお気軽にご相談ください。",
    },
    {
        question: "契約期間はどのくらいですか？",
        answer: "プロジェクトの内容によって異なりますが、最短1ヶ月から長期契約まで柔軟に対応しております。",
    },
    {
        question: "料金体系を教えてください。",
        answer: "お客様のご要望やプロジェクト規模に応じてお見積りいたします。詳しくはお問い合わせください。",
    },
    {
        question: "成果が出るまでどのくらいかかりますか？",
        answer: "一般的に3〜6ヶ月程度で効果を実感いただけるケースが多いですが、状況により異なります。",
    },
    {
        question: "研修のみの依頼も可能ですか？",
        answer: "はい、営業研修のみのご依頼も承っております。1日研修から長期プログラムまで対応可能です。",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const title = "FAQ";

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&q=80"
                            alt="ビジネスミーティング"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 overflow-hidden">
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
                            style={{ transitionDelay: "0.4s" }}
                        >
                            よくある質問
                        </p>
                    </div>
                </section>

                {/* FAQ List */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-4 md:py-6 flex items-center justify-between text-left"
                                >
                                    <span className="font-bold text-sm md:text-lg pr-4">{faq.question}</span>
                                    <span className="text-xl md:text-2xl shrink-0">
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? "max-h-40 pb-4 md:pb-6" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-4 pb-12 md:pt-5 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <Link
                            href="/contact"
                            className="inline-block border border-orange-500 text-orange-500 px-5 md:px-16 py-3 md:py-5 text-[11px] md:text-sm tracking-wider hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        >
                            HINDWILLに問い合わせてみる →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
