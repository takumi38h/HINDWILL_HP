import { Header } from "@/components/layout/Header";
import Link from "next/link";

const blogPosts = [
    { id: 1, title: "営業チームの熱量を高める3つの方法", date: "2026.01.10", category: "営業術", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80" },
    { id: 2, title: "2026年も宜しくお願いします。", date: "2026.01.05", category: "お知らせ", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { id: 3, title: "人間力で差をつける営業戦略とは", date: "2025.12.15", category: "コラム", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
    { id: 4, title: "AIに負けない営業マンの育て方", date: "2025.11.20", category: "人材育成", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
    { id: 5, title: "ラストワンマイルを繋ぐ営業の極意", date: "2025.10.15", category: "営業術", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" },
    { id: 6, title: "新規プロジェクト始動のお知らせ", date: "2025.09.10", category: "お知らせ", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
];

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
                            alt="チームディスカッション"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">BLOG</h1>
                        <p className="text-sm md:text-lg text-gray-300">ブログ</p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {blogPosts.map((post) => (
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
                    </div>
                </section>
            </main>
        </>
    );
}
