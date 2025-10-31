import { DB } from "../../database/database.js";
import { Equipment } from "../page/equipments/equipments.js";
import { Hotkeys } from "../page/initial/hotkeys/hotkeys.js";
import { Initial } from "../page/initial/initial.js";
import { MainMenu } from "../page/initial/menu/menu.js";
import { Profile } from "../page/initial/profile/profile.js";
import { SkillSets } from "../page/initial/skillSets/skillSets.js";
import { Form } from "../page/quiz/Form.js";
import { Add } from "../page/quiz/setup/Add.js";
import { Language } from "../tools/language.js";
import { attribute } from "./core/calculators/attribute.js";
import { GameConfig } from "./core/config/_config.js";
import { attributes } from "./core/config/attributes.js";
import { elements } from "./core/config/elements.js";
import { State } from "./state.js";

const body = document.querySelector("body");
const gameDisplay = document.getElementById("game-display");

// console.log("config:", GameConfig)
// console.log("get(hunting) =>",GameConfig.get({id:"useless"}))
// console.log("get(hunting, elements) =>",GameConfig.get({id:"hunting", db: "elements"}))
// const userTest = {
//   uid: "0000000000000000",
//   skills: [],
//   equipments: {
//     "neck": null,
//     "head": null,
//     "back": "asuhdauso123dsafs",
//     "left-arm": null,
//     "body": null,
//     "right-arm": null,
//     "left-hand": null,
//     "belt": null,
//     "right-hand": null,
//     "left-thigh": null,
//     "legs": null,
//     "right-thigh": null,
//     "shoes": null
//   },
//   backpack: {
//     quantity: 5,
//     data: []
//   },
//   attributes: {
//     physical: {
//       agility: 0,
//       constitution: 0,
//       dexterity: 0,
//       flexibility: 0,
//       resistance: 0,
//       strength: 0,
//       vigour: 0,
//     },
//     intellectual: {
//       abstraction: 0,
//       creativity: 0,
//       focus: 0,
//       knowledge: 0,
//       memory: 0,
//     },
//     exploration: {
//       moving: {
//         swimming: 0,
//         climbing: 0,
//         running: 0,
//         walking: 0,
//       },
//       survival: {
//         guidance: 0,
//         fishing: 0,
//         hunting: 0,
//         gathering: 0,
//       }
//     },
//     relationship: {
//       charisma: 0,
//       empathy: 0,
//       leadership: 0,
//       reputation: 0,
//       intimidation: 0,
//       distraction: 0,
//       teamwork: 0
//     },
//     spiritual: {
//       elementalAffinity: {
//         fire: { mastery: 0, resistance: 0 },
//         water: { mastery: 0, resistance: 0 },
//         wind: { mastery: 0, resistance: 0 },
//         earth: { mastery: 0, resistance: 0 },
//         electricity: { mastery: 0, resistance: 0 },
//         ice: { mastery: 0, resistance: 0 },
//         darkness: { mastery: 0, resistance: 0 },
//         holy: { mastery: 0, resistance: 0 },
//         steam: { mastery: 0, resistance: 0 },
//         mud: { mastery: 0, resistance: 0 },
//         poison: { mastery: 0, resistance: 0 },
//         lava: { mastery: 0, resistance: 0 },
//         plant: { mastery: 0, resistance: 0 },
//         psychic: { mastery: 0, resistance: 0 },
//         physical: { mastery: 0, resistance: 0 },
//         dust: { mastery: 0, resistance: 0 },
//         plasma: { mastery: 0, resistance: 0 },
//         light: { mastery: 0, resistance: 0 }
//       },
//       lucky: 0,
//       bravery: 0,
//     },
//     senses: {
//       vision: 0,
//       hearing: 0,         // Audição
//       smell: 0,           // Olfato
//       taste: 0,           // Paladar
//       touch: 0,           // Tato
//       proprioception: 0,  // Propriocepção
//       balance: 0,         // Equilíbrio (Vestibular)
//       thermoception: 0,   // Termocepção
//       nociception: 0,     // Percepção de dor
//       interoception: 0,   // Interocepção
//       electroreception: 0,// Eletrocepção
//       magnetoreception: 0,// Magnetocepção
//       echolocation: 0,    // Eco-localização
//       vibrationSensitivity: 0, // Sensibilidade a vibrações
//       lightPolarization: 0,     // Polarização da luz
//       chemicalSensitivity: 0,   // Sensibilidade química
//       ultravioletVision: 0,     // Visão UV
//       infraredVision: 0,        // Visão IR
//       hydrostaticPressure: 0,   // Pressão hidrostática
//       passiveSonar: 0           // Sonar passivo
//     },
//   },
//   friends: {
//     list: [],
//     block: [],
//     requested: [],
//     accept: [],
//   }
// }
// State.user = userTest;

// console.log(State)
// body.appendChild(Add.render());
// body.appendChild(Form.render());
// Form.update();

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
// console.log(detectEnvironment());

// Carregando dados do jogador
attribute.update()

gameDisplay.appendChild(Initial.render());



// console.log("antes", State.user.attributes.physical.strength);
// attribute.addXP(State.user, "strength", 120);
// console.log("depois", State.user.attributes.physical.strength);
// console.log(player.secondaryAttributes.meleeDamage);