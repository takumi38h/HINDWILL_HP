"use client";

import React, { useState } from "react";

// --- Pirate Pattern 1: Elegant Captain (Gold/Black) ---
const Logo1 = () => (
    <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative flex items-center justify-center bg-gray-900 rounded-lg border border-yellow-600/30 shadow-lg overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-yellow-900/20" />

            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full relative z-10 p-2">
                <defs>
                    <linearGradient id="gold-grad" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FCD34D" />
                        <stop offset="50%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#78350F" />
                    </linearGradient>
                </defs>
                {/* Compass / Wheel */}
                <circle cx="20" cy="20" r="14" stroke="url(#gold-grad)" strokeWidth="1" />
                <path d="M20 6V10M20 30V34M6 20H10M30 20H34" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" />

                {/* Stylized Skull H */}
                <path d="M14 14V26" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 14V26" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 20H26" stroke="url(#gold-grad)" strokeWidth="2" />

                {/* Diamond Eye */}
                <rect x="18.5" y="18.5" width="3" height="3" rotate="45" fill="#1F2937" />
            </svg>
        </div>
        <div>
            <span className="block font-serif font-bold text-3xl tracking-wide text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>HINDWILL</span>
            <span className="block text-[9px] text-yellow-700 tracking-[0.3em] font-medium uppercase text-center mt-[-4px]">Beyond The Horizon</span>
        </div>
    </div>
);

// --- Pirate Pattern 2: Iron Clad (Industrial/Rust) ---
const Logo2 = () => (
    <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative flex items-center justify-center bg-zinc-800 rounded-sm border-2 border-zinc-600 shadow-inner">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full p-2">
                <defs>
                    <filter id="rust">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
                        <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                        <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
                    </filter>
                </defs>
                {/* Crossed Blades forming X/H */}
                <path d="M8 8L32 32" stroke="#94A3B8" strokeWidth="4" strokeLinecap="square" />
                <path d="M32 8L8 32" stroke="#94A3B8" strokeWidth="4" strokeLinecap="square" />
                {/* Central Plate */}
                <rect x="13" y="13" width="14" height="14" fill="#333" stroke="#1F2937" strokeWidth="2" />
                <circle cx="20" cy="20" r="3" fill="#1F2937" />
            </svg>
        </div>
        <span className="font-sans font-black text-3xl tracking-tighter text-zinc-800 uppercase" style={{ textShadow: '2px 2px 0px #ccc' }}>HINDWILL</span>
    </div>
);

// --- Pirate Pattern 3: Cyber Corsair (Neon) ---
const Logo3 = () => (
    <div className="flex items-center gap-4 p-4 bg-black rounded-xl border border-gray-800">
        <div className="w-12 h-12 relative flex items-center justify-center bg-black rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full p-2">
                {/* Circuit Skull */}
                <path d="M12 10H28V30H12V10Z" stroke="#333" strokeWidth="1" />
                <path d="M10 14C10 8 14 6 20 6C26 6 30 8 30 14V22H10V14Z" stroke="#1F2937" strokeWidth="1.5" fill="none" />
                <rect x="13" y="24" width="4" height="6" fill="#333" />
                <rect x="23" y="24" width="4" height="6" fill="#333" />

                {/* Glowing Eye */}
                <circle cx="24" cy="16" r="2" fill="#1F2937" className="animate-pulse" />
                <path d="M14 16L18 16" stroke="#555" strokeWidth="2" />

                {/* Data Lines */}
                <path d="M4 20H10" stroke="#1F2937" strokeOpacity="0.5" />
                <path d="M30 20H36" stroke="#1F2937" strokeOpacity="0.5" />
            </svg>
        </div>
        <div>
            <span className="font-mono font-bold text-2xl tracking-widest text-white">HINDWILL</span>
            <div className="h-0.5 w-full bg-gradient-to-r from-gray-900 to-transparent mt-1" />
        </div>
    </div>
);

// --- Pirate Pattern 4: The Flag (Modern Abstract) ---
const Logo4 = () => (
    <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative flex items-center justify-center">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                {/* Flying H Flag */}
                <path d="M6 4V36" stroke="#111" strokeWidth="3" strokeLinecap="round" />

                {/* Flag Shape */}
                <path d="M6 6C16 4 24 10 36 6V22C24 24 16 18 6 22V6Z" fill="#111" />

                {/* Skull Abstract */}
                <circle cx="16" cy="14" r="4" fill="white" />
                <path d="M24 12L28 16M28 12L24 16" stroke="#1F2937" strokeWidth="2" />
            </svg>
        </div>
        <span className="font-sans font-bold text-2xl tracking-tight text-gray-900">HINDWILL</span>
    </div>
);


export default function LogoPreviewPage() {
    const [bg, setBg] = useState<"white" | "gray" | "black">("white");

    const getBgClass = () => {
        if (bg === "white") return "bg-white";
        if (bg === "gray") return "bg-gray-100";
        return "bg-black text-white";
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <div className={`flex-1 p-10 ${getBgClass()} transition-colors duration-500`}>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="flex justify-between items-center border-b pb-6 border-gray-300">
                        <div>
                            <h1 className={`text-3xl font-bold ${bg === 'black' ? 'text-white' : 'text-black'}`}>Pirate Theme Proposals</h1>
                            <p className="text-sm text-red-500 mt-2">※ 画像生成AIサーバーが利用不可(429 Error)のため、コードベースのデザイン案を表示しています。</p>
                        </div>
                        <div className="flex gap-2 text-sm text-black">
                            <button onClick={() => setBg("white")} className="px-3 py-1 bg-white border rounded">White</button>
                            <button onClick={() => setBg("gray")} className="px-3 py-1 bg-gray-100 border rounded">Gray</button>
                        </div>
                    </div>

                    {/* Proposal 1 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-4">
                            <h2 className={`text-xl font-bold opacity-50 ${bg === 'black' ? 'text-white' : 'text-black'}`}>01. The Captain (Elegant)</h2>
                        </div>
                        <div className={`p-10 rounded-xl border-2 ${bg === 'black' ? 'bg-white/10 border-transparent' : 'bg-white border-gray-100 shadow-sm'}`}>
                            <Logo1 />
                            <p className="mt-4 text-sm text-gray-500 max-w-md">
                                高級感のあるゴールド×ブラック。「羅針盤」と「H」を組み合わせ、未知への航海をイメージ。
                            </p>
                        </div>
                    </section>

                    {/* Proposal 2 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-4">
                            <h2 className={`text-xl font-bold opacity-50 ${bg === 'black' ? 'text-white' : 'text-black'}`}>02. Iron Clad (Industrial)</h2>
                        </div>
                        <div className={`p-10 rounded-xl border-2 ${bg === 'black' ? 'bg-white/10 border-transparent' : 'bg-white border-gray-100 shadow-sm'}`}>
                            <Logo2 />
                            <p className="mt-4 text-sm text-gray-500 max-w-md">
                                鉄とステンシルの無骨なデザイン。荒波を越える強固な船体を表現。
                            </p>
                        </div>
                    </section>

                    {/* Proposal 3 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-4">
                            <h2 className={`text-xl font-bold opacity-50 ${bg === 'black' ? 'text-white' : 'text-black'}`}>03. Cyber Corsair (Modern)</h2>
                        </div>
                        <div className={`p-10 rounded-xl border-2 ${bg === 'black' ? 'bg-gray-900 border-transparent' : 'bg-gray-900 border-gray-800 shadow-sm'}`}>
                            <Logo3 />
                            <p className="mt-4 text-gray-400 text-sm max-w-md">
                                デジタル海賊（ハッカー/イノベーター）のイメージ。ネオンオレンジの瞳がアクセント。
                            </p>
                        </div>
                    </section>

                    {/* Proposal 4 */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-4">
                            <h2 className={`text-xl font-bold opacity-50 ${bg === 'black' ? 'text-white' : 'text-black'}`}>04. Black Flag (Abstract)</h2>
                        </div>
                        <div className={`p-10 rounded-xl border-2 ${bg === 'black' ? 'bg-white/10 border-transparent' : 'bg-white border-gray-100 shadow-sm'}`}>
                            <Logo4 />
                            <p className="mt-4 text-sm text-gray-500 max-w-md">
                                はためく黒旗（ジョリー・ロジャー）をモダンに抽象化。企業ロゴとしての使いやすさを重視。
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
