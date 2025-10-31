// ==========================
// ATTRIBUTES CONFIGURATION
// ==========================
// This file defines all base character attributes grouped by category.
// Each attribute includes multilingual names, descriptions, and experience data.

export const attributes = {
  physical: {
    agility: {
      correlation: {        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Agilidade",
        "en": "Agility",
        "fr": "Agilité",
        "de": "Beweglichkeit"
      },
      description: {
        "pt-br": "Capacidade de mudar a própria velocidade.",
        "en": "Ability to change one's own speed.",
        "fr": "Capacité à changer sa propre vitesse.",
        "de": "Fähigkeit, die eigene Geschwindigkeit zu ändern."
      },
    },
    constitution: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Constituição",
        "en": "Constitution",
        "fr": "Constitution",
        "de": "Konstitution"
      },
      description: {
        "pt-br": "Capacidade geral do corpo de resistir a danos e doenças.",
        "en": "Overall ability of the body to withstand damage and illness.",
        "fr": "Capacité générale du corps à résister aux dommages et aux maladies.",
        "de": "Allgemeine Fähigkeit des Körpers, Schäden und Krankheiten zu widerstehen."
      },
    },
    dexterity: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Destreza",
        "en": "Dexterity",
        "fr": "Dextérité",
        "de": "Geschicklichkeit"
      },
      description: {
        "pt-br": "Habilidade de realizar movimentos precisos com coordenação.",
        "en": "Ability to perform precise movements with coordination.",
        "fr": "Capacité à effectuer des mouvements précis avec coordination.",
        "de": "Fähigkeit, präzise Bewegungen mit Koordination auszuführen."
      },
    },
    flexibility: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Flexibilidade",
        "en": "Flexibility",
        "fr": "Flexibilité",
        "de": "Flexibilität"
      },
      description: {
        "pt-br": "Capacidade de dobrar o corpo sem se machucar.",
        "en": "Ability to bend the body without injury.",
        "fr": "Capacité à plier le corps sans se blesser.",
        "de": "Fähigkeit, den Körper zu beugen, ohne sich zu verletzen."
      },
    },
    resistance: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Resistência",
        "en": "Endurance",
        "fr": "Endurance",
        "de": "Ausdauer"
      },
      description: {
        "pt-br": "Capacidade de manter esforço físico prolongado.",
        "en": "Ability to sustain prolonged physical effort.",
        "fr": "Capacité à maintenir un effort physique prolongé.",
        "de": "Fähigkeit, anhaltende körperliche Anstrengungen durchzuhalten."
      },
    },
    strength:  {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Força",
        "en": "Strength",
        "fr": "Force",
        "de": "Stärke"
      },
      description: {
        "pt-br": "Capacidade de exercer poder físico contra resistência.",
        "en": "Ability to exert physical power against resistance.",
        "fr": "Capacité à exercer une force physique contre une résistance.",
        "de": "Fähigkeit, physische Kraft gegen Widerstand auszuüben."
      },
    },
    vigour: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Vigor",
        "en": "Vigour",
        "fr": "Vigueur",
        "de": "Vitalität"
      },
      description: {
        "pt-br": "Energia geral para realizar atividades físicas.",
        "en": "General energy to perform physical activities.",
        "fr": "Énergie générale pour réaliser des activités physiques.",
        "de": "Allgemeine Energie zur Durchführung körperlicher Aktivitäten."
      },
    },
  },
  intellectual: {
    abstraction: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Abstração",
        "en": "Abstraction",
        "fr": "Abstraction",
        "de": "Abstraktion"
      },
      description: {
        "pt-br": "Capacidade de compreender conceitos complexos e ideias não concretas.",
        "en": "Ability to understand complex concepts and non-concrete ideas.",
        "fr": "Capacité à comprendre des concepts complexes et des idées abstraites.",
        "de": "Fähigkeit, komplexe Konzepte und nicht greifbare Ideen zu verstehen."
      },
    },
    creativity: {
      correlation: {
        
        multiplier: 2,
        sense: 1,
      },
      title: {
        "pt-br": "Criatividade",
        "en": "Creativity",
        "fr": "Créativité",
        "de": "Kreativität"
      },
      description: {
        "pt-br": "Capacidade de gerar ideias novas e originais.",
        "en": "Ability to generate new and original ideas.",
        "fr": "Capacité à générer des idées nouvelles et originales.",
        "de": "Fähigkeit, neue und originelle Ideen zu entwickeln."
      },
    },
    focus: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Foco",
        "en": "Focus",
        "fr": "Concentration",
        "de": "Konzentration"
      },
      description: {
        "pt-br": "Capacidade de manter a atenção em uma tarefa específica.",
        "en": "Ability to maintain attention on a specific task.",
        "fr": "Capacité à maintenir l'attention sur une tâche spécifique.",
        "de": "Fähigkeit, die Aufmerksamkeit auf eine bestimmte Aufgabe zu richten."
      },
    },
    knowledge: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Conhecimento",
        "en": "Knowledge",
        "fr": "Connaissance",
        "de": "Wissen"
      },
      description: {
        "pt-br": "Acúmulo de informações e aprendizados adquiridos.",
        "en": "Accumulation of information and acquired learnings.",
        "fr": "Accumulation d'informations et de savoirs acquis.",
        "de": "Ansammlung von Informationen und erworbenem Wissen."
      },
    },
    memory: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Memória",
        "en": "Memory",
        "fr": "Mémoire",
        "de": "Gedächtnis"
      },
      description: {
        "pt-br": "Capacidade de armazenar e recuperar informações.",
        "en": "Ability to store and recall information.",
        "fr": "Capacité à stocker et à rappeler des informations.",
        "de": "Fähigkeit, Informationen zu speichern und abzurufen."
      },
    },
  },
  exploration: {
    swimming: {
      correlation: {
        
        multiplier: 2,
        sense: 1,
      },
      title: {
        "pt-br": "Natação",
        "en": "Swimming",
        "fr": "Natation",
        "de": "Schwimmen"
      },
      description: {
        "pt-br": "Capacidade de se locomover através da água.",
        "en": "Ability to move through water.",
        "fr": "Capacité à se déplacer dans l'eau.",
        "de": "Fähigkeit, sich im Wasser fortzubewegen."
      },
    },
    climbing: {
      correlation: {
        
        multiplier: 3,
        sense: 1,
      },
      title: {
        "pt-br": "Escalada",
        "en": "Climbing",
        "fr": "Escalade",
        "de": "Klettern"
      },
      description: {
        "pt-br": "Capacidade de subir superfícies verticais ou íngremes.",
        "en": "Ability to climb vertical or steep surfaces.",
        "fr": "Capacité à grimper des surfaces verticales ou raides.",
        "de": "Fähigkeit, vertikale oder steile Flächen zu erklimmen."
      }
    },
    running: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Corrida",
        "en": "Running",
        "fr": "Course",
        "de": "Laufen"
      },
      description: {
        "pt-br": "Capacidade de correr em diferentes terrenos.",
        "en": "Ability to run across different terrains.",
        "fr": "Capacité à courir sur différents terrains.",
        "de": "Fähigkeit, auf verschiedenen Untergründen zu laufen."
      }
    },
    walking: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Caminhada",
        "en": "Walking",
        "fr": "Marche",
        "de": "Gehen"
      },
      description: {
        "pt-br": "Capacidade de se deslocar de forma estável e contínua.",
        "en": "Ability to move steadily and continuously.",
        "fr": "Capacité à se déplacer de manière stable et continue.",
        "de": "Fähigkeit, sich stetig und kontinuierlich zu bewegen."
      }
    },
    guidance: {
      correlation: {
        
        multiplier: 2,
        sense: 1,
      },
      title: {
        "pt-br": "Orientação",
        "en": "Guidance",
        "fr": "Orientation",
        "de": "Orientierung"
      },
      description: {
        "pt-br": "Capacidade de se localizar e navegar em ambientes desconhecidos.",
        "en": "Ability to locate oneself and navigate in unknown environments.",
        "fr": "Capacité à se situer et à naviguer dans des environnements inconnus.",
        "de": "Fähigkeit, sich zu orientieren und in unbekannten Umgebungen zu navigieren."
      }
    },
    fishing: {
      correlation: {
        
        multiplier: 2,
        sense: 1,
      },
      title: {
        "pt-br": "Pesca",
        "en": "Fishing",
        "fr": "Pêche",
        "de": "Fischen"
      },
      description: {
        "pt-br": "Capacidade de capturar peixes e outros animais aquáticos.",
        "en": "Ability to catch fish and other aquatic animals.",
        "fr": "Capacité à attraper des poissons et d'autres animaux aquatiques.",
        "de": "Fähigkeit, Fische und andere Wassertiere zu fangen."
      }
    },
    hunting: {
      correlation: {
        
        multiplier: 3,
        sense: 1,
      },
      title: {
        "pt-br": "Caça",
        "en": "Hunting",
        "fr": "Chasse",
        "de": "Jagd"
      },
      description: {
        "pt-br": "Capacidade de rastrear e capturar animais selvagens.",
        "en": "Ability to track and capture wild animals.",
        "fr": "Capacité à traquer et capturer des animaux sauvages.",
        "de": "Fähigkeit, Wildtiere zu verfolgen und zu fangen."
      }
    },
    gathering: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Coleta",
        "en": "Gathering",
        "fr": "Cueillette",
        "de": "Sammeln"
      },
      description: {
        "pt-br": "Capacidade de coletar recursos naturais como plantas e minerais.",
        "en": "Ability to collect natural resources such as plants and minerals.",
        "fr": "Capacité à collecter des ressources naturelles comme des plantes et des minéraux.",
        "de": "Fähigkeit, natürliche Ressourcen wie Pflanzen und Mineralien zu sammeln."
      }
    }
  },
  relationship: {
    charisma: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Carisma",
        "en": "Charisma",
        "fr": "Charisme",
        "de": "Charisma"
      },
      description: {
        "pt-br": "Capacidade de atrair, inspirar e influenciar outras pessoas.",
        "en": "Ability to attract, inspire, and influence others.",
        "fr": "Capacité à attirer, inspirer et influencer les autres.",
        "de": "Fähigkeit, andere anzuziehen, zu inspirieren und zu beeinflussen."
      }
    },
    empathy: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Empatia",
        "en": "Empathy",
        "fr": "Empathie",
        "de": "Empathie"
      },
      description: {
        "pt-br": "Capacidade de compreender e compartilhar os sentimentos dos outros.",
        "en": "Ability to understand and share the feelings of others.",
        "fr": "Capacité de comprendre et de partager les sentiments des autres.",
        "de": "Fähigkeit, die Gefühle anderer zu verstehen und zu teilen."
      }
    },
    leadership: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Liderança",
        "en": "Leadership",
        "fr": "Leadership",
        "de": "Führung"
      },
      description: {
        "pt-br": "Capacidade de guiar, motivar e organizar grupos de pessoas.",
        "en": "Ability to guide, motivate, and organize groups of people.",
        "fr": "Capacité à guider, motiver et organiser des groupes de personnes.",
        "de": "Fähigkeit, Gruppen von Menschen zu führen, zu motivieren und zu organisieren."
      }
    },
    persuasion: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Persuasão",
        "en": "Persuasion",
        "fr": "Persuasion",
        "de": "Überzeugungskraft"
      },
      description: {
        "pt-br": "Capacidade de convencer os outros a aceitar ideias ou tomar ações.",
        "en": "Ability to convince others to accept ideas or take actions.",
        "fr": "Capacité de convaincre les autres d'accepter des idées ou d'agir.",
        "de": "Fähigkeit, andere zu überzeugen, Ideen anzunehmen oder Maßnahmen zu ergreifen."
      }
    },
    deception: {
      correlation: {
        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Enganação",
        "en": "Deception",
        "fr": "Tromperie",
        "de": "Täuschung"
      },
      description: {
        "pt-br": "Capacidade de ocultar a verdade, blefar ou manipular informações.",
        "en": "Ability to conceal the truth, bluff, or manipulate information.",
        "fr": "Capacité à dissimuler la vérité, à bluffer ou à manipuler des informations.",
        "de": "Fähigkeit, die Wahrheit zu verbergen, zu bluffen oder Informationen zu manipulieren."
      }
    }
  },
  elemental: {
    fire: {
      correlation: {        
        multiplier: 3,
        sense: 1,
      },
      title: { "pt-br": "Fogo", "en": "Fire", "fr": "Feu", "de": "Feuer" },
      description: { "pt-br": "Maestria e resistência a ataques de fogo.", "en": "Mastery and resistance to fire-based attacks.", "fr": "Maîtrise et résistance aux attaques de feu.", "de": "Beherrschung und Widerstand gegen Feuerangriffe." }
    },
    water: {
      correlation: {
        
        multiplier: 3,
        sense: 1,
      },
      title: { "pt-br": "Água", "en": "Water", "fr": "Eau", "de": "Wasser" },
      description: { "pt-br": "Maestria e resistência a ataques de água.", "en": "Mastery and resistance to water-based attacks.", "fr": "Maîtrise et résistance aux attaques d'eau.", "de": "Beherrschung und Widerstand gegen Wasserangriffe." }
    },
    wind: {
      correlation: {
        
        multiplier: 4,
        sense: 1,
      },
      title: { "pt-br": "Vento", "en": "Wind", "fr": "Vent", "de": "Wind" },
      description: { "pt-br": "Maestria e resistência a ataques de vento.", "en": "Mastery and resistance to wind-based attacks.", "fr": "Maîtrise et résistance aux attaques de vent.", "de": "Beherrschung und Widerstand gegen Windangriffe." },
    },
    earth: {
      correlation: {
        multiplier: 4,
        sense: 1,
      },
      title: { "pt-br": "Terra", "en": "Earth", "fr": "Terre", "de": "Erde" },
      description: { "pt-br": "Maestria e resistência a ataques de terra.", "en": "Mastery and resistance to earth-based attacks.", "fr": "Maîtrise et résistance aux attaques de terre.", "de": "Beherrschung und Widerstand gegen Erdangriffe." },
    },
    electricity: {
      correlation: {
        
        multiplier: 4,
        sense: 1,
      },
      title: { "pt-br": "Eletricidade", "en": "Electricity", "fr": "Électricité", "de": "Elektrizität" },
      description: { "pt-br": "Maestria e resistência a ataques elétricos.", "en": "Mastery and resistance to electric attacks.", "fr": "Maîtrise et résistance aux attaques électriques.", "de": "Beherrschung und Widerstand gegen elektrische Angriffe." },
    },
    ice: {
      correlation: {
        
        multiplier: 5,
        sense: 1,
      },
      title: { "pt-br": "Gelo", "en": "Ice", "fr": "Glace", "de": "Eis" },
      description: { "pt-br": "Maestria e resistência a ataques de gelo.", "en": "Mastery and resistance to ice attacks.", "fr": "Maîtrise et résistance aux attaques de glace.", "de": "Beherrschung und Widerstand gegen Eisangriffe." },
    },
    steam: {
      correlation: {
        
        multiplier: 7,
        sense: 1,
      },
      title: { "pt-br": "Vapor", "en": "Steam", "fr": "Vapeur", "de": "Dampf" },
      description: { "pt-br": "Maestria e resistência a ataques de vapor.", "en": "Mastery and resistance to steam attacks.", "fr": "Maîtrise et résistance aux attaques de vapeur.", "de": "Beherrschung und Widerstand gegen Dampfangriffe." },
    },
    mud: {
      correlation: {
        
        multiplier: 7,
        sense: 1,
      },
      title: { "pt-br": "Lama", "en": "Mud", "fr": "Boue", "de": "Schlamm" },
      description: { "pt-br": "Maestria e resistência a ataques de lama.", "en": "Mastery and resistance to mud attacks.", "fr": "Maîtrise et résistance aux attaques de boue.", "de": "Beherrschung und Widerstand gegen Schlammangriffe." },
    },
    poison: {
      correlation: {
        
        multiplier: 9,
        sense: 1,
      },
      title: { "pt-br": "Veneno", "en": "Poison", "fr": "Poison", "de": "Gift" },
      description: { "pt-br": "Maestria e resistência a ataques venenosos.", "en": "Mastery and resistance to poison attacks.", "fr": "Maîtrise et résistance aux attaques empoisonnées.", "de": "Beherrschung und Widerstand gegen Giftangriffe." },
    },
    lava: {
      correlation: {
        
        multiplier: 7,
        sense: 1,
      },
      title: { "pt-br": "Lava", "en": "Lava", "fr": "Lave", "de": "Lava" },
      description: { "pt-br": "Maestria e resistência a ataques de lava.", "en": "Mastery and resistance to lava attacks.", "fr": "Maîtrise et résistance aux attaques de lave.", "de": "Beherrschung und Widerstand gegen Lavaangriffe." },
    },
    plant: {
      correlation: {        
        multiplier: 9,
        sense: 1,
      },
      title: { "pt-br": "Planta", "en": "Plant", "fr": "Plante", "de": "Pflanze" },
      description: { "pt-br": "Maestria e resistência a ataques de plantas.", "en": "Mastery and resistance to plant attacks.", "fr": "Maîtrise et résistance aux attaques de plantes.", "de": "Beherrschung und Widerstand gegen Pflanzenangriffe." },
    },
    psychic: {
      correlation: {        
        multiplier: 6,
        sense: 1,
      },
      title: { "pt-br": "Psíquico", "en": "Psychic", "fr": "Psychique", "de": "Psychisch" },
      description: { "pt-br": "Maestria e resistência a ataques psíquicos.", "en": "Mastery and resistance to psychic attacks.", "fr": "Maîtrise et résistance aux attaques psychiques.", "de": "Beherrschung und Widerstand gegen psychische Angriffe." },
    },
    physic: {
      correlation: {        
        multiplier: 1,
        sense: 1,
      },
      title: { "pt-br": "Físico", "en": "Physical", "fr": "Physique", "de": "Physisch" },
      description: { "pt-br": "Maestria e resistência a ataques físicos.", "en": "Mastery and resistance to physical attacks.", "fr": "Maîtrise et résistance aux attaques physiques.", "de": "Beherrschung und Widerstand gegen physische Angriffe." },
    },
    dust: {
      correlation: {        
        multiplier: 7,
        sense: 1,
      },
      title: { "pt-br": "Poeira", "en": "Dust", "fr": "Poussière", "de": "Staub" },
      description: { "pt-br": "Maestria e resistência a ataques de poeira.", "en": "Mastery and resistance to dust attacks.", "fr": "Maîtrise et résistance aux attaques de poussière.", "de": "Beherrschung und Widerstand gegen Staubangriffe." },
    },
    plasma: {
      correlation: {        
        multiplier: 9,
        sense: 1,
      },
      title: { "pt-br": "Plasma", "en": "Plasma", "fr": "Plasma", "de": "Plasma" },
      description: { "pt-br": "Maestria e resistência a ataques de plasma.", "en": "Mastery and resistance to plasma attacks.", "fr": "Maîtrise et résistance aux attaques de plasma.", "de": "Beherrschung und Widerstand gegen Plasmaangriffe." },
    },
    light: {
      correlation: {        
        multiplier: 3,
        sense: 1,
      },
      title: { "pt-br": "Luz", "en": "Light", "fr": "Lumière", "de": "Licht" },
      description: { "pt-br": "Maestria e resistência a ataques de luz.", "en": "Mastery and resistance to light attacks.", "fr": "Maîtrise et résistance aux attaques de lumière.", "de": "Beherrschung und Widerstand gegen Lichtangriffe." },

    },
    transmutation: {
      correlation: {
        multiplier: 8,
        sense: 2,        
      },
      title: { "pt-br": "transmutação", "en": "transmutation" },
      description: {
        "pt-br": "Capacidade de fundir, alterar ou remodelar a matéria e o próprio corpo.",
        "en": "Ability to fuse, alter, or reshape matter and the user's own body."
      }
    },
    illusion: {
      correlation: {        
        multiplier: 5,
        sense: 1,
      },
      title: { "pt-br": "ilusão", "en": "illusion" },
      description: {
        "pt-br": "Manipulação da percepção por meio do controle da luz, som ou consciência.",
        "en": "Manipulation of perception through control of light, sound, or consciousness."
      }
    },
    mind: {
      correlation: {        
        multiplier: 4,
        sense: 2,
      },
      title: { "pt-br": "mente", "en": "mind" },
      description: {
        "pt-br": "Amplifica a consciência, o foco e a resistência a interferências mentais como medo ou confusão.",
        "en": "Amplifies awareness, focus, and resistance to mental interference such as fear or confusion."
      }
    },
  },
  spiritual: {
    lucky: {
      correlation: {        
        multiplier: 0,
        sense: 1,
      },
      title: {
        "pt-br": "Sorte",
        "en": "Luck",
        "fr": "Chance",
        "de": "Glück"
      },
      description: {
        "pt-br": "A influência de fatores aleatórios favoráveis em sua vida.",
        "en": "The influence of favorable random factors in your life.",
        "fr": "L'influence de facteurs aléatoires favorables dans votre vie.",
        "de": "Der Einfluss günstiger Zufälle in deinem Leben."
      },

    },
    bravery: {
      correlation: {        
        multiplier: 1,
        sense: 1,
      },
      title: {
        "pt-br": "Coragem",
        "en": "Bravery",
        "fr": "Courage",
        "de": "Tapferkeit"
      },
      description: {
        "pt-br": "Força para enfrentar o medo e situações adversas.",
        "en": "Strength to face fear and adverse situations.",
        "fr": "Force d'affronter la peur et les situations adverses.",
        "de": "Die Stärke, Angst und widrige Situationen zu bewältigen."
      },

    },
    darkness: {
      correlation: {
        multiplier: 6,
        sense: 1,
      },
      title: { "pt-br": "Trevas", "en": "Darkness", "fr": "Ténèbres", "de": "Dunkelheit" },
      description: { "pt-br": "Maestria e resistência a ataques de trevas.", "en": "Mastery and resistance to darkness attacks.", "fr": "Maîtrise et résistance aux attaques des ténèbres.", "de": "Beherrschung und Widerstand gegen Dunkelangriffe." },

    },
    holy: {
      correlation: {
        multiplier: 6,
        sense: 1,
      },
      title: { "pt-br": "Sagrado", "en": "Holy", "fr": "Sacré", "de": "Heilig" },
      description: { "pt-br": "Maestria e resistência a ataques sagrados.", "en": "Mastery and resistance to holy attacks.", "fr": "Maîtrise et résistance aux attaques sacrées.", "de": "Beherrschung und Widerstand gegen heilige Angriffe." },
    },
    portal: {
      correlation: {
        multiplier: 9,
        sense: 2,
      },
      title: { "pt-br": "portal", "en": "portal" },
      description: {
        "pt-br": "Capacidade de abrir portais espaciais ou dimensionais para mover objetos ou seres entre locais.",
        "en": "Ability to open spatial or dimensional gates to move objects or beings across locations."
      }
    },
  },
  senses: {
    vision: {
      correlation: {        
        multiplier: 1,
        sense: 1.5,
      },
      title: { "pt-br": "Visão", "en": "Vision", "fr": "Vision", "de": "Sehen" },
      description: {
        "pt-br": "Capacidade de perceber o ambiente por meio da luz.",
        "en": "Ability to perceive the environment through light.",
        "fr": "Capacité à percevoir l'environnement à travers la lumière.",
        "de": "Fähigkeit, die Umgebung durch Licht wahrzunehmen."
      },

    },
    hearing: {
      correlation: {        
        multiplier: 1,
        sense: 1.5,
      },
      title: { "pt-br": "Audição", "en": "Hearing", "fr": "Ouïe", "de": "Hören" },
      description: {
        "pt-br": "Capacidade de detectar e interpretar sons.",
        "en": "Ability to detect and interpret sounds.",
        "fr": "Capacité à détecter et à interpréter les sons.",
        "de": "Fähigkeit, Geräusche zu erkennen und zu interpretieren."
      },

    },
    smell: {
      correlation: {        
        multiplier: 1,
        sense: 1.5,
      },
      title: { "pt-br": "Olfato", "en": "Smell", "fr": "Odorat", "de": "Geruch" },
      description: {
        "pt-br": "Capacidade de identificar odores e substâncias químicas no ar.",
        "en": "Ability to identify odors and airborne chemicals.",
        "fr": "Capacité à identifier les odeurs et les substances chimiques dans l'air.",
        "de": "Fähigkeit, Gerüche und chemische Substanzen in der Luft zu erkennen."
      },

    },
    taste: {
      correlation: {       
        multiplier: 1,
        sense: 2.5,
      },
      title: { "pt-br": "Paladar", "en": "Taste", "fr": "Goût", "de": "Geschmack" },
      description: {
        "pt-br": "Capacidade de perceber sabores e composições químicas.",
        "en": "Ability to perceive flavors and chemical compositions.",
        "fr": "Capacité à percevoir les saveurs et les compositions chimiques.",
        "de": "Fähigkeit, Geschmäcker und chemische Zusammensetzungen wahrzunehmen."
      },

    },
    touch: {
      correlation: {        
        multiplier: 1,
        sense: 2.5,
      },
      title: { "pt-br": "Tato", "en": "Touch", "fr": "Toucher", "de": "Tastsinn" },
      description: {
        "pt-br": "Capacidade de perceber pressão, textura e contato físico.",
        "en": "Ability to perceive pressure, texture, and physical contact.",
        "fr": "Capacité à percevoir la pression, la texture et le contact physique.",
        "de": "Fähigkeit, Druck, Textur und physischen Kontakt wahrzunehmen."
      },

    },
    proprioception: {
      correlation: {        
        multiplier: 2,
        sense: 2.5,
      },
      title: { "pt-br": "Propriocepção", "en": "Proprioception", "fr": "Proprioception", "de": "Eigenwahrnehmung" },
      description: {
        "pt-br": "Percepção da posição e movimento do próprio corpo.",
        "en": "Perception of body position and movement.",
        "fr": "Perception de la position et du mouvement du corps.",
        "de": "Wahrnehmung der Körperposition und Bewegung."
      },

    },
    balance: {
      correlation: {        
        multiplier: 2,
        sense: 2.5,
      },
      title: { "pt-br": "Equilíbrio", "en": "Balance", "fr": "Équilibre", "de": "Gleichgewicht" },
      description: {
        "pt-br": "Capacidade de manter a estabilidade corporal.",
        "en": "Ability to maintain body stability.",
        "fr": "Capacité à maintenir la stabilité corporelle.",
        "de": "Fähigkeit, die Körperstabilität zu halten."
      },

    },
    thermoception: {
      correlation: {        
        multiplier: 2,
        sense: 2.5,
      },
      title: { "pt-br": "Termocepção", "en": "Thermoception", "fr": "Thermoception", "de": "Temperaturwahrnehmung" },
      description: {
        "pt-br": "Capacidade de perceber variações de temperatura.",
        "en": "Ability to perceive temperature changes.",
        "fr": "Capacité à percevoir les variations de température.",
        "de": "Fähigkeit, Temperaturänderungen wahrzunehmen."
      },

    },
    nociception: {
      correlation: {        
        multiplier: 2,
        sense: 2.5,
      },
      title: { "pt-br": "Nocicepção", "en": "Nociception", "fr": "Nociception", "de": "Schmerzempfindung" },
      description: {
        "pt-br": "Percepção de estímulos dolorosos e danos teciduais.",
        "en": "Perception of painful stimuli and tissue damage.",
        "fr": "Perception des stimuli douloureux et des lésions tissulaires.",
        "de": "Wahrnehmung von Schmerzreizen und Gewebeschäden."
      },

    },
    interoception: {
      correlation: {        
        multiplier: 2,
        sense: 2.5,
      },
      title: { "pt-br": "Interocepção", "en": "Interoception", "fr": "Intéroception", "de": "Körperwahrnehmung" },
      description: {
        "pt-br": "Consciência das sensações internas do corpo.",
        "en": "Awareness of internal bodily sensations.",
        "fr": "Conscience des sensations internes du corps.",
        "de": "Bewusstsein für innere Körperempfindungen."
      },

    },
    electroreception: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Eletrocepção", "en": "Electroreception", "fr": "Électroception", "de": "Elektrowahrnehmung" },
      description: {
        "pt-br": "Capacidade de detectar campos elétricos naturais.",
        "en": "Ability to detect natural electric fields.",
        "fr": "Capacité à détecter les champs électriques naturels.",
        "de": "Fähigkeit, natürliche elektrische Felder zu erkennen."
      },

    },
    magnetoreception: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Magnetocepção", "en": "Magnetoreception", "fr": "Magnétoréception", "de": "Magnetowahrnehmung" },
      description: {
        "pt-br": "Capacidade de perceber campos magnéticos e orientação espacial.",
        "en": "Ability to perceive magnetic fields and spatial orientation.",
        "fr": "Capacité à percevoir les champs magnétiques et l'orientation spatiale.",
        "de": "Fähigkeit, Magnetfelder und räumliche Orientierung wahrzunehmen."
      },

    },
    echolocation: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Eco-localização", "en": "Echolocation", "fr": "Écholocalisation", "de": "Echoortung" },
      description: {
        "pt-br": "Uso de ecos sonoros para identificar o ambiente.",
        "en": "Use of sound echoes to identify the environment.",
        "fr": "Utilisation des échos sonores pour identifier l'environnement.",
        "de": "Verwendung von Schallechos zur Umgebungserkennung."
      },

    },
    vibrationSensitivity: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Sensibilidade a Vibrações", "en": "Vibration Sensitivity", "fr": "Sensibilité aux vibrations", "de": "Vibrationsempfindlichkeit" },
      description: {
        "pt-br": "Capacidade de detectar vibrações no solo ou no ar.",
        "en": "Ability to detect vibrations in the ground or air.",
        "fr": "Capacité à détecter les vibrations dans le sol ou dans l'air.",
        "de": "Fähigkeit, Vibrationen im Boden oder in der Luft zu erkennen."
      },

    },
    lightPolarization: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Polarização da Luz", "en": "Light Polarization", "fr": "Polarisation de la lumière", "de": "Lichtpolarisation" },
      description: {
        "pt-br": "Percepção da orientação das ondas de luz.",
        "en": "Perception of the orientation of light waves.",
        "fr": "Perception de l'orientation des ondes lumineuses.",
        "de": "Wahrnehmung der Ausrichtung von Lichtwellen."
      },

    },
    chemicalSensitivity: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Sensibilidade Química", "en": "Chemical Sensitivity", "fr": "Sensibilité chimique", "de": "Chemische Empfindlichkeit" },
      description: {
        "pt-br": "Capacidade de detectar substâncias químicas no ambiente.",
        "en": "Ability to detect chemical substances in the environment.",
        "fr": "Capacité à détecter les substances chimiques dans l'environnement.",
        "de": "Fähigkeit, chemische Substanzen in der Umgebung zu erkennen."
      },

    },
    ultravioletVision: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Visão Ultravioleta", "en": "Ultraviolet Vision", "fr": "Vision ultraviolette", "de": "Ultraviolettsicht" },
      description: {
        "pt-br": "Capacidade de perceber faixas de luz ultravioleta.",
        "en": "Ability to perceive ultraviolet light spectra.",
        "fr": "Capacité à percevoir les spectres de lumière ultraviolette.",
        "de": "Fähigkeit, ultraviolette Lichtspektren wahrzunehmen."
      },

    },
    infraredVision: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Visão Infravermelha", "en": "Infrared Vision", "fr": "Vision infrarouge", "de": "Infrarotsicht" },
      description: {
        "pt-br": "Capacidade de detectar calor e radiação infravermelha.",
        "en": "Ability to detect heat and infrared radiation.",
        "fr": "Capacité à détecter la chaleur et le rayonnement infrarouge.",
        "de": "Fähigkeit, Wärme und Infrarotstrahlung zu erkennen."
      },

    },
    hydrostaticPressure: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Pressão Hidrostática", "en": "Hydrostatic Pressure", "fr": "Pression hydrostatique", "de": "Hydrostatischer Druck" },
      description: {
        "pt-br": "Capacidade de sentir variações de pressão na água.",
        "en": "Ability to sense pressure changes in water.",
        "fr": "Capacité à percevoir les variations de pression dans l'eau.",
        "de": "Fähigkeit, Druckänderungen im Wasser zu erkennen."
      },

    },
    passiveSonar: {
      correlation: {        
        multiplier: 3,
        sense: 2.75,
      },
      title: { "pt-br": "Sonar Passivo", "en": "Passive Sonar", "fr": "Sonar passif", "de": "Passiver Sonar" },
      description: {
        "pt-br": "Capacidade de perceber sons subaquáticos sem emitir sinais.",
        "en": "Ability to perceive underwater sounds without emitting signals.",
        "fr": "Capacité à percevoir les sons sous-marins sans émettre de signaux.",
        "de": "Fähigkeit, Unterwassergeräusche wahrzunehmen, ohne Signale zu senden."
      },

    }
  },
  vitality: {
    energy: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { max: true, base: 1800, constitution: 9, vigour: 9 }
      },
      title: {
        "pt-br": "Energia",
        "en": "Energy",
        "fr": "Énergie",
        "de": "Energie"
      },
      description: {
        "pt-br": "Energia vital total que alimenta corpo e mente. É a base para regeneração de saúde, estamina e mana.",
        "en": "Total life energy that fuels body and mind. It is the base for health, stamina, and mana regeneration.",
        "fr": "Énergie vitale totale alimentant le corps et l'esprit. C'est la base de la régénération de la santé, de l'endurance et du mana.",
        "de": "Gesamtlebensenergie, die Körper und Geist antreibt. Sie ist die Grundlage für Gesundheit, Ausdauer und Mana-Regeneration."
      }
    },
    health: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { max:true, base: 100, constitution: 5, vigour: 3, resistance: 2 }
      },
      title: {
        "pt-br": "Saúde",
        "en": "Health",
        "fr": "Santé",
        "de": "Gesundheit"
      },
      description: {
        "pt-br": "Representa a força vital do corpo. Quando chega a zero, o personagem é incapacitado ou morre.",
        "en": "Represents the body's life force. When it reaches zero, the character becomes incapacitated or dies.",
        "fr": "Représente la force vitale du corps. Lorsqu'elle atteint zéro, le personnage devient incapable ou meurt.",
        "de": "Stellt die Lebenskraft des Körpers dar. Wenn sie null erreicht, wird der Charakter handlungsunfähig oder stirbt."
      }
    },
    stamina: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { max:true, base: 150, vigour: 4, constitution: 3, resistance: 2, focus: 1 }
      },
      title: {
        "pt-br": "Estamina",
        "en": "Stamina",
        "fr": "Endurance",
        "de": "Ausdauer"
      },
      description: {
        "pt-br": "Energia física usada para movimentos, ataques e habilidades corporais. Diminui com o esforço e se regenera com o tempo.",
        "en": "Physical energy used for movement, attacks, and bodily skills. Decreases with effort and regenerates over time.",
        "fr": "Énergie physique utilisée pour les mouvements, les attaques et les compétences corporelles. Diminue avec l'effort et se régénère avec le temps.",
        "de": "Physische Energie für Bewegung, Angriffe und körperliche Fähigkeiten. Nimmt mit Anstrengung ab und regeneriert sich mit der Zeit."
      }
    },
    mana: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { max:true, base: 50, abstraction: 4, focus: 3, knowledge: 2, vigour: 1 }
      },
      title: {
        "pt-br": "Mana",
        "en": "Mana",
        "fr": "Mana",
        "de": "Mana"
      },
      description: {
        "pt-br": "Energia espiritual usada para executar magias e ações elementais. Sua regeneração depende do equilíbrio físico e mental.",
        "en": "Spiritual energy used to perform magical and elemental actions. Its regeneration depends on physical and mental balance.",
        "fr": "Énergie spirituelle utilisée pour exécuter des actions magiques et élémentaires. Sa régénération dépend de l'équilibre physique et mental.",
        "de": "Spirituelle Energie, die für magische und elementare Handlungen verwendet wird. Ihre Regeneration hängt von körperlichem und geistigem Gleichgewicht ab."
      }
    },
  },
  combat: {
    attackPower: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { strength: 0.5, agility: 0.3, dexterity: 0.2 }
      },
      title: {
        "pt-br": "Poder de Ataque",
        "en": "Attack Power",
        "fr": "Puissance d'Attaque",
        "de": "Angriffskraft"
      },
      description: {
        "pt-br": "Determina a força física aplicada em ataques corpo a corpo e com armas.",
        "en": "Determines the physical strength applied in melee and weapon attacks.",
        "fr": "Détermine la force physique appliquée aux attaques de mêlée et aux armes.",
        "de": "Bestimmt die physische Stärke, die bei Nah- und Waffenangriffen angewendet wird."
      },
    },
    magicPower: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { abstraction: 0.4, focus: 0.3, knowledge: 0.3 }
      },
      title: {
        "pt-br": "Poder Mágico",
        "en": "Magic Power",
        "fr": "Puissance Magique",
        "de": "Magische Kraft"
      },
      description: {
        "pt-br": "Intensidade e potência dos feitiços e habilidades mágicas.",
        "en": "Intensity and potency of spells and magical abilities.",
        "fr": "Intensité et puissance des sorts et des capacités magiques.",
        "de": "Intensität und Stärke von Zaubern und magischen Fähigkeiten."
      },
    },
    attackSpeed: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { agility: 0.5, dexterity: 0.3, focus: 0.2 }
      },
      title: {
        "pt-br": "Velocidade de Ataque",
        "en": "Attack Speed",
        "fr": "Vitesse d'Attaque",
        "de": "Angriffsgeschwindigkeit"
      },
      description: {
        "pt-br": "Determina a rapidez com que o personagem executa ataques consecutivos.",
        "en": "Determines how quickly the character performs consecutive attacks.",
        "fr": "Détermine la rapidité avec laquelle le personnage exécute des attaques consécutives.",
        "de": "Bestimmt, wie schnell der Charakter aufeinanderfolgende Angriffe ausführt."
      },
    },
    skillPreparation: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { focus: 0.4, knowledge: 0.3, agility: 0.2, constitution: 0.1 }
      },
      title: {
        "pt-br": "Tempo de Preparo",
        "en": "Skill Preparation",
        "fr": "Temps de Préparation",
        "de": "Vorbereitungszeit"
      },
      description: {
        "pt-br": "Define o tempo necessário para preparar e executar uma habilidade.",
        "en": "Defines the time required to prepare and execute a skill.",
        "fr": "Définit le temps nécessaire pour préparer et exécuter une compétence.",
        "de": "Bestimmt die Zeit, die benötigt wird, um eine Fähigkeit vorzubereiten und auszuführen."
      },
    },
    criticalChance: {
      correlation: {
        multiplier: 0
      },
      constants: {
        percent: { max: 0.95, min: 0.01, k: 0.001, p: 0.25 },
        dependencies: { dexterity: 0.4, focus: 0.3, lucky: 0.3, flexibility: 0.1 }
      },
      title: {
        "pt-br": "Chance Crítica",
        "en": "Critical Chance",
        "fr": "Chance de Coup Critique",
        "de": "Kritische Trefferchance"
      },
      description: {
        "pt-br": "Probabilidade de causar um golpe crítico, aumentando o dano.",
        "en": "Probability of landing a critical hit, increasing damage.",
        "fr": "Probabilité d'infliger un coup critique, augmentant les dégâts.",
        "de": "Wahrscheinlichkeit, einen kritischen Treffer zu landen, der den Schaden erhöht."
      },
    },
    criticalDamage: {
      correlation: {
        multiplier: 0,
      },
      constants: { 
        dependencies: {strength: 0.5, focus: 0.2, lucky: 0.3 }
      },
      title: {
        "pt-br": "Dano Crítico",
        "en": "Critical Damage",
        "fr": "Dégâts Critiques",
        "de": "Kritischer Schaden"
      },
      description: {
        "pt-br": "Multiplicador de dano aplicado quando ocorre um acerto crítico.",
        "en": "Damage multiplier applied when a critical hit occurs.",
        "fr": "Multiplicateur de dégâts appliqué lorsqu'un coup critique se produit.",
        "de": "Schadensmultiplikator, der bei einem kritischen Treffer angewendet wird."
      },
    },
    defense: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { constitution: 0.5, resistance: 0.3, strength: 0.2 }
      },
      title: {
        "pt-br": "Defesa",
        "en": "Defense",
        "fr": "Défense",
        "de": "Verteidigung"
      },
      description: {
        "pt-br": "Reduz o dano físico recebido por ataques inimigos.",
        "en": "Reduces the physical damage taken from enemy attacks.",
        "fr": "Réduit les dégâts physiques subis des attaques ennemies.",
        "de": "Reduziert den physischen Schaden, der durch feindliche Angriffe verursacht wird."
      },
    },
    magicDefense: {
      correlation: {
        multiplier: 0
      },
      constants: {
        dependencies: { focus: 0.4, resistance: 0.3, knowledge: 0.3 }
      },
      title: {
        "pt-br": "Defesa Mágica",
        "en": "Magic Defense",
        "fr": "Défense Magique",
        "de": "Magische Verteidigung"
      },
      description: {
        "pt-br": "Reduz o dano causado por ataques mágicos e elementais.",
        "en": "Reduces damage caused by magical and elemental attacks.",
        "fr": "Réduit les dégâts causés par les attaques magiques et élémentaires.",
        "de": "Reduziert den Schaden, der durch magische und elementare Angriffe verursacht wird."
      },
    },
    blockChance: {
      correlation: {
        multiplier: 0
      },
      constants: {
        percent: { max: 0.9, min: 0.15, k: 0.001, p: 0.2 },
        dependencies: { agility: 0.4, dexterity: 0.3, focus: 0.3, flexibility: 0.1 }
      },
      title: {
        "pt-br": "Chance de Bloqueio",
        "en": "Block Chance",
        "fr": "Chance de Blocage",
        "de": "Blockchance"
      },
      description: {
        "pt-br": "Probabilidade de bloquear um ataque e reduzir o dano recebido.",
        "en": "Probability of blocking an attack and reducing incoming damage.",
        "fr": "Probabilité de bloquer une attaque et de réduire les dégâts reçus.",
        "de": "Wahrscheinlichkeit, einen Angriff zu blockieren und den erlittenen Schaden zu verringern."
      },
    },
    blockEfficiency: {
      correlation: {
        multiplier: 0
      },
      constants: {
        percent: { max: 0.7, min: 0.3, k: 0.00025, p: 0.5 },
        dependencies: { constitution: 0.5, resistance: 0.3, strength: 0.2 }
      },
      title: {
        "pt-br": "Eficiência de Bloqueio",
        "en": "Block Efficiency",
        "fr": "Efficacité du Blocage",
        "de": "Blockeffizienz"
      },
      description: {
        "pt-br": "Determina a porcentagem de dano reduzido ao bloquear um ataque.",
        "en": "Determines the percentage of damage reduced when blocking an attack.",
        "fr": "Détermine le pourcentage de dégâts réduits lors du blocage d'une attaque.",
        "de": "Bestimmt den Prozentsatz des Schadens, der beim Blockieren eines Angriffs reduziert wird."
      },
    },
    evasion: {
      correlation: {
        multiplier: 0
      },
      constants: {
        percent: { max: 0.85, min: 0.02, k: 0.001, p: 0.9 },
        dependencies: { agility: 0.5, balance: 0.3, proprioception: 0.2, flexibility: 0.1, vision: 0.1, hearing: 0.07, smell: 0.02 }
      },
      title: {
        "pt-br": "Evasão",
        "en": "Evasion",
        "fr": "Évasion",
        "de": "Ausweichen"
      },
      description: {
        "pt-br": "Probabilidade de evitar completamente um ataque inimigo.",
        "en": "Probability of completely avoiding an enemy attack.",
        "fr": "Probabilité d'éviter complètement une attaque ennemie.",
        "de": "Wahrscheinlichkeit, einem feindlichen Angriff vollständig auszuweichen."
      },
    },
    counterChance: {
      correlation: {
        multiplier: 0
      },
      constants: {
        percent: { max: 0.3, min: 0.7, k: 0.001, p: 0.5 },
        dependencies: { agility: 0.3, dexterity: 0.3, focus: 0.2, bravery: 0.2 }
      },
      title: {
        "pt-br": "Chance de Contra-ataque",
        "en": "Counter Chance",
        "fr": "Chance de Contre-attaque",
        "de": "Gegenangriffschance"
      },
      description: {
        "pt-br": "Probabilidade de reagir instantaneamente após ser atacado, causando dano ao inimigo.",
        "en": "Probability of instantly retaliating after being attacked, dealing damage to the enemy.",
        "fr": "Probabilité de riposter instantanément après avoir été attaqué, infligeant des dégâts à l'ennemi.",
        "de": "Wahrscheinlichkeit, nach einem Angriff sofort zu kontern und dem Feind Schaden zuzufügen."
      },
    },
  }
}