import React from "react";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { plans } from "@/lib/siteConfig";

export default function Plans() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preço"
          title="Um plano só, com tudo incluído"
          subtitle="O Easy Food Hub não cobra comissão por pedido. Teste por 7 dias antes de decidir, sem cartão."
        />

        <div className="mx-auto mt-16 grid max-w-xl gap-6">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300",
                  plan.highlighted
                    ? "border-primary/40 bg-gradient-to-b from-primary/[0.07] to-accent/[0.03] shadow-lift"
                    : "border-border bg-card shadow-soft hover:-translate-y-1 hover:shadow-lift"
                )}
              >
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

                <div className="mt-8 flex flex-col gap-3 pt-2">
                  <CTAButton size="lg" className="w-full" cadastro>
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                  <CTAButton variant="outline" size="lg" className="w-full">
                    <MessageCircle className="h-4 w-4" />
                    Tirar dúvidas no WhatsApp
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda com dúvidas?{" "}
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