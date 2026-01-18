import Link from "next/link";

const blogPosts = [
    { id: 1, title: "営業チームの熱量を高める3つの方法", date: "2026.01.10", category: "営業術", image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80" },
    { id: 2, title: "2026年も宜しくお願いします。", date: "2026.01.05", category: "お知らせ", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
    { id: 3, title: "人間力で差をつける営業戦略とは", date: "2025.12.15", category: "コラム", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
];

export function Blog() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header - Title on left, Link on right */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
                    {/* Left: Title */}
                    <div className="flex items-baseline gap-4">
                        <h2 className="text-[24px] md:text-[36px] font-bold">
                            BLOG
                        </h2>
                        <span className="text-[12px] text-gray-400 tracking-[0.1em]">ブログ</span>
                    </div>

                    {/* Right: View All Link - same style as WE ARE? */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-4 px-6 md:px-8 py-3 border-2 border-orange-500 text-orange-500 text-[13px] font-medium tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-300 group self-start md:self-auto"
                    >
                        <span>ブログ一覧</span>
                        <span className="animate-arrowMove text-lg">→</span>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="bg-white group block"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                            </div>

                            {/* Content */}
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
    );
}
