import React from "react";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Smartphone,
  Bike,
  MessageCircle,
  ClipboardList,
  Users,
  Tag,
  BellRing,
  UtensilsCrossed,
  QrCode,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { images } from "@/lib/siteConfig";
import { BrowserMockup } from "./DeviceMockup";

/* Layout bento: cartões de tamanhos variados para evitar grade monótona */
export default function Features() {
  return (
    <section id="recursos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Principais recursos"
          title="Uma central completa para o seu negócio de alimentação"
          subtitle="Do cardápio ao delivery, do atendimento às mesas — tudo conectado em um só sistema."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {/* Card grande: Gestão de mesas */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <FeatureCard
              icon={LayoutGrid}
              title="Gestão de mesas"
              description="Controle mesas abertas, pedidos, consumo e andamento dos atendimentos de maneira simples."
              image={images.tables}
              className="h-full"
            />
          </Reveal>

          {/* Card médio: Cardápio Digital */}
          <Reveal delay={80}>
            <FeatureCard
              icon={Smartphone}
              title="Cardápio Digital"
              description="Um cardápio moderno que seus clientes acessam direto pelo celular — produtos, adicionais, bebidas e demais opções."
              badge={<QrBadge />}
            />
          </Reveal>

          {/* Delivery */}
          <Reveal delay={120}>
            <FeatureCard
              icon={Bike}
              title="Delivery"
              description="Receba e organize pedidos de delivery diretamente pelo sistema."
            />
          </Reveal>

          {/* Pedidos pelo WhatsApp */}
          <Reveal delay={60}>
            <FeatureCard
              icon={MessageCircle}
              title="Pedidos pelo WhatsApp"
              description="Automatize o atendimento e deixe o cliente fazer seu pedido pelo WhatsApp."
              accent
            />
          </Reveal>

          {/* Pedidos pelo cardápio */}
          <Reveal delay={100}>
            <FeatureCard
              icon={UtensilsCrossed}
              title="Pedidos pelo cardápio"
              description="O cliente monta e envia o pedido direto pelo cardápio digital."
            />
          </Reveal>

          {/* Gestão de pedidos */}
          <Reveal delay={140}>
            <FeatureCard
              icon={ClipboardList}
              title="Gestão de pedidos"
              description="Centralize os pedidos e acompanhe cada etapa de maneira organizada."
            />
          </Reveal>

          {/* Clientes */}
          <Reveal delay={60}>
            <FeatureCard
              icon={Users}
              title="Clientes"
              description="Mantenha informações dos clientes organizadas para facilitar novos pedidos e o relacionamento."
            />
          </Reveal>

          {/* Promoções */}
          <Reveal delay={100}>
            <FeatureCard
              icon={Tag}
              title="Promoções"
              description="Crie diferentes promoções e ofertas de maneira simples e prática."
            />
          </Reveal>

          {/* Mensagens automáticas */}
          <Reveal delay={140}>
            <FeatureCard
              icon={BellRing}
              title="Mensagens automáticas"
              description="Automatize partes importantes da comunicação com os clientes."
            />
          </Reveal>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <CTAButton variant="outline" to="#planos" className="group">
            Ver planos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, image, badge, accent, className }) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        accent && "border-primary/30 bg-gradient-to-br from-primary/[0.06] to-accent/[0.04]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
            accent ? "gradient-saffron text-white shadow-glow" : "bg-primary/10 text-primary"
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        {badge}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-bold tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {image && (
        <div className="mt-auto pt-2">
          <BrowserMockup src={image} alt={title} className="rounded-xl" />
        </div>
      )}
    </div>
  );
}

function QrBadge() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background">
      <QrCode className="h-5 w-5 text-foreground/60" />
    </span>
  );
}