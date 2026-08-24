import React from "react";
import { Settings, ClipboardList, LayoutDashboard } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Settings,
    title: "Configure seu negócio",
    description: "Cadastre seus produtos, adicionais, mesas e informações do estabelecimento.",
  },
  {
    icon: ClipboardList,
    title: "Comece a receber pedidos",
    description: "Use o Easy Food Hub no atendimento presencial, delivery, cardápio digital e demais canais disponíveis.",
  },
  {
    icon: LayoutDashboard,
    title: "Centralize sua operação",
    description: "Acompanhe pedidos e informações importantes em um único sistema.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Começar é simples."
          subtitle="Em poucos passos seu negócio já está rodando no Easy Food Hub."
        />

        <div className="relative mt-16">
          {/* Linha conectora */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 140} className="relative">
                <div className="flex h-full flex-col items-center gap-5 rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="relative grid h-24 w-24 place-items-center rounded-full bg-background">
                    <span className="absolute inset-0 rounded-full border border-primary/20" />
                    <span className="grid h-16 w-16 place-items-center rounded-full gradient-saffron text-white shadow-glow">
                      <step.icon className="h-7 w-7" />
                    </span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Etapa {i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}