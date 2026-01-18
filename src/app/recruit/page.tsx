import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[35vh] md:h-[40vh] flex items-center relative">
                    {/* 背景画像 */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/japanese_people/weare_hero.png"
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
                        <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">Be the Hero</h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                            HINDWILLでは、テクノロジーが届かない「ラストワンマイル」を<br className="hidden md:inline" />
                            人間の熱量で繋いでいく仲間を募集しています。
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            誰よりもストイックに、誰よりも楽しそうに働く<br className="hidden md:inline" />
                            「ビジネスアスリート」として一緒に働きませんか？
                        </p>
                    </div>
                </section>

                {/* Vision */}
                <section className="py-12 md:py-20 bg-[#F5F5F5]">
                    <div className="max-w-[800px] mx-auto px-6">
                        <div className="bg-white p-6 md:p-10">
                            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">私たちが目指すこと</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                                子供が早く大人になりたくなる、背中を見せる。
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                若者が未来を諦めているのは、楽しそうに働く大人がいないからだ。
                                「仕事って、こんなに面白いんだぞ」そう背中で語れるカッコいい大人が増えれば、未来は勝手に明るくなる。
                            </p>
                        </div>
                        <div className="mt-8 md:mt-12 text-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-4 px-6 md:px-8 py-3 bg-orange-500 text-white text-xs md:text-sm font-bold tracking-wider hover:bg-orange-600 transition-colors"
                            >
                                <span>応募・お問い合わせ</span>
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
