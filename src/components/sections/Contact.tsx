import Link from "next/link";

export function Contact() {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-600 to-orange-700">
            <div className="max-w-[800px] mx-auto px-6 text-center text-white">
                {/* Title */}
                <h2 className="text-[28px] md:text-[36px] font-bold mb-3">CONTACT</h2>
                <p className="text-[14px] text-orange-200 mb-8">お問い合わせ</p>

                {/* Description */}
                <p className="text-[14px] text-orange-100 leading-[2] mb-10">
                    セールスコンサルティングのご相談など、<br />
                    お気軽にお問い合わせください。
                </p>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-6 px-8 py-3 border-2 border-white text-white text-[13px] font-medium hover:bg-white hover:text-orange-600 transition-all duration-300 group"
                >
                    <span>お問い合わせはこちら</span>
                    <span className="w-8 h-[1px] bg-current" />
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
