import Link from "next/link";

export function CompanyRecruit() {
    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* COMPANY */}
                    <Link
                        href="/company"
                        className="group relative bg-gray-50 h-[140px] md:h-[250px] flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        {/* Building Icon - ビル */}
                        <svg
                            className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 text-gray-800"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M3 21h18" />
                            <path d="M5 21V7l8-4v18" />
                            <path d="M19 21V11l-6-4" />
                            <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
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
                        className="group relative bg-gray-50 h-[140px] md:h-[250px] flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                        {/* People Icon - 人材 */}
                        <svg
                            className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 text-gray-800"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <circle cx="12" cy="7" r="4" />
                            <path d="M5.5 21v-2a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
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
