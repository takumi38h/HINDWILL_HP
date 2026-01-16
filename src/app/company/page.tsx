import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                            alt="絶景"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-8 md:px-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">COMPANY</h1>
                        <p className="text-lg text-gray-300">会社概要</p>
                    </div>
                </section>

                {/* Company Info */}
                <section className="py-20 bg-white">
                    <div className="max-w-[900px] mx-auto px-6">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold w-1/4 align-top">社名</th>
                                    <td className="py-6 text-gray-600">株式会社カイゾク (英: KAIZOKU Inc.)</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">設立</th>
                                    <td className="py-6 text-gray-600">2011年 7月22日</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">所在地</th>
                                    <td className="py-6 text-gray-600">
                                        <div className="mb-4">
                                            <p className="font-bold text-black mb-1">Head Office</p>
                                            <p>〒150-0032 東京都渋谷区鶯谷町15-10 ロイヤルパレス渋谷205</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-bold text-black mb-1">Creative Studio</p>
                                            <p>〒150-0031 東京都渋谷区桜丘町4-17 PORTAL Apartment & Art Point 703</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-black mb-1">Kaizoku Studio</p>
                                            <p>〒150-0042 東京都渋谷区宇田川町19-5 山手マンション305号室</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">連絡先</th>
                                    <td className="py-6 text-gray-600">03-6416-5535 (代表電話)</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">事業内容</th>
                                    <td className="py-6 text-gray-600">
                                        <ul className="space-y-2">
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
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">適格請求書発行<br />事業者登録番号</th>
                                    <td className="py-6 text-gray-600">T4011001070168</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">企業理念</th>
                                    <td className="py-6 text-gray-600 font-bold">Stay Innocent</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">代表取締役</th>
                                    <td className="py-6 text-gray-600">森田 将之</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">資本金</th>
                                    <td className="py-6 text-gray-600">3,330,000円</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">主要取引先</th>
                                    <td className="py-6 text-gray-600">
                                        <p className="leading-relaxed">
                                            アマゾンジャパン株式会社 / エーザイ株式会社 / 株式会社ADKマーケティング・ソリューションズ / 株式会社ADKクリエイティブ・ワン / Cross Media Ltd. / JAフルーツ山梨 / 株式会社JTB / JTS Group株式会社 / ジーユークリエイティヴ / SHOWROOM株式会社 / 株式会社ディー・エヌ・エー / 合同会社DMM.com / 株式会社ディスクガレージ / 株式会社テレビ朝日ミュージック / 日本コロムビア株式会社 / 日本テレビ音楽株式会社 / 株式会社博報堂 / 株式会社博報堂プロダクツ / 株式会社Fun Japan Communications / 株式会社プラナコーポレーション / mysta株式会社 / 株式会社よしもとミュージックパブリッシング
                                        </p>
                                        <p className="text-sm text-gray-400 mt-2">（敬称略、五十音順）</p>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold align-top">パートナー</th>
                                    <td className="py-6 text-gray-600">
                                        アドファン株式会社 / 株式会社iien / 株式会社ナムコミュニケーション
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-4 pb-16 md:pt-5 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <Link
                            href="/contact"
                            className="inline-block border border-black px-16 py-5 text-sm tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
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
