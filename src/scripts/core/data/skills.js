export const skillsData = {
  db: [
    {
      id: "firfireprojatt001",
      name: {
        "pt-br": "Bola de Fogo",
        "en": "Fireball",
      },
      description: {
        "pt-br": "Lança uma esfera flamejante que explode ao atingir o alvo.",
        "en": "Launches a blazing sphere that explodes on impact.",
      },
      sprite: "src/assets/sprites/skills/fireball.jpeg",
      detail: {
        type: "attack",
        category: "projectile",
        element: "fire",
        rank: 3
      },
      cost: {
        type: "mana",
        base: 30,
      },
      requirements: {
        level: 5,
        elementLevel: 5,
        attributes: { 
          focus: 10, 
          knowledge: 8 
        },
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
        onSuccess: [{ type: "burn", power: 0.2, duration: 5, rate: 0.3 }],
        onCritical: [{ type: "ignite", power: 0.4, duration: 3, rate: 0.5 }],
        onFailure: [{type: "burnArea", power: 0.1, duration: 5, rate: 0.7 }]
      },
    }
  ],
  schema: {
    id: "string",
    name: {"language": "traduction"},
    description: {"language": "traduction"},
    sprite: "string",
    detail: {
      type: "",
      category: "",
      element: "",
      rank: 0
    },
    cost: {
      type: "source",
      base: 0
    },
    requiriments: {
      level: 0,
      elementLevel: 0,
      attributes: {"attribute": 0 || null},
    },
    properties: {
      power: 0 || null,
      range: 0 || null,
      area: 0 || null,
      speed: 0 || null,
      duration: 0 || null,
      cooldown: 0 || null,
      castTime: 0 || null
    },
    scaling: {
      "attribute": 0 || null
    },
    effects: {
      onSuccess: [],
      onCritical: [],
      onFailure: [],
    }
  },
  get: (skillId) => {
    return skillsData.db.find(item => item.id === skillId);
  },
  idGenerator: (element, name, category, type) => {
    let response = element.slice(0,3) + name.slice(0,4) + category.slice(0,4) + type.slice(0,3);
    const found = skillsData.db.filter(item => {
      return item.id.includes(response)
    });
    const count = found.length;
    const index = String(count+1).padStart(3, "0")
    return response += index;
  }
}