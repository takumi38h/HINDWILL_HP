"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useState } from "react";

const newsItems = [
    { date: "2026.01.10", title: "営業研修プログラムをリニューアルしました" },
    { date: "2026.01.05", title: "2026年も宜しくお願いします。" },
    { date: "2025.12.20", title: "年末年始休業のお知らせ（12/28〜1/4）" },
    { date: "2025.11.15", title: "営業コンサルティング実績100社突破" },
    { date: "2025.10.01", title: "新サービス「営業伴走支援」を開始しました" },
    { date: "2025.09.10", title: "WEBサイトをリニューアルしました" },
    { date: "2025.08.20", title: "夏季休業のお知らせ（8/13〜8/16）" },
    { date: "2025.07.01", title: "セールスコンサルティング事業を本格始動" },
];

export default function NewsPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const title = "NEWS";

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero - モバイル: シンプルなヘッダー / PC: 画像付きヒーロー */}
                {/* モバイル用ヘッダー */}
                <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200" data-header-theme="light">
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-sm font-bold">NEWS</h1>
                        <p className="text-[10px] text-gray-400">お知らせ</p>
                    </div>
                </div>
                {/* PC用ヒーロー */}
                <section className="hidden md:flex h-[40vh] items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
                            alt="ビジネスニュース"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-16">
                        <h1 className="text-6xl font-bold mb-4 overflow-hidden">
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
                            className={`text-lg text-gray-300 transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: "0.5s" }}
                        >
                            お知らせ
                        </p>
                    </div>
                </section>

                {/* News Content */}
                <section className="py-8 md:py-16 bg-white">
                    <div className="max-w-[1100px] mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                            {/* Left: お知らせ一覧 (main) */}
                            <div className="flex-1">
                                <h2 className="text-lg md:text-2xl font-bold mb-6 md:mb-8">お知らせ一覧</h2>
                                {newsItems.map((news, index) => (
                                    <div
                                        key={index}
                                        className="py-4 md:py-5 border-b border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                                    >
                                        <span className="text-[11px] md:text-sm text-gray-400 shrink-0">{news.date}</span>
                                        <span className="text-[13px] md:text-[15px] group-hover:text-orange-600 transition-colors">{news.title}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Right: 最新お知らせ (smaller) */}
                            <div className="md:w-[340px] shrink-0">
                                <div className="md:sticky md:top-24">
                                    <h2 className="text-sm md:text-base font-bold mb-4 text-orange-600 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        最新お知らせ
                                    </h2>
                                    <div className="bg-orange-50/50 rounded-lg p-4">
                                        {newsItems.slice(0, 3).map((news, index) => (
                                            <div
                                                key={index}
                                                className="py-3 border-b border-orange-100 last:border-b-0 hover:bg-orange-100/50 transition-colors cursor-pointer rounded px-2 -mx-2"
                                            >
                                                <span className="text-[10px] text-orange-400 block mb-1">{news.date}</span>
                                                <span className="text-[12px] text-gray-700 leading-relaxed block">{news.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
