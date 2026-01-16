import { Header } from "@/components/layout/Header";

export default function WeArePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[60vh] bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">WE ARE</h1>
                        <p className="text-lg text-gray-400">何者？</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-[900px] mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">私たちについて</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            KAIZOKUは、クリエイティブの力で企業のコミュニケーション課題を解決するパートナーです。
                            プランニング、クリエイティブ、デベロップメント、エンターテインメントの4つの軸で、
                            お客様の目的達成をサポートします。
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            私たちは「海賊」のように、既存の枠にとらわれない自由な発想で、
                            新しい価値を創造し続けます。
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
