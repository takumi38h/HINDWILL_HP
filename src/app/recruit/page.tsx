import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const positions = [
    {
        title: "Webデザイナー",
        type: "正社員",
        description: "Webサイトやアプリのデザインを担当していただきます。",
    },
    {
        title: "フロントエンドエンジニア",
        type: "正社員",
        description: "React/Next.jsを使用したWebアプリケーション開発を担当していただきます。",
    },
    {
        title: "プロジェクトマネージャー",
        type: "正社員",
        description: "クライアントとのコミュニケーション、プロジェクト進行管理を担当していただきます。",
    },
];

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
                            alt="絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">RECRUIT</h1>
                        <p className="text-sm md:text-lg text-gray-300">採用情報</p>
                    </div>
                </section>

                {/* Message */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">一緒に海賊になりませんか？</h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            KAIZOKUでは、クリエイティブの力で世界を変えたい仲間を募集しています。
                            既存の枠にとらわれない自由な発想を持ち、チャレンジを楽しめる方をお待ちしています。
                        </p>
                    </div>
                </section>

                {/* Positions */}
                <section className="py-12 md:py-20 bg-[#F5F5F5]">
                    <div className="max-w-[800px] mx-auto px-6">
                        <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8">募集職種</h2>
                        <div className="space-y-3 md:space-y-4">
                            {positions.map((position, index) => (
                                <div key={index} className="bg-white p-4 md:p-6">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                        <h3 className="text-base md:text-lg font-bold">{position.title}</h3>
                                        <span className="text-[10px] md:text-xs px-2 py-1 bg-black text-white w-fit">{position.type}</span>
                                    </div>
                                    <p className="text-gray-600 text-xs md:text-sm">{position.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 md:mt-12 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 px-6 md:px-8 py-3 bg-black text-white text-xs md:text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors"
                            >
                                <span>応募する</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
