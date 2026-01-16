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
                <section className="h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
                            alt="絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-8 md:px-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">RECRUIT</h1>
                        <p className="text-lg text-gray-300">採用情報</p>
                    </div>
                </section>

                {/* Message */}
                <section className="py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">一緒に海賊になりませんか？</h2>
                        <p className="text-gray-600 leading-relaxed">
                            KAIZOKUでは、クリエイティブの力で世界を変えたい仲間を募集しています。
                            既存の枠にとらわれない自由な発想を持ち、チャレンジを楽しめる方をお待ちしています。
                        </p>
                    </div>
                </section>

                {/* Positions */}
                <section className="py-20 bg-[#F5F5F5]">
                    <div className="max-w-[800px] mx-auto px-6">
                        <h2 className="text-xl font-bold mb-8">募集職種</h2>
                        <div className="space-y-4">
                            {positions.map((position, index) => (
                                <div key={index} className="bg-white p-6">
                                    <div className="flex items-center gap-4 mb-3">
                                        <h3 className="text-lg font-bold">{position.title}</h3>
                                        <span className="text-xs px-2 py-1 bg-black text-white">{position.type}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{position.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 px-8 py-3 bg-black text-white text-sm font-bold tracking-wider hover:bg-gray-800 transition-colors"
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
