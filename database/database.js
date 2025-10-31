export const DB = {
  users: {
    personal: {
      uid: null,
      nickname: null,
      profileImg: null,
      vipLevel: 0
    },
    skills: [],
    equipments: {
      "neck": null,
      "head": null,
      "back": null,
      "left-arm": null,
      "body": null,
      "right-arm": null,
      "left-hand": null,
      "belt": null,
      "right-hand": null,
      "left-thigh": null,
      "legs": null,
      "right-thigh": null,
      "shoes": null
    },
    backpack: {
      quantity: null,
      data: []
    },
    attributes: {
      physical: {
        agility: 0,
        constitution: 0,
        dexterity: 0,
        flexibility: 0,
        resistance: 0,
        strength: 0,
        vigour: 0,
      },
      intellectual: {
        abstraction: 0,
        creativity: 0,
        focus: 0,
        knowledge: 0,
        memory: 0,
      },
      exploration: {
        swimming: 0,
        climbing: 0,
        running: 0,
        walking: 0,
        guidance: 0,
        fishing: 0,
        hunting: 0,
        gathering: 0,
      },
      relationship: {
        charisma: 0,
        empathy: 0,
        leadership: 0,
        persuasion: 0,
        deception: 0,
      },
      elemental: {
        fire: { mastery: 0, resistance: 0 },
        water: { mastery: 0, resistance: 0 },
        wind: { mastery: 0, resistance: 0 },
        earth: { mastery: 0, resistance: 0 },
        electricity: { mastery: 0, resistance: 0 },
        ice: { mastery: 0, resistance: 0 },
        steam: { mastery: 0, resistance: 0 },
        mud: { mastery: 0, resistance: 0 },
        poison: { mastery: 0, resistance: 0 },
        lava: { mastery: 0, resistance: 0 },
        plant: { mastery: 0, resistance: 0 },
        psychic: { mastery: 0, resistance: 0 },
        physical: { mastery: 0, resistance: 0 },
        dust: { mastery: 0, resistance: 0 },
        plasma: { mastery: 0, resistance: 0 },
        light: { mastery: 0, resistance: 0 }
      },
      spiritual: {
        lucky: 0,
        bravery: 0,
        darkness: 0,
        holy: 0,
      },
      senses: {
        vision: 0,
        hearing: 0,         // Audição
        smell: 0,           // Olfato
        taste: 0,           // Paladar
        touch: 0,           // Tato
        proprioception: 0,  // Propriocepção
        balance: 0,         // Equilíbrio (Vestibular)
        thermoception: 0,   // Termocepção
        nociception: 0,     // Percepção de dor
        interoception: 0,   // Interocepção
        electroreception: 0,// Eletrocepção
        magnetoreception: 0,// Magnetocepção
        echolocation: 0,    // Eco-localização
        vibrationSensitivity: 0, // Sensibilidade a vibrações
        lightPolarization: 0,     // Polarização da luz
        chemicalSensitivity: 0,   // Sensibilidade química
        ultravioletVision: 0,     // Visão UV
        infraredVision: 0,        // Visão IR
        hydrostaticPressure: 0,   // Pressão hidrostática
        passiveSonar: 0           // Sonar passivo
      },
    },
    friends: {
      list: [],
      block: [],
      requested: [],
      accept: [],
    }
  },
  skills: {
    elements: {
      fire: {
        key: "fire",
        type: "primary",
        title: {
          "pt-br": "fogo",
          "en": "fire"
        },
        source: [
          {
            "pt-br": "termodinâmica",
            "en": "thermodynamics"
          },
          {
            "pt-br": "reações químicas",
            "en": "chemical reactions"
          },
        ],
        involved: [ "lava", "steam", "light", "plasma" ]
      },
      water: {
        key: "water",
        type: "primary",
        title: {
          "pt-br": "água",
          "en": "water"
        },
        source: [
          {
            "pt-br": "clima e biomas",
            "en": "climate and biomes"
          },
          {
            "pt-br": "ecologia",
            "en": "ecology",
          },
        ],
        involved: [ "ice", "steam", "mud", "poison", "acid" ]
      },
      wind: {
        key: "wind",
        type: "primary",
        title: {
          "pt-br": "vento",
          "en": "wind"
        },
        source: [
          {
            "pt-br": "ondas",
            "en": "waves",
          },
          {
            "pt-br": "termodinâmica",
            "en": "thermodynamics"
          },
          {
            "pt-br": "clima e biomas",
            "en": "climate and biomes"
          },
        ],
        involved: [ "electricity", "dust" ]
      },
      earth: {
        key: "earth",
        type: "primary",
        title: {
          "pt-br": "terra",
          "en": "earth"
        },
        source: [
          {
            "pt-br": "estrutura da matéria",
            "en": "structure of matter",
          },
          {
            "pt-br": "mecânica",
            "en": "mechanics"
          },
          {
            "pt-br": "physical geography",
            "en": "climate and biomes"
          },
        ],
        involved: [ "mud", "lava", "dust", "metal" ]
      },
      electricity: {
        key: "electricity",
        type: "primary",
        title: {
          "pt-br": "eletricidade",
          "en": "electricity"
        },
        source: [
          {
            "pt-br": "ondas",
            "en": "waves",
          },
          {
            "pt-br": "reações químicas",
            "en": "chemical reactions"
          },
          {
            "pt-br": "eletricidade",
            "en": "electricity"
          }
        ],
        involved: [ "plasma", "light" ]
      },
      ice: {
        key: "ice",
        type: "secondary",
        title: {
          "pt-br": "gelo",
          "en": "ice"
        },
        source: [
          {
            "pt-br": "termodinâmica",
            "en": "thermodynamics"
          },
          {
            "pt-br": "água",
            "en": "water"
          }
        ],
        involved: []
      },
      darkness: {
        key: "darkness",
        title: {
          "pt-br": "escuridão",
          "en": "darkness"
        },
        source: [
          {
            "pt-br": "lógica",
            "en": "logic"
          },
          {
            "pt-br": "fisiologia humana",
            "en": "human physiology"
          }
        ],
        involved: []
      },
      holy: {
        key: "holy",
        title: {
          "pt-br": "sagrado",
          "en": "holy"
        },
        source: [
          {
            "pt-br": "lógica",
            "en": "logic"
          },
          {
            "pt-br": "fisiologia humana",
            "en": "human physiology"
          }
        ],
        involved: []
      },
      steam: {
        key: "steam",
        type: "secondary",
        title: {
          "pt-br": "vapor",
          "en": "steam"
        },
        source: [
          {
            "pt-br": "fogo",
            "en": "fire"
          },
          {
            "pt-br": "água",
            "en": "water"
          }
        ],
        involved: []
      },
      mud: {
        key: "mud",
        type: "secondary",
        title: {
          "pt-br": "lama",
          "en": "mud"
        },
        source: [
          {
            "pt-br": "terra",
            "en": "earth"
          },
          {
            "pt-br": "água",
            "en": "water"
          }
        ],
        involved: []
      },
      poison: {
        key: "poison",
        type: "secondary",
        title: {
          "pt-br": "veneno",
          "en": "poison"
        },
        source: [
          {
            "pt-br": "chemical reactions",
            "en": "reações químicas"
          },
          {
            "pt-br": "periodic table",
            "en": "tabela periódica"
          },
          {
            "pt-br": "organic chemistry",
            "en": "química orgânica"
          },
          {
            "pt-br": "água",
            "en": "water"
          },
          {
            "pt-br": "darkness",
            "en": "escuridão"
          },
          {
            "pt-br": "vapor",
            "en": "water"
          }
        ],
        involved: []
      },
      lava: {
        key: "lava",
        type: "secondary",
        title: {
          "pt-br": "lava",
          "en": "lava"
        },
        source: [
          {
            "pt-br": "fogo",
            "en": "fire"
          },
          {
            "pt-br": "terra",
            "en": "earth"
          },
          {
            "pt-br": "rocha",
            "en": "rock"
          },
          {
            "pt-br": "geografia física",
            "en": "physical geography"
          },
        ],
        involved: []
      },
      plant: {
        key: "plant",
        type: "secondary",
        title: {
          "pt-br": "planta",
          "en": "plant"
        },
        source: [
          {
            "pt-br": "água",
            "en": "water"
          },
          {
            "pt-br": "terra",
            "en": "earth"
          },
          {
            "pt-br": "botânica",
            "en": "botany"
          },
          {
            "pt-br": "ecology",
            "en": "ecologia"
          },
        ],
        involved: [ "poison" ]
      },
      psychic: {
        key: "psychic",
        title: {
          "pt-br": "psíquico",
          "en": "psychic"
        },
        source: [
          {
            "pt-br": "lógica",
            "en": "logic"
          },
          {
            "pt-br": "fisiologia humana",
            "en": "human physiology"
          }
        ],
        involved: []
      },
      physical: {
        key: "physical",
        type: "primary",
        title: {
          "pt-br": "físico",
          "en": "physical"
        },
        source: [
          {
            "pt-br": "fisiologia humana",
            "en": "human physiology"
          },
          {
            "pt-br": "zoologia",
            "en": "zoology"
          },
          {
            "pt-br": "rocha",
            "en": "rock"
          },
          {
            "pt-br": "geografia física",
            "en": "physical geography"
          },
        ],
        involved: []
      },
      dust: {
        key: "dust",
        type: "secondary",
        title: {
          "pt-br": "poeira",
          "en": "dust"
        },
        source: [
          {
            "pt-br": "earth",
            "en": "terra"
          },
          {
            "pt-br": "vento",
            "en": "wind"
          }
        ],
        involved: []
      },
      plasma: {
        key: "plasma",
        type: "secondary",
        title: { "pt-br": "plasma", "en": "plasma" },
        source: [
          { "pt-br": "fogo", "en": "fire" },
          { "pt-br": "eletricidade", "en": "electricity" },
          { "pt-br": "ondas", "en": "waves" },
          { "pt-br": "termodinâmica", "en": "thermodynamics" }
        ],
        involved: []
      }
    },
    types: {
      "target": {
        "title": {
          "pt-br": "alvo único",
          "en": "target"
        },
        "description": {
          "pt-br": "Afeta apenas um inimigo ou aliado por vez.",
          "en": "Affects only a single enemy or ally at a time."
        },
        "parameters": ["range", "accuracy", "cooldown", "projectileSpeed"]
      },
      "burst": {
        "title": {
          "pt-br": "explosão",
          "en": "burst"
        },
        "description": {
          "pt-br": "Causa dano ou efeito em uma área circular a partir de um ponto de impacto.",
          "en": "Deals damage or effect in a circular area from an impact point."
        },
        "parameters": ["radius", "damage", "knockback", "projectileSpeed"]
      },
      "area": {
        "title": {
          "pt-br": "área",
          "en": "area"
        },
        "description": {
          "pt-br": "Afeta todos em uma região específica, geralmente maior e mais ampla.",
          "en": "Affects everyone in a specific region, usually wider in scope."
        },
        "parameters": ["size", "duration", "intensity"]
      },
      "contact": {
        "title": {
          "pt-br": "contato",
          "en": "contact"
        },
        "description": {
          "pt-br": "Habilidade ativada pelo toque ou proximidade física direta.",
          "en": "Ability triggered by touch or direct physical proximity."
        },
        "parameters": []
      },
      "summon": {
        "title": {
          "pt-br": "invocação",
          "en": "summon"
        },
        "description": {
          "pt-br": "Chama criaturas, armas ou entidades para auxiliar em combate.",
          "en": "Summons creatures, weapons, or entities to aid in battle."
        },
        "parameters": ["entityType", "duration", "controlLevel"]
      },
      "wall": {
        "title": {
          "pt-br": "parede",
          "en": "wall"
        },
        "description": {
          "pt-br": "Cria uma barreira sólida ou energética para bloquear ataques.",
          "en": "Creates a solid or energy barrier to block attacks."
        },
        "parameters": ["width", "height", "hp", "duration"]
      },
      "aura": {
        "title": {
          "pt-br": "aura",
          "en": "aura"
        },
        "description": {
          "pt-br": "Emite uma energia contínua ao redor do usuário, afetando quem está próximo.",
          "en": "Emits continuous energy around the user, affecting those nearby."
        },
        "parameters": ["radius", "effect", "drainPerSecond"]
      },
      "absorption": {
        "title": {
          "pt-br": "absorção",
          "en": "absorption"
        },
        "description": {
          "pt-br": "Capta e converte energia ou dano em poder próprio.",
          "en": "Captures and converts energy or damage into the user’s own power."
        },
        "parameters": ["typeAbsorbed", "conversionRate", "limit"]
      },
      "dissipation": {
        "title": {
          "pt-br": "dissipação",
          "en": "dissipation"
        },
        "description": {
          "pt-br": "Neutraliza ou reduz efeitos ativos no ambiente ou no alvo.",
          "en": "Neutralizes or reduces active effects on the environment or the target."
        },
        "parameters": ["effectTypesNeutralized", "chance", "cooldown"]
      },
      "healing": {
        "title": {
          "pt-br": "cura",
          "en": "healing"
        },
        "description": {
          "pt-br": "Recupera vitalidade, energia ou estado de aliados.",
          "en": "Restores vitality, energy, or status of allies."
        },
        "parameters": ["amount", "range", "cooldown", "sideEffect"]
      },
      "transformation": {
        "title": {
          "pt-br": "transformação",
          "en": "transformation"
        },
        "description": {
          "pt-br": "Muda a forma do corpo ou estado do usuário para ganhar vantagens temporárias.",
          "en": "Changes the body’s form or state to gain temporary advantages."
        },
        "parameters": ["form", "buffs", "duration", "cost"]
      },
      "reinforcement": {
        "title": {
          "pt-br": "reforço",
          "en": "reinforcement"
        },
        "description": {
          "pt-br": "Aumenta atributos como força, defesa, velocidade ou resistência.",
          "en": "Boosts attributes such as strength, defense, speed, or endurance."
        },
        "parameters": ["attribute", "increase", "duration"]
      },
      "control": {
        "title": {
          "pt-br": "controle",
          "en": "control"
        },
        "description": {
          "pt-br": "Manipula ambiente, inimigos ou aliados, limitando suas ações.",
          "en": "Manipulates environment, enemies, or allies, limiting their actions."
        },
        "parameters": ["type", "duration", "successRate"]
      },
      "beam": {
        "title": {
          "pt-br": "rajada",
          "en": "beam"
        },
        "description": {
          "pt-br": "Um fluxo contínuo de energia ou elemento, mantido enquanto durar a concentração.",
          "en": "A continuous stream of energy or element, sustained while concentration lasts."
        },
        "parameters": ["range", "width", "duration", "drainPerSecond", "intensity"]
      }
    },
    parameters: {
      "cost": [ "stamina", "hp", "mana" ],
      "execution": [ "castTime", "cooldown" ]
    },
    data: [],
  },
  mission: {
    types: {
      gathering: {
        key: "gathering",
        title: {
          "pt-br": "coletar",
          "en": "gathering"
        },
        target: {
          "pt-br": "itens",
          "en": "items"
        }
      },
      delivery: {
        key: "delivery",
        title: {
          "pt-br": "entrega",
          "en": "delivery"
        },
        target: {
          "pt-br": "itens",
          "en": "items"
        }
      },
      destroy: {
        key: "destroy",
        title: {
          "pt-br": "destruir",
          "en": "destroy"
        },
        target: {
          "pt-br": "edificações",
          "en": "buildings"
        }
      },
      find: {
        key: "find",
        title: {
          "pt-br": "encontrar",
          "en": "find"
        },
        target: {
          "pt-br": "npcs",
          "en": "npcs"
        }
      },
      guard: {
        key: "guard",
        title: {
          "pt-br": "proteger",
          "en": "guard"
        },
        target: {
          "pt-br": "edificações",
          "en": "buildings"
        }
      },
      hunt: {
        key: "hunt",
        title: {
          "pt-br": "caçar",
          "en": "hunt"
        },
        target: {
          "pt-br": "creatures",
          "en": "creatures"
        }
      },
      murder: {
        key: "murder",
        title: {
          "pt-br": "assassinato",
          "en": "murder"
        },
        target: {
          "pt-br": "npcs",
          "en": "npcs"
        }
      },
      scout: {
        key: "scout",
        title: {
          "pt-br": "explorar",
          "en": "scout"
        },
        target: {
          "pt-br": "npcs",
          "en": "npcs"
        }
      },
      stolen: {
        key: "stolen",
        title: {
          "pt-br": "roubado",
          "en": "stolen"
        },
        target: {
          "pt-br": "itens",
          "en": "items"
        }
      },
      transport: {
        key: "transport",
        title: {
          "pt-br": "transporte",
          "en": "transport"
        },
        target: {
          "pt-br": "itens",
          "en": "items"
        }
      }
    },
    data: []
  },
  item: {
    types: {
      food: {
        key: "food",
        title: {
          "pt-br": "comida",
          "en": "food"
        }
      },
      drink: {
        key: "drink",
        title: {
          "pt-br": "bebida",
          "en": "drink"
        }
      },
      equipment: {
        key: "equipment",
        title: {
          "pt-br": "equipamento",
          "en": "equipment"
        }
      },
      ammunition: {
        key: "ammunition",
        title: {
          "pt-br": "munição",
          "en": "ammunition"
        }
      },
      "nature-material": {
        key: "nature-material",
        title: {
          "pt-br": "material natural",
          "en": "nature material"
        }
      },
      "creature-material": {
        key: "creature-material",
        title: {
          "pt-br": "material de criatura",
          "en": "creature material"
        }
      }
    },
    qualities: {
      useless: {
        key: "useless",
        color: "#9d9d9d",
        title: {
          "pt-br": "inútil",
          "en": "useless"
        }
      },
      poor: {
        key: "poor",
        color: "#8b5a2b",
        title: {
          "pt-br": "pobre",
          "en": "poor"
        }
      },
      ordinary: {
        key: "ordinary",
        color: "#ffffff",
        title: {
          "pt-br": "comum",
          "en": "ordinary"
        }
      },
      unusual: {
        key: "unusual",
        color: "#1eff00",
        title: {
          "pt-br": "incomum",
          "en": "unusual"
        }
      },
      good: {
        key: "good",
        color: "#0070dd",
        title: {
          "pt-br": "bom",
          "en": "good"
        }
      },
      great: {
        key: "great",
        color: "#a335ee",
        title: {
          "pt-br": "ótimo",
          "en": "great"
        }
      },
      fantastic: {
        key: "fantastic",
        color: "#ff8000",
        title: {
          "pt-br": "fantástico",
          "en": "fantastic"
        }
      },
      legendary: {
        key: "legendary",
        color: "#e6cc80",
        title: {
          "pt-br": "lendário",
          "en": "legendary"
        }
      }
    },
    producer: {
      forge: {
        key: "forge",
        title: {
          "pt-br": "forja",
          "en": "forge"
        }
      },
      kitchen: {
        key: "kitchen",
        title: {
          "pt-br": "cozinha",
          "en": "kitchen"
        }
      },
      manufacturing: {
        key: "manufacturing",
        title: {
          "pt-br": "manufatura",
          "en": "manufacturing"
        }
      },
      laboratory: {
        key: "laboratory",
        title: {
          "pt-br": "laboratório",
          "en": "laboratory"
        }
      },
      farming: {
        key: "farming",
        title: {
          "pt-br": "agricultura",
          "en": "farming"
        }
      },
      hunting: {
        key: "hunting",
        title: {
          "pt-br": "caça",
          "en": "hunting"
        }
      },
      fishing: {
        key: "fishing",
        title: {
          "pt-br": "pesca",
          "en": "fishing"
        }
      },
      gathering: {
        key: "gathering",
        title: {
          "pt-br": "coleta",
          "en": "gathering"
        }
      }
    },
    data: {
      "asuhdauso123dsafs": {
        name:{
          "pt-br": "mochila",
          "en": "backpack"
        },
        type: "equipment",
        tag: "back",
        quality: "poor",
        properties: {
          weight: 0.35,
          slots: 25
        }
      },
      "helm_01": {
        name: { "pt-br": "Capacete de Couro", "en": "Leather Helmet" },
        type: "equipment",
        tag: "head",
        quality: "ordinary",
        properties: { weight: 1.2 }
      },
      "sword_01": {
        name: { "pt-br": "Espada Curta", "en": "Short Sword" },
        type: "equipment",
        tag: "right-hand",
        quality: "good",
        properties: { weight: 3.5, damage: 5 }
      },
      "ring_01": {
        name: { "pt-br": "Anel simples", "en": "Simple Ring" },
        type: "equipment",
        tag: "neck",
        quality: "unusual",
        properties: { weight: 0.05 }
      },
      "potion_01": {
        name: { "pt-br": "Poção de Vida", "en": "Health Potion" },
        type: "consumable",
        tag: "consumable",
        quality: "ordinary",
        properties: { weight: 0.2 }
      }
    }
  }  
}

