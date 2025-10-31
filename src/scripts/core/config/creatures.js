// ============================================================
// Creatures Configuration
// ------------------------------------------------------------
// This file defines all creatures that inhabit the world.
// Each creature is categorized by origin (wildlife, monstrosity, spiritual, etc.)
// and includes base attributes, XP rewards, drops, respawn time, and spawn locations.
// These data structures are used in combat, world generation, and quest systems.
// ============================================================

export const creatures = {
  categories: {
    wildlife: {
      key: "wildlife",
      title: { "pt-br": "fauna natural", "en": "wildlife" },
      description: {
        "pt-br": "Animais comuns encontrados em florestas, planícies e montanhas.",
        "en": "Common animals found in forests, plains, and mountains."
      }
    },
    monstrosity: {
      key: "monstrosity",
      title: { "pt-br": "monstruosidade", "en": "monstrosity" },
      description: {
        "pt-br": "Criaturas agressivas e de origem mágica ou mutante.",
        "en": "Aggressive creatures of magical or mutated origin."
      }
    },
    spiritual: {
      key: "spiritual",
      title: { "pt-br": "espiritual", "en": "spiritual" },
      description: {
        "pt-br": "Entidades etéreas ligadas ao plano espiritual ou divino.",
        "en": "Ethereal entities connected to the spiritual or divine plane."
      }
    },
    humanoid: {
      key: "humanoid",
      title: { "pt-br": "humanoide", "en": "humanoid" },
      description: {
        "pt-br": "Criaturas racionais, capazes de comunicação e cultura.",
        "en": "Rational creatures capable of communication and culture."
      }
    },
    construct: {
      key: "construct",
      title: { "pt-br": "construto", "en": "construct" },
      description: {
        "pt-br": "Seres criados artificialmente através de magia ou tecnologia.",
        "en": "Beings created artificially through magic or technology."
      }
    },
    elemental: {
      key: "elemental",
      title: { "pt-br": "elemental", "en": "elemental" },
      description: {
        "pt-br": "Encarnam a essência de um ou mais elementos.",
        "en": "Embodiments of one or more elemental forces."
      }
    },
    abyssal: {
      key: "abyssal",
      title: { "pt-br": "abissal", "en": "abyssal" },
      description: {
        "pt-br": "Entidades corrompidas, nascidas do caos e da escuridão.",
        "en": "Corrupted entities born from chaos and darkness."
      }
    },
    divine: {
      key: "divine",
      title: { "pt-br": "divino", "en": "divine" },
      description: {
        "pt-br": "Seres de natureza sagrada, geralmente associados a divindades.",
        "en": "Sacred beings often associated with divine powers."
      }
    }
  },
};
