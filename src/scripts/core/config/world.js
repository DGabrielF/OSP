// ============================================================
// World Configuration
// ------------------------------------------------------------
// Defines the fundamental ecological structure of the world.
// Combines climate, relief, and vegetation types to generate
// dynamic environments for exploration and resource management.
// ============================================================

export const world = {
  // ------------------------------------------------------------
  // GLOBAL PARAMETERS
  // ------------------------------------------------------------
  parameters: {
    dayDuration: 60 * 30,
    nightDuration: 60 * 15,
    weatherCycle: true,
    elementalBalance: {
      fire: 0.9,
      water: 1.0,
      earth: 1.1,
      air: 1.0,
      light: 1.0,
      darkness: 0.9,
      nature: 1.2,
      metal: 1.0,
      spiritual: 1.0,
    },
  },

  // ------------------------------------------------------------
  // CLIMATES
  // ------------------------------------------------------------
  climates: {
    tropical: {
      key: "tropical",
      temperature: { min: 22, max: 38 },
      humidity: "high",
      description: {
        "pt-br": "Regiões quentes e úmidas, com chuvas frequentes e vegetação densa.",
        "en": "Hot and humid regions with frequent rain and dense vegetation.",
      },
    },
    arid: {
      key: "arid",
      temperature: { min: 25, max: 50 },
      humidity: "low",
      description: {
        "pt-br": "Áreas desérticas com escassez de água e grande variação térmica.",
        "en": "Desert areas with scarce water and large temperature variation.",
      },
    },
    temperate: {
      key: "temperate",
      temperature: { min: 10, max: 25 },
      humidity: "moderate",
      description: {
        "pt-br": "Regiões equilibradas, com estações bem definidas e solo fértil.",
        "en": "Balanced regions with defined seasons and fertile soil.",
      },
    },
    polar: {
      key: "polar",
      temperature: { min: -30, max: 0 },
      humidity: "low",
      description: {
        "pt-br": "Ambientes gelados e hostis, habitados por criaturas resistentes.",
        "en": "Frozen and harsh environments inhabited by resilient creatures.",
      },
    },
    mystical: {
      key: "mystical",
      temperature: { min: 5, max: 30 },
      humidity: "variable",
      description: {
        "pt-br": "Regiões impregnadas de energia espiritual ou mágica.",
        "en": "Regions infused with spiritual or magical energy.",
      },
    },
  },

  // ------------------------------------------------------------
  // RELIEFS
  // ------------------------------------------------------------
  reliefs: {
    plains: {
      key: "plains",
      elevation: "low",
      terrain: "flat",
      description: {
        "pt-br": "Terrenos planos ideais para agricultura e grandes batalhas.",
        "en": "Flat terrains ideal for farming and large-scale battles.",
      },
    },
    hills: {
      key: "hills",
      elevation: "medium",
      terrain: "wavy",
      description: {
        "pt-br": "Colinas suaves com rica biodiversidade e boa drenagem de água.",
        "en": "Gentle hills with rich biodiversity and good water drainage.",
      },
    },
    mountains: {
      key: "mountains",
      elevation: "high",
      terrain: "rocky",
      description: {
        "pt-br": "Montanhas íngremes, fontes de minérios e templos antigos.",
        "en": "Steep mountains, sources of minerals and ancient temples.",
      },
    },
    caves: {
      key: "caves",
      elevation: "underground",
      terrain: "cavernous",
      description: {
        "pt-br": "Sistemas subterrâneos que abrigam criaturas e minerais raros.",
        "en": "Underground systems housing rare creatures and minerals.",
      },
    },
    coast: {
      key: "coast",
      elevation: "low",
      terrain: "sandy",
      description: {
        "pt-br": "Regiões costeiras influenciadas pelas marés e ventos oceânicos.",
        "en": "Coastal regions influenced by tides and oceanic winds.",
      },
    },
  },

  // ------------------------------------------------------------
  // VEGETATION TYPES
  // ------------------------------------------------------------
  vegetations: {
    dense_forest: {
      key: "dense_forest",
      density: "high",
      flora: ["tropical_trees", "vines", "moss"],
      description: {
        "pt-br": "Floresta fechada, rica em biodiversidade e difícil de atravessar.",
        "en": "Dense forest rich in biodiversity and hard to traverse.",
      },
    },
    sparse_forest: {
      key: "sparse_forest",
      density: "medium",
      flora: ["pines", "bushes", "flowers"],
      description: {
        "pt-br": "Floresta esparsa com árvores espaçadas e solo fértil.",
        "en": "Sparse forest with spaced trees and fertile ground.",
      },
    },
    grassland: {
      key: "grassland",
      density: "low",
      flora: ["grasses", "small shrubs"],
      description: {
        "pt-br": "Campos abertos com vegetação rasteira e grande visibilidade.",
        "en": "Open fields with low vegetation and great visibility.",
      },
    },
    swampy: {
      key: "swampy",
      density: "variable",
      flora: ["reeds", "fungi", "wetland_plants"],
      description: {
        "pt-br": "Terrenos alagados com vegetação adaptada à umidade constante.",
        "en": "Wetlands with vegetation adapted to constant moisture.",
      },
    },
    barren: {
      key: "barren",
      density: "none",
      flora: [],
      description: {
        "pt-br": "Regiões áridas ou destruídas sem vegetação significativa.",
        "en": "Arid or ruined regions with little to no vegetation.",
      },
    },
  },
};
