"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setIsLoading(false);
            }, 600);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
            {/* Left Panel */}
            <div
                className={`w-1/2 bg-white transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`}
            />
            {/* Right Panel */}
            <div
                className={`w-1/2 bg-white transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}
            />

            {/* Center Logo */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-3">
                    {/* 炎アイコン - 熱狂を表現 */}
                    <svg className="w-10 h-10 animate-pulse" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2C8.5 6 6 9.5 6 13C6 17.4 8.7 20 12 20C15.3 20 18 17.4 18 13C18 9.5 15.5 6 12 2Z"
                            fill="url(#flame-gradient)"
                        />
                        <path
                            d="M12 8C10.5 10 9.5 11.5 9.5 13.5C9.5 15.4 10.6 17 12 17C13.4 17 14.5 15.4 14.5 13.5C14.5 11.5 13.5 10 12 8Z"
                            fill="#FBBF24"
                        />
                        <defs>
                            <linearGradient id="flame-gradient" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F97316"/>
                                <stop offset="1" stopColor="#EA580C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="text-3xl font-bold tracking-[0.15em] text-orange-950">HINDWILL</span>
                </div>
            </div>
        </div>
    );
}
