import React from "react";
import { ArrowRight, Play, Smartphone, UtensilsCrossed, LayoutGrid, Bike, MessageCircle } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { BrowserMockup } from "./DeviceMockup";
import { images } from "@/lib/siteConfig";

const trustItems = [
  { icon: Smartphone, label: "Cardápio Digital" },
  { icon: UtensilsCrossed, label: "Pedidos" },
  { icon: LayoutGrid, label: "Mesas" },
  { icon: Bike, label: "Delivery" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Fundo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Texto */}
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
              Tudo o que seu negócio de alimentação precisa em um só lugar
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
              Pedidos, atendimento e gestão.{" "}
              <span className="gradient-text-saffron">Tudo em um só lugar.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Gerencie seu restaurante, hamburgueria, pizzaria ou delivery com
              cardápio digital, controle de pedidos, mesas, delivery e automação
              pelo WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row">
            <CTAButton size="lg" className="group">
              Quero conhecer o Easy Food Hub
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CTAButton>
            <CTAButton size="lg" variant="outline" to="#como-funciona">
              <Play className="h-4 w-4" />
              Ver como funciona
            </CTAButton>
          </Reveal>

          <Reveal delay={320}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Mockup */}
        <Reveal delay={200} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent blur-2xl" />
          <div className="animate-float-slow">
            <BrowserMockup
              src={images.hero}
              alt="Easy Food Hub funcionando em notebook e celular"
              label="app.easyfoodhub.com.br"
            />
          </div>
          {/* Card flutuante de destaque */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-lift backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-saffron text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Pedido confirmado</p>
                <p className="text-xs text-muted-foreground">via WhatsApp automático</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}