import { createContext, useContext } from "react";

// Variação da landing para uma busca específica (ex.: "sistema para hamburgueria").
// No Base44 nada é passado e a landing fica exatamente como sempre foi; o build de SEO
// (npm run build:seo) passa os textos de cada página. Campos ausentes usam o texto padrão.
//
// {
//   selo?: string,                 // etiqueta acima do título
//   h1?: [string, string],         // [texto, trecho em destaque]
//   sub?: string,                  // parágrafo abaixo do título
//   whatsapp?: string,             // mensagem pronta dos botões de WhatsApp
//   dores?: string[],              // itens da seção "O problema"
//   faq?: { q: string, a: string }[], // perguntas extras, mostradas antes das padrão
//   nichos?: { label: string, emoji: string, href: string, atual?: boolean }[],
//   entrar?: string,               // link "Entrar" no topo (clientes que já usam o sistema)
// }
const PaginaContext = createContext(null);

export const PaginaProvider = PaginaContext.Provider;
export const usePagina = () => useContext(PaginaContext) || {};
