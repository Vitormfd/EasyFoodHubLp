import React from "react";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/siteConfig";
import { usePagina } from "@/lib/pagina";

const cols = [
  {
    title: "Produto",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Recursos", href: "#recursos" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Planos", href: "#planos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: whatsappLink(), external: true },
      { label: `Instagram @${site.instagram}`, href: site.instagramUrl, external: true },
      { label: site.email, href: `mailto:${site.email}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", href: "#politica-de-privacidade" },
      { label: "Termos de Uso", href: "#termos-de-uso" },
      { label: "Contato", href: whatsappLink("Olá! Preciso de atendimento."), external: true },
    ],
  },
];

export default function Footer() {
  const { nichos = [], entrar } = usePagina();
  // No build de SEO, o rodapé ganha a coluna com as páginas de cada tipo de negócio.
  const colunas = nichos.length
    ? [
        {
          title: "Soluções",
          links: [
            ...nichos.map((n) => ({ label: n.titulo || n.label, href: n.href })),
            ...(entrar ? [{ label: "Entrar no sistema", href: entrar }] : []),
          ],
        },
        ...cols,
      ]
    : cols;
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div
          className="grid gap-10 lg:grid-cols-[1.4fr_repeat(var(--colunas),1fr)]"
          style={{ "--colunas": colunas.length }}
        >
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <Logo showTagline />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tudo o que seu negócio de alimentação precisa em um só lugar.
              Pedidos, atendimento, delivery e gestão centralizados.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="E-mail"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colunas de links */}
          {colunas.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.brand} — um produto {site.parentBrand}.
          </p>
          <p className="text-sm text-muted-foreground">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}