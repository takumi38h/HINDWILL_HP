"use client";

import { Header } from "@/components/layout/Header";
import { useState, useEffect } from "react";
import { usePageReady } from "@/contexts/LoadingContext";

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const { isPageReady } = usePageReady();

    useEffect(() => {
        if (isPageReady) {
            setAnimationKey(prev => prev + 1);
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            setIsLoaded(false);
        }
    }, [isPageReady]);

    const title = "CONTACT";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("お問い合わせありがとうございます。送信されました。");
    };

    return (
        <>
            <Header />
            <main className="overflow-x-hidden">
                {/* Hero */}
                <section className="h-[60vh] relative flex items-center justify-center" data-header-theme="dark">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-950/60 to-black/50" />
                    <div className="text-center text-white relative z-10">
                        <h1 key={animationKey} className="text-4xl md:text-6xl font-bold mb-4 overflow-hidden">
                            {title.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transition-all duration-500 ${
                                        isLoaded
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 translate-x-8"
                                    }`}
                                    style={{
                                        transitionDelay: `${(title.length - 1 - index) * 0.08}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h1>
                        <p
                            className={`text-lg text-gray-300 transition-all duration-700 ${
                                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: "0.7s" }}
                        >
                            お問い合わせ
                        </p>
                    </div>
                    {/* Breadcrumb */}
                    <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 z-10">
                        <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/70">
                            <a href="/" className="hover:text-white transition-colors">
                                <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                </svg>
                            </a>
                            <span>&gt;</span>
                            <a href="/" className="hover:text-white transition-colors">HINDWILL</a>
                            <span>&gt;</span>
                            <span className="text-white">お問い合わせ</span>
                        </div>
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
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">会社名</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">メールアドレス *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">電話番号</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">お問い合わせ内容 *</label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-orange-500 outline-none transition-colors resize-none"
                                />
                            </div>
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-orange-500 text-white font-bold tracking-wider hover:bg-orange-600 transition-colors"
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
