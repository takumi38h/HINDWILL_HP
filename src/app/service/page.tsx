import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function ServicePage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/planning.png"
                            alt="サービス"
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
                            人間だけが持つ熱量（ヒューマン・タッチ）で、<br />
                            AIには埋められない「ラストワンマイル」を繋いでいく。
                        </p>
                    </div>
                </section>

                {/* サービス内容 */}
                <section className="py-12 md:py-20 bg-[#f8f8f8]">
                    <div className="max-w-[1000px] mx-auto px-6">
                        <div className="bg-white p-8 md:p-12 text-center">
                            <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">セールスコンサルティング事業</h3>
                            <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px] mb-6">
                                お客様のビジネス成長をサポートするセールスコンサルティングサービスを提供しています。
                            </p>
                            <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px]">
                                テクノロジーだけでは解決できない課題に対して、<br />
                                人間ならではの熱量とコミュニケーション力で価値を提供します。
                            </p>
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
                            HINDWILLに問い合わせてみる →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
