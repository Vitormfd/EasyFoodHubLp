import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

/**
 * Cabeçalho de seção padronizado: eyebrow + título + subtítulo.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
  className,
}) {
  const isDark = variant === "dark";
  return (
    <Reveal
      className={cn(
        "mx-auto flex max-w-2xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider",
            isDark
              ? "border-white/15 bg-white/5 text-primary"
              : "border-primary/20 bg-primary/5 text-primary"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/65" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}