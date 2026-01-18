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
                {/* 炎アイコン - 熱狂を表現 */}
                <div className="relative mb-8">
                    <svg
                        width="80"
                        height="100"
                        viewBox="0 0 24 30"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDuration: "1.5s" }}
                    >
                        {/* 外側の炎 */}
                        <path
                            d="M12 2C7 8 4 13 4 18C4 24 7.5 28 12 28C16.5 28 20 24 20 18C20 13 17 8 12 2Z"
                            fill="url(#flame-main)"
                        />
                        {/* 内側の炎 */}
                        <path
                            d="M12 10C9.5 14 8 16.5 8 19C8 22 9.5 24 12 24C14.5 24 16 22 16 19C16 16.5 14.5 14 12 10Z"
                            fill="url(#flame-inner)"
                        />
                        {/* 中心の明るい部分 */}
                        <path
                            d="M12 16C11 18 10.5 19 10.5 20.5C10.5 22 11 23 12 23C13 23 13.5 22 13.5 20.5C13.5 19 13 18 12 16Z"
                            fill="#FEF3C7"
                        />
                        <defs>
                            <linearGradient id="flame-main" x1="12" y1="2" x2="12" y2="28" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F97316"/>
                                <stop offset="0.5" stopColor="#EA580C"/>
                                <stop offset="1" stopColor="#C2410C"/>
                            </linearGradient>
                            <linearGradient id="flame-inner" x1="12" y1="10" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FBBF24"/>
                                <stop offset="1" stopColor="#F59E0B"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Loading Text */}
                <div className="flex items-center gap-1">
                    <span className="text-sm text-orange-600 tracking-widest font-medium">LOADING</span>
                    <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </span>
                </div>
            </div>

            {/* Page Content */}
            {children}
        </>
    );
}
