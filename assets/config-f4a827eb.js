var a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function r(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}const t=window.location.hostname,n=t!=="toucan4life.github.io",o=n?`http://${t}:3010/data`:"https://Toucan4Life.github.io/graph-start/src/server/data",e="/v1",i={serverUrl:"",vectorTilesTiles:`${o}${e}/points/{z}/{x}/{y}.pbf`,glyphsSource:`${o}/fonts/{fontstack}/{range}.pbf`,bordersSource:`${o}${e}/borders.geojson`,placesSource:`${o}${e}/places.geojson`,iconSource:`${o}${e}/icon`,namesEndpoint:`${o}${e}/names`,graphsEndpoint:`${o}${e}/graphs`};export{i as a,a as c,r as g};
//# sourceMappingURL=config-f4a827eb.js.map
