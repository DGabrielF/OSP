import { Hotkeys } from "../page/initial/hotkeys/hotkeys.js";
import { Initial } from "../page/initial/initial.js";
import { SkillSets } from "../page/initial/skillSets/skillSets.js";
import { attribute } from "./core/calculators/attribute.js";
import { Regen } from "./core/calculators/regenSystem.js";
import { slot } from "./core/calculators/slot.js";
import { GameMap } from "../page/initial/map/map.js";
import { object } from "./core/utils/obj.js";
import { State } from "./state.js";
import { ProximitySystem } from "./core/calculators/proximity.js";

const body = document.querySelector("body");
const gameDisplay = document.getElementById("game-display");

function detectEnvironment() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  // --- Dispositivo ---
  let deviceType = "desktop";
  if (/android/i.test(ua)) {
    deviceType = "mobile-android";
  } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    deviceType = "mobile-ios";
  } else if (/mobile/i.test(ua)) {
    deviceType = "mobile-other";
  }

  // --- Navegador ou App ---
  let mode = "browser";
  if (window.matchMedia("(display-mode: standalone)").matches) {
    mode = "app-pwa";
  } else if (navigator.standalone === true) {
    // iOS Safari em standalone
    mode = "app-ios-standalone";
  }

  // if (deviceType === "desktop" || mode === "browser") {
  if (deviceType === "desktop") {
    gameDisplay.classList.add("horizontal");
  } else {
    gameDisplay.classList.add("vertical")
  }
}

function resizeGameDisplay() {
  const baseWidth = 640;
  const baseHeight = 360;
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  const scaleX = (screenWidth / baseWidth);
  const scaleY = (screenHeight / baseHeight);
  
  // const scale = Math.floor(Math.max(1, Math.min(scaleX, scaleY))*10)/10;
  const scale = Math.floor(Math.max(1, Math.min(scaleX, scaleY)));

  gameDisplay.width = baseWidth;
  gameDisplay.height = baseHeight;
  gameDisplay.style.width = (baseWidth * scale) + "px";
  gameDisplay.style.height = (baseHeight * scale) + "px";
}

window.addEventListener("resize", resizeGameDisplay);
window.addEventListener("load", () => {
  resizeGameDisplay();  
  detectEnvironment();
});



window.addEventListener("keydown", (e) => {
  if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) {
    const speed = 10 + State.player.attributes.exploration.walking.level;
    // console.log(speed)
    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        State.player.location.coordinates.y -= speed;
        break;
      case 's':
      case 'ArrowDown':
        State.player.location.coordinates.y += speed;
        break;
      case 'a':
      case 'ArrowLeft':
        State.player.location.coordinates.x -= speed;
        break;
      case 'd':
      case 'ArrowRight':
        State.player.location.coordinates.x += speed;
        break;
    }
    // console.log(State.player.location.coordinates)
    GameMap.update();
  }
  if (e.key === "h") {
    const nowEnergy = State.get("player.attributes.vitality.energy.current")  
    State.set("player.attributes.vitality.energy.current", nowEnergy ? nowEnergy + 25 : 25)
  }
  const hotkeyConfig = State.player.configs.hotkeys;
  const hk = object.getAttributeByValue(e.key, hotkeyConfig)
  if (!hk) return;
  if (hotkeyConfig.sets.hasOwnProperty(hk)) {
    SkillSets.updateSet(hk)
  }
  if (hotkeyConfig.slots.hasOwnProperty(hk)) {
    slot.use(State.player, State.player.hotkeys[Hotkeys.state.usedSet][hk])
  }
  if (hotkeyConfig.menu.hasOwnProperty(hk)) console.log("menu")
})

const playerData = {
    id: "p00tester1OtherSideGame",
    configs: {
      hotkeys: {
        sets: {
          "set-1": "q",
          "set-2": "e",
          "set-3": "r",
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
          "attributes": "t",
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
      name: "Dexter",
    },
    experience: {
      level: 1,
      currentXP: 0,      
    },
    location: {
      map: null,
      region: null,
      coordinates: { x: 700, y: 740, z: 0 },
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
          current: 60,
          regenRate: {
            energy: 3,
            stamina: 0.7,
            mana: 0.1
          }
        },
        stamina: {
          max: null,
          current: null,
          regenRate: {
            energy: 2,
            health: 0.7,
            mana: 0.2
          }
        },
        mana: {
          max: null,
          current: 60,
          regenRate: {
            energy: 1,
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
          equiped: "firfireprojatt001",
          type: "skill"
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
}

function mockLoginAndLoad() {
  State.set("player", playerData);
  State.set("ui.currentScreen", "gameplay");
}

mockLoginAndLoad();
// Carregando dados do jogador
attribute.update();
// calcular a recuperação offline
// Regen.offline()

const creatureData = {
  id: "c001_slime_green",
  type: "creature",
  personal: {
    name: "Slime Verde",
  },
  location: {
    map: "map001",
    region: "forest-edge",
    coordinates: { x: 740, y: 780, z: 0 }, // Posição inicial
  },
  vitality: {
    health: { max: 40, current: 40 },
    mana: { max: 0, current: 0 },
  },
  attributes: {
    combat: {
      attackPower: 5,
      defense: 2,
    }
  }
};


gameDisplay.appendChild(Initial.render());

class CreatureSprite {
  constructor(container, creaturePath) {
    this.container = container;
    this.creaturePath = creaturePath;
    
    this.el = document.createElement("div");
    this.el.className = "creature-sprite";
    this.el.dataset.id = creaturePath.split(".").pop();
    this.container.appendChild(this.el);

    this.listenToState();
  }

  listenToState() {
    const handleChange = () => {
      const creature = State.get(this.creaturePath);
      if (!creature) return;

      const player = State.get("player");
      const { x, y } = creature.location.coordinates;
      const { x: px, y: py } = player.location.coordinates;

      // O mapa se move ao contrário, então ajustamos a posição
      const offsetX = (x - px) + window.innerWidth / 2;
      const offsetY = (y - py) + window.innerHeight / 2;

      this.el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    State.subscribe(this.creaturePath, handleChange);
    State.subscribe("player.location.coordinates", handleChange);
    handleChange();
  }
}
const gameContainer = document.querySelector("#initial")
State.set("entities.creatures.c001_slime_green", creatureData);
const slime = new CreatureSprite(gameContainer, "entities.creatures.c001_slime_green");
const proximitySystem = new ProximitySystem(50);

Regen.start();