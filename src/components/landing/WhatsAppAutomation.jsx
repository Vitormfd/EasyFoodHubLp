import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  MessageCircle,
  Check,
  ShoppingBag,
  Plus,
  CupSoda,
  CreditCard,
  MapPin,
  CheckCheck,
  Zap,
  Clock,
  ShieldCheck,
  Smile,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const flowSteps = [
  { icon: ShoppingBag, label: "Produto" },
  { icon: Plus, label: "Adicionais" },
  { icon: CupSoda, label: "Bebida" },
  { icon: CreditCard, label: "Pagamento" },
  { icon: MapPin, label: "Endereço" },
  { icon: CheckCheck, label: "Pedido confirmado" },
];

const benefits = [
  { icon: MessageCircle, text: "Menos mensagens respondidas manualmente" },
  { icon: Zap, text: "Atendimento mais rápido" },
  { icon: ShieldCheck, text: "Menos erros nos pedidos" },
  { icon: Clock, text: "Mais praticidade nos horários de pico" },
  { icon: Smile, text: "Experiência mais simples para o cliente" },
];

const conversation = [
  { from: "client", text: "Olá! Quero fazer um pedido 🍔" },
  { from: "bot", text: "Claro! Vamos começar. Veja nosso cardápio 👇" },
  { from: "bot", text: "Escolha um produto para continuar:" },
  { from: "client", text: "Hamburguer da casa 🍔" },
  { from: "bot", text: "Ótima escolha! Deseja adicionais?" },
  { from: "client", text: "Bacon e cheddar extra 🧀" },
  { from: "bot", text: "Perfeito. Forma de pagamento?" },
  { from: "client", text: "Cartão na entrega 💳" },
  { from: "bot", text: "Endereço de entrega?" },
  { from: "client", text: "Rua das Flores, 123" },
  { from: "bot", text: "✅ Pedido confirmado! Em breve sairá para entrega." },
];

export default function WhatsAppAutomation() {
  const [visibleCount, setVisibleCount] = useState(1);
  const scrollRef = useRef(null);

  // Revela as mensagens progressivamente conforme entram na viewport
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    let raf;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh * 0.9 - rect.top) / rect.height));
      const count = Math.max(1, Math.min(conversation.length, Math.ceil(progress * conversation.length)));
      setVisibleCount(count);
    };
    const onScroll = () => cancelAnimationFrame(raf) || (raf = requestAnimationFrame(update));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#25D366]/10 blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <SectionHeading
              eyebrow="Automação pelo WhatsApp"
              title="Seu atendimento continua mesmo nos horários mais corridos."
              subtitle="Com a automação pelo WhatsApp, seus clientes podem iniciar um pedido e serem conduzidos durante todo o processo de forma automática."
              align="left"
            />

            {/* Fluxo */}
            <Reveal delay={120} className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                O fluxo do pedido
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {flowSteps.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium shadow-soft">
                      <step.icon className="h-4 w-4 text-primary" />
                      {step.label}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <span className="text-muted-foreground/50">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Reveal>

            {/* Benefícios */}
            <Reveal delay={200} className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#25D366]/10 text-[#1fa855]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80">{text}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={280} className="mt-6">
              <p className="text-xs text-muted-foreground">
                * A automação pelo WhatsApp pode depender do plano contratado.
              </p>
            </Reveal>
          </div>

          {/* Simulação de chat */}
          <Reveal delay={150}>
            <div
              ref={scrollRef}
              className="relative mx-auto w-full max-w-sm"
              aria-label="Simulação visual de um pedido automático pelo WhatsApp"
              role="img"
            >
              {/* Moldura de celular */}
              <div className="relative rounded-[2.4rem] border-[7px] border-[#0F172A] bg-[#0b141a] p-3 shadow-lift">
                <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0F172A]" />
                {/* Cabeçalho do chat */}
                <div className="flex items-center gap-3 rounded-2xl bg-[#075e54] px-4 py-3 text-white">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Easy Food Hub</p>
                    <p className="text-[0.68rem] text-white/70">online agora</p>
                  </div>
                </div>
                {/* Mensagens */}
                <div
                  className="flex h-[26rem] flex-col gap-2.5 overflow-hidden p-4"
                  style={{
                    backgroundImage:
                      "radial-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                >
                  {conversation.slice(0, visibleCount).map((m, i) => (
                    <ChatBubble key={i} from={m.from} text={m.text} />
                  ))}
                </div>
              </div>
              {/* Selo de confirmação */}
              <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white">
                  <Check className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Pedido automático</p>
                  <p className="text-xs text-muted-foreground">sem esforço manual</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ from, text }) {
  const isBot = from === "bot";
  return (
    <div className={cn("flex", isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm shadow-sm",
          isBot
            ? "rounded-tl-sm bg-white text-foreground"
            : "rounded-tr-sm bg-[#dcf8c6] text-foreground"
        )}
      >
        {text}
      </div>
    </div>
  );
}