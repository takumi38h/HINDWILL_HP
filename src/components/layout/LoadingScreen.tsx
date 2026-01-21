"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/common/Logo";

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
                <div className="animate-pulse">
                    <Logo variant="black" className="scale-150" />
                </div>
            </div>
        </div>
    );
}
