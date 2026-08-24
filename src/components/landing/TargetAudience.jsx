import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories = [
  { emoji: "🍔", label: "Hamburguerias" },
  { emoji: "🍕", label: "Pizzarias" },
  { emoji: "🍽️", label: "Restaurantes" },
  { emoji: "🥪", label: "Lanchonetes" },
  { emoji: "🛵", label: "Delivery" },
  { emoji: "🍣", label: "Comida japonesa" },
  { emoji: "🥤", label: "Açaí e bebidas" },
  { emoji: "🌭", label: "Outros negócios de alimentação" },
];

export default function TargetAudience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Para quem é"
          title="Feito para quem trabalha com comida."
          subtitle="O Easy Food Hub não é limitado a hamburguerias. É uma central para qualquer negócio de alimentação."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 60}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-border bg-card p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                  {cat.emoji}
                </span>
                <span className="font-heading text-sm font-semibold tracking-tight sm:text-base">
                  {cat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}