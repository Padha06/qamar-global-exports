export type BrandProduct = { slug: string; name: string; image: string };
export type Brand = { slug: string; name: string; logo: string; products: BrandProduct[] };

/** Brands the company supplies equipment and spares for. Names are trademarks of their owners. */
export const brands: Brand[] = [
  {
    "slug": "cummins",
    "name": "Cummins",
    "logo": "/brands/logos/cummins.webp",
    "products": [
      {
        "slug": "qsk60-marine-engine",
        "name": "QSK60 Marine Engine",
        "image": "/brands/cummins/qsk60-marine-engine.webp"
      },
      {
        "slug": "kta38-marine-engine",
        "name": "KTA38 Marine Engine",
        "image": "/brands/cummins/kta38-marine-engine.webp"
      },
      {
        "slug": "qsl9-marine-engine",
        "name": "QSL9 Marine Engine",
        "image": "/brands/cummins/qsl9-marine-engine.webp"
      },
      {
        "slug": "marine-generator-sets",
        "name": "Marine Generator Sets",
        "image": "/brands/cummins/marine-generator-sets.webp"
      },
      {
        "slug": "engine-spare-parts",
        "name": "Engine Spare Parts",
        "image": "/brands/cummins/engine-spare-parts.webp"
      }
    ]
  },
  {
    "slug": "caterpillar",
    "name": "Caterpillar",
    "logo": "/brands/logos/caterpillar.webp",
    "products": [
      {
        "slug": "c32-marine-propulsion-engine",
        "name": "C32 Marine Propulsion Engine",
        "image": "/brands/caterpillar/c32-marine-propulsion-engine.webp"
      },
      {
        "slug": "c18-marine-engine",
        "name": "C18 Marine Engine",
        "image": "/brands/caterpillar/c18-marine-engine.webp"
      },
      {
        "slug": "3516-marine-engine",
        "name": "3516 Marine Engine",
        "image": "/brands/caterpillar/3516-marine-engine.webp"
      },
      {
        "slug": "marine-generator-sets",
        "name": "Marine Generator Sets",
        "image": "/brands/caterpillar/marine-generator-sets.webp"
      },
      {
        "slug": "engine-components-and-spares",
        "name": "Engine Components & Spares",
        "image": "/brands/caterpillar/engine-components-and-spares.webp"
      }
    ]
  },
  {
    "slug": "perkins",
    "name": "Perkins",
    "logo": "/brands/logos/perkins.webp",
    "products": [
      {
        "slug": "1106d-series-diesel-engine",
        "name": "1106D Series Diesel Engine",
        "image": "/brands/perkins/1106d-series-diesel-engine.webp"
      },
      {
        "slug": "4000-series-engines",
        "name": "4000 Series Engines",
        "image": "/brands/perkins/4000-series-engines.webp"
      },
      {
        "slug": "1104-series-engines",
        "name": "1104 Series Engines",
        "image": "/brands/perkins/1104-series-engines.webp"
      },
      {
        "slug": "fuel-injectors",
        "name": "Fuel Injectors",
        "image": "/brands/perkins/fuel-injectors.webp"
      },
      {
        "slug": "engine-filters-and-spares",
        "name": "Engine Filters & Spares",
        "image": "/brands/perkins/engine-filters-and-spares.webp"
      }
    ]
  },
  {
    "slug": "woodward",
    "name": "Woodward",
    "logo": "/brands/logos/woodward.webp",
    "products": [
      {
        "slug": "ug-8-governor",
        "name": "UG-8 Governor",
        "image": "/brands/woodward/ug-8-governor.webp"
      },
      {
        "slug": "ug-25-plus-governor",
        "name": "UG-25+ Governor",
        "image": "/brands/woodward/ug-25-plus-governor.webp"
      },
      {
        "slug": "2301-electronic-speed-control",
        "name": "2301 Electronic Speed Control",
        "image": "/brands/woodward/2301-electronic-speed-control.webp"
      },
      {
        "slug": "3161-mechanical-hydraulic-governor",
        "name": "3161 Mechanical-Hydraulic Governor",
        "image": "/brands/woodward/3161-mechanical-hydraulic-governor.webp"
      }
    ]
  },
  {
    "slug": "man-energy-solutions",
    "name": "MAN Energy Solutions",
    "logo": "/brands/logos/man-energy-solutions.webp",
    "products": [
      {
        "slug": "man-b-and-w-me-c-two-stroke-engine",
        "name": "MAN B&W ME-C Two-Stroke Engine",
        "image": "/brands/man-energy-solutions/man-b-and-w-me-c-two-stroke-engine.webp"
      },
      {
        "slug": "man-175d-high-speed-engine",
        "name": "MAN 175D High-Speed Engine",
        "image": "/brands/man-energy-solutions/man-175d-high-speed-engine.webp"
      },
      {
        "slug": "man-32-44cr-engine",
        "name": "MAN 32/44CR Engine",
        "image": "/brands/man-energy-solutions/man-32-44cr-engine.webp"
      },
      {
        "slug": "marine-gensets",
        "name": "Marine GenSets",
        "image": "/brands/man-energy-solutions/marine-gensets.webp"
      },
      {
        "slug": "auxiliary-engines-and-spares",
        "name": "Auxiliary Engines & Spares",
        "image": "/brands/man-energy-solutions/auxiliary-engines-and-spares.webp"
      }
    ]
  },
  {
    "slug": "w-rtsil",
    "name": "Wärtsilä",
    "logo": "/brands/logos/w-rtsil.webp",
    "products": [
      {
        "slug": "w-rtsil-31-engine",
        "name": "Wärtsilä 31 Engine",
        "image": "/brands/w-rtsil/w-rtsil-31-engine.webp"
      },
      {
        "slug": "w-rtsil-46-engine",
        "name": "Wärtsilä 46 Engine",
        "image": "/brands/w-rtsil/w-rtsil-46-engine.webp"
      },
      {
        "slug": "w-rtsil-32-engine",
        "name": "Wärtsilä 32 Engine",
        "image": "/brands/w-rtsil/w-rtsil-32-engine.webp"
      },
      {
        "slug": "propulsion-systems",
        "name": "Propulsion Systems",
        "image": "/brands/w-rtsil/propulsion-systems.webp"
      },
      {
        "slug": "engine-components-and-spares",
        "name": "Engine Components & Spares",
        "image": "/brands/w-rtsil/engine-components-and-spares.webp"
      }
    ]
  },
  {
    "slug": "yanmar",
    "name": "Yanmar",
    "logo": "/brands/logos/yanmar.webp",
    "products": [
      {
        "slug": "6ly-series-marine-diesel-engine",
        "name": "6LY Series Marine Diesel Engine",
        "image": "/brands/yanmar/6ly-series-marine-diesel-engine.webp"
      },
      {
        "slug": "6cx-series-marine-engine",
        "name": "6CX Series Marine Engine",
        "image": "/brands/yanmar/6cx-series-marine-engine.webp"
      },
      {
        "slug": "4jh-series-marine-engine",
        "name": "4JH Series Marine Engine",
        "image": "/brands/yanmar/4jh-series-marine-engine.webp"
      },
      {
        "slug": "marine-generator-sets",
        "name": "Marine Generator Sets",
        "image": "/brands/yanmar/marine-generator-sets.webp"
      },
      {
        "slug": "engine-spare-parts",
        "name": "Engine Spare Parts",
        "image": "/brands/yanmar/engine-spare-parts.webp"
      }
    ]
  },
  {
    "slug": "rolls-royce-power-systems-mtu",
    "name": "Rolls-Royce Power Systems (MTU)",
    "logo": "/brands/logos/rolls-royce-power-systems-mtu.webp",
    "products": [
      {
        "slug": "mtu-series-4000-marine-engine",
        "name": "MTU Series 4000 Marine Engine",
        "image": "/brands/rolls-royce-power-systems-mtu/mtu-series-4000-marine-engine.webp"
      },
      {
        "slug": "mtu-series-2000-marine-engine",
        "name": "MTU Series 2000 Marine Engine",
        "image": "/brands/rolls-royce-power-systems-mtu/mtu-series-2000-marine-engine.webp"
      },
      {
        "slug": "mtu-series-1600-engine",
        "name": "MTU Series 1600 Engine",
        "image": "/brands/rolls-royce-power-systems-mtu/mtu-series-1600-engine.webp"
      },
      {
        "slug": "marine-propulsion-systems",
        "name": "Marine Propulsion Systems",
        "image": "/brands/rolls-royce-power-systems-mtu/marine-propulsion-systems.webp"
      },
      {
        "slug": "power-systems-gensets",
        "name": "Power Systems / GenSets",
        "image": "/brands/rolls-royce-power-systems-mtu/power-systems-gensets.webp"
      }
    ]
  },
  {
    "slug": "volvo-penta",
    "name": "Volvo Penta",
    "logo": "/brands/logos/volvo-penta.webp",
    "products": [
      {
        "slug": "d13-marine-engine",
        "name": "D13 Marine Engine",
        "image": "/brands/volvo-penta/d13-marine-engine.webp"
      },
      {
        "slug": "d16-marine-engine",
        "name": "D16 Marine Engine",
        "image": "/brands/volvo-penta/d16-marine-engine.webp"
      },
      {
        "slug": "ips-propulsion-system",
        "name": "IPS Propulsion System",
        "image": "/brands/volvo-penta/ips-propulsion-system.webp"
      },
      {
        "slug": "d8-marine-engine",
        "name": "D8 Marine Engine",
        "image": "/brands/volvo-penta/d8-marine-engine.webp"
      },
      {
        "slug": "engine-parts-and-spares",
        "name": "Engine Parts & Spares",
        "image": "/brands/volvo-penta/engine-parts-and-spares.webp"
      }
    ]
  },
  {
    "slug": "deutz",
    "name": "Deutz",
    "logo": "/brands/logos/deutz.webp",
    "products": [
      {
        "slug": "tcd-series-diesel-engines",
        "name": "TCD Series Diesel Engines",
        "image": "/brands/deutz/tcd-series-diesel-engines.webp"
      },
      {
        "slug": "bf-series-engines",
        "name": "BF Series Engines",
        "image": "/brands/deutz/bf-series-engines.webp"
      },
      {
        "slug": "marine-diesel-engines",
        "name": "Marine Diesel Engines",
        "image": "/brands/deutz/marine-diesel-engines.webp"
      },
      {
        "slug": "engine-components",
        "name": "Engine Components",
        "image": "/brands/deutz/engine-components.webp"
      },
      {
        "slug": "power-systems",
        "name": "Power Systems",
        "image": "/brands/deutz/power-systems.webp"
      }
    ]
  },
  {
    "slug": "abb",
    "name": "ABB",
    "logo": "/brands/logos/abb.webp",
    "products": [
      {
        "slug": "marine-electric-motors",
        "name": "Marine Electric Motors",
        "image": "/brands/abb/marine-electric-motors.webp"
      },
      {
        "slug": "acs-series-drives",
        "name": "ACS Series Drives",
        "image": "/brands/abb/acs-series-drives.webp"
      },
      {
        "slug": "marine-electrical-systems",
        "name": "Marine Electrical Systems",
        "image": "/brands/abb/marine-electrical-systems.webp"
      },
      {
        "slug": "automation-and-control-systems",
        "name": "Automation & Control Systems",
        "image": "/brands/abb/automation-and-control-systems.webp"
      },
      {
        "slug": "switchgear-and-power-distribution",
        "name": "Switchgear & Power Distribution",
        "image": "/brands/abb/switchgear-and-power-distribution.webp"
      }
    ]
  },
  {
    "slug": "siemens",
    "name": "Siemens",
    "logo": "/brands/logos/siemens.webp",
    "products": [
      {
        "slug": "sinamics-drives",
        "name": "SINAMICS Drives",
        "image": "/brands/siemens/sinamics-drives.webp"
      },
      {
        "slug": "simotics-motors",
        "name": "SIMOTICS Motors",
        "image": "/brands/siemens/simotics-motors.webp"
      },
      {
        "slug": "industrial-automation-systems",
        "name": "Industrial Automation Systems",
        "image": "/brands/siemens/industrial-automation-systems.webp"
      },
      {
        "slug": "control-equipment",
        "name": "Control Equipment",
        "image": "/brands/siemens/control-equipment.webp"
      },
      {
        "slug": "marine-electrical-solutions",
        "name": "Marine Electrical Solutions",
        "image": "/brands/siemens/marine-electrical-solutions.webp"
      }
    ]
  },
  {
    "slug": "schneider-electric",
    "name": "Schneider Electric",
    "logo": "/brands/logos/schneider-electric.webp",
    "products": [
      {
        "slug": "altivar-variable-speed-drives",
        "name": "Altivar Variable Speed Drives",
        "image": "/brands/schneider-electric/altivar-variable-speed-drives.webp"
      },
      {
        "slug": "switchgear-masterpact-compact",
        "name": "Switchgear (Masterpact / Compact)",
        "image": "/brands/schneider-electric/switchgear-masterpact-compact.webp"
      },
      {
        "slug": "automation-controllers-modicon",
        "name": "Automation Controllers (Modicon)",
        "image": "/brands/schneider-electric/automation-controllers-modicon.webp"
      },
      {
        "slug": "electrical-components",
        "name": "Electrical Components",
        "image": "/brands/schneider-electric/electrical-components.webp"
      },
      {
        "slug": "marine-electrical-panels",
        "name": "Marine Electrical Panels",
        "image": "/brands/schneider-electric/marine-electrical-panels.webp"
      }
    ]
  },
  {
    "slug": "danfoss",
    "name": "Danfoss",
    "logo": "/brands/logos/danfoss.webp",
    "products": [
      {
        "slug": "vlt-variable-frequency-drives",
        "name": "VLT Variable Frequency Drives",
        "image": "/brands/danfoss/vlt-variable-frequency-drives.webp"
      },
      {
        "slug": "hydraulic-valves",
        "name": "Hydraulic Valves",
        "image": "/brands/danfoss/hydraulic-valves.webp"
      },
      {
        "slug": "industrial-sensors",
        "name": "Industrial Sensors",
        "image": "/brands/danfoss/industrial-sensors.webp"
      },
      {
        "slug": "hydraulic-systems",
        "name": "Hydraulic Systems",
        "image": "/brands/danfoss/hydraulic-systems.webp"
      },
      {
        "slug": "control-components",
        "name": "Control Components",
        "image": "/brands/danfoss/control-components.webp"
      }
    ]
  },
  {
    "slug": "parker-hannifin",
    "name": "Parker Hannifin",
    "logo": "/brands/logos/parker-hannifin.webp",
    "products": [
      {
        "slug": "hydraulic-valves",
        "name": "Hydraulic Valves",
        "image": "/brands/parker-hannifin/hydraulic-valves.webp"
      },
      {
        "slug": "hydraulic-filters",
        "name": "Hydraulic Filters",
        "image": "/brands/parker-hannifin/hydraulic-filters.webp"
      },
      {
        "slug": "fluid-control-products",
        "name": "Fluid Control Products",
        "image": "/brands/parker-hannifin/fluid-control-products.webp"
      },
      {
        "slug": "hydraulic-pumps",
        "name": "Hydraulic Pumps",
        "image": "/brands/parker-hannifin/hydraulic-pumps.webp"
      },
      {
        "slug": "hydraulic-cylinders-components",
        "name": "Hydraulic Cylinders / Components",
        "image": "/brands/parker-hannifin/hydraulic-cylinders-components.webp"
      }
    ]
  },
  {
    "slug": "bosch",
    "name": "Bosch",
    "logo": "/brands/logos/bosch.webp",
    "products": [
      {
        "slug": "common-rail-fuel-injectors",
        "name": "Common Rail Fuel Injectors",
        "image": "/brands/bosch/common-rail-fuel-injectors.webp"
      },
      {
        "slug": "fuel-injection-pumps",
        "name": "Fuel Injection Pumps",
        "image": "/brands/bosch/fuel-injection-pumps.webp"
      },
      {
        "slug": "engine-sensors",
        "name": "Engine Sensors",
        "image": "/brands/bosch/engine-sensors.webp"
      },
      {
        "slug": "diesel-engine-components",
        "name": "Diesel Engine Components",
        "image": "/brands/bosch/diesel-engine-components.webp"
      },
      {
        "slug": "fuel-system-parts",
        "name": "Fuel System Parts",
        "image": "/brands/bosch/fuel-system-parts.webp"
      }
    ]
  },
  {
    "slug": "honeywell",
    "name": "Honeywell",
    "logo": "/brands/logos/honeywell.webp",
    "products": [
      {
        "slug": "industrial-process-sensors",
        "name": "Industrial Process Sensors",
        "image": "/brands/honeywell/industrial-process-sensors.webp"
      },
      {
        "slug": "control-systems",
        "name": "Control Systems",
        "image": "/brands/honeywell/control-systems.webp"
      },
      {
        "slug": "instrumentation-products",
        "name": "Instrumentation Products",
        "image": "/brands/honeywell/instrumentation-products.webp"
      },
      {
        "slug": "pressure-and-temperature-sensors",
        "name": "Pressure & Temperature Sensors",
        "image": "/brands/honeywell/pressure-and-temperature-sensors.webp"
      },
      {
        "slug": "automation-controllers",
        "name": "Automation Controllers",
        "image": "/brands/honeywell/automation-controllers.webp"
      }
    ]
  },
  {
    "slug": "emerson",
    "name": "Emerson",
    "logo": "/brands/logos/emerson.webp",
    "products": [
      {
        "slug": "fisher-control-valves",
        "name": "Fisher Control Valves",
        "image": "/brands/emerson/fisher-control-valves.webp"
      },
      {
        "slug": "automation-systems",
        "name": "Automation Systems",
        "image": "/brands/emerson/automation-systems.webp"
      },
      {
        "slug": "process-instrumentation",
        "name": "Process Instrumentation",
        "image": "/brands/emerson/process-instrumentation.webp"
      },
      {
        "slug": "control-valves-and-actuators",
        "name": "Control Valves & Actuators",
        "image": "/brands/emerson/control-valves-and-actuators.webp"
      },
      {
        "slug": "measurement-and-analytical-products",
        "name": "Measurement & Analytical Products",
        "image": "/brands/emerson/measurement-and-analytical-products.webp"
      }
    ]
  },
  {
    "slug": "kongsberg-maritime",
    "name": "Kongsberg Maritime",
    "logo": "/brands/logos/kongsberg-maritime.webp",
    "products": [
      {
        "slug": "marine-automation-systems",
        "name": "Marine Automation Systems",
        "image": "/brands/kongsberg-maritime/marine-automation-systems.webp"
      },
      {
        "slug": "navigation-systems",
        "name": "Navigation Systems",
        "image": "/brands/kongsberg-maritime/navigation-systems.webp"
      },
      {
        "slug": "vessel-control-systems",
        "name": "Vessel Control Systems",
        "image": "/brands/kongsberg-maritime/vessel-control-systems.webp"
      },
      {
        "slug": "dynamic-positioning-systems",
        "name": "Dynamic Positioning Systems",
        "image": "/brands/kongsberg-maritime/dynamic-positioning-systems.webp"
      },
      {
        "slug": "monitoring-and-control-equipment",
        "name": "Monitoring & Control Equipment",
        "image": "/brands/kongsberg-maritime/monitoring-and-control-equipment.webp"
      }
    ]
  },
  {
    "slug": "alfa-laval",
    "name": "Alfa Laval",
    "logo": "/brands/logos/alfa-laval.webp",
    "products": [
      {
        "slug": "plate-heat-exchangers",
        "name": "Plate Heat Exchangers",
        "image": "/brands/alfa-laval/plate-heat-exchangers.webp"
      },
      {
        "slug": "separators-oil-fuel",
        "name": "Separators (Oil / Fuel)",
        "image": "/brands/alfa-laval/separators-oil-fuel.webp"
      },
      {
        "slug": "marine-pumps",
        "name": "Marine Pumps",
        "image": "/brands/alfa-laval/marine-pumps.webp"
      },
      {
        "slug": "heat-exchangers-shell-and-tube",
        "name": "Heat Exchangers (Shell & Tube)",
        "image": "/brands/alfa-laval/heat-exchangers-shell-and-tube.webp"
      },
      {
        "slug": "marine-equipment-purifiers-etc",
        "name": "Marine Equipment (Purifiers, etc.)",
        "image": "/brands/alfa-laval/marine-equipment-purifiers-etc.webp"
      }
    ]
  }
];
