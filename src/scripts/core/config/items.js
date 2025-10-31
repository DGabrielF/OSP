// ============================================================
// Items Configuration
// ------------------------------------------------------------
// This file defines all items available in the game world.
// Items are categorized by type (consumable, equipment, material, decorative),
// quality (from useless to legendary), and producer (how they can be obtained).
// Each item can have physical and spiritual properties, enabling crafting,
// forging, trading, and interaction with character abilities or environments.
// This structure supports expansion with unique or player-crafted items.
// ============================================================

export const items = {
  types: {
    consumable: {
      food: { key: "food", title: { "pt-br": "comida", "en": "food" } },
      drink: { key: "drink", title: { "pt-br": "bebida", "en": "drink" } },
      potion: { key: "potion", title: { "pt-br": "poção", "en": "potion" } },
    },
    equipment: {
      weapon: { key: "weapon", title: { "pt-br": "arma", "en": "weapon" } },
      armor: { key: "armor", title: { "pt-br": "armadura", "en": "armor" } },
      accessory: { key: "accessory", title: { "pt-br": "acessório", "en": "accessory" } },
      ammunition: { key: "ammunition", title: { "pt-br": "munição", "en": "ammunition" } },
    },
    material: {
      "nature-material": { key: "nature-material", title: { "pt-br": "material natural", "en": "nature material" } },
      "creature-material": { key: "creature-material", title: { "pt-br": "material de criatura", "en": "creature material" } },
    },
    decorative: {
      cosmetic: { key: "cosmetic", title: { "pt-br": "cosmético", "en": "cosmetic" } },
      commemorative: { key: "commemorative", title: { "pt-br": "comemorativo", "en": "commemorative" } },
    },
  },
  qualities: {
    useless: { key: "useless", color: "#9d9d9d", title: { "pt-br": "inútil", "en": "useless" } },
    poor: { key: "poor", color: "#8b5a2b", title: { "pt-br": "pobre", "en": "poor" } },
    ordinary: { key: "ordinary", color: "#ffffff", title: { "pt-br": "comum", "en": "ordinary" } },
    unusual: { key: "unusual", color: "#1eff00", title: { "pt-br": "incomum", "en": "unusual" } },
    good: { key: "good", color: "#0070dd", title: { "pt-br": "bom", "en": "good" } },
    great: { key: "great", color: "#a335ee", title: { "pt-br": "ótimo", "en": "great" } },
    fantastic: { key: "fantastic", color: "#ff8000", title: { "pt-br": "fantástico", "en": "fantastic" } },
    legendary: { key: "legendary", color: "#e6cc80", title: { "pt-br": "lendário", "en": "legendary" } },
  },
  producer: {
    forge: { key: "forge", title: { "pt-br": "forja", "en": "forge" } },
    kitchen: { key: "kitchen", title: { "pt-br": "cozinha", "en": "kitchen" } },
    manufacturing: { key: "manufacturing", title: { "pt-br": "manufatura", "en": "manufacturing" } },
    laboratory: { key: "laboratory", title: { "pt-br": "laboratório", "en": "laboratory" } },
    farming: { key: "farming", title: { "pt-br": "agricultura", "en": "farming" } },
    hunting: { key: "hunting", title: { "pt-br": "caça", "en": "hunting" } },
    fishing: { key: "fishing", title: { "pt-br": "pesca", "en": "fishing" } },
    gathering: { key: "gathering", title: { "pt-br": "coleta", "en": "gathering" } },
  },
};
