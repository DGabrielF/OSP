// ============================================================
// Elements Configuration
// ------------------------------------------------------------
// This file defines the elemental structure of the world.
// Each element can be primary, secondary, or special (e.g., holy, darkness).
// It includes sources, interactions, and relationships for use in magic,
// crafting, and environmental effects.
// ============================================================

export const elements = {
  // ---------- PRIMARY ELEMENTS ---------- //
  fire: {
    key: "fire",
    type: "primary",
    title: { "pt-br": "fogo", "en": "fire" },
    color: "#ff4500",
    symbol: "🔥",
    source: [
      { "pt-br": "termodinâmica", "en": "thermodynamics" },
      { "pt-br": "reações químicas", "en": "chemical reactions" }
    ],
    involved: ["lava", "steam", "light", "plasma"],
    description: {
      "pt-br": "Elemento associado à energia, calor, combustão e destruição.",
      "en": "Element associated with energy, heat, combustion, and destruction."
    }
  },
  water: {
    key: "water",
    type: "primary",
    title: { "pt-br": "água", "en": "water" },
    color: "#1e90ff",
    symbol: "💧",
    source: [
      { "pt-br": "clima e biomas", "en": "climate and biomes" },
      { "pt-br": "ecologia", "en": "ecology" }
    ],
    involved: ["ice", "steam", "mud", "poison", "acid"],
    description: {
      "pt-br": "Elemento da fluidez, cura e adaptação. Essência da vida.",
      "en": "Element of fluidity, healing, and adaptability. Essence of life."
    }
  },
  wind: {
    key: "wind",
    type: "primary",
    title: { "pt-br": "vento", "en": "wind" },
    color: "#a4d7e1",
    symbol: "🌪️",
    source: [
      { "pt-br": "ondas", "en": "waves" },
      { "pt-br": "termodinâmica", "en": "thermodynamics" },
      { "pt-br": "clima e biomas", "en": "climate and biomes" }
    ],
    involved: ["electricity", "dust"],
    description: {
      "pt-br": "Elemento do movimento, velocidade e liberdade.",
      "en": "Element of movement, speed, and freedom."
    }
  },
  earth: {
    key: "earth",
    type: "primary",
    title: { "pt-br": "terra", "en": "earth" },
    color: "#8b4513",
    symbol: "🌍",
    source: [
      { "pt-br": "estrutura da matéria", "en": "structure of matter" },
      { "pt-br": "mecânica", "en": "mechanics" },
      { "pt-br": "geografia física", "en": "physical geography" }
    ],
    involved: ["mud", "lava", "dust", "metal"],
    description: {
      "pt-br": "Elemento da estabilidade, força e fertilidade.",
      "en": "Element of stability, strength, and fertility."
    }
  },
  electricity: {
    key: "electricity",
    type: "primary",
    title: { "pt-br": "eletricidade", "en": "electricity" },
    color: "#ffd700",
    symbol: "⚡",
    source: [
      { "pt-br": "ondas", "en": "waves" },
      { "pt-br": "reações químicas", "en": "chemical reactions" },
      { "pt-br": "eletricidade", "en": "electricity" }
    ],
    involved: ["plasma", "light"],
    description: {
      "pt-br": "Elemento da energia, inovação e sinapse. Simboliza o fluxo vital.",
      "en": "Element of energy, innovation, and synapse. Symbolizes life flow."
    }
  },
  physical: {
    key: "physical",
    type: "primary",
    title: { "pt-br": "físico", "en": "physical" },
    color: "#a9a9a9",
    symbol: "🛡️",
    source: [
      { "pt-br": "fisiologia humana", "en": "human physiology" },
      { "pt-br": "zoologia", "en": "zoology" },
      { "pt-br": "rocha", "en": "rock" }
    ],
    involved: [],
    synergy: ["earth"],
    oppose: [],
    description: {
      "pt-br": "Dano e manipulação do mundo físico — golpes, força e impacto.",
      "en": "Damage and manipulation of the physical world — strikes, force and impact."
    }
  },
  // ---------- SECONDARY ELEMENTS ---------- //
  ice: {
    key: "ice",
    type: "secondary",
    title: { "pt-br": "gelo", "en": "ice" },
    color: "#b0e0e6",
    symbol: "❄️",
    source: [
      { "pt-br": "termodinâmica", "en": "thermodynamics" },
      { "pt-br": "água", "en": "water" }
    ],
    involved: [],
    description: {
      "pt-br": "Forma condensada da água, associada ao controle e à contenção.",
      "en": "Condensed form of water, associated with control and containment."
    }
  },
  steam: {
    key: "steam",
    type: "secondary",
    title: { "pt-br": "vapor", "en": "steam" },
    color: "#dcdcdc",
    symbol: "💨",
    source: [
      { "pt-br": "fogo", "en": "fire" },
      { "pt-br": "água", "en": "water" }
    ],
    involved: [],
    description: {
      "pt-br": "União entre fogo e água, simboliza transição e energia móvel.",
      "en": "Union between fire and water, symbolizes transition and mobile energy."
    }
  },
  mud: {
    key: "mud",
    type: "secondary",
    title: { "pt-br": "lama", "en": "mud" },
    color: "#a0522d",
    symbol: "🪱",
    source: [
      { "pt-br": "terra", "en": "earth" },
      { "pt-br": "água", "en": "water" }
    ],
    description: {
      "pt-br": "Elemento fértil, ligado à vida orgânica e à decomposição.",
      "en": "Fertile element, linked to organic life and decomposition."
    }
  },
  lava: {
    key: "lava",
    type: "secondary",
    title: { "pt-br": "lava", "en": "lava" },
    color: "#ff6347",
    symbol: "🌋",
    source: [
      { "pt-br": "fogo", "en": "fire" },
      { "pt-br": "terra", "en": "earth" }
    ],
    description: {
      "pt-br": "Mistura intensa de fogo e terra. Energia bruta e destrutiva.",
      "en": "Intense mix of fire and earth. Raw and destructive energy."
    }
  },
  plant: {
    key: "plant",
    type: "secondary",
    title: { "pt-br": "planta", "en": "plant" },
    color: "#2e8b57",
    symbol: "🌿",
    source: [
      { "pt-br": "água", "en": "water" },
      { "pt-br": "terra", "en": "earth" },
      { "pt-br": "botânica", "en": "botany" },
      { "pt-br": "ecologia", "en": "ecology" }
    ],
    involved: ["poison"],
    synergy: ["water", "earth"],
    description: {
      "pt-br": "Força orgânica — cura, crescimento, venenos naturais e biomassa.",
      "en": "Organic force — healing, growth, natural poisons and biomass."
    }
  },
  plasma: {
    key: "plasma",
    type: "secondary",
    title: { "pt-br": "plasma", "en": "plasma" },
    color: "#ff8c00",
    symbol: "☄️",
    source: [
      { "pt-br": "fogo", "en": "fire" },
      { "pt-br": "eletricidade", "en": "electricity" },
      { "pt-br": "ondas", "en": "waves" },
      { "pt-br": "termodinâmica", "en": "thermodynamics" }
    ],
    involved: [],
    description: {
      "pt-br": "Estado ionizado da matéria — energia altamente reativa.",
      "en": "Ionized state of matter — highly reactive energy."
    }
  },
  poison: {
    key: "poison",
    type: "secondary",
    title: { "pt-br": "veneno", "en": "poison" },
    color: "#556b2f",
    symbol: "☠️",
    source: [
      { "pt-br": "reações químicas", "en": "chemical reactions" },
      { "pt-br": "tabela periódica", "en": "periodic table" },
      { "pt-br": "química orgânica", "en": "organic chemistry" },
      { "pt-br": "água", "en": "water" },
      { "pt-br": "darkness", "en": "escuridão" },
      { "pt-br": "vapor", "en": "steam" }
    ],
    involved: [],
    synergy: ["plant", "water"],
    oppose: ["holy"],
    description: {
      "pt-br": "Substâncias que causam dano persistente, debuffs e envenenamento.",
      "en": "Substances causing persistent damage, debuffs and poisoning."
    }
  },
  dust: {
    key: "dust",
    type: "secondary",
    title: { "pt-br": "poeira", "en": "dust" },
    color: "#c2b280",
    symbol: "🌫️",
    source: [
      { "pt-br": "terra", "en": "earth" },
      { "pt-br": "vento", "en": "wind" }
    ],
    involved: [],
    synergy: ["earth", "wind"],
    description: {
      "pt-br": "Partículas finas de matéria — útil para cegueira, poluição e cobertura.",
      "en": "Fine particulate matter — useful for blinding, pollution and cover."
    }
  },
  // ---------- SPECIAL ELEMENTS ---------- //
  darkness: {
    key: "darkness",
    type: "special",
    title: { "pt-br": "escuridão", "en": "darkness" },
    color: "#1a1a1a",
    symbol: "🌑",
    source: [
      { "pt-br": "fisiologia humana", "en": "human physiology" },
      { "pt-br": "lógica", "en": "logic" }
    ],
    description: {
      "pt-br": "Elemento do mistério, medo e introspecção. Representa o oculto.",
      "en": "Element of mystery, fear, and introspection. Represents the hidden."
    }
  },
  holy: {
    key: "holy",
    type: "special",
    title: { "pt-br": "sagrado", "en": "holy" },
    color: "#fff8dc",
    symbol: "✨",
    source: [
      { "pt-br": "fé", "en": "faith" },
      { "pt-br": "ética", "en": "ethics" }
    ],
    description: {
      "pt-br": "Elemento da purificação e proteção espiritual.",
      "en": "Element of purification and spiritual protection."
    }
  },
  psychic: {
    key: "psychic",
    type: "special",
    title: { "pt-br": "psíquico", "en": "psychic" },
    color: "#9370db",
    symbol: "🧠",
    source: [
      { "pt-br": "lógica", "en": "logic" },
      { "pt-br": "fisiologia humana", "en": "human physiology" }
    ],
    description: {
      "pt-br": "Elemento mental, ligado à consciência e ao controle.",
      "en": "Mental element linked to consciousness and control."
    }
  },
  light: {
    key: "light",
    type: "special",
    title: { "pt-br": "luz", "en": "light" },
    color: "#fffacd",
    symbol: "💡",
    source: [{ "pt-br": "fotossíntese/óptica", "en": "optics/photons" }],
    oppose: ["darkness"],
    description: {
      "pt-br": "Elemento associado à claridade, visão e energia focalizada.",
      "en": "Element associated with clarity, vision and focused energy."
    }
  },
  transmutation: {
    key: "transmutation",
    type: "special",
    title: { "pt-br": "transmutação", "en": "transmutation" },
    color: "#d4af37",
    symbol: "⚗️",
    source: [
      { "pt-br": "reações químicas, estrutura da matéria, genética", "en": "chemical reactions, matter structure, genetics" }
    ],
    oppose: ["decay", "stasis"],
    description: {
      "pt-br": "Capacidade de fundir, alterar ou remodelar a matéria e o próprio corpo.",
      "en": "Ability to fuse, alter, or reshape matter and the user's own body."
    }
  },
  portal: {
    key: "portal",
    type: "special",
    title: { "pt-br": "portal", "en": "portal" },
    color: "#9370db",
    symbol: "🌀",
    source: [
      { "pt-br": "mecânica, ondas, espaço-tempo", "en": "mechanics, waves, space-time" }
    ],
    oppose: ["barrier", "void"],
    description: {
      "pt-br": "Capacidade de abrir portais espaciais ou dimensionais para mover objetos ou seres entre locais.",
      "en": "Ability to open spatial or dimensional gates to move objects or beings across locations."
    }
  },
  illusion: {
    key: "illusion",
    type: "special",
    title: { "pt-br": "ilusão", "en": "illusion" },
    color: "#ffb6c1",
    symbol: "🎭",
    source: [
      { "pt-br": "óptica, percepção, consciência", "en": "optics, perception, consciousness" }
    ],
    oppose: ["truth", "clarity"],
    description: {
      "pt-br": "Manipulação da percepção por meio do controle da luz, som ou consciência.",
      "en": "Manipulation of perception through control of light, sound, or consciousness."
    }
  },
  mind: {
    key: "mind",
    type: "special",
    title: { "pt-br": "mente", "en": "mind" },
    color: "#6a5acd",
    symbol: "🧠",
    source: [
      { "pt-br": "fisiologia humana, espiritualidade, foco", "en": "human physiology, spirituality, focus" }
    ],
    oppose: ["madness", "confusion"],
    description: {
      "pt-br": "Amplifica a consciência, o foco e a resistência a interferências mentais como medo ou confusão.",
      "en": "Amplifies awareness, focus, and resistance to mental interference such as fear or confusion."
    }
  },
}