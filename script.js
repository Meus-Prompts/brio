// Menu no telemóvel.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

// Ano no rodapé.
const ano = document.getElementById("ano");
if (ano) ano.textContent = String(new Date().getFullYear());

// Pesquisa do hero: escreve uma pesquisa e mostra o resultado correspondente.
// Com movimento reduzido fica o primeiro exemplo, parado.
const searchesPt = [
  {
    query: "adega de alvarinho em monção",
    name: "O seu negócio",
    reviews: "(128 avaliações)",
    meta: "Adega com provas e visitas",
    open: "Aberto agora, fecha às 19:00",
    action: "Marcar prova",
  },
  {
    query: "alojamento perto das termas",
    name: "O seu negócio",
    reviews: "(86 avaliações)",
    meta: "Alojamento local, 4 quartos",
    open: "Reserva direta disponível",
    action: "Reservar",
  },
  {
    query: "restaurante en monção abierto",
    name: "Su negocio",
    reviews: "(212 reseñas)",
    meta: "Restaurante, cocina minhota",
    open: "Abierto, cierra a las 23:00",
    action: "Reservar mesa",
  },
  {
    query: "cabeleireiro em monção",
    name: "O seu negócio",
    reviews: "(64 avaliações)",
    meta: "Cabeleireiro e barbearia",
    open: "Aberto agora, fecha às 20:00",
    action: "Marcar",
  },
];

const searchesEs = [
  {
    query: "bodega de alvariño en monção",
    name: "Su negocio",
    reviews: "(128 reseñas)",
    meta: "Bodega con catas y visitas",
    open: "Abierto, cierra a las 19:00",
    action: "Reservar cata",
  },
  {
    query: "alojamiento rural en tui",
    name: "Su negocio",
    reviews: "(86 reseñas)",
    meta: "Casa rural, 4 habitaciones",
    open: "Reserva directa disponible",
    action: "Reservar",
  },
  {
    query: "restaurante abierto en salvaterra",
    name: "Su negocio",
    reviews: "(212 reseñas)",
    meta: "Restaurante, cocina gallega",
    open: "Abierto, cierra a las 23:00",
    action: "Reservar mesa",
  },
  {
    query: "peluquería en as neves",
    name: "Su negocio",
    reviews: "(64 reseñas)",
    meta: "Peluquería y barbería",
    open: "Abierto, cierra a las 20:00",
    action: "Pedir cita",
  },
];

const searches = document.documentElement.lang === "es" ? searchesEs : searchesPt;

const queryEl = document.querySelector("[data-query]");
const resultEl = document.querySelector("[data-result]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (queryEl && resultEl && !reducedMotion) {
  const fields = ["name", "reviews", "meta", "open", "action"].map((key) => [
    key,
    resultEl.querySelector(`[data-${key}]`),
  ]);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let index = 0;

  async function loop() {
    for (;;) {
      await wait(3200);
      if (document.hidden) continue;
      index = (index + 1) % searches.length;
      const next = searches[index];

      resultEl.classList.add("is-swapping");
      for (let i = queryEl.textContent.length; i >= 0; i--) {
        queryEl.textContent = queryEl.textContent.slice(0, i);
        await wait(22);
      }
      for (let i = 1; i <= next.query.length; i++) {
        queryEl.textContent = next.query.slice(0, i);
        await wait(55);
      }
      for (const [key, el] of fields) el.textContent = next[key];
      await wait(250);
      resultEl.classList.remove("is-swapping");
    }
  }

  loop();
}
