import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const newsItems = [
    { date: "2026.01.10", title: "新規プロジェクト始動！クリエイティブの力で世界を変える" },
    { date: "2026.01.05", title: "2026年も宜しくお願いします。" },
    { date: "2025.12.20", title: "年末年始休業のお知らせ（12/28〜1/4）" },
    { date: "2025.11.15", title: "新しいメンバーが加わりました！チーム拡大中" },
    { date: "2025.10.01", title: "オフィス移転のお知らせ" },
    { date: "2025.09.10", title: "WEBサイトをリニューアルしました" },
    { date: "2025.08.20", title: "夏季休業のお知らせ（8/13〜8/16）" },
    { date: "2025.07.01", title: "新サービス「クリエイティブコンサル」開始" },
];

export default function NewsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80"
                            alt="スイスの絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-8 md:px-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">NEWS</h1>
                        <p className="text-lg text-gray-300">お知らせ</p>
                    </div>
                </section>

                {/* News List */}
                <section className="py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10">お知らせ一覧</h2>
                        {newsItems.map((news, index) => (
                            <div
                                key={index}
                                className="py-6 border-b border-gray-200 flex items-start gap-6 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <span className="text-sm text-gray-500 shrink-0">{news.date}</span>
                                <span className="text-base">{news.title}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 最新お知らせ */}
                <section className="py-20 bg-[#f8f8f8]">
                    <div className="max-w-[800px] mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10">最新お知らせ</h2>
                        {newsItems.slice(0, 3).map((news, index) => (
                            <div
                                key={index}
                                className="py-6 border-b border-gray-300 flex items-start gap-6 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <span className="text-sm text-gray-500 shrink-0">{news.date}</span>
                                <span className="text-base">{news.title}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
