// ============================================================
// Producers Configuration
// ------------------------------------------------------------
// This file defines all production systems of the world,
// organized into professions and natural sources.
// It describes how materials, equipment, and consumables are
// created, refined, or harvested by players or creatures.
// Each producer defines requirements, skills, and results,
// used to simulate the in-game economy and crafting logic.
// ============================================================

export const producers = {
  // ------------------------------------------------------------
  // 1. CRAFTING PROFESSIONS
  // ------------------------------------------------------------
  crafting: {
    forge: {
      key: "forge",
      title: { "pt-br": "forja", "en": "forge" },
      description: {
        "pt-br": "Transforma metais e minerais em armas, ferramentas e armaduras.",
        "en": "Transforms metals and minerals into weapons, tools, and armor."
      },
      skill: { type: "smithing", baseLevel: 1 },
      requirements: ["anvil", "hammer", "heat_source"]
    },
    carpentry: {
      key: "carpentry",
      title: { "pt-br": "marcenaria", "en": "carpentry" },
      description: {
        "pt-br": "Cria e repara estruturas, móveis e equipamentos de madeira.",
        "en": "Creates and repairs wooden structures, furniture, and gear."
      },
      skill: { type: "woodworking", baseLevel: 1 },
      requirements: ["saw", "workbench"]
    },
    tailoring: {
      key: "tailoring",
      title: { "pt-br": "alfaiataria", "en": "tailoring" },
      description: {
        "pt-br": "Produz roupas, capas e acessórios a partir de tecidos e couro.",
        "en": "Produces clothing, capes, and accessories from fabric and leather."
      },
      skill: { type: "tailoring", baseLevel: 1 },
      requirements: ["needle", "loom"]
    }
  },

  // ------------------------------------------------------------
  // 2. ALCHEMY
  // ------------------------------------------------------------
  alchemy: {
    key: "alchemy",
    title: { "pt-br": "alquimia", "en": "alchemy" },
    description: {
      "pt-br": "Combina essências e reagentes para criar poções, elixires e catalisadores mágicos.",
      "en": "Combines essences and reagents to create potions, elixirs, and magical catalysts."
    },
    skill: { type: "alchemy", baseLevel: 1 },
    requirements: ["alembic", "mortar", "cauldron"]
  },

  // ------------------------------------------------------------
  // 3. COOKING
  // ------------------------------------------------------------
  cooking: {
    key: "cooking",
    title: { "pt-br": "cozinha", "en": "cooking" },
    description: {
      "pt-br": "Prepara alimentos e bebidas que restauram energia e concedem efeitos temporários.",
      "en": "Prepares food and drinks that restore energy and grant temporary effects."
    },
    skill: { type: "cooking", baseLevel: 1 },
    requirements: ["knife", "fire_source", "cooking_pot"]
  },

  // ------------------------------------------------------------
  // 4. HARVESTING PROFESSIONS
  // ------------------------------------------------------------
  harvesting: {
    mining: {
      key: "mining",
      title: { "pt-br": "mineração", "en": "mining" },
      description: {
        "pt-br": "Extrai minérios e pedras preciosas do subsolo.",
        "en": "Extracts ores and precious stones from underground."
      },
      skill: { type: "mining", baseLevel: 1 },
      tools: ["pickaxe"]
    },
    lumberjack: {
      key: "lumberjack",
      title: { "pt-br": "lenhador", "en": "lumberjack" },
      description: {
        "pt-br": "Corta árvores e coleta madeira e resinas.",
        "en": "Cuts trees and collects wood and resin."
      },
      skill: { type: "lumbering", baseLevel: 1 },
      tools: ["axe"]
    },
    farming: {
      key: "farming",
      title: { "pt-br": "agricultura", "en": "farming" },
      description: {
        "pt-br": "Cultiva plantas e ervas em solo preparado.",
        "en": "Cultivates plants and herbs in prepared soil."
      },
      skill: { type: "farming", baseLevel: 1 },
      tools: ["hoe", "watering_can"]
    },
    gathering: {
      key: "gathering",
      title: { "pt-br": "coleta", "en": "gathering" },
      description: {
        "pt-br": "Coleta plantas, frutos e materiais naturais diretamente do ambiente.",
        "en": "Collects plants, fruits, and natural materials directly from the environment."
      },
      skill: { type: "gathering", baseLevel: 1 },
      tools: ["knife"]
    },
    fishing: {
      key: "fishing",
      title: { "pt-br": "pesca", "en": "fishing" },
      description: {
        "pt-br": "Captura peixes e criaturas aquáticas em rios e mares.",
        "en": "Catches fish and aquatic creatures in rivers and seas."
      },
      skill: { type: "fishing", baseLevel: 1 },
      tools: ["fishing_rod", "bait"]
    }
  },

  // ------------------------------------------------------------
  // 5. SPIRITUAL ENHANCEMENT
  // ------------------------------------------------------------
  spiritual: {
    key: "spiritual",
    title: { "pt-br": "espiritual", "en": "spiritual" },
    description: {
      "pt-br": "Infunde energia espiritual em objetos, purificando ou encantando materiais.",
      "en": "Infuses spiritual energy into objects, purifying or enchanting materials."
    },
    skill: { type: "channeling", baseLevel: 3 },
    requirements: ["spirit_crystal", "altar"]
  },

  // ------------------------------------------------------------
  // 6. LABORATORY ENHANCEMENT
  // ------------------------------------------------------------
  laboratory: {
    key: "laboratory",
    title: { "pt-br": "laboratório", "en": "laboratory" },
    description: {
      "pt-br": "Aprimora os atributos físicos ou químicos de materiais e itens forjados.",
      "en": "Enhances the physical or chemical properties of forged materials and items."
    },
    skill: { type: "engineering", baseLevel: 2 },
    requirements: ["tools_kit", "chemical_table"]
  },

  // ------------------------------------------------------------
  // 7. CREATURE PRODUCTION
  // ------------------------------------------------------------
  creature_produce: {
    livestock: {
      key: "livestock",
      title: { "pt-br": "pecuária", "en": "livestock" },
      description: {
        "pt-br": "Produz recursos de animais domesticados, como leite, ovos e lã.",
        "en": "Produces resources from domesticated animals, such as milk, eggs, and wool."
      },
      skill: { type: "animal_handling", baseLevel: 1 },
      examples: ["cow", "chicken", "sheep"]
    },
    hunting: {
      key: "hunting",
      title: { "pt-br": "caça", "en": "hunting" },
      description: {
        "pt-br": "Obtém carne, peles e materiais raros de criaturas selvagens.",
        "en": "Obtains meat, hides, and rare materials from wild creatures."
      },
      skill: { type: "hunting", baseLevel: 1 },
      tools: ["bow", "trap", "knife"]
    }
  }
};
