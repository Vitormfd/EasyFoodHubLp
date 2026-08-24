import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BrowserMockup } from "./DeviceMockup";
import { Image } from "@/components/ui/image";
import { images } from "@/lib/siteConfig";

const showcases = [
  {
    title: "Gerencie suas mesas",
    description: "Tenha uma visão simples das mesas e dos atendimentos em andamento, em tempo real.",
    image: images.tables,
    reverse: false,
  },
  {
    title: "Organize seu delivery",
    description: "Centralize os pedidos de delivery em um único lugar, do endereço ao status da entrega.",
    image: images.delivery,
    reverse: true,
  },
  {
    title: "Configure seu cardápio",
    description: "Gerencie produtos, adicionais, bebidas e outras opções do seu cardápio.",
    image: images.menu,
    reverse: false,
  },
];

export default function SystemShowcase() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Por dentro do sistema"
          title="Conheça o Easy Food Hub por dentro"
          subtitle="Uma interface limpa e organizada para você administrar todo o seu negócio de alimentação."
        />

        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                item.reverse && "lg:[&>*:first-child]:order-2"
              )}
            >
              {/* Texto */}
              <Reveal>
                <div className="flex flex-col gap-5">
                  <span className="text-5xl font-heading font-extrabold text-primary/15">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>

              {/* Imagem com lightbox */}
              <Reveal delay={120} className="group relative">
                <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />
                <button
                  type="button"
                  onClick={() => setActive(item.image)}
                  className="block w-full text-left"
                  aria-label={`Ampliar imagem: ${item.title}`}
                >
                  <div className="relative">
                    <BrowserMockup
                      src={item.image}
                      alt={item.title}
                      className="transition-transform duration-500 group-hover:-translate-y-1"
                    />
                    <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass text-foreground opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-5 w-5" />
                    </span>
                  </div>
                </button>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-deep/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass text-white"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-card shadow-lift" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active}
              alt="Screenshot ampliado do Easy Food Hub"
              className="block aspect-video w-full"
              fittingType="fill"
            />
          </div>
        </div>
      )}
    </section>
  );
}