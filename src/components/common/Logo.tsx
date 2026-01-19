import React from "react";

type LogoProps = {
    className?: string;
    variant?: "light" | "dark" | "black"; // light: white text, dark: black text
};

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
    const textColor = variant === "light" ? "text-white" : "text-black";

    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <div className="w-10 h-10 relative flex items-center justify-center">
                <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    className="w-full h-full"
                >
                    {/* Flying H Flag */}
                    <path
                        d="M6 4V36"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={variant === 'light' ? 'text-white' : 'text-gray-900'}
                    />

                    {/* Flag Shape */}
                    <path
                        d="M6 6C16 4 24 10 36 6V22C24 24 16 18 6 22V6Z"
                        fill="currentColor"
                        className={variant === 'light' ? 'text-white' : 'text-gray-900'}
                    />

                    {/* Skull Abstract */}
                    <circle cx="16" cy="14" r="4" fill={variant === 'light' ? '#111' : '#fff'} />
                    <path d="M24 12L28 16M28 12L24 16" stroke="#F97316" strokeWidth="2" />
                </svg>
            </div>

            {/* Logotype */}
            <span className={`text-xl font-bold tracking-wider transition-colors duration-300 font-sans ${textColor}`}>
                HINDWILL
            </span>
        </div>
    );
};

