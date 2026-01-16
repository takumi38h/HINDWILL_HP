"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const isFirstMount = useRef(true);
    const prevPathname = useRef(pathname);

    useEffect(() => {
        // 初回マウント時はスキップ
        if (isFirstMount.current) {
            isFirstMount.current = false;
            return;
        }

        // パスが変わった時のみローディング表示
        if (prevPathname.current !== pathname) {
            setIsLoading(true);
            prevPathname.current = pathname;

            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1200);

            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return (
        <>
            {/* Loading Overlay */}
            <div
                className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
                    isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Ship Illustration */}
                <div className="relative mb-8">
                    <svg
                        width="120"
                        height="100"
                        viewBox="0 0 120 100"
                        fill="none"
                        className="animate-bounce"
                        style={{ animationDuration: "2s" }}
                    >
                        {/* 船体 */}
                        <path
                            d="M10 70 Q20 85 60 85 Q100 85 110 70 L100 70 Q90 75 60 75 Q30 75 20 70 Z"
                            fill="#2D2D2D"
                        />
                        {/* 船のデッキ */}
                        <rect x="25" y="55" width="70" height="15" rx="2" fill="#4A4A4A" />
                        {/* マスト */}
                        <rect x="58" y="15" width="4" height="55" fill="#5C4033" />
                        {/* 帆 */}
                        <path
                            d="M62 20 L62 55 L95 45 Z"
                            fill="#F5F5F5"
                            stroke="#DDDDDD"
                            strokeWidth="1"
                        />
                        <path
                            d="M58 20 L58 55 L25 45 Z"
                            fill="#F5F5F5"
                            stroke="#DDDDDD"
                            strokeWidth="1"
                        />
                        {/* 旗 */}
                        <path
                            d="M58 10 L58 20 L45 15 Z"
                            fill="#E53E3E"
                        />
                        {/* ドクロマーク（海賊風） */}
                        <circle cx="60" cy="40" r="6" fill="#2D2D2D" />
                        <circle cx="57" cy="38" r="1.5" fill="white" />
                        <circle cx="63" cy="38" r="1.5" fill="white" />
                        <path d="M57 43 L63 43" stroke="white" strokeWidth="1" />
                    </svg>

                    {/* 波のアニメーション */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32">
                        <svg viewBox="0 0 120 20" className="w-full">
                            <path
                                d="M0 10 Q15 0 30 10 Q45 20 60 10 Q75 0 90 10 Q105 20 120 10"
                                fill="none"
                                stroke="#60A5FA"
                                strokeWidth="2"
                                className="animate-pulse"
                            />
                        </svg>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-500 tracking-widest">LOADING</span>
                    <span className="flex gap-1">
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </span>
                </div>
            </div>

            {/* Page Content */}
            {children}
        </>
    );
}
