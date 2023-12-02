import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_17b33bcd.mjs';
import 'html-escaper';
import { $ as $$Layout } from './_id__213e46c5.mjs';
/* empty css                           */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const URL_CHAMPIONS = `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/es_MX/champion.json`;
  const URL_IMG_CHAMPION_PASSIVE_SPELL = `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/`;
  const response = await fetch(URL_CHAMPIONS);
  const { data } = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Leages of Legends", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid" data-astro-cid-j7pv25f6> ${Object.keys(data).map((champion) => {
    const { id, name, title, image, tags } = data[champion];
    return renderTemplate`<a${addAttribute(`/info/${id}`, "href")} data-astro-cid-j7pv25f6> <img${addAttribute(`${URL_IMG_CHAMPION_PASSIVE_SPELL}champion/${id}.png`, "src")} alt="" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${name}</p> </a>`;
  })} </div> ` })} `;
}, "/Users/herdez/Desktop/astro-lol-api/src/pages/index.astro", void 0);

const $$file = "/Users/herdez/Desktop/astro-lol-api/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
