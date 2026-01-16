import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                            alt="絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
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
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">株式会社カイゾク (英: KAIZOKU Inc.)</div>
                            </div>

                            {/* 設立 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">設立</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">2011年 7月22日</div>
                            </div>

                            {/* 所在地 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-2 md:mb-0">所在地</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">
                                    <div className="mb-4">
                                        <p className="font-bold text-black mb-1 text-xs md:text-sm">Head Office</p>
                                        <p className="text-xs md:text-base">〒150-0032 東京都渋谷区鶯谷町15-10 ロイヤルパレス渋谷205</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="font-bold text-black mb-1 text-xs md:text-sm">Creative Studio</p>
                                        <p className="text-xs md:text-base">〒150-0031 東京都渋谷区桜丘町4-17 PORTAL Apartment & Art Point 703</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-black mb-1 text-xs md:text-sm">Kaizoku Studio</p>
                                        <p className="text-xs md:text-base">〒150-0042 東京都渋谷区宇田川町19-5 山手マンション305号室</p>
                                    </div>
                                </div>
                            </div>

                            {/* 連絡先 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">連絡先</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">03-6416-5535 (代表電話)</div>
                            </div>

                            {/* 事業内容 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-2 md:mb-0">事業内容</div>
                                <div className="text-gray-600 text-xs md:text-base md:flex-1">
                                    <ul className="space-y-1 md:space-y-2">
                                        <li>WEBサイト・スマートフォンサイトのクリエイティブ企画、制作</li>
                                        <li>デジタルマーケティング、プロモーション、ブランディング戦略立案</li>
                                        <li>バナー・LP・動画などSNS・WEB広告クリエイティブの企画、制作</li>
                                        <li>WEB広告クリエイティブの検証設計、ディレクション</li>
                                        <li>OOH・チラシ・パンフレット・交通広告などグラフィックの企画、制作</li>
                                        <li>音楽・映像の企画、制作</li>
                                        <li>ライブイベント・企業PRイベント・ファッションイベントの企画、制作、運営</li>
                                        <li>オリジナルキャラクター・エンターテイメントコンテンツの企画、制作</li>
                                        <li>アーティスト・アイドル・タレントの育成、マネジメントおよび著作権の管理</li>
                                        <li>時計ベルト・衣類・CD・DVDの企画、制作、販売</li>
                                        <li>ダンス・撮影スタジオの運営</li>
                                        <li>デジタルメディアの運営</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 適格請求書発行事業者登録番号 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">適格請求書発行<br className="hidden md:inline" />事業者登録番号</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">T4011001070168</div>
                            </div>

                            {/* 企業理念 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">企業理念</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1 font-bold">Stay Innocent</div>
                            </div>

                            {/* 代表取締役 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">代表取締役</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">森田 将之</div>
                            </div>

                            {/* 資本金 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">資本金</div>
                                <div className="text-gray-600 text-sm md:text-base md:flex-1">3,330,000円</div>
                            </div>

                            {/* 主要取引先 */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-2 md:mb-0">主要取引先</div>
                                <div className="text-gray-600 text-xs md:text-base md:flex-1">
                                    <p className="leading-relaxed">
                                        アマゾンジャパン株式会社 / エーザイ株式会社 / 株式会社ADKマーケティング・ソリューションズ / 株式会社ADKクリエイティブ・ワン / Cross Media Ltd. / JAフルーツ山梨 / 株式会社JTB / JTS Group株式会社 / ジーユークリエイティヴ / SHOWROOM株式会社 / 株式会社ディー・エヌ・エー / 合同会社DMM.com / 株式会社ディスクガレージ / 株式会社テレビ朝日ミュージック / 日本コロムビア株式会社 / 日本テレビ音楽株式会社 / 株式会社博報堂 / 株式会社博報堂プロダクツ / 株式会社Fun Japan Communications / 株式会社プラナコーポレーション / mysta株式会社 / 株式会社よしもとミュージックパブリッシング
                                    </p>
                                    <p className="text-[10px] md:text-sm text-gray-400 mt-2">（敬称略、五十音順）</p>
                                </div>
                            </div>

                            {/* パートナー */}
                            <div className="py-4 md:py-6 border-b border-gray-200 md:flex">
                                <div className="font-bold text-sm md:text-base md:w-1/4 mb-1 md:mb-0">パートナー</div>
                                <div className="text-gray-600 text-xs md:text-base md:flex-1">
                                    アドファン株式会社 / 株式会社iien / 株式会社ナムコミュニケーション
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
