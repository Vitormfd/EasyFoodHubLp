import React from "react";
import { cn } from "@/lib/utils";
import { Check, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { plans } from "@/lib/siteConfig";

export default function Plans() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para o seu negócio"
          subtitle="Comece com o sistema completo de gestão ou adicione a automação pelo WhatsApp."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 lg:grid-cols-2 lg:items-center">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300",
                  plan.highlighted
                    ? "border-primary/40 bg-gradient-to-b from-primary/[0.07] to-accent/[0.03] shadow-lift lg:scale-[1.04]"
                    : "border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-lift"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full gradient-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Mais completo
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl font-extrabold tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  {plan.price ? (
                    <span className="font-heading text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  ) : (
                    <span className="font-heading text-2xl font-bold tracking-tight text-foreground/80">
                      {plan.priceNote}
                    </span>
                  )}
                  {plan.price && (
                    <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
                  )}
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          plan.highlighted ? "gradient-saffron text-white" : "bg-primary/10 text-primary"
                        )}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <CTAButton
                    variant={plan.highlighted ? "primary" : "outline"}
                    size="lg"
                    to={plan.ctaHref}
                    className="w-full"
                  >
                    {plan.highlighted && <MessageCircle className="h-4 w-4" />}
                    {plan.ctaLabel}
                    {!plan.highlighted && <ArrowRight className="h-4 w-4" />}
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Dúvidas sobre qual plano escolher?{" "}
            <a
              href="#faq"
              className="font-semibold text-primary hover:underline"
            >
              Veja as perguntas frequentes
            </a>{" "}
            ou fale com a nossa equipe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}