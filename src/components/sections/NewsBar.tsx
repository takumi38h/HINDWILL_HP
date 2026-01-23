"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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

export function NewsBar() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSliding(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % newsItems.length);
                setIsSliding(false);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentNews = newsItems[currentIndex];

    return (
        <section className="border-t border-b border-gray-200">
            <div className="flex">
                {/* Left: NEWS Label */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-2 md:px-6 md:py-4 flex items-center gap-2 md:gap-4 shrink-0">
                    <span className="text-[11px] md:text-[13px] font-bold tracking-[0.05em]">NEWS</span>
                    <span className="text-[9px] md:text-[11px] text-gray-400">お知らせ</span>
                    <Link
                        href="/news"
                        className="hidden md:flex items-center gap-2 text-[11px] text-white/70 hover:text-white transition-colors ml-2"
                    >
                        <span>VIEW ALL</span>
                        <span>→</span>
                    </Link>
                </div>

                {/* Right: Single News Item with left slide transition */}
                <div className="flex-1 flex items-center px-3 py-2 md:px-6 md:py-4 overflow-hidden">
                    <Link
                        href="/news"
                        className={`flex items-center gap-2 md:gap-4 hover:opacity-60 transition-all duration-300 ${
                            isSliding ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
                        }`}
                    >
                        <span className="text-[10px] md:text-[12px] text-gray-500 shrink-0">{currentNews.date}</span>
                        <span className="text-[11px] md:text-[13px] line-clamp-1">{currentNews.title}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
