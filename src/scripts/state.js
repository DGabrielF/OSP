import { Reactive } from "./core/utils/reactive.js"

const initialState = {
  ui: {
    currentScreen: "login",
    loading: false,
  },
  network: {
    connectionStatus: "disconnected",
    selectedServer: null,
  },
  account: null,
  player: {
    id: null,
    configs: {
      hotkeys: {
        sets: {
          "set-1": "e",
          "set-2": "r",
          "set-3": "t",
        },
        slots: {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
        },
        menu: {
          "backpack": "b",
          "attributes": "a",
          "skills": "k",
          "missions": "m",
          "bestiary": "y",
          "events": "v",
          "friends": "f",
          "guild": "g",
          "organizations": "o",
        }
      }
    },
    flags: {
      lastUpdate: Date.now(),
      online: true,
    },
    personal: {
      gender: "m",
      name: "Usuário",
    },
    experience: {
      level: 1,
      currentXP: 0,      
    },
    location: {
      map: null,
      region: null,
      coordinates: { x: 0, y: 0, z: 0 },
    },
    attributes: {
      physical: {
        agility: {
          level: 1,
          currentXP: 0,          
        },
        constitution: {
          level: 1,
          currentXP: 0,          
        },
        dexterity: {
          level: 1,
          currentXP: 0,          
        },
        flexibility: {
          level: 1,
          currentXP: 0,          
        },
        resistance: {
          level: 1,
          currentXP: 0,          
        },
        strength:  {
          level: 1,
          currentXP: 0,          
        },
        vigour: {
          level: 1,
          currentXP: 0,          
        },
      },
      intellectual: {
        abstraction: {
          level: 1,
          currentXP: 0,          
        },
        creativity: {
          level: 1,
          currentXP: 0,          
        },
        focus: {
          level: 1,
          currentXP: 0,          
        },
        knowledge: {
          level: 1,
          currentXP: 0,          
        },
        memory: {
          level: 1,
          currentXP: 0,          
        },
      },
      exploration: {
        swimming: {
          level: 1,
          currentXP: 0,          
        },
        climbing: {
          level: 1,
          currentXP: 0,          
        },
        running: {
          level: 1,
          currentXP: 0,          
        },
        walking: {
          level: 1,
          currentXP: 0,          
        },
        guidance: {
          level: 1,
          currentXP: 0,          
        },
        fishing: {
          level: 1,
          currentXP: 0,          
        },
        hunting: {
          level: 1,
          currentXP: 0,          
        },
        gathering: {
          level: 1,
          currentXP: 0,          
        },
      },
      relationship: {
        charisma: {
          level: 1,
          currentXP: 0,          
        },
        empathy: {
          level: 1,
          currentXP: 0,
          
        },
        leadership: {
          level: 1,
          currentXP: 0,          
        },
        persuasion: {
          level: 1,
          currentXP: 0,          
        },
        deception: {
          level: 1,
          currentXP: 0,          
        },
      },
      elemental: {
        fire: {
          level: 1,
          currentXP: 0,          
        },
        water: {
          level: 1,
          currentXP: 0,
          
        },
        wind: {
          level: 1,
          currentXP: 0,
          
        },
        earth: {
          level: 1,
          currentXP: 0,
          
        },
        electricity: {
          level: 1,
          currentXP: 0,
          
        },
        ice: {
          level: 1,
          currentXP: 0,
          
        },
        steam: {
          level: 1,
          currentXP: 0,
          
        },
        mud: {
          level: 1,
          currentXP: 0,
          
        },
        poison: {
          level: 1,
          currentXP: 0,
          
        },
        lava: {
          level: 1,
          currentXP: 0,
          
        },
        plant: {
          level: 1,
          currentXP: 0,
          
        },
        psychic: {
          level: 1,
          currentXP: 0,          
        },
        physic: {
          level: 1,
          currentXP: 0,          
        },
        dust: {
          level: 1,
          currentXP: 0,
          
        },
        plasma: {
          level: 1,
          currentXP: 0,
          
        },
        light: {
          level: 1,
          currentXP: 0,
          
        },
        transmutation: {
          level: 1,
          currentXP: 0,
          
        },
        illusion: {
          level: 1,
          currentXP: 0,
          
        },
        mind: {
          level: 1,
          currentXP: 0,
          
        },
      },
      spiritual: {
        portal: {
          level: 1,
          currentXP: 0,
          
        },
        lucky: null,
        bravery: {
          level: 1,
          currentXP: 0,          
        },
        darkness: {
          level: 1,
          currentXP: 0,
          
        },
        holy: {
          level: 1,
          currentXP: 0,
          
        },
      },
      senses: {
        vision: {
          level: 1,
          currentXP: 0,
          
        },
        hearing: {
          level: 1,
          currentXP: 0,
          
        },
        smell: {
          level: 1,
          currentXP: 0,
          
        },
        taste: {
          level: 1,
          currentXP: 0,
          
        },
        touch: {
          level: 1,
          currentXP: 0,
          
        },
        proprioception: {
          level: 1,
          currentXP: 0,
          
        },
        balance: {
          level: 1,
          currentXP: 0,
          
        },
        thermoception: {
          level: 1,
          currentXP: 0,
          
        },
        nociception: {
          level: 1,
          currentXP: 0,
          
        },
        interoception: {
          level: 1,
          currentXP: 0,
          
        },
        electroreception: {
          level: 1,
          currentXP: 0,
          
        },
        magnetoreception: {
          level: 1,
          currentXP: 0,
          
        },
        echolocation: {
          level: 1,
          currentXP: 0,
          
        },
        vibrationSensitivity: {
          level: 1,
          currentXP: 0,
          
        },
        lightPolarization: {
          level: 1,
          currentXP: 0,
          
        },
        chemicalSensitivity: {
          level: 1,
          currentXP: 0,
          
        },
        ultravioletVision: {
          level: 1,
          currentXP: 0,
          
        },
        infraredVision: {
          level: 1,
          currentXP: 0,
          
        },
        hydrostaticPressure: {
          level: 1,
          currentXP: 0,
          
        },
        passiveSonar: {
          level: 1,
          currentXP: 0,
          
        },
      },
      vitality: {
        energy: {
          max: null,
          current: null,
        },
        health: {
          max: null,
          current: null,
          regenRate: {
            stamina: 0.7,
            mana: 0.2
          }
        },
        stamina: {
          max: null,
          current: null,
          regenRate: {
            health: 0.7,
            mana: 0.2
          }
        },
        mana: {
          max: null,
          current: 60,
          regenRate: {
            health: 0.7,
            stamina: 0.2
          }
        }
      },
      combat: {
        attackPower: null,
        magicPower: null,
        attackSpeed: null,
        skillPreparation: null,
        criticalChance: null,
        criticalDamage: null,
        defense: null,
        magicDefense: null,
        blockChance: null,
        blockEfficiency: null,
        evasion: null,
        counterChance: null,
      }
    },
    items: {
      equipment: {
        "neck": null,
        "head": null,
        "back": null,
        "right-arm": null,
        "body": null,
        "left-arm": null,
        "right-hand": null,
        "belt": null,
        "left-hand": null,
        "right-thigh": null,
        "legs": null,
        "left-thigh": null,
        "null": null,
        "shoes": null,
      },
      inventory: {
        limit: 0,
        data: {},
      }
    },
    guilds: {
      alliance: null,
    },
    relationship: {
      friends: [],
      toAccept: [],
      requested: [],
      block: []
    },
    statistics: {
      murderedPlayers: 0,
      deaths: 0,
      completedOffLineMissions: {
        gathering: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        delivery: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        destroy: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        find: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        guard: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        hunt: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        murder: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        scout: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        stolen: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        transport: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
      },
      completedMissions: {
        gathering: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        delivery: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        destroy: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        find: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        guard: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        hunt: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        murder: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        scout: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        stolen: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
        transport: {
          easy: 0,
          medium: 0,
          hard: 0,
          epic: 0
        },
      },
    },
    achievementes: {},
    skills: [
      {
        id: "firfireprojatt001",
        level: 1,
        currentXP: 0,
        mastery: 0,
        cooldown: 0,
      }
    ],
    hotkeys: {
      "set-1": {
        "1": {
          equiped: "firfireprojatt001"
        },
        "2": {
          equiped: "rasengan"
        },
        "3": {
          equiped: "kushiose no jutsu"
        },
        "4": {
          equiped: "kage bunshin no jutsu"
        },
        "5": {
          equiped: null
        },
        "6": {
          equiped: null
        },
      },
      "set-2": {
        "1": {          
          equiped: "katon goukakyuu no jutsu"
        },
        "2": {
          equiped: "chidori"
        },
        "3": {
          equiped: "sharingan"
        },
        "4": {
          equiped: null
        },
        "5": {
          equiped: null
        },
        "6": {
          equiped: null
        },
      },
      "set-3": {
        "1": {
          equiped: "kayoken"
        },
        "2": {
          equiped: "kamehame ha"
        },
        "3": {
          equiped: "genki dama"
        },
        "4": {
          equiped: null
        },
        "5": {
          equiped: null
        },
        "6": {
          equiped: null
        },
      },
    }
  },
  world: {
    time: "day",
    weather: "clear",
  }
}

export const State = Reactive.create(initialState);