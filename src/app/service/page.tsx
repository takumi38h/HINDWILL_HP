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
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
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

                {/* サービス一覧 */}
                <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
                    <div className="max-w-[1000px] mx-auto px-6 space-y-8 md:space-y-12">

                        {/* CONSULTING */}
                        <div id="consulting" className="bg-white p-6 md:p-10 border-l-4 border-orange-500">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-3xl md:text-4xl font-bold text-orange-500">C</span>
                                <span className="text-lg md:text-xl font-bold">ONSULTING</span>
                                <span className="text-sm text-gray-400 ml-2">戦略コンサルティング</span>
                            </div>
                            <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px]">
                                営業戦略の立案から組織構築まで、御社のビジネス成長を加速させる最適なソリューションをご提案。<br />
                                数字だけでなく、チームの熱量を引き出し、持続的な成果を実現します。
                            </p>
                        </div>

                        {/* TRAINING */}
                        <div id="training" className="bg-white p-6 md:p-10 border-l-4 border-orange-400">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-3xl md:text-4xl font-bold text-orange-400">T</span>
                                <span className="text-lg md:text-xl font-bold">RAINING</span>
                                <span className="text-sm text-gray-400 ml-2">人材育成・研修</span>
                            </div>
                            <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px]">
                                「売れる営業」ではなく「熱狂を生む営業」を育成。<br />
                                実践型研修で、お客様の心を動かすヒューマン・タッチの技術を伝授します。
                            </p>
                        </div>

                        {/* SUPPORT */}
                        <div id="support" className="bg-white p-6 md:p-10 border-l-4 border-amber-500">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-3xl md:text-4xl font-bold text-amber-500">S</span>
                                <span className="text-lg md:text-xl font-bold">UPPORT</span>
                                <span className="text-sm text-gray-400 ml-2">営業伴走支援</span>
                            </div>
                            <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px]">
                                営業現場に伴走し、リアルタイムで課題を解決。<br />
                                AIでは埋められない「ラストワンマイル」を、私たちが一緒に繋ぎます。
                            </p>
                        </div>

                        {/* OUTSOURCING */}
                        <div id="outsourcing" className="bg-white p-6 md:p-10 border-l-4 border-yellow-500">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-3xl md:text-4xl font-bold text-yellow-500">O</span>
                                <span className="text-lg md:text-xl font-bold">UTSOURCING</span>
                                <span className="text-sm text-gray-400 ml-2">営業代行</span>
                            </div>
                            <p className="text-gray-600 leading-[2] text-[13px] md:text-[15px]">
                                御社の営業部隊として、新規開拓から既存顧客のフォローまで代行。<br />
                                ビジネスアスリートが、成果にコミットします。
                            </p>
                        </div>

                    </div>
                </section>

                {/* お問い合わせ */}
                <section className="pt-8 pb-12 md:pt-16 md:pb-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6 text-center">
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-orange-500 text-orange-500 px-8 md:px-16 py-4 md:py-5 text-xs md:text-sm tracking-wider hover:bg-orange-500 hover:text-white transition-colors duration-300"
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
