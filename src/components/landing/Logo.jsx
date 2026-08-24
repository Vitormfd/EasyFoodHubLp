import React from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/siteConfig";

/**
 * Logo do Easy Food Hub — marca + símbolo "Hub".
 * Usa apenas tipografia e ícone, sem imagem externa.
 */
export default function Logo({ className, variant = "light", showTagline = false }) {
  const isDark = variant === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative grid h-9 w-9 place-items-center rounded-xl gradient-saffron shadow-glow",
        )}
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="7" cy="7" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="17" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="9" cy="17" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.05rem] font-extrabold tracking-tight",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {site.brand}
        </span>
        {showTagline && (
          <span className={cn("text-[0.62rem] font-medium", isDark ? "text-white/55" : "text-muted-foreground")}>
            um produto {site.parentBrand}
          </span>
        )}
      </span>
    </span>
  );
}