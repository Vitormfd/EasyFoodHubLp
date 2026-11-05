// Rastreamento das páginas de venda (build de SEO). O PageView já sai do trecho do pixel no
// <head> (scripts/build-seo.mjs). Aqui ficam o clique para o WhatsApp e a origem do anúncio.
//
// Mesma chave e mesmo formato de src/lib/origemAnuncio.ts no sistema, que lê isto no cadastro:
// landing e sistema ficam no mesmo domínio. Nada de dado pessoal: só UTMs e fbclid.

const CHAVE = "efh_origem";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
const VALIDADE_MS = 30 * 24 * 60 * 60 * 1000;

function lerOrigem() {
  try {
    const salvo = JSON.parse(window.localStorage.getItem(CHAVE) || "null");
    return salvo && Date.now() - Number(salvo.capturado_em) <= VALIDADE_MS ? salvo : {};
  } catch {
    return {};
  }
}

/** Um anúncio novo substitui o anterior; URL sem parâmetros não apaga nada. */
function capturarOrigem() {
  const params = new URLSearchParams(window.location.search);
  const nova = {};
  for (const k of PARAMS) {
    const valor = (params.get(k) || "").trim().slice(0, 200);
    if (valor) nova[k] = valor;
  }
  if (!Object.keys(nova).length) return;
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify({ ...nova, capturado_em: Date.now() }));
  } catch {
    // Navegador sem armazenamento: os parâmetros ainda seguem no link do cadastro.
  }
}

/**
 * O wa.me não carrega UTMs. Um código curto do anúncio na mensagem deixa você saber de
 * qual anúncio veio a conversa. Só aparece em tráfego de campanha.
 */
function comCodigoDoAnuncio(url) {
  const { utm_content, utm_campaign } = lerOrigem();
  const codigo = utm_content || utm_campaign || "";
  if (!/^[\w-]{1,40}$/.test(codigo)) return url.href;
  const mensagem = url.searchParams.get("text") || "";
  // O mesmo botão pode ser clicado de novo: o código entra uma vez só.
  if (mensagem.includes("(ref: ")) return url.href;
  const texto = `${mensagem} (ref: ${codigo})`.trim();
  return `${url.origin}${url.pathname}?text=${encodeURIComponent(texto)}`;
}

/** Leva os parâmetros da página para o cadastro. */
function comParametrosDaPagina(url) {
  const atuais = new URLSearchParams(window.location.search);
  for (const k of PARAMS) {
    const valor = atuais.get(k);
    if (valor) url.searchParams.set(k, valor);
  }
  return url.href;
}

let ultimoContato = 0;

function registrarContato() {
  // Toque duplo no celular conta uma vez.
  const agora = Date.now();
  if (agora - ultimoContato < 1000) return;
  ultimoContato = agora;
  if (typeof window.fbq === "function") window.fbq("track", "Contact");
}

function aoClicar(evento) {
  const link = evento.target?.closest?.("a[href]");
  if (!link) return;
  let url;
  try {
    url = new URL(link.href);
  } catch {
    return;
  }
  if (url.hostname === "wa.me") {
    registrarContato();
    link.href = comCodigoDoAnuncio(url);
  } else if (url.pathname === "/auth" && url.searchParams.get("mode") === "signup") {
    link.href = comParametrosDaPagina(url);
  }
}

export function ligarRastreamento() {
  capturarOrigem();
  // Na captura: o link precisa estar pronto antes de o navegador segui-lo.
  document.addEventListener("click", aoClicar, true);
}
