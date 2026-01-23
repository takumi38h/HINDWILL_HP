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
                className={`fixed inset-0 z-[9999] bg-gradient-to-br from-gray-950 via-black to-gray-900 flex flex-col items-center justify-center transition-opacity duration-500 ${
                    isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* 背景パーティクル */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                            style={{
                                left: `${((i * 37 + 13) % 100)}%`,
                                top: `${((i * 53 + 7) % 100)}%`,
                                animationDelay: `${(i * 0.1) % 2}s`,
                                animationDuration: `${2 + (i % 5) * 0.4}s`
                            }}
                        />
                    ))}
                </div>

                {/* メインコンテンツ */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* ヨットアイコン with wave animation */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 blur-2xl bg-white/15 rounded-full scale-150 animate-pulse" />
                        <svg
                            width="120"
                            height="120"
                            viewBox="0 0 100 100"
                            fill="none"
                            className="relative z-10 drop-shadow-2xl"
                            style={{ filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))" }}
                        >
                            <defs>
                                <linearGradient id="sail-trans" x1="50" y1="10" x2="50" y2="65" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#DAA520"/>
                                    <stop offset="1" stopColor="#B8860B"/>
                                </linearGradient>
                            </defs>
                            {/* Yacht body - rocks on waves */}
                            <g>
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="-3 50 70;3 50 70;-3 50 70"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                                {/* Main sail */}
                                <path d="M50 10L68 62H36Z" fill="url(#sail-trans)" />
                                {/* Jib sail */}
                                <path d="M46 18L32 58H46Z" fill="#B8860B" opacity="0.8" />
                                {/* Hull */}
                                <path d="M30 65L70 65L65 72H35Z" fill="#FFFFFF" opacity="0.9" />
                            </g>
                            {/* Wave 1 */}
                            <path fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round">
                                <animate
                                    attributeName="d"
                                    values="M10 78C20 74 30 74 40 78C50 82 60 82 70 78C80 74 90 74 100 78;M10 78C20 82 30 82 40 78C50 74 60 74 70 78C80 82 90 82 100 78;M10 78C20 74 30 74 40 78C50 82 60 82 70 78C80 74 90 74 100 78"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </path>
                            {/* Wave 2 */}
                            <path fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round">
                                <animate
                                    attributeName="d"
                                    values="M5 86C18 83 28 83 40 86C52 89 62 89 75 86C88 83 95 83 100 86;M5 86C18 89 28 89 40 86C52 83 62 83 75 86C88 89 95 89 100 86;M5 86C18 83 28 83 40 86C52 89 62 89 75 86C88 83 95 83 100 86"
                                    dur="4s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </svg>
                    </div>

                    {/* ブランド名 */}
                    <h2 className="text-3xl font-bold text-white tracking-[0.3em] mb-4">HINDWILL</h2>

                    {/* プログレスバー */}
                    <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full animate-loading-bar"
                             style={{ animation: "loading-bar 1.2s ease-in-out infinite" }} />
                    </div>
                </div>
            </div>

            {/* Page Content */}
            {children}
        </>
    );
}
