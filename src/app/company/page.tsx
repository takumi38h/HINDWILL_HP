import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_vision.png"
                            alt="絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">COMPANY</h1>
                        <p className="text-sm md:text-lg text-gray-300">会社概要</p>
                    </div>
                </section>

                {/* Company Info */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[900px] mx-auto px-6">
                        {/* Mobile: stacked layout, Desktop: table */}
                        <div className="space-y-0">
                            {/* 社名 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">社名</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">株式会社HINDWILL (英: HINDWILL Inc.)</div>
                            </div>

                            {/* 代表取締役 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">代表取締役</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">橋爪 拓海</div>
                            </div>

                            {/* 資本金 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">資本金</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">500万円</div>
                            </div>

                            {/* 事業内容 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-2 md:mb-0">事業内容</div>
                                <div className="text-gray-600 text-xs md:text-base md:flex-1">
                                    <p>セールスコンサルティング事業</p>
                                </div>
                            </div>

                            {/* 企業理念 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">企業理念</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">
                                    <p className="font-bold text-black mb-2">Beyond the Technology.</p>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        テクノロジーが届かない、最後の1マイルを。<br /><br />
                                        効率や正解は、AIに譲ればいい。これからの時代、最後に価値を持つのは、人の心を震わせる「熱狂」だ。
                                        我々は、人間だけが持つ熱量（ヒューマン・タッチ）で、AIには埋められない「ラストワンマイル」を繋いでいく。
                                    </p>
                                </div>
                            </div>

                            {/* 連絡先 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">連絡先</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">
                                    <p>Email: takumi1127h@gmail.com</p>
                                    <p>TEL: 080-1275-4468</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 役員紹介 */}
                <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
                    <div className="max-w-[900px] mx-auto px-6">
                        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center">役員紹介</h2>
                        <div className="bg-white p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full bg-gray-200 overflow-hidden">
                                    <img src="/images/japanese_people/ceo_takumi.png" alt="橋爪 拓海" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-xs text-gray-500 mb-1">代表取締役</p>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">橋爪 拓海</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        1995年生まれ。東京都出身。<br />
                                        大学在学中にアメリカに留学後、2019年に株式会社日本通信サービス(現:株式会社CONSCIENCE)に新卒で入社、パラリーガル事業マネージャーに就任。総勢200名の事業を牽引。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-4 pb-12 md:pt-5 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <Link
                            href="/contact"
                            className="inline-block border border-orange-500 text-orange-500 px-5 md:px-16 py-3 md:py-5 text-[11px] md:text-sm tracking-wider hover:bg-orange-500 hover:text-white transition-colors duration-300"
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
