"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

const blogPosts = [
    { id: 1, title: "営業チームの熱量を高める3つの方法", date: "2026.01.10", category: "営業術", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80" },
    { id: 2, title: "2026年も宜しくお願いします。", date: "2026.01.05", category: "お知らせ", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { id: 3, title: "人間力で差をつける営業戦略とは", date: "2025.12.15", category: "コラム", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
    { id: 4, title: "AIに負けない営業マンの育て方", date: "2025.11.20", category: "人材育成", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
    { id: 5, title: "ラストワンマイルを繋ぐ営業の極意", date: "2025.10.15", category: "営業術", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" },
    { id: 6, title: "新規プロジェクト始動のお知らせ", date: "2025.09.10", category: "お知らせ", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
    { id: 7, title: "営業成績を上げるためのマインドセット", date: "2025.08.25", category: "営業術", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
    { id: 8, title: "顧客との信頼関係を築く5つのポイント", date: "2025.08.10", category: "コラム", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" },
    { id: 9, title: "夏季休業のお知らせ", date: "2025.07.20", category: "お知らせ", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

export default function BlogPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);
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

    const title = "BLOG";
    const hasMore = visibleCount < blogPosts.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, blogPosts.length));
    };

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
                            alt="チームディスカッション"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-black/50" />
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
                            style={{ transitionDelay: "0.5s" }}
                        >
                            ブログ
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
                            <span className="text-white">ブログ</span>
                        </div>
                    </div>
                </section>

                {/* Blog List Header */}
                <section className="py-6 md:py-8 bg-white border-b border-gray-100">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
                            ブログ一覧
                        </h2>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {blogPosts.slice(0, visibleCount).map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.id}`}
                                    className="bg-white group block"
                                >
                                    <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[12px] text-gray-500">{post.date}</span>
                                            <span className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h3 className="text-[14px] font-medium group-hover:opacity-70 transition-opacity">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* もっと見る */}
                        {hasMore && (
                            <div className="mt-12 md:mt-16 text-center">
                                <button
                                    onClick={handleLoadMore}
                                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-800 hover:text-gray-800 transition-colors"
                                >
                                    <span>もっと見る</span>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
