import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const creativeServices = [
    { name: "バナー制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=banner&icon=image" },
    { name: "LP制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=lp&icon=file" },
    { name: "WEBデザイン", icon: "https://api.dicebear.com/7.x/icons/svg?seed=web&icon=globe" },
    { name: "HTMLコーディング", icon: "https://api.dicebear.com/7.x/icons/svg?seed=code&icon=code" },
    { name: "運用・保守", icon: "https://api.dicebear.com/7.x/icons/svg?seed=maintenance&icon=gear" },
    { name: "SEO対策", icon: "https://api.dicebear.com/7.x/icons/svg?seed=seo&icon=search" },
    { name: "オウンドメディア制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=media&icon=newspaper" },
    { name: "グラフィックデザイン", icon: "https://api.dicebear.com/7.x/icons/svg?seed=graphic&icon=palette" },
    { name: "映像制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=video&icon=camera" },
    { name: "ライティング", icon: "https://api.dicebear.com/7.x/icons/svg?seed=writing&icon=pencil" },
    { name: "メルマガ制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=mail&icon=envelope" },
    { name: "システム開発", icon: "https://api.dicebear.com/7.x/icons/svg?seed=system&icon=terminal" },
];

const planningServices = [
    { name: "プランニング", icon: "https://api.dicebear.com/7.x/icons/svg?seed=plan&icon=lightbulb" },
    { name: "ディレクション", icon: "https://api.dicebear.com/7.x/icons/svg?seed=direction&icon=compass" },
    { name: "UI・UX設計", icon: "https://api.dicebear.com/7.x/icons/svg?seed=uiux&icon=layout" },
    { name: "アナリティクス設計", icon: "https://api.dicebear.com/7.x/icons/svg?seed=analytics&icon=graph" },
];

const entertainmentServices = [
    { name: "楽曲・音源制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=music&icon=music" },
    { name: "キャスティング", icon: "https://api.dicebear.com/7.x/icons/svg?seed=casting&icon=people" },
    { name: "MV・PV制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=mv&icon=film" },
    { name: "ライブ配信・収録", icon: "https://api.dicebear.com/7.x/icons/svg?seed=live&icon=broadcast" },
    { name: "マネージメント", icon: "https://api.dicebear.com/7.x/icons/svg?seed=manage&icon=briefcase" },
    { name: "イベント企画制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=event&icon=calendar" },
    { name: "グッズ制作", icon: "https://api.dicebear.com/7.x/icons/svg?seed=goods&icon=gift" },
];

export default function ServicePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80"
                            alt="女性"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">SERVICE</h1>
                        <p className="text-sm md:text-lg text-gray-300">サービス</p>
                    </div>
                </section>

                {/* OUR SERVICE */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">OUR SERVICE</h2>
                        <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px] mb-4">
                            アイデア、デザイン、プログラム、言葉、映像、音楽でつくりだしたクリエイティブ力で人を動かし、心を動かすこと。
                        </p>
                        <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px]">
                            手法はいろいろ実施しますが、最終的にはお客様のお客様を笑顔にすることが我々のお仕事です。
                        </p>
                    </div>
                </section>

                {/* こんなんやってます */}
                <section className="py-12 md:py-20 bg-[#f8f8f8]">
                    <div className="max-w-[1000px] mx-auto px-6">
                        <div className="flex justify-center mb-8 md:mb-12">
                            <div className="relative bg-white border-2 border-black rounded-lg px-6 md:px-8 py-3 md:py-4">
                                <h2 className="text-xl md:text-3xl font-bold text-center">こんなんやってます</h2>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-b-2 border-r-2 border-black rotate-45"></div>
                            </div>
                        </div>

                        {/* 制作／創作 */}
                        <div className="mb-12 md:mb-16">
                            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 pb-4 border-b-2 border-black">制作／創作</h3>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                                {creativeServices.map((service) => (
                                    <div key={service.name} className="text-center">
                                        <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-2 md:mb-3 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                                            <img src={service.icon} alt={service.name} className="w-10 h-10 md:w-14 md:h-14 grayscale" />
                                        </div>
                                        <p className="text-[10px] md:text-xs font-medium">{service.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 企画／設計 */}
                        <div className="mb-12 md:mb-16">
                            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 pb-4 border-b-2 border-black">企画／設計</h3>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                                {planningServices.map((service) => (
                                    <div key={service.name} className="text-center">
                                        <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-2 md:mb-3 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                                            <img src={service.icon} alt={service.name} className="w-10 h-10 md:w-14 md:h-14 grayscale" />
                                        </div>
                                        <p className="text-[10px] md:text-xs font-medium">{service.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 音楽／コンテンツ */}
                        <div>
                            <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 pb-4 border-b-2 border-black">音楽／コンテンツ</h3>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                                {entertainmentServices.map((service) => (
                                    <div key={service.name} className="text-center">
                                        <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-2 md:mb-3 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                                            <img src={service.icon} alt={service.name} className="w-10 h-10 md:w-14 md:h-14 grayscale" />
                                        </div>
                                        <p className="text-[10px] md:text-xs font-medium">{service.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-8 pb-12 md:pt-16 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <Link
                            href="/contact"
                            className="inline-block border border-black px-8 md:px-16 py-4 md:py-5 text-xs md:text-sm tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            KAIZOKUに問い合わせてみる →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
