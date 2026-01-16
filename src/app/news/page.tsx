import { Header } from "@/components/layout/Header";

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
                <section className="h-[60vh] bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">NEWS</h1>
                        <p className="text-lg text-gray-400">お知らせ</p>
                    </div>
                </section>

                {/* News List */}
                <section className="py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6">
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
            </main>
        </>
    );
}
