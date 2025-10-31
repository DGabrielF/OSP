// ============================================================
// Missions Configuration
// ------------------------------------------------------------
// This file defines all mission types and their targets in the game world.
// Each mission type specifies what the objective is (e.g., gathering, delivery,
// destruction, protection) and what kind of target is involved (items, NPCs, buildings, creatures).
// Missions can be expanded with additional data, rewards, or conditions, supporting
// quest chains, player progression, and interaction with other game systems.
// ============================================================

export const missions = {
  types: {
    gathering: {
      key: "gathering",
      title: { "pt-br": "coletar", "en": "gathering" },
      target: { "pt-br": "itens", "en": "items" }
    },
    delivery: {
      key: "delivery",
      title: { "pt-br": "entrega", "en": "delivery" },
      target: { "pt-br": "itens", "en": "items" }
    },
    destroy: {
      key: "destroy",
      title: { "pt-br": "destruir", "en": "destroy" },
      target: { "pt-br": "edificações", "en": "buildings" }
    },
    find: {
      key: "find",
      title: { "pt-br": "encontrar", "en": "find" },
      target: { "pt-br": "npcs", "en": "npcs" }
    },
    guard: {
      key: "guard",
      title: { "pt-br": "proteger", "en": "guard" },
      target: { "pt-br": "edificações", "en": "buildings" }
    },
    hunt: {
      key: "hunt",
      title: { "pt-br": "caçar", "en": "hunt" },
      target: { "pt-br": "creatures", "en": "creatures" }
    },
    murder: {
      key: "murder",
      title: { "pt-br": "assassinato", "en": "murder" },
      target: { "pt-br": "npcs", "en": "npcs" }
    },
    scout: {
      key: "scout",
      title: { "pt-br": "explorar", "en": "scout" },
      target: { "pt-br": "npcs", "en": "npcs" }
    },
    stolen: {
      key: "stolen",
      title: { "pt-br": "roubado", "en": "stolen" },
      target: { "pt-br": "itens", "en": "items" }
    },
    transport: {
      key: "transport",
      title: { "pt-br": "transporte", "en": "transport" },
      target: { "pt-br": "itens", "en": "items" }
    }
  },
  classification: {
    easy: { key: "easy", title: { "pt-br": "fácil", "en": "easy" }, color: "#1eff00" },
    medium: { key: "medium", title: { "pt-br": "médio", "en": "medium" }, color: "#0070dd" },
    hard: { key: "hard", title: { "pt-br": "difícil", "en": "hard" }, color: "#a335ee" },
    epic: { key: "epic", title: { "pt-br": "épico", "en": "epic" }, color: "#ff8000" }
  },
  duration: {
    short: 15,
    medium: 60,
    long: 180,
    epic: 360
  },
  skills: {
    combat: { key: "combat", title: { "pt-br": "combate", "en": "combat" } },
    stealth: { key: "stealth", title: { "pt-br": "furtividade", "en": "stealth" } },
    gathering: { key: "gathering", title: { "pt-br": "coleta", "en": "gathering" } },
    crafting: { key: "crafting", title: { "pt-br": "forja", "en": "crafting" } },
    exploration: { key: "exploration", title: { "pt-br": "exploração", "en": "exploration" } },
    intellect: { key: "intellect", title: { "pt-br": "intelecto", "en": "intellect" } }
  },
  requester: {
    npc: { key: "npc", title: { "pt-br": "NPC", "en": "NPC" } },
    faction: { key: "faction", title: { "pt-br": "facção", "en": "faction" } },
    system: { key: "system", title: { "pt-br": "sistema", "en": "system" } }
  },
  reward: {
    xp: { key: "xp", title: { "pt-br": "experiência", "en": "experience" } },
    items: { key: "items", title: { "pt-br": "itens", "en": "items" } },
    currency: { key: "currency", title: { "pt-br": "moeda", "en": "currency" } },
    reputation: { key: "reputation", title: { "pt-br": "reputação", "en": "reputation" } }
  },
  reputation: {
    increase: { key: "increase", title: { "pt-br": "aumenta", "en": "increase" } },
    decrease: { key: "decrease", title: { "pt-br": "diminui", "en": "decrease" } },
    neutral: { key: "neutral", title: { "pt-br": "neutro", "en": "neutral" } }
  },
};