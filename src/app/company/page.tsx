import { Header } from "@/components/layout/Header";

export default function CompanyPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[60vh] bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">COMPANY</h1>
                        <p className="text-lg text-gray-400">会社概要</p>
                    </div>
                </section>

                {/* Company Info */}
                <section className="py-20 bg-white">
                    <div className="max-w-[800px] mx-auto px-6">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold w-1/3">会社名</th>
                                    <td className="py-6 text-gray-600">株式会社KAIZOKU</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold">設立</th>
                                    <td className="py-6 text-gray-600">2020年1月</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold">代表取締役</th>
                                    <td className="py-6 text-gray-600">山田 太郎</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold">所在地</th>
                                    <td className="py-6 text-gray-600">〒150-0001 東京都渋谷区神宮前1-1-1</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-6 text-left font-bold">事業内容</th>
                                    <td className="py-6 text-gray-600">
                                        プランニング / クリエイティブ / デベロップメント / エンターテインメント
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}
