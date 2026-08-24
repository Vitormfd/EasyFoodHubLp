import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barra de progresso de leitura */}
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
        <div
          className="h-full gradient-saffron transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass border-b border-border/60 py-2.5 shadow-soft" : "py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="Easy Food Hub — início">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton size="sm" className="group">
              Quero conhecer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4 shadow-lift">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <CTAButton
              size="md"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Quero conhecer
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </header>
    </>
  );
}