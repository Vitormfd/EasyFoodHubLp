// Render da landing no build de SEO (npm run build:seo): gera o HTML de cada página
// com o texto já pronto, para o Google ler sem executar JavaScript.
import { renderToString } from "react-dom/server";
import Landing from "@/pages/Landing";
import { PaginaProvider } from "@/lib/pagina";
import { FAQS_PADRAO } from "@/components/landing/FAQ";

export function render(pagina) {
  return renderToString(
    <PaginaProvider value={pagina}>
      <Landing />
    </PaginaProvider>
  );
}

/** Perguntas exatamente como aparecem na página (para o FAQPage do schema.org). */
export const faqsDa = (pagina) => [...(pagina.faq || []), ...FAQS_PADRAO];
