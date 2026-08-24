import React from "react";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";

/**
 * Mockups de dispositivo reutilizáveis (navegador, notebook, celular).
 * Recebem uma imagem e a envolvem em uma moldura premium.
 */

export function BrowserMockup({ src, alt, className, label = "easyfoodhub.com.br" }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-lift",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1">
          <div className="mx-auto flex h-6 max-w-xs items-center justify-center rounded-md bg-background/80 px-3 text-[0.68rem] font-medium text-muted-foreground">
            {label}
          </div>
        </div>
      </div>
      <div className="relative bg-background">
        <Image
          src={src}
          alt={alt}
          className="block aspect-video w-full"
          fittingType="fill"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function PhoneMockup({ src, alt, className }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[230px] max-w-[80vw] rounded-[2.2rem] border-[6px] border-[#0F172A] bg-[#0F172A] shadow-lift",
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0F172A]" />
      <div className="overflow-hidden rounded-[1.7rem] bg-background">
        <Image
          src={src}
          alt={alt}
          className="aspect-[9/19] w-full object-cover"
          fittingType="fill"
          loading="lazy"
        />
      </div>
    </div>
  );
}