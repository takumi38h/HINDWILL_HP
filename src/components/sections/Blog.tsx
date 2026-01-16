import Link from "next/link";

const blogPosts = [
    { id: 1, title: "2026年も宜しくお願いします。", date: "2026.01.05", category: "感謝", image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&q=80" },
    { id: 2, title: "2025年も宜しくお願いします。", date: "2025.01.01", category: "ひとりごと", image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&q=80" },
    { id: 3, title: "2024年も宜しくお願いします。", date: "2024.01.01", category: "ひとりごと", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
];

export function Blog() {
    return (
        <section className="py-16 md:py-24 bg-[#F5F5F5]">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header - Title on left, Link on right */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
                    {/* Left: Title */}
                    <div className="flex items-baseline gap-4">
                        <h2 className="text-[24px] md:text-[36px] font-bold">
                            海賊の戯言
                        </h2>
                        <span className="text-[12px] text-gray-400 tracking-[0.1em]">BLOG</span>
                    </div>

                    {/* Right: View All Link - same style as WE ARE? */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-4 px-6 md:px-8 py-3 border border-black text-black text-[13px] font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300 group self-start md:self-auto"
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
