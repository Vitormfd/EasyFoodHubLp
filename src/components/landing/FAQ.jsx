import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { ArrowRight } from "lucide-react";
import { usePagina } from "@/lib/pagina";

export const FAQS_PADRAO = [
  {
    q: "Quanto custa o Easy Food Hub?",
    a: "R$ 199 por mês, em um plano só. Você testa por 7 dias antes, sem cartão, e a cobrança só começa se assinar.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "Você cria a conta, monta o cardápio e recebe pedidos de verdade por 7 dias, com mesas e cardápio online liberados. A automação do WhatsApp e o marketing entram com a assinatura. Se não assinar, os pedidos param ao fim do teste e seus dados continuam guardados.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O Easy Food Hub é um sistema online, acessado pelo navegador. Você não precisa instalar programas no computador ou no celular.",
  },
  {
    q: "O Easy Food Hub funciona pelo celular?",
    a: "Sim. O sistema funciona pelo navegador do celular e do computador, e o cardápio digital é acessado diretamente pelo celular do cliente.",
  },
  {
    q: "Serve apenas para restaurantes?",
    a: "Não. O Easy Food Hub serve para restaurantes, hamburguerias, pizzarias, lanchonetes, açaíterias, operações de delivery e outros negócios de alimentação.",
  },
  {
    q: "Posso usar em uma hamburgueria?",
    a: "Sim. O sistema é ideal para hamburguerias, com controle de pedidos, adicionais, bebidas, mesas e delivery.",
  },
  {
    q: "Posso usar para delivery?",
    a: "Sim. Você recebe e organiza os pedidos de delivery diretamente pelo sistema, do endereço ao status da entrega.",
  },
  {
    q: "Como funciona o cardápio digital?",
    a: "Você cadastra seus produtos, adicionais e bebidas no sistema. O cliente acessa o cardápio pelo celular, monta o pedido e envia direto para o estabelecimento.",
  },
  {
    q: "Como funciona a automação pelo WhatsApp?",
    a: "O cliente inicia o atendimento pelo WhatsApp e é conduzido automaticamente pelo fluxo do pedido: produto, adicionais, bebida, pagamento, endereço e confirmação. A automação faz parte da assinatura e não entra no teste grátis.",
  },
  {
    q: "Posso cadastrar adicionais nos produtos?",
    a: "Sim. Você pode cadastrar adicionais e opções extras para cada produto do cardápio.",
  },
  {
    q: "Como começo a usar?",
    a: "Você mesmo cadastra seus produtos, mesas e as informações do estabelecimento, e o sistema mostra o passo a passo até o primeiro pedido. Se tiver dúvida, nossa equipe ajuda pelo WhatsApp.",
  },
  {
    q: "Vocês oferecem suporte?",
    a: "Sim. Oferecemos suporte e acompanhamento para ajudar no uso do sistema e na sua rotina de operação.",
  },
];

export default function FAQ() {
  const pagina = usePagina();
  const faqs = [...(pagina.faq || []), ...FAQS_PADRAO];
  return (
    <section id="faq" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas frequentes"
          subtitle="Tudo o que você precisa saber antes de começar com o Easy Food Hub."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-primary/30 data-[state=open]:shadow-lift"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda com dúvidas? Nossa equipe pode ajudar.
          </p>
          <div className="mt-4 flex justify-center">
            <CTAButton variant="outline" className="group">
              Falar com a equipe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}