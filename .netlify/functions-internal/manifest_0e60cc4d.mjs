import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_17b33bcd.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px;color:#fff}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n.grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1rem;width:80%;margin:0 auto}img[data-astro-cid-j7pv25f6]{width:100%}a[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;border:1px solid gray;text-decoration:none;color:#fff}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px;color:#fff}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\nh1[data-astro-cid-rxysoomi],h2[data-astro-cid-rxysoomi],h3[data-astro-cid-rxysoomi]{text-align:center}h2[data-astro-cid-rxysoomi]{margin:2rem 0}.card[data-astro-cid-rxysoomi]{width:70%;display:flex;justify-content:center;align-items:center;gap:2rem;border:5px solid gray;padding:1rem;margin:50px auto;min-width:625px}.title[data-astro-cid-rxysoomi]{font-size:2rem;font-weight:700}.blurb[data-astro-cid-rxysoomi]{font-size:1.2rem;line-height:2rem}.info[data-astro-cid-rxysoomi]{display:flex;justify-content:start;align-items:start;flex-direction:column;padding:2rem}.spells[data-astro-cid-rxysoomi]{display:flex;justify-content:start;align-items:center;border:2px solid gray;gap:1rem;width:70%;margin:2rem auto;box-shadow:5px 5px 15px #80808080}.spells[data-astro-cid-rxysoomi] img[data-astro-cid-rxysoomi]{width:100px;height:100px}.spell-name[data-astro-cid-rxysoomi]{font-size:1.2rem;font-weight:700}.spell-description[data-astro-cid-rxysoomi]{font-size:1rem;line-height:1.5rem}.skins[data-astro-cid-rxysoomi]{display:flex;justify-content:start;align-items:center;border:2px solid gray;width:70%;margin:1rem auto;flex-direction:column}.skins[data-astro-cid-rxysoomi] img[data-astro-cid-rxysoomi]{width:100%}.skin-name[data-astro-cid-rxysoomi]{font-size:1.8rem;font-weight:700;padding:1rem}.tips[data-astro-cid-rxysoomi]{width:70%;margin:0 auto;border:2px solid white;padding:1rem;margin:2rem auto}.tips[data-astro-cid-rxysoomi] p[data-astro-cid-rxysoomi]{font-size:1.2rem;line-height:1.5rem}\n"}],"routeData":{"route":"/info/[id]","type":"page","pattern":"^\\/info\\/([^/]+?)\\/?$","segments":[[{"content":"info","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/info/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/herdez/Desktop/astro-lol-api/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/herdez/Desktop/astro-lol-api/src/pages/info/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_8d7e383a.mjs","/src/pages/index.astro":"chunks/pages/index_3297e40c.mjs","\u0000@astrojs-manifest":"manifest_0e60cc4d.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_20e41e19.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_69486b28.mjs","\u0000@astro-page:src/pages/info/[id]@_@astro":"chunks/_id__3e3c7ab7.mjs","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg"]});

export { manifest };
