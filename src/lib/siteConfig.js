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

// Links de contratação — substitua pelos links de pagamento reais quando existirem.
// Enquanto isso, levam ao WhatsApp com a mensagem do plano escolhido.
export const checkoutLinks = {
  easyFoodHub: whatsappLink("Olá! Quero contratar o plano Easy Food Hub."),
  easyFoodHubWhatsapp: whatsappLink("Olá! Quero contratar o plano Easy Food Hub + WhatsApp."),
};

// -------------------------------------------------------------
//  PLANOS
//  Os preços são placeholders fáceis de substituir.
//  Defina `price` quando o valor definitivo estiver disponível.
// -------------------------------------------------------------

export const plans = [
  {
    id: "easy-food-hub",
    name: "Easy Food Hub",
    tagline: "Sistema completo para a gestão do seu estabelecimento.",
    price: null, // ex.: "R$ 149/mês" — substitua quando definido
    priceNote: "Consulte condições comerciais",
    highlighted: false,
    ctaLabel: "Quero contratar",
    ctaHref: checkoutLinks.easyFoodHub,
    ctaVariant: "outline",
    features: [
      "Gestão de pedidos centralizada",
      "Controle de mesas e atendimentos",
      "Cardápio digital com QR Code",
      "Organização do delivery",
      "Cadastro de clientes",
      "Criação de promoções",
      "Mensagens automáticas",
      "Suporte e implantação assistida",
    ],
  },
  {
    id: "easy-food-hub-whatsapp",
    name: "Easy Food Hub + WhatsApp",
    tagline: "Tudo do plano anterior + automação de pedidos pelo WhatsApp.",
    price: null, // ex.: "R$ 249/mês" — substitua quando definido
    priceNote: "Consulte condições comerciais",
    highlighted: true,
    ctaLabel: "Quero automatizar meu atendimento",
    ctaHref: checkoutLinks.easyFoodHubWhatsapp,
    ctaVariant: "primary",
    features: [
      "Tudo do plano Easy Food Hub",
      "Atendimento automático pelo WhatsApp",
      "Fluxo guiado de pedidos (produto → adicionais → bebida → pagamento → entrega)",
      "Respostas automáticas nos horários de pico",
      "Menos trabalho manual no atendimento",
      "Integração do cardápio no WhatsApp",
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