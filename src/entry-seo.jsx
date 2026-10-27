// Entrada do navegador no build de SEO: reaproveita o HTML já renderizado
// (hydrate) e liga as animações, o menu e o FAQ.
import { hydrateRoot } from "react-dom/client";
import Landing from "@/pages/Landing";
import { PaginaProvider } from "@/lib/pagina";
import "@/index.css";

const dados = document.getElementById("pagina-dados");
const pagina = dados ? JSON.parse(dados.textContent) : null;

hydrateRoot(
  document.getElementById("root"),
  <PaginaProvider value={pagina}>
    <Landing />
  </PaginaProvider>
);
