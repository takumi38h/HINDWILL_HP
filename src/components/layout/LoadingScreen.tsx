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
                    <svg className="w-12 h-12 text-black animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25 0-5.52-4.48-10-10-10zm-2 15c-.83 0-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5S10.83 17 10 17zm4 0c-.83 0-1.5-.67-1.5-1.5S13.17 14 14 14s1.5.67 1.5 1.5S14.83 17 14 17zm-2-5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>
                    <span className="text-3xl font-bold tracking-[0.15em] text-black">KAIZOKU</span>
                </div>
            </div>
        </div>
    );
}
