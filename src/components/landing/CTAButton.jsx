import React from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/siteConfig";

const variants = {
  primary:
    "gradient-saffron text-white shadow-glow hover:brightness-105 hover:-translate-y-0.5",
  outline:
    "border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary",
  ghost: "text-foreground hover:bg-muted",
  dark: "bg-white text-deep hover:bg-white/90 hover:-translate-y-0.5",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

/**
 * Botão de CTA. Por padrão abre o WhatsApp do Easy Food Hub.
 * Use `to` para um link interno/externo, ou `whatsapp` com mensagem custom.
 */
export default function CTAButton({
  children,
  variant = "primary",
  size = "md",
  to,
  whatsapp = "Olá! Quero conhecer o Easy Food Hub.",
  className,
  ...props
}) {
  const href = to ?? whatsappLink(whatsapp);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}