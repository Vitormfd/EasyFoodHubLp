// =============================================================
//  Easy Food Hub — Configuração central do site
//  Altere preços, recursos, links e contatos aqui.
//  (Produto Easy System — easyfoodhub.com.br)
// =============================================================

export const site = {
  brand: "Easy Food Hub",
  parentBrand: "Easy System",
  domain: "easyfoodhub.com.br",
  // Substitua pelo número real (com DDI, sem +, espaços ou símbolos)
  whatsappNumber: "5574999348744",
  instagram: "easysystem2",
  instagramUrl: "https://instagram.com/easysystem2",
  email: "contato@easyfoodhub.com.br",
};

// Monta um link de WhatsApp com mensagem pré-preenchida
export function whatsappLink(message = "Olá! Quero conhecer o Easy Food Hub.") {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

// Cadastro e páginas legais ficam no sistema, no mesmo domínio das páginas geradas.
const SISTEMA = "https://www.easyfoodhub.com.br";
export const CADASTRO_URL = `${SISTEMA}/auth?mode=signup`;
export const PRIVACIDADE_URL = `${SISTEMA}/privacidade`;
export const TERMOS_URL = `${SISTEMA}/termos`;

export const PRECO = "R$ 199/mês";
export const OFERTA_TESTE = `7 dias grátis, sem cartão. Depois, ${PRECO}.`;

// -------------------------------------------------------------
//  PLANO
//  O sistema tem um preço só (src/lib/assinatura.ts no Burguer Hub, link da Stripe).
// -------------------------------------------------------------

export const plans = [
  {
    id: "easy-food-hub",
    name: "Easy Food Hub",
    tagline: "Sistema completo para o seu estabelecimento, com a automação do WhatsApp incluída na assinatura.",
    price: PRECO,
    priceNote: "Comece com 7 dias grátis, sem cartão. Automação do WhatsApp e marketing entram com a assinatura.",
    highlighted: true,
    ctaLabel: "Testar 7 dias grátis",
    features: [
      "Gestão de pedidos centralizada",
      "Controle de mesas e atendimentos",
      "Cardápio digital com QR Code",
      "Organização do delivery",
      "Cadastro de clientes",
      "Criação de promoções",
      "Mensagens automáticas",
      "Atendimento automático pelo WhatsApp",
      "Fluxo guiado de pedidos (produto → adicionais → bebida → pagamento → entrega)",
      "Respostas automáticas nos horários de pico",
      "Menos trabalho manual no atendimento",
      "Integração do cardápio no WhatsApp",
      "Suporte pelo WhatsApp",
    ],
  },
];

// -------------------------------------------------------------
//  DEPOIMENTOS
//  Estrutura pronta. Adicione depoimentos REAIS quando disponíveis.
//  Mantenha vazio para esconder a seção temporariamente.
// -------------------------------------------------------------

export const testimonials = [
  // {
  //   establishment: "Nome do Estabelecimento",
  //   responsible: "Nome do responsável",
  //   quote: "Depoimento real aqui.",
  //   logo: null,
  // },
];

// -------------------------------------------------------------
//  IMAGENS DO SISTEMA (mockups/screenshots)
//  Atualize estas URLs quando houver screenshots reais.
// -------------------------------------------------------------

// Screenshots reais do Easy Food Hub.
// Atualize estas URLs quando houver novas capturas do sistema.
export const images = {
  hero: "https://media.base44.com/images/public/6a832095abecdbaa647e64a8/95e805cd5_image.png",
  tables: "https://media.base44.com/images/public/6a832095abecdbaa647e64a8/393968cb5_image.png",
  delivery: "https://media.base44.com/images/public/6a832095abecdbaa647e64a8/95e805cd5_image.png",
  menu: "https://media.base44.com/images/public/6a832095abecdbaa647e64a8/a0128dd63_image.png",
};