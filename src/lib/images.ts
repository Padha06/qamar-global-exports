/**
 * Verified, hotlinkable image sources (checked HTTP 200 / image/*).
 * Unsplash & Pexels only — Wikimedia was dropped because it rate-limits
 * hotlinked requests (HTTP 429).
 */

const UNSPLASH = "https://images.unsplash.com/";
const PEXELS = "https://images.pexels.com/photos/";

export function sized(url: string, w = 1600, q = 78) {
  if (url.startsWith(UNSPLASH)) {
    return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
  }
  if (url.startsWith(PEXELS)) {
    return `${url}?auto=compress&cs=tinysrgb&w=${w}`;
  }
  return url;
}

export const IMAGES = {
  // Generators
  gensetYellow: `${UNSPLASH}photo-1759692071712-adc78a8516c8`,
  gensetInline: `${UNSPLASH}photo-1653878729171-efea1af9e7a8`,
  gensetWorkers: `${UNSPLASH}photo-1555861404-533a2800257f`,

  // Electrical / control
  controlPanel: `${UNSPLASH}photo-1755407454675-454d6ed4c1bc`,
  switchgear: `${UNSPLASH}photo-1560700105-ef025fd710af`,

  // Marine
  marineEngineBlock: `${UNSPLASH}photo-1685720543979-e9524b3b0176`,
  shipEngineRoom: `${UNSPLASH}photo-1660543228631-3f2341090afe`,
  marineYard: `${PEXELS}13757275/pexels-photo-13757275.jpeg`,

  // Factory / warehouse
  factory: `${UNSPLASH}photo-1714039103679-80944feee744`,
  factoryHall: `${UNSPLASH}photo-1636867900334-025210ac78a0`,
  factoryGreen: `${UNSPLASH}photo-1636867759143-c28c1e909bd3`,

  // Logistics
  cargoPort: `${PEXELS}32307772/pexels-photo-32307772.jpeg`,
  containerShip: `${PEXELS}6595777/pexels-photo-6595777.jpeg`,
  containers: `${UNSPLASH}photo-1770944182416-911214039dae`,

  // Clay
  clayMineral: `${PEXELS}33367162/pexels-photo-33367162.jpeg`,
  clayWet: `${PEXELS}6714300/pexels-photo-6714300.jpeg`,
  clayRaw: `${PEXELS}5302904/pexels-photo-5302904.jpeg`,
  clayPowder: `${UNSPLASH}photo-1614927264019-37a220a6f162`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const gallery = {
  generators: [
    { src: IMAGES.gensetYellow, alt: "Refurbished industrial diesel generator set", caption: "Refurbished diesel gensets" },
    { src: IMAGES.gensetWorkers, alt: "Engineers beside a large diesel generator", caption: "Diesel genset units" },
    { src: IMAGES.controlPanel, alt: "Generator control panel and switchgear", caption: "Control & switchgear" },
    { src: IMAGES.switchgear, alt: "Electrical switchgear room", caption: "Power distribution" },
  ],
  marine: [
    { src: IMAGES.marineEngineBlock, alt: "Marine diesel engine block in ship engine space", caption: "Marine diesel engines" },
    { src: IMAGES.shipEngineRoom, alt: "Ship engine room machinery and piping", caption: "Ship engine rooms" },
    { src: IMAGES.marineYard, alt: "Marine engine service in a shipyard", caption: "Marine gensets" },
    { src: IMAGES.factoryGreen, alt: "Industrial machinery on a production floor", caption: "Export-ready staging" },
  ],
  clay: [
    { src: IMAGES.clayMineral, alt: "Natural clay and mineral chunks", caption: "Roasted edible clay" },
    { src: IMAGES.clayPowder, alt: "Fine brown clay powder", caption: "Clay powder" },
    { src: IMAGES.clayWet, alt: "Raw wet clay material", caption: "Ball clay" },
    { src: IMAGES.clayRaw, alt: "Large raw dried clay piece", caption: "Raw clay" },
  ],
} as const;
