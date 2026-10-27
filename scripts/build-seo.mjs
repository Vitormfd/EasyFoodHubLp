// Build de SEO da landing: gera uma página HTML por busca (seo/paginas.js), com o texto
// já renderizado, e copia tudo para o public/ do sistema (easyfoodhub.com.br).
//
// Uso: npm run build:seo                 (saída padrão: ../../public, o repositório Burguer Hub)
//      npm run build:seo -- <pasta>      (outra saída)
//
// Não usa o plugin do Base44: o resultado é um site estático, sem chamadas ao Base44.

import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";
import react from "@vitejs/plugin-react";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const saida = resolve(process.argv[2] || join(raiz, "..", "..", "public"));
const tmp = join(raiz, "dist-seo");
const BASE = "/lp-assets/";

const comum = {
  root: raiz,
  configFile: false,
  logLevel: "warn",
  plugins: [react()],
  resolve: { alias: { "@": join(raiz, "src") } },
};

rmSync(tmp, { recursive: true, force: true });

// 1) Navegador: JS + CSS com hash, servidos em /lp-assets/
await build({
  ...comum,
  base: BASE,
  build: {
    outDir: join(tmp, "client"),
    assetsDir: "",
    manifest: true,
    rollupOptions: { input: join(raiz, "src/entry-seo.jsx") },
  },
});

// 2) Servidor: render do HTML de cada página
await build({
  ...comum,
  build: { outDir: join(tmp, "server"), ssr: join(raiz, "src/entry-server.jsx") },
  ssr: { noExternal: true },
});

// utils.js lê window.self/window.top ao carregar; no Node não há window.
globalThis.window ??= { self: 1, top: 1 };
const { render, faqsDa } = await import(pathToFileURL(join(tmp, "server", "entry-server.js")).href);
const { SITE, ENTRAR, paginas } = await import(pathToFileURL(join(raiz, "seo", "paginas.js")).href);

const manifesto = JSON.parse(readFileSync(join(tmp, "client", ".vite", "manifest.json"), "utf8"));
const entrada = manifesto["src/entry-seo.jsx"];
const css = (entrada.css || []).map((f) => `<link rel="stylesheet" href="${BASE}${f}">`).join("\n");
const js = `<script type="module" src="${BASE}${entrada.file}"></script>`;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const json = (v) => JSON.stringify(v).replace(/</g, "\\u003c");
const IMAGEM = "https://media.base44.com/images/public/6a832095abecdbaa647e64a8/393968cb5_image.png";

const nichos = paginas.map((p) => ({ label: p.label, titulo: p.rodape, href: `/${p.slug}` }));

function html(p) {
  const url = `${SITE}/${p.slug}`;
  const pagina = {
    ...Object.fromEntries(["selo", "h1", "sub", "whatsapp", "dores", "faq"].filter((k) => p[k]).map((k) => [k, p[k]])),
    nichos: nichos.map((n) => ({ ...n, atual: n.href === `/${p.slug}` })),
    ...(ENTRAR ? { entrar: ENTRAR } : {}),
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Easy Food Hub",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: p.descricao,
        url,
        image: IMAGEM,
        publisher: { "@type": "Organization", name: "Easy System" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqsDa(pagina).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Easy Food Hub", item: `${SITE}/sistema-para-restaurante` },
          ...(p.principal ? [] : [{ "@type": "ListItem", position: 2, name: p.label, item: url }]),
        ],
      },
    ],
  };
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.titulo)}</title>
<meta name="description" content="${esc(p.descricao)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#FF5A1F">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Easy Food Hub">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(p.titulo)}">
<meta property="og:description" content="${esc(p.descricao)}">
<meta property="og:image" content="${IMAGEM}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${IMAGEM}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
${css}
<script type="application/ld+json">${json(schema)}</script>
</head>
<body>
<div id="root">${render(pagina)}</div>
<script type="application/json" id="pagina-dados">${json(pagina)}</script>
${js}
</body>
</html>
`;
}

rmSync(join(saida, "lp-assets"), { recursive: true, force: true });
cpSync(join(tmp, "client"), join(saida, "lp-assets"), { recursive: true, filter: (f) => !f.includes(".vite") });

const hoje = new Date().toISOString().slice(0, 10);
for (const p of paginas) {
  mkdirSync(join(saida, p.slug), { recursive: true });
  writeFileSync(join(saida, p.slug, "index.html"), html(p));
  console.log(`${p.slug}/index.html`);
}
writeFileSync(
  join(saida, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas.map((p) => `  <url><loc>${SITE}/${p.slug}</loc><lastmod>${hoje}</lastmod><priority>${p.principal ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`,
);
rmSync(tmp, { recursive: true, force: true });
console.log(`Pronto: ${paginas.length} páginas + sitemap.xml + lp-assets/ em ${saida}`);
