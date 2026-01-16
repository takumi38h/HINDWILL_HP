import { Header } from "@/components/layout/Header";
import Link from "next/link";

const blogPosts = [
    { id: 1, title: "2026年も宜しくお願いします。", date: "2026.01.05", category: "感謝", image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&q=80" },
    { id: 2, title: "2025年も宜しくお願いします。", date: "2025.01.01", category: "ひとりごと", image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&q=80" },
    { id: 3, title: "2024年も宜しくお願いします。", date: "2024.01.01", category: "ひとりごと", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
    { id: 4, title: "クリエイティブの未来を考える", date: "2023.12.15", category: "考察", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80" },
    { id: 5, title: "チームビルディングについて", date: "2023.11.20", category: "チーム", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" },
    { id: 6, title: "新しいプロジェクトが始まりました", date: "2023.10.10", category: "お知らせ", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
];

export default function BlogPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
                            alt="地図"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-8 md:px-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">BLOG</h1>
                        <p className="text-lg text-gray-300">海賊のたわごと</p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-20 bg-[#F5F5F5]">
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
