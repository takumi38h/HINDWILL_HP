import Link from "next/link";

export function CompanyRecruit() {
    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* COMPANY */}
                    <Link
                        href="/company"
                        className="group relative bg-[#F5F5F5] h-[140px] md:h-[250px] flex flex-col items-center justify-center hover:bg-[#EBEBEB] transition-colors"
                    >
                        {/* Flag Icon - 旗 */}
                        <svg
                            className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M4 21V4" />
                            <path d="M4 4c4-2 8 2 12 0v10c-4 2-8-2-12 0" />
                        </svg>
                        <h3 className="text-[16px] md:text-[28px] font-bold tracking-[0.1em] mb-0.5 md:mb-1">
                            COMPANY
                        </h3>
                        <p className="text-[10px] md:text-[12px] text-gray-500">会社概要</p>
                        {/* Arrow */}
                        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* RECRUIT */}
                    <Link
                        href="/recruit"
                        className="group relative bg-[#F5F5F5] h-[140px] md:h-[250px] flex flex-col items-center justify-center hover:bg-[#EBEBEB] transition-colors"
                    >
                        {/* Anchor Icon - 錨 */}
                        <svg
                            className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <circle cx="12" cy="5" r="3" />
                            <path d="M12 8v13" />
                            <path d="M5 12h2a5 5 0 0 0 10 0h2" />
                            <path d="M12 21a9 9 0 0 1-9-9h2M12 21a9 9 0 0 0 9-9h-2" />
                        </svg>
                        <h3 className="text-[16px] md:text-[28px] font-bold tracking-[0.1em] mb-0.5 md:mb-1">
                            RECRUIT
                        </h3>
                        <p className="text-[10px] md:text-[12px] text-gray-500">採用情報</p>
                        {/* Arrow */}
                        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
