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
                className={`fixed inset-0 z-[9999] bg-gradient-to-br from-orange-950 via-black to-orange-900 flex flex-col items-center justify-center transition-opacity duration-500 ${
                    isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* 背景パーティクル */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* メインコンテンツ */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* 炎アイコン with glow effect */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 blur-2xl bg-orange-500/50 rounded-full scale-150 animate-pulse" />
                        <svg
                            width="100"
                            height="120"
                            viewBox="0 0 24 30"
                            fill="none"
                            className="relative z-10 drop-shadow-2xl"
                            style={{ filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.5))" }}
                        >
                            <path
                                d="M12 2C7 8 4 13 4 18C4 24 7.5 28 12 28C16.5 28 20 24 20 18C20 13 17 8 12 2Z"
                                fill="url(#flame-main-trans)"
                            >
                                <animate attributeName="d" dur="1s" repeatCount="indefinite"
                                    values="M12 2C7 8 4 13 4 18C4 24 7.5 28 12 28C16.5 28 20 24 20 18C20 13 17 8 12 2Z;
                                            M12 3C8 8 5 13 5 17C5 23 8 27 12 27C16 27 19 23 19 17C19 13 16 8 12 3Z;
                                            M12 2C7 8 4 13 4 18C4 24 7.5 28 12 28C16.5 28 20 24 20 18C20 13 17 8 12 2Z"
                                />
                            </path>
                            <path
                                d="M12 10C9.5 14 8 16.5 8 19C8 22 9.5 24 12 24C14.5 24 16 22 16 19C16 16.5 14.5 14 12 10Z"
                                fill="url(#flame-inner-trans)"
                            >
                                <animate attributeName="d" dur="0.8s" repeatCount="indefinite"
                                    values="M12 10C9.5 14 8 16.5 8 19C8 22 9.5 24 12 24C14.5 24 16 22 16 19C16 16.5 14.5 14 12 10Z;
                                            M12 11C10 14 9 16 9 18.5C9 21.5 10 23 12 23C14 23 15 21.5 15 18.5C15 16 14 14 12 11Z;
                                            M12 10C9.5 14 8 16.5 8 19C8 22 9.5 24 12 24C14.5 24 16 22 16 19C16 16.5 14.5 14 12 10Z"
                                />
                            </path>
                            <path
                                d="M12 16C11 18 10.5 19 10.5 20.5C10.5 22 11 23 12 23C13 23 13.5 22 13.5 20.5C13.5 19 13 18 12 16Z"
                                fill="#FEF3C7"
                                className="animate-pulse"
                            />
                            <defs>
                                <linearGradient id="flame-main-trans" x1="12" y1="2" x2="12" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F97316"/>
                                    <stop offset="0.5" stopColor="#EA580C"/>
                                    <stop offset="1" stopColor="#C2410C"/>
                                </linearGradient>
                                <linearGradient id="flame-inner-trans" x1="12" y1="10" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FBBF24"/>
                                    <stop offset="1" stopColor="#F59E0B"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* ブランド名 */}
                    <h2 className="text-3xl font-bold text-white tracking-[0.3em] mb-4">HINDWILL</h2>

                    {/* プログレスバー */}
                    <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-loading-bar"
                             style={{ animation: "loading-bar 1.2s ease-in-out infinite" }} />
                    </div>
                </div>
            </div>

            {/* Page Content */}
            {children}
        </>
    );
}
