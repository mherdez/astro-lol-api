import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderSlot, j as renderComponent, m as maybeRenderHead } from '../astro_17b33bcd.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           *//* empty css                          */
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/herdez/Desktop/astro-lol-api/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const URL_API = `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/es_MX/champion/`;
  const URL_SPLASH_LOADING = `https://ddragon.leagueoflegends.com/cdn/img/champion/`;
  const URL_IMG_CHAMPION_PASSIVE_SPELL = `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/`;
  const response = await fetch(`${URL_API}${id}.json`);
  const { data } = await response.json();
  const nameObject = Object.keys(data)[0];
  console.log(data);
  const { name, title, lore, spells, passive, skins, allytips, enemytips } = data[nameObject];
  const letters = ["Q", "W", "E", "R"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": id, "data-astro-cid-rxysoomi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="card" data-astro-cid-rxysoomi> <img${addAttribute(`${URL_SPLASH_LOADING}loading/${id}_0.jpg`, "src")}${addAttribute(name, "alt")} data-astro-cid-rxysoomi> <div class="info" data-astro-cid-rxysoomi> <p class="title" data-astro-cid-rxysoomi>${name} ${title}</p> <p class="blurb" data-astro-cid-rxysoomi>${lore}</p> </div> </article> ${renderTemplate`<article class="spells" data-astro-cid-rxysoomi> <img${addAttribute(`${URL_IMG_CHAMPION_PASSIVE_SPELL}passive/${passive.image.full}`, "src")}${addAttribute(name, "alt")} data-astro-cid-rxysoomi> <div data-astro-cid-rxysoomi> <p class="spell-name" data-astro-cid-rxysoomi>(P) ${passive.name}</p> <p class="spell-description" data-astro-cid-rxysoomi>${passive.description}</p> </div> </article>`}${spells.map(({ name: name2, description, id: id2 }, index) => renderTemplate`<article class="spells" data-astro-cid-rxysoomi> <img${addAttribute(`${URL_IMG_CHAMPION_PASSIVE_SPELL}spell/${id2}.png`, "src")}${addAttribute(name2, "alt")} data-astro-cid-rxysoomi> <div data-astro-cid-rxysoomi> <p class="spell-name" data-astro-cid-rxysoomi>
(${letters[index]}) ${name2} </p> <p class="spell-description" data-astro-cid-rxysoomi>${description}</p> </div> </article>`)}<h2 data-astro-cid-rxysoomi>Ally Tips</h2> <div class="tips" data-astro-cid-rxysoomi> ${allytips.length > 0 ? allytips.map((tip) => renderTemplate`<p data-astro-cid-rxysoomi>${tip}</p>`) : renderTemplate`<h3 data-astro-cid-rxysoomi>No hay tips</h3>`} </div> <h2 data-astro-cid-rxysoomi>Enemy Tips</h2> <div class="tips" data-astro-cid-rxysoomi> ${enemytips.length > 0 ? enemytips.map((tip) => renderTemplate`<p data-astro-cid-rxysoomi>${tip}</p>`) : renderTemplate`<h3 data-astro-cid-rxysoomi>No hay tips</h3>`} </div> <h2 data-astro-cid-rxysoomi>Skins</h2> ${skins.map((skin) => {
    if (skin.num === 0)
      return;
    return renderTemplate`<article class="skins" data-astro-cid-rxysoomi> <img${addAttribute(`${URL_SPLASH_LOADING}splash/${name}_${skin.num}.jpg`, "src")}${addAttribute(skin.name, "alt")} data-astro-cid-rxysoomi> ${renderTemplate`<div data-astro-cid-rxysoomi> <p class="skin-name" data-astro-cid-rxysoomi>${skin.name}</p> </div>`} </article>`;
  })}` })} `;
}, "/Users/herdez/Desktop/astro-lol-api/src/pages/info/[id].astro", void 0);

const $$file = "/Users/herdez/Desktop/astro-lol-api/src/pages/info/[id].astro";
const $$url = "/info/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _ };
