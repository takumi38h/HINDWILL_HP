"use client";

import { Header } from "@/components/layout/Header";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("お問い合わせありがとうございます。送信されました。");
    };

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="h-[60vh] relative flex items-center justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&q=80"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="text-center text-white relative z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">CONTACT</h1>
                        <p className="text-lg text-gray-300">お問い合わせ</p>
                    </div>
                </section>

                {/* Form */}
                <section className="py-20 bg-white">
                    <div className="max-w-[600px] mx-auto px-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">お名前 *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">会社名</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">メールアドレス *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">電話番号</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">お問い合わせ内容 *</label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors resize-none"
                                />
                            </div>
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-black text-white font-bold tracking-wider hover:bg-gray-800 transition-colors"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
