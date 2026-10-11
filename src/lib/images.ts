/**
 * Verified, hotlinkable image sources (checked HTTP 200 / image/*).
 * Unsplash & Pexels only.
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
  // Marine power
  marineEngineBlock: `${UNSPLASH}photo-1685720543979-e9524b3b0176`,
  shipEngineRoom: `${UNSPLASH}photo-1660543228631-3f2341090afe`,
  shipEngineRoom2: `${UNSPLASH}photo-1685720543547-cc4873188c75`,
  marinePipes: `${PEXELS}17776067/pexels-photo-17776067.jpeg`,
  gensetYellow: `${UNSPLASH}photo-1759692071712-adc78a8516c8`,
  gensetInline: `${UNSPLASH}photo-1653878729171-efea1af9e7a8`,
  gensetWorkers: `${UNSPLASH}photo-1555861404-533a2800257f`,
  marineYard: `${PEXELS}13757275/pexels-photo-13757275.jpeg`,
  propeller: `${PEXELS}38525404/pexels-photo-38525404.jpeg`,
  drydock: `${PEXELS}36163767/pexels-photo-36163767.jpeg`,

  // Spares & scrap
  engineSpareParts: `${PEXELS}33559644/pexels-photo-33559644.jpeg`,
  engineBlock: `${PEXELS}36598777/pexels-photo-36598777.jpeg`,
  scrapMetal: `${PEXELS}27857490/pexels-photo-27857490.jpeg`,
  scrapEngine: `${PEXELS}14484392/pexels-photo-14484392.jpeg`,

  // Electrical
  electricalPanel: `${PEXELS}38171184/pexels-photo-38171184.jpeg`,
  wiring: `${PEXELS}28265032/pexels-photo-28265032.jpeg`,
  controlPanel: `${UNSPLASH}photo-1755407454675-454d6ed4c1bc`,
  switchgear: `${UNSPLASH}photo-1560700105-ef025fd710af`,

  // Automation
  automation: `${PEXELS}37769419/pexels-photo-37769419.jpeg`,
  automationPanel: `${PEXELS}32529354/pexels-photo-32529354.jpeg`,
  robotArm: `${PEXELS}34207359/pexels-photo-34207359.jpeg`,

  // Factory / logistics
  factory: `${UNSPLASH}photo-1714039103679-80944feee744`,
  factoryHall: `${UNSPLASH}photo-1636867900334-025210ac78a0`,
  cargoPort: `${PEXELS}32307772/pexels-photo-32307772.jpeg`,
  containerShip: `${PEXELS}6595777/pexels-photo-6595777.jpeg`,
  containers: `${UNSPLASH}photo-1770944182416-911214039dae`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const gallery = {
  marine: [
    { src: "/products/marine-engines.webp", alt: "Refurbished marine diesel engine", caption: "Marine diesel engines" },
    { src: "/products/marine-generators.webp", alt: "Marine diesel generator set", caption: "Marine generators" },
    { src: "/products/engine-spares.webp", alt: "Marine engine spare parts", caption: "Engine spares" },
    { src: "/products/motor-scrap.webp", alt: "Used motor parts and scrap", caption: "Motor scrap" },
    { src: "/products/electrical-items.webp", alt: "Marine electrical panel", caption: "Electrical items" },
    { src: "/products/automation-products.webp", alt: "Automation control panel", caption: "Automation products" },
    { src: IMAGES.cargoPort, alt: "Cargo port with containers", caption: "Worldwide dispatch" },
  ],
} as const;
