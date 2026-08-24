import React from "react";
import { cn } from "@/lib/utils";
import {
  Layers,
  ShieldCheck,
  Zap,
  Bike,
  Smartphone,
  Bot,
  Gauge,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const benefits = [
  { icon: Layers, text: "Centralize sua operação" },
  { icon: ShieldCheck, text: "Reduza erros nos pedidos" },
  { icon: Zap, text: "Ganhe velocidade no atendimento" },
  { icon: Bike, text: "Organize seu delivery" },
  { icon: Smartphone, text: "Facilite os pedidos dos clientes" },
  { icon: Bot, text: "Automatize tarefas repetitivas" },
  { icon: Gauge, text: "Tenha mais controle sobre o estabelecimento" },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="dark"
          eyebrow="Benefícios"
          title="Mais organização. Menos trabalho manual."
          subtitle="O Easy Food Hub entrega resultados que você sente na rotina do dia a dia."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={i * 70}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.07]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-heading text-base font-semibold text-white/90">{text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}