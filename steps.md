🧠 Relações entre atributos → Criar um sistema de influências diretas entre eles.

⚔️ Sistema de cálculo de status derivados (HP, Stamina, Mana, etc.) baseado nesses atributos.

🔄 Sistema de progressão (como ganhar XP, subir de nível, aplicar multiplicadores).

📁 Organização modular do código (como dividir em arquivos JS para um protótipo jogável).

file structure
/game
 │
 ├── /core
 │    ├── /config
 │    │     ├── attributes.js [x]
 │    │     ├── creatures.js [x]
 │    │     ├── elements.js [x]
 │    │     ├── items.js [x]
 │    │     ├── missions.js [x]
 │    │     ├── producers.js [x]
 │    │     ├── skills.js [x]
 │    │     └── world.js [x]
 │    ├── formulas/
 │    │     ├── attributes.js [ ]
 │    │     ├── experience.js [ ]
 │    │     ├── damage.js [ ]
 │    │     └── resistances.js [ ]
 │    ├── generators/
 │    │     ├── missionGenerator.js [ ]
 │    │     ├── lootGenerator.js [ ]
 │    │     └── enemyGenerator.js [ ]
 │    └── utils/
 │          ├── calcHelpers.js [ ]
 │          ├── randomizer.js [ ]
 │          └── translator.js [ ]
 │
 ├── /data
 │    ├── creatures/ [ ]
 │    ├── npcs/ [ ]
 │    ├── locations/ [ ]
 │    └── quests/ [ ]
 │
 └── /firebase
      ├── auth.js [ ]
      ├── firestore.js [ ]
      ├── storage.js [ ]
      └── errors.js [ ]

db structure
users/
  └── uid/
      ├── profile [ ]
      ├── stats [ ]
      ├── attributes [ ]
      ├── backpack [ ]
      └── progress [ ]

missions/
  └── missionId (dados do tipo de missão)     [ ] 

items/
  └── itemId (metadados básicos, se quiser cache dinâmico) [ ]

notifications/
  └── notificationId [ ]

market/
  └── notificationId [ ]