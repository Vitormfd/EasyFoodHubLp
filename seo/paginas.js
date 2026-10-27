// Páginas geradas pelo build de SEO (npm run build:seo). Cada uma é a mesma landing,
// mirando uma busca do Google. A principal (sistema-para-restaurante) é a landing sem mudanças.
// Regra dos textos: só recursos que existem no Easy Food Hub, sem preço e sem promessa de resultado.

export const SITE = "https://www.easyfoodhub.com.br";
export const ENTRAR = "/auth";

export const paginas = [
  {
    slug: "sistema-para-restaurante",
    rodape: "Sistema para restaurante",
    principal: true,
    label: "Restaurantes",
    titulo: "Sistema para Restaurante: Mesas e Delivery | Easy Food Hub",
    descricao:
      "Sistema para restaurante com gestão de mesas, delivery, cardápio digital e atendimento pelo WhatsApp. Funciona no navegador, sem instalar nada.",
  },
  {
    slug: "sistema-para-hamburgueria",
    rodape: "Sistema para hamburgueria",
    label: "Hamburguerias",
    titulo: "Sistema para Hamburgueria com Delivery | Easy Food Hub",
    descricao:
      "Sistema para hamburgueria com cardápio digital, adicionais, delivery com taxa por bairro, impressão de pedidos e atendimento automático no WhatsApp.",
    selo: "Sistema para hamburgueria",
    h1: ["Sistema para hamburgueria:", "adicionais, delivery e pedidos sem confusão."],
    sub: "Sexta à noite, chapa cheia e o WhatsApp não para. O Easy Food Hub organiza os pedidos da sua hamburgueria, com cada adicional e observação no lugar certo.",
    whatsapp: "Olá! Vim pelo site e quero conhecer o Easy Food Hub para a minha hamburgueria.",
    dores: [
      "“Sem cebola” e “bacon extra” perdidos na conversa",
      "Fila de mensagens no pico de sexta e sábado",
      "Lanche refeito por pedido anotado errado",
      "Taxa de entrega calculada de cabeça",
      "Cardápio em foto que não mostra os adicionais",
      "Combos e promoções que dependem da memória",
      "Pedidos do balcão, do WhatsApp e do delivery separados",
      "Cliente que pediu uma vez e não voltou",
    ],
    faq: [
      { q: "Dá para cadastrar adicionais como bacon e cheddar?", a: "Sim. Você cadastra os adicionais de cada lanche e o cliente escolhe na hora do pedido. Tudo chega escrito no pedido, junto com as observações." },
      { q: "O pedido sai impresso para a chapa?", a: "Sim. Dá para imprimir automaticamente cada pedido assim que ele é lançado." },
      { q: "Consigo criar combos e promoções?", a: "Sim. Há promoções de combo, compre X leve Y, desconto, brinde e frete grátis, além de cupons e programa de fidelidade." },
    ],
  },
  {
    slug: "sistema-para-pizzaria",
    rodape: "Sistema para pizzaria",
    label: "Pizzarias",
    titulo: "Sistema para Pizzaria com Delivery | Easy Food Hub",
    descricao:
      "Sistema para pizzaria com cardápio digital, delivery com taxa por bairro, pedidos pelo WhatsApp, impressão e controle de mesas. Funciona no navegador.",
    selo: "Sistema para pizzaria",
    h1: ["Sistema para pizzaria:", "delivery, cardápio e pedidos organizados."],
    sub: "O Easy Food Hub reúne os pedidos de entrega, de retirada e do salão da sua pizzaria num painel só, com a taxa por bairro calculada e o pedido impresso para a produção.",
    whatsapp: "Olá! Vim pelo site e quero conhecer o Easy Food Hub para a minha pizzaria.",
    dores: [
      "Telefone e WhatsApp tocando juntos no pico",
      "Sabor, borda e bebida anotados em papéis diferentes",
      "Endereço errado e pizza voltando",
      "Taxa diferente para cada bairro, calculada na hora",
      "Cardápio em PDF ruim de ler no celular",
      "Sem histórico de quem pede toda semana",
      "Pedidos de salão e de entrega misturados",
      "Atendimento demorado em horários de pico",
    ],
    faq: [
      { q: "Dá para cadastrar bordas e bebidas?", a: "Sim. Bordas, bebidas e outros adicionais aparecem para o cliente escolher na hora do pedido." },
      { q: "O sistema calcula a taxa de entrega?", a: "Sim. Você define a taxa de cada bairro e ela entra automaticamente no pedido." },
      { q: "Funciona para pizzaria com salão?", a: "Sim. Mesas, delivery e retirada ficam no mesmo painel." },
    ],
  },
  {
    slug: "sistema-para-lanchonete",
    rodape: "Sistema para lanchonete",
    label: "Lanchonetes",
    titulo: "Sistema para Lanchonete: Balcão e Delivery | Easy Food Hub",
    descricao:
      "Sistema para lanchonete com pedidos no balcão, mesas, delivery, cardápio digital e controle de estoque. Simples de usar, direto no navegador.",
    selo: "Sistema para lanchonete",
    h1: ["Sistema para lanchonete:", "balcão, mesas e delivery sem papelzinho."],
    sub: "Salgado, suco, lanche e café: na lanchonete tudo é rápido. O Easy Food Hub acompanha esse ritmo e organiza o balcão, as mesas e as entregas num só lugar.",
    whatsapp: "Olá! Vim pelo site e quero conhecer o Easy Food Hub para a minha lanchonete.",
    dores: [
      "Comanda de papel que some ou fica ilegível",
      "Fila no balcão enquanto alguém soma o pedido",
      "Mesa que esqueceu de pagar um item",
      "Pedidos de entrega anotados em qualquer lugar",
      "Produto que acaba sem ninguém perceber",
      "Sem saber qual produto dá mais lucro",
      "Fechamento do caixa feito na mão",
      "Cliente do dia a dia sem nenhum incentivo para voltar",
    ],
    faq: [
      { q: "Consigo controlar o estoque?", a: "Sim. Há controle de estoque e de custo dos produtos, para saber o que dá lucro." },
      { q: "Serve para lanchonete sem delivery?", a: "Serve. Você usa só o balcão e as mesas, e liga o delivery quando quiser." },
      { q: "Tem programa de fidelidade?", a: "Tem. Você define a regra de pontos e a recompensa para os clientes frequentes." },
    ],
  },
  {
    slug: "sistema-para-delivery",
    rodape: "Sistema para delivery",
    label: "Delivery",
    titulo: "Sistema para Delivery com Pix e Cardápio | Easy Food Hub",
    descricao:
      "Sistema para delivery de comida com cardápio digital, taxa por bairro, Pix no pedido, acompanhamento pelo cliente e atendimento automático no WhatsApp.",
    selo: "Sistema para delivery",
    h1: ["Sistema para delivery:", "do pedido à entrega, tudo organizado."],
    sub: "Receba pedidos pelo cardápio digital e pelo WhatsApp, calcule a taxa por bairro, receba por Pix e deixe o cliente acompanhar o pedido. Tudo num painel só.",
    whatsapp: "Olá! Vim pelo site e quero conhecer o Easy Food Hub para o meu delivery.",
    dores: [
      "Cliente perguntando “meu pedido já saiu?”",
      "Comprovante de Pix conferido um por um",
      "Endereço incompleto e entrega atrasada",
      "Pedidos espalhados entre WhatsApp, telefone e Instagram",
      "Taxa diferente para cada bairro",
      "Cliente que comprou uma vez e não voltou",
      "Atendimento demorado em horários de pico",
      "Sem um link próprio para divulgar o cardápio",
    ],
    faq: [
      { q: "O cliente consegue acompanhar o pedido?", a: "Sim. Ele recebe um link com o status do pedido, do preparo até a entrega." },
      { q: "Como funciona o Pix?", a: "O cliente paga por Pix na hora do pedido, pelo Mercado Pago, e a confirmação chega automaticamente no sistema." },
      { q: "O Easy Food Hub cobra comissão por pedido?", a: "Não. Os pedidos feitos no seu cardápio digital não pagam comissão ao Easy Food Hub." },
    ],
  },
  {
    slug: "cardapio-digital",
    rodape: "Cardápio digital",
    label: "Cardápio digital",
    titulo: "Cardápio Digital para Restaurante e Delivery | Easy Food Hub",
    descricao:
      "Cardápio digital com link próprio para restaurante, hamburgueria, pizzaria e delivery. O cliente pede pelo celular, paga por Pix e o pedido chega no sistema.",
    selo: "Cardápio digital",
    h1: ["Cardápio digital", "com o pedido chegando direto no sistema."],
    sub: "Troque a foto e o PDF por um cardápio digital de verdade. O cliente abre no celular, monta o pedido com adicionais, paga por Pix e o pedido chega organizado para você.",
    whatsapp: "Olá! Vim pelo site e quero conhecer o cardápio digital do Easy Food Hub.",
    dores: [
      "Cardápio em foto refeito a cada mudança de preço",
      "PDF que não abre direito no celular",
      "Cliente que pergunta tudo antes de pedir",
      "Produto esgotado que continua aparecendo",
      "Pedido que chega incompleto e precisa ser confirmado",
      "Sem um link próprio para divulgar",
      "Pedido redigitado no sistema à mão",
      "Promoção que o cliente nem fica sabendo",
    ],
    faq: [
      { q: "O cliente precisa baixar aplicativo?", a: "Não. O cardápio abre no navegador do celular, por um link." },
      { q: "Consigo mudar preços sozinho?", a: "Sim. Você altera no sistema e o cardápio atualiza na hora. Produto esgotado pode ser marcado como indisponível." },
      { q: "Tem pagamento online?", a: "Tem. O cliente pode pagar por Pix na hora do pedido, com confirmação automática." },
    ],
  },
];
