import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative" data-header-theme="dark">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
                            alt="ビジネス"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    </div>
                    <div className="text-left text-white relative z-10 px-6 md:px-16">
                        <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">PRIVACY POLICY</h1>
                        <p className="text-sm md:text-lg text-gray-300">プライバシーポリシー</p>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[900px] mx-auto px-6">
                        <h2 className="text-xl md:text-2xl font-bold mb-8">個人情報の取り扱いについて</h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            当社は、お客様の個人情報を適切に保護することを重要な責務と考え、以下の方針に基づき個人情報の保護に努めます。
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-3">1. 個人情報の収集について</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    当社は、適法かつ公正な手段によって個人情報を収集いたします。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-3">2. 個人情報の利用目的</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                                    収集した個人情報は、以下の目的で利用いたします。
                                </p>
                                <ul className="list-disc list-inside text-gray-600 text-sm md:text-base leading-relaxed space-y-1">
                                    <li>お客様へのサービス提供</li>
                                    <li>お問い合わせへの対応</li>
                                    <li>サービス改善のための分析</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-3">3. 個人情報の第三者提供</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-3">4. 個人情報の管理</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-3">5. お問い合わせ</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    個人情報の取り扱いに関するお問い合わせは、当社までご連絡ください。
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                                株式会社HINDWILL<br />
                                Email: takumi1127h@gmail.com
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
