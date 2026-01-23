"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const blogPosts = [
    { id: 1, title: "営業チームの熱量を高める3つの方法", date: "2026.01.10", category: "営業術", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80" },
    { id: 2, title: "2026年も宜しくお願いします。", date: "2026.01.05", category: "お知らせ", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { id: 3, title: "人間力で差をつける営業戦略とは", date: "2025.12.15", category: "コラム", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
];

export function Blog() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-white" />

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100/50 to-transparent" />

            <div className="relative max-w-[1200px] mx-auto px-6">
                {/* Header - Title on left, Link on right */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
                    {/* Left: Title */}
                    <div
                        className={`transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-0.5 bg-gradient-to-r from-gray-800 to-gray-400" />
                            <span className="text-[11px] text-gray-800 tracking-[0.2em] font-medium">INSIGHTS</span>
                        </div>
                        <div className="flex items-baseline gap-4">
                            <h2 className="text-[28px] md:text-[40px] font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                BLOG
                            </h2>
                            <span className="text-[12px] text-gray-400 tracking-[0.1em]">ブログ</span>
                        </div>
                    </div>

                    {/* Right: View All Link */}
                    <div
                        className={`transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        <Link
                            href="/blog"
                            className="relative inline-flex items-center gap-4 px-8 py-3.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-[13px] font-bold tracking-wide hover:from-gray-900 hover:to-gray-800 transition-all duration-300 group overflow-hidden shadow-lg shadow-gray-800/25"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                            <span className="relative">ブログ一覧</span>
                            <svg
                                className="relative w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className={`bg-white group block rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                            style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {/* Category badge on hover */}
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-[11px] font-bold">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[12px] text-gray-400">{post.date}</span>
                                    <span className="text-[10px] px-2 py-0.5 bg-gray-50 text-gray-800 font-medium">
                                        {post.category}
                                    </span>
                                </div>
                                <h3 className="text-[15px] font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                                    {post.title}
                                </h3>
                                {/* Read more indicator */}
                                <div className="mt-4 flex items-center gap-2 text-gray-800 text-[12px] font-medium opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                    <span>READ MORE</span>
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
