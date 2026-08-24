import React from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/siteConfig";

/**
 * Seção de prova social.
 * Só renderiza quando houver depoimentos REAIS cadastrados em siteConfig.
 * Caso contrário, a seção fica oculta temporariamente.
 */
export default function SocialProof() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prova social"
          title="Negócios reais. Rotinas mais simples."
          subtitle="Veja como o Easy Food Hub está ajudando estabelecimentos a organizar a operação."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <blockquote className="text-base leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                {t.logo ? (
                  <img src={t.logo} alt="" className="h-11 w-11 rounded-full object-cover" />
                ) : (
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                    {(t.responsible || t.establishment || "?").charAt(0)}
                  </span>
                )}
                <div className="leading-tight">
                  <p className="text-sm font-semibold">{t.responsible}</p>
                  <p className="text-xs text-muted-foreground">{t.establishment}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}