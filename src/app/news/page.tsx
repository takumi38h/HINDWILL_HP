import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero - モバイル: シンプルなヘッダー / PC: 画像付きヒーロー */}
                {/* モバイル用ヘッダー */}
                <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200">
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-sm font-bold">NEWS</h1>
                        <p className="text-[10px] text-gray-400">お知らせ</p>
                    </div>
                </div>
                {/* PC用ヒーロー */}
                <section className="hidden md:flex h-[40vh] items-center relative">
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
                        <h1 className="text-6xl font-bold mb-4">NEWS</h1>
                        <p className="text-lg text-gray-300">お知らせ</p>
                    </div>
                </section>

                {/* News List */}
                <section className="py-8 md:py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-4 md:px-6">
                        <h2 className="text-lg md:text-3xl font-bold mb-4 md:mb-10">お知らせ一覧</h2>
                        {newsItems.map((news, index) => (
                            <div
                                key={index}
                                className="py-3 md:py-6 border-b border-gray-200 flex flex-col md:flex-row md:items-start gap-1 md:gap-6 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <span className="text-[11px] md:text-sm text-gray-500 shrink-0">{news.date}</span>
                                <span className="text-[13px] md:text-base">{news.title}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 最新お知らせ */}
                <section className="py-8 md:py-20 bg-gradient-to-b from-orange-50 to-white">
                    <div className="max-w-[800px] mx-auto px-4 md:px-6">
                        <h2 className="text-lg md:text-3xl font-bold mb-4 md:mb-10">最新お知らせ</h2>
                        {newsItems.slice(0, 3).map((news, index) => (
                            <div
                                key={index}
                                className="py-3 md:py-6 border-b border-gray-300 flex flex-col md:flex-row md:items-start gap-1 md:gap-6 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <span className="text-[11px] md:text-sm text-gray-500 shrink-0">{news.date}</span>
                                <span className="text-[13px] md:text-base">{news.title}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
