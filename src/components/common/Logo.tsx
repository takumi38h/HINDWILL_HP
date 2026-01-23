import React from "react";
import Image from "next/image";

type LogoProps = {
    className?: string;
    variant?: "light" | "dark" | "black";
};

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "dark" }) => {
    const textColor = variant === "light" ? "text-white" : "text-black";
    const imgStyle = variant === "light"
        ? { filter: "brightness(0) invert(1)" }
        : {};

    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <Image
                src="/images/logo-yacht.png"
                alt="HINDWILL"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                style={imgStyle}
            />
            <span className={`text-xl font-bold tracking-wider transition-colors duration-300 font-sans ${textColor}`}>
                HINDWILL
            </span>
        </div>
    );
};
