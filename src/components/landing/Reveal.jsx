import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Revela o conteúdo suavemente quando entra na viewport.
 * Usa IntersectionObserver — leve e performático.
 * `imediato`: já nasce visível no HTML (topo da página). Quem chega pelo anúncio vê o texto
 * antes de o JavaScript carregar, em vez de uma área em branco.
 */
export default function Reveal({
  as: Tag = "div",
  className,
  delay = 0,
  once = true,
  imediato = false,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(imediato);

  useEffect(() => {
    if (imediato) return;
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once, imediato]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}