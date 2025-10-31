const skillSchema = { 
  id: "fireball",
  name: {
    "pt-br": "Bola de Fogo",
    "en": "Fireball",
  },
  description: {
    "pt-br": "Lança uma esfera flamejante que explode ao atingir o alvo.",
    "en": "Launches a blazing sphere that explodes on impact.",
  },
  type: "attack",
  element: "fire",
  cost: {
    type: "mana",
    base: 25,
  },
  requirements: {
    level: 5,
    elementLevel: 5,
    attributes: { focus: 10, knowledge: 8 },
  },
  properties: {
    power: 1.2,
    range: 12,
    area: 3,
    speed: 10,
    duration: 0,
    cooldown: 5000,
    castTime: 1500,
  },
  scaling: {
    magicPower: 0.8,
    focus: 0.3,
    dexterity: 0.1,
  },
  damage: {
    type: "magical",
    base: 50,
  },
  effects: {
    onHit: [{ type: "burn", power: 0.2, duration: 5 }],
    onCrit: [{ type: "ignite", power: 0.4, duration: 3 }],
  },
}