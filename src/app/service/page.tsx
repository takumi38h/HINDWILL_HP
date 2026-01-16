import { Header } from "@/components/layout/Header";

const services = [
    {
        id: "planning",
        title: "PLANNING",
        description: "企業のマーケティング戦略と目指すゴール、ターゲットニーズを叶えるプロモーション施策のプランニングを行います。",
    },
    {
        id: "creative",
        title: "CREATIVE",
        description: "ターゲットユーザーに情報を的確に伝えるデザイン～感性に訴えかけ共感を呼び起こす、課題解決のためのクリエイティブ開発。",
    },
    {
        id: "development",
        title: "DEVELOPMENT",
        description: "WEBシステム・アプリ開発等、テクノロジー面のパートナーとなり業務の効率化及び、新たな収益を見据えた仕組みの開発。",
    },
    {
        id: "entertainment",
        title: "ENTERTAINMENT",
        description: "音楽、映像、イベントの企画制作・運営、アーティスト・タレント育成及びキャスティング。",
    },
];

export default function ServicePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[60vh] bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">SERVICE</h1>
                        <p className="text-lg text-gray-400">サービス</p>
                    </div>
                </section>

                {/* Services */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1000px] mx-auto px-6">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`py-16 ${index !== services.length - 1 ? 'border-b border-gray-200' : ''}`}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
