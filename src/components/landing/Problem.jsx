import React from "react";
import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import { usePagina } from "@/lib/pagina";

const PROBLEMAS_PADRAO = [
  "Pedidos anotados manualmente",
  "Erros nos pedidos",
  "Pedidos espalhados pelo WhatsApp",
  "Dificuldade para controlar mesas",
  "Cardápio enviado como foto ou PDF",
  "Falta de organização no delivery",
  "Dificuldade para acompanhar a operação",
  "Atendimento demorado em horários de pico",
];

export default function Problem() {
  const problems = usePagina().dores || PROBLEMAS_PADRAO;
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            O problema
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Seu negócio ainda perde tempo com isso?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-white/40 transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                  <X className="h-5 w-5" />
                </span>
                <span className="text-base font-medium text-white/80">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Transição */}
        <Reveal delay={120} className="mt-16">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/10 p-8 text-center sm:p-12">
            <div className="absolute inset-0 -z-10 opacity-40">
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
            </div>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-saffron text-white shadow-glow">
              <Check className="h-7 w-7" />
            </span>
            <p className="mt-6 font-heading text-2xl font-bold leading-snug text-balance sm:text-3xl">
              O Easy Food Hub centraliza sua operação em um único lugar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}