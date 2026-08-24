import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import { images } from "@/lib/siteConfig";
import { BrowserMockup } from "./DeviceMockup";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-deep-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(0 0% 100% / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 100% / 0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur sm:p-14">
          {/* Mockup ao fundo */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-1/2 -z-10 mx-auto hidden w-[90%] opacity-20 sm:block">
            <BrowserMockup src={images.hero} alt="" />
          </div>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
              Easy Food Hub
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Seu negócio pode ser muito mais simples de administrar.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Conheça o Easy Food Hub e descubra como centralizar pedidos,
              atendimento, delivery e gestão em um único sistema.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton variant="dark" size="lg" className="group">
              Quero conhecer o Easy Food Hub
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CTAButton>
            <CTAButton variant="primary" size="lg">
              <MessageCircle className="h-5 w-5" />
              Falar pelo WhatsApp
            </CTAButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}