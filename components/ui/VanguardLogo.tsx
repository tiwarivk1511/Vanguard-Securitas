import React from "react";
import Image from "next/image";

interface VanguardLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  lightText?: boolean;
}

export const VanguardLogo: React.FC<VanguardLogoProps> = ({
  className = "",
  iconOnly = false,
  size = "md",
  lightText = false,
}) => {
  const sizeMap = {
    sm: { icon: 34, textTitle: "text-base", textSub: "text-[9px]" },
    md: { icon: 44, textTitle: "text-xl", textSub: "text-[10px]" },
    lg: { icon: 56, textTitle: "text-2xl", textSub: "text-[11px]" },
    xl: { icon: 80, textTitle: "text-4xl", textSub: "text-xs" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Emblem SVG with Glow effect on hover */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-full group-hover:bg-amber-400/35 transition-all duration-300" />
        <Image
          src="/vanguard-logo.png"
          alt="Vanguard Securitas Emblem"
          width={currentSize.icon}
          height={currentSize.icon}
          className="relative z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)] transform group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col tracking-tight">
          <div className={`font-extrabold gold-gradient-text uppercase leading-none font-sans tracking-widest ${currentSize.textTitle}`}>
            Vanguard
          </div>
          <div className={`font-semibold tracking-[0.2em] uppercase leading-snug ${lightText ? "text-slate-300" : "text-slate-700"} ${currentSize.textSub}`}>
            Securitas & Manpower
          </div>
        </div>
      )}
    </div>
  );
};
