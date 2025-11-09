// ============================================================
// Skills Configuration
// ------------------------------------------------------------
// This file defines the skill system of the game.
// Skills are divided into categories and types, each with their
// own gameplay context (combat, crafting, exploration, support).
// 
// It also defines the list of buffs and debuffs — effects that can
// temporarily alter player stats, influence combat, or enhance
// production and exploration performance.
// ============================================================

export const skills = {
  types: {
    attack: {
      title: {
        pt: "Ataque",
        en: "Attack",
        fr: "Attaque",
        de: "Angriff",
      },
      description: {
        pt: "Habilidades ofensivas voltadas a causar dano direto ou indireto em alvos. Podem ser físicas, mágicas ou híbridas.",
        en: "Offensive abilities focused on dealing direct or indirect damage to targets. Can be physical, magical, or hybrid.",
        fr: "Compétences offensives visant à infliger des dégâts directs ou indirects aux cibles. Peuvent être physiques, magiques ou hybrides.",
        de: "Offensive Fähigkeiten, die darauf abzielen, direkten oder indirekten Schaden an Zielen zu verursachen. Können physisch, magisch oder hybrid sein.",
      },
      entries: {
        damage: {
          type: "number",
          base: 0,
          element: [
            "fire","water","wind","earth","electricity","physical","ice","steam","mud","lava","plant","plasma","poison","dust","darkness","holy","psychic","light","transmutation","portal","illusion","mind"
          ],
          description: {
            pt: "Valor base do dano causado pela habilidade.",
            en: "Base damage value dealt by the ability.",
            fr: "Valeur de base des dégâts infligés par la compétence.",
            de: "Grundwert des Schadens, der durch die Fähigkeit verursacht wird.",
          },
        },
        continueDamage: {
          type: "number",
          duration: 5000,
          interval: 1000,
          description: {
            pt: "Dano contínuo aplicado ao longo do tempo (DoT).",
            en: "Continuous damage applied over time (DoT).",
            fr: "Dégâts continus appliqués au fil du temps (DoT).",
            de: "Kontinuierlicher Schaden, der über die Zeit angewendet wird (DoT).",
          },
        },

        criticalChance: {
          base: 5, // %
          modifier: 0, // bônus ou penalidade da habilidade
          description: {
            pt: "Chance base de acerto crítico, podendo ser modificada por atributos e equipamentos.",
            en: "Base critical hit chance, modifiable by attributes and equipment.",
            fr: "Chance de coup critique de base, modifiable par les attributs et l'équipement.",
            de: "Basis-Krit-Trefferchance, modifizierbar durch Attribute und Ausrüstung.",
          },
        },

        criticalDamage: {
          base: 150, // %
          modifier: 0,
          description: {
            pt: "Multiplicador de dano aplicado quando ocorre um acerto crítico.",
            en: "Damage multiplier applied when a critical hit occurs.",
            fr: "Multiplicateur de dégâts appliqué lors d'un coup critique.",
            de: "Schadensmultiplikator, der bei einem kritischen Treffer angewendet wird.",
          },
        },

        hitChance: {
          base: 90, // %
          modifier: 0,
          description: {
            pt: "Chance base de acerto do ataque, antes de considerar evasão do alvo.",
            en: "Base hit chance before considering target evasion.",
            fr: "Chance de toucher de base avant de considérer l'évasion de la cible.",
            de: "Grundtrefferchance, bevor die Ausweichchance des Ziels berücksichtigt wird.",
          },
        },

        blockChance: {
          base: 0,
          modifier: 0,
          description: {
            pt: "Chance do alvo bloquear parte ou todo o dano desta habilidade.",
            en: "Chance for the target to block part or all of this ability's damage.",
            fr: "Chance pour la cible de bloquer partiellement ou totalement les dégâts de cette compétence.",
            de: "Chance, dass das Ziel einen Teil oder den gesamten Schaden dieser Fähigkeit blockiert.",
          },
        },

        evadeChance: {
          base: 0,
          modifier: 0,
          description: {
            pt: "Chance de o alvo esquivar completamente do ataque.",
            en: "Chance for the target to completely evade the attack.",
            fr: "Chance pour la cible d'éviter complètement l'attaque.",
            de: "Chance für das Ziel, dem Angriff vollständig auszuweichen.",
          },
        },
      },
    },
    defense: {
      title: {
        pt: "Defesa",
        en: "Defense",
        fr: "Défense",
        de: "Verteidigung",
      },
      description: {
        pt: "Habilidades defensivas que reduzem, refletem ou anulam o dano recebido. Podem envolver resistência física, mágica ou escudos protetores.",
        en: "Defensive abilities that reduce, reflect, or nullify incoming damage. Can involve physical, magical, or protective shielding.",
        fr: "Compétences défensives qui réduisent, reflètent ou annulent les dégâts reçus. Peuvent impliquer une résistance physique, magique ou des boucliers protecteurs.",
        de: "Defensive Fähigkeiten, die eingehenden Schaden reduzieren, reflektieren oder aufheben. Können physische, magische oder schützende Schilde beinhalten.",
      },
      entries: {
        damageReduction: {
          type: "number",
          base: 10,
          description: {
            pt: "Porcentagem de redução de dano físico ou mágico recebido enquanto a habilidade estiver ativa.",
            en: "Percentage of physical or magical damage reduction while the ability is active.",
            fr: "Pourcentage de réduction des dégâts physiques ou magiques tant que la compétence est active.",
            de: "Prozentsatz der Reduzierung von physischem oder magischem Schaden, solange die Fähigkeit aktiv ist.",
          },
        },
        reflectChance: {
          type: "percent",
          base: 0,
          max: 50,
          description: {
            pt: "Chance de refletir uma parte do dano recebido de volta ao atacante.",
            en: "Chance to reflect a portion of incoming damage back to the attacker.",
            fr: "Chance de renvoyer une partie des dégâts subis à l'attaquant.",
            de: "Chance, einen Teil des erlittenen Schadens an den Angreifer zurückzugeben.",
          },
        },
      },
    },
    healing: {
      title: {
        pt: "Cura",
        en: "Healing",
        fr: "Guérison",
        de: "Heilung"
      },
      description: {
        pt: "Habilidades de cura restauram a vitalidade de alvos vivos, removem efeitos negativos ou fortalecem a regeneração natural. Podem atuar sobre o usuário, aliados próximos ou áreas específicas.",
        en: "Healing skills restore vitality to living targets, remove negative effects, or strengthen natural regeneration. They can act on the user, nearby allies, or specific areas.",
        fr: "Les compétences de guérison restaurent la vitalité des cibles vivantes, éliminent les effets négatifs ou renforcent la régénération naturelle. Elles peuvent agir sur l'utilisateur, les alliés proches ou des zones spécifiques.",
        de: "Heilfähigkeiten stellen die Vitalität lebender Ziele wieder her, entfernen negative Effekte oder stärken die natürliche Regeneration. Sie können auf den Benutzer, nahe Verbündete oder bestimmte Bereiche wirken."
      },
      entries: {
        baseHealing: {
          type: "number",
          description: {
            pt: "Valor base de cura aplicado ao alvo antes de modificadores.",
            en: "Base healing value applied to the target before modifiers.",
            fr: "Valeur de guérison de base appliquée à la cible avant les modificateurs.",
            de: "Basisheilwert, der auf das Ziel angewendet wird, bevor Modifikatoren wirken."
          },
        },
        continuousHealing: {
          type: "number",
          description: {
            pt: "Cura contínua aplicada ao longo do tempo, geralmente representada por regeneração.",
            en: "Healing over time applied continuously, usually representing regeneration.",
            fr: "Guérison continue appliquée au fil du temps, représentant généralement la régénération.",
            de: "Kontinuierliche Heilung über Zeit, die in der Regel Regeneration darstellt."
          },
        },
        healingType: {
          type: "string",
          options: ["instant", "overTime", "conditional", "sacrifice"],
          description: {
            pt: "Tipo de cura: instantânea, contínua, condicional (ativa sob certas condições) ou sacrificial (converte energia vital do usuário em cura).",
            en: "Type of healing: instant, over time, conditional (activates under certain conditions), or sacrificial (converts the user's vital energy into healing).",
            fr: "Type de guérison : instantanée, continue, conditionnelle (activée sous certaines conditions) ou sacrificielle (convertit l'énergie vitale de l'utilisateur en guérison).",
            de: "Heilungsart: sofortig, über Zeit, bedingt (unter bestimmten Bedingungen aktiviert) oder opfernd (wandelt die Lebensenergie des Benutzers in Heilung um)."
          }
        },
        targets: {
          type: "string",
          options: ["self", "singleAlly", "multipleAllies", "area"],
          description: {
            pt: "Define quem é afetado pela cura — o próprio usuário, um aliado, múltiplos aliados ou uma área.",
            en: "Defines who is affected by the healing — the user, a single ally, multiple allies, or an area.",
            fr: "Définit qui est affecté par la guérison — l'utilisateur, un allié, plusieurs alliés ou une zone.",
            de: "Definiert, wer von der Heilung betroffen ist – der Benutzer, ein Verbündeter, mehrere Verbündete oder ein Bereich."
          }
        },
        removeDebuffs: {
          type: "array",
          items: "string",
          description: {
            pt: "Lista de tipos de efeitos negativos que a habilidade pode remover (por exemplo: veneno, queimadura, paralisia).",
            en: "List of negative effects that the skill can remove (e.g., poison, burn, paralysis).",
            fr: "Liste des effets négatifs que la compétence peut supprimer (ex : poison, brûlure, paralysie).",
            de: "Liste negativer Effekte, die die Fähigkeit entfernen kann (z. B. Gift, Verbrennung, Lähmung)."
          }
        },
        regenMultiplier: {
          type: "number",
          description: {
            pt: "Multiplicador aplicado à regeneração natural do alvo enquanto a habilidade estiver ativa.",
            en: "Multiplier applied to the target’s natural regeneration while the skill is active.",
            fr: "Multiplicateur appliqué à la régénération naturelle de la cible pendant que la compétence est active.",
            de: "Multiplikator, der auf die natürliche Regeneration des Ziels angewendet wird, solange die Fähigkeit aktiv ist."
          },
        }
      }
    },
    support: {
      title: {
        pt: "Suporte",
        en: "Support",
        fr: "Soutien",
        de: "Unterstützung"
      },
      description: {
        pt: "Habilidades de suporte fortalecem aliados, aumentam atributos temporariamente, concedem resistência a efeitos negativos ou aprimoram a eficiência de outras ações. Geralmente exigem sinergia e tempo de uso estratégico.",
        en: "Support skills strengthen allies, temporarily boost attributes, grant resistance to negative effects, or enhance the efficiency of other actions. They usually require synergy and strategic timing.",
        fr: "Les compétences de soutien renforcent les alliés, augmentent temporairement les attributs, confèrent une résistance aux effets négatifs ou améliorent l'efficacité d'autres actions. Elles nécessitent souvent de la synergie et un bon timing stratégique.",
        de: "Unterstützungsfähigkeiten stärken Verbündete, erhöhen vorübergehend Attribute, verleihen Widerstand gegen negative Effekte oder verbessern die Effizienz anderer Aktionen. Sie erfordern in der Regel Synergie und strategisches Timing."
      },
      entries: {
        boostAttributes: {
          type: "object",
          description: {
            pt: "Lista de atributos e os valores percentuais de aumento temporário.",
            en: "List of attributes and their temporary percentage increases.",
            fr: "Liste des attributs et leurs augmentations temporaires en pourcentage.",
            de: "Liste der Attribute und ihrer temporären prozentualen Erhöhungen."
          },
        },
        resistanceBonus: {
          type: "object",
          description: {
            pt: "Bônus de resistência a tipos específicos de dano ou debuffs (ex: fogo, veneno, medo).",
            en: "Resistance bonus to specific damage or debuff types (e.g., fire, poison, fear).",
            fr: "Bonus de résistance à des types spécifiques de dégâts ou d'affaiblissements (ex : feu, poison, peur).",
            de: "Widerstandsbonus gegen bestimmte Schadens- oder Schwächungstypen (z. B. Feuer, Gift, Angst)."
          },
        },
        synergyEffect: {
          type: "string",
          description: {
            pt: "Identifica efeitos sinérgicos que se ativam quando combinados com outras habilidades específicas (ex: amplifica cura, reduz consumo de energia).",
            en: "Identifies synergistic effects activated when combined with specific other skills (e.g., amplifies healing, reduces energy cost).",
            fr: "Identifie les effets synergiques activés lorsqu'ils sont combinés avec d'autres compétences spécifiques (ex : amplifie la guérison, réduit le coût en énergie).",
            de: "Identifiziert synergetische Effekte, die aktiviert werden, wenn sie mit bestimmten anderen Fähigkeiten kombiniert werden (z. B. verstärkt Heilung, reduziert Energiekosten)."
          }
        },
        energyTransfer: {
          type: "object",
          description: {
            pt: "Permite transferir energia (mana, vigor, etc.) entre aliados.",
            en: "Allows transferring energy (mana, stamina, etc.) between allies.",
            fr: "Permet de transférer de l'énergie (mana, endurance, etc.) entre alliés.",
            de: "Ermöglicht den Energieaustausch (Mana, Ausdauer usw.) zwischen Verbündeten."
          },
          values: { type: ["mana", "stamina", "health", "energy"], amount: 50 , efficiency: 0.80}
        },
        regenerationBoost: {
          type: "number",
          description: {
            pt: "Aumenta a taxa de regeneração natural de energia, vida ou mana do alvo enquanto durar o efeito.",
            en: "Increases the natural regeneration rate of energy, health, or mana while the effect lasts.",
            fr: "Augmente le taux de régénération naturelle d'énergie, de santé ou de mana tant que l'effet dure.",
            de: "Erhöht die natürliche Regenerationsrate von Energie, Gesundheit oder Mana, solange der Effekt anhält."
          }
        },
        protectionAura: {
          type: "object",
          description: {
            pt: "Cria uma aura de proteção que reduz parte do dano recebido pelos aliados próximos.",
            en: "Creates a protection aura that reduces part of the damage received by nearby allies.",
            fr: "Crée une aura de protection qui réduit une partie des dégâts subis par les alliés proches.",
            de: "Erzeugt eine Schutzaura, die einen Teil des Schadens reduziert, den nahe Verbündete erleiden."
          },
          example: { radius: 5, damageReduction: 0.1 }
        },
        assistBonus: {
          type: "object",
          description: {
            pt: "Aprimora ações de aliados (por exemplo, aumenta o dano físico de aliados corpo a corpo).",
            en: "Enhances allies' actions (e.g., increases melee allies' physical damage).",
            fr: "Améliore les actions des alliés (par exemple, augmente les dégâts physiques des alliés de mêlée).",
            de: "Verbessert die Aktionen von Verbündeten (z. B. erhöht den physischen Schaden von Nahkampfverbündeten)."
          },
          example: { targetType: "melee", boost: 0.15 }
        }
      }
    },
    control: {
      title: {
        pt: "Controle",
        en: "Control",
        fr: "Contrôle",
        de: "Kontrolle"
      },
      description: {
        pt: "Habilidades de controle afetam o comportamento, a mobilidade ou as capacidades do alvo. Podem imobilizar, enfraquecer, confundir ou limitar as ações inimigas. São cruciais para estratégias táticas e suporte indireto.",
        en: "Control skills affect the target’s behavior, mobility, or capabilities. They can immobilize, weaken, confuse, or limit enemy actions. Crucial for tactical strategies and indirect support.",
        fr: "Les compétences de contrôle affectent le comportement, la mobilité ou les capacités de la cible. Elles peuvent immobiliser, affaiblir, confondre ou limiter les actions ennemies. Essentielles pour les stratégies tactiques et le soutien indirect.",
        de: "Kontrollfähigkeiten beeinflussen das Verhalten, die Mobilität oder die Fähigkeiten des Ziels. Sie können Gegner lähmen, schwächen, verwirren oder deren Aktionen einschränken. Sie sind entscheidend für taktische Strategien und indirekte Unterstützung."
      },
      entries: {
        effectType: {
          type: "string",
          description: {
            pt: "Define o tipo de controle aplicado: físico (paralisia, lentidão, empurrão) ou mental (medo, confusão, encanto).",
            en: "Defines the type of control applied: physical (paralysis, slow, knockback) or mental (fear, confusion, charm).",
            fr: "Définit le type de contrôle appliqué : physique (paralysie, ralentissement, repoussement) ou mental (peur, confusion, charme).",
            de: "Definiert die Art der Kontrolle: physisch (Lähmung, Verlangsamung, Rückstoß) oder mental (Angst, Verwirrung, Bezauberung)."
          },
          example: "physical"
        },
        disableActions: {
          type: "array",
          description: {
            pt: "Ações específicas que o alvo não pode executar enquanto estiver sob o efeito (ex: atacar, conjurar, esquivar).",
            en: "Specific actions the target cannot perform while under the effect (e.g., attack, cast, dodge).",
            fr: "Actions spécifiques que la cible ne peut pas effectuer pendant la durée de l'effet (ex : attaquer, lancer un sort, esquiver).",
            de: "Spezifische Aktionen, die das Ziel während des Effekts nicht ausführen kann (z. B. angreifen, zaubern, ausweichen)."
          },
          example: ["attack", "dodge"]
        },
        resistanceCheck: {
          type: "object",
          description: {
            pt: "Define quais atributos ou resistências do alvo podem reduzir a duração ou impedir o efeito.",
            en: "Defines which attributes or resistances of the target can reduce or negate the effect.",
            fr: "Définit quels attributs ou résistances de la cible peuvent réduire ou annuler l'effet.",
            de: "Definiert, welche Attribute oder Widerstände des Ziels den Effekt verringern oder verhindern können."
          },
          example: { willpower: 0.5, resistance: 0.3 }
        },
        chainEffect: {
          type: "object",
          description: {
            pt: "Permite que o efeito de controle se propague para alvos próximos, caso certas condições sejam atendidas.",
            en: "Allows the control effect to spread to nearby targets if certain conditions are met.",
            fr: "Permet à l'effet de contrôle de se propager aux cibles proches si certaines conditions sont remplies.",
            de: "Ermöglicht, dass sich der Kontrolleffekt auf nahe Ziele ausbreitet, wenn bestimmte Bedingungen erfüllt sind."
          },
          example: { radius: 2, chance: 0.25 }
        },
        interruptionPower: {
          type: "number",
          description: {
            pt: "Capacidade da habilidade de interromper ações de canalização ou conjuração em andamento.",
            en: "Ability’s strength to interrupt channeling or casting actions in progress.",
            fr: "Puissance de la compétence à interrompre les actions de canalisation ou d'incantation en cours.",
            de: "Stärke der Fähigkeit, laufende Kanalisierungs- oder Zauberaktionen zu unterbrechen."
          },
          example: 0.6
        }
      }
    },
    crafting: {
      title: {
        pt: "Criação",
        en: "Crafting",
        fr: "Artisanat",
        de: "Herstellung"
      },
      description: {
        pt: "Habilidades de criação permitem transformar materiais brutos em itens, equipamentos ou substâncias úteis. Elas exigem precisão, conhecimento e ferramentas adequadas. O sucesso e a qualidade do item dependem dos atributos e da proficiência do personagem.",
        en: "Crafting skills allow transforming raw materials into useful items, equipment, or substances. They require precision, knowledge, and proper tools. The success and quality of the result depend on the character’s attributes and proficiency.",
        fr: "Les compétences d’artisanat permettent de transformer des matériaux bruts en objets, équipements ou substances utiles. Elles nécessitent précision, connaissance et outils adaptés. Le succès et la qualité dépendent des attributs et de la maîtrise du personnage.",
        de: "Herstellungsfähigkeiten ermöglichen es, Rohstoffe in nützliche Gegenstände, Ausrüstung oder Substanzen zu verwandeln. Sie erfordern Präzision, Wissen und geeignete Werkzeuge. Erfolg und Qualität hängen von den Attributen und der Fertigkeit des Charakters ab."
      },
      entries: {
        discipline: {
          type: "string",
          description: {
            pt: "Define a área de criação: alquimia, culinária, ferraria, encantamento, costura, engenharia, etc.",
            en: "Defines the crafting field: alchemy, cooking, smithing, enchanting, tailoring, engineering, etc.",
            fr: "Définit le domaine de l’artisanat : alchimie, cuisine, forge, enchantement, couture, ingénierie, etc.",
            de: "Definiert den Handwerksbereich: Alchemie, Kochen, Schmieden, Verzaubern, Schneiderei, Ingenieurwesen usw."
          },
          example: "alchemy"
        },
        materials: {
          type: "array",
          description: {
            pt: "Lista de materiais necessários para realizar a criação. Cada item possui uma quantidade mínima e pode afetar a qualidade do resultado.",
            en: "List of materials required to perform crafting. Each material has a minimum amount and may affect result quality.",
            fr: "Liste des matériaux nécessaires à la fabrication. Chaque matériau a une quantité minimale et peut influencer la qualité du résultat.",
            de: "Liste der Materialien, die für die Herstellung erforderlich sind. Jedes Material hat eine Mindestmenge und kann die Qualität des Ergebnisses beeinflussen."
          },
          example: [
            { id: "herb_green", quantity: 2 },
            { id: "bottle_empty", quantity: 1 }
          ]
        },
        toolsRequired: {
          type: "array",
          description: {
            pt: "Ferramentas obrigatórias para realizar a criação, como forja, caldeirão, mesa de encantamento ou utensílios específicos.",
            en: "Mandatory tools required to perform crafting, such as forge, cauldron, enchantment table, or specific utensils.",
            fr: "Outils obligatoires nécessaires à la fabrication, tels que forge, chaudron, table d'enchantement ou ustensiles spécifiques.",
            de: "Erforderliche Werkzeuge für die Herstellung, wie Schmiede, Kessel, Verzauberungstisch oder spezielle Utensilien."
          },
          example: ["alchemy_table", "mortar_and_pestle"]
        },
        baseSuccessRate: {
          type: "number",
          description: {
            pt: "Chance base de sucesso na criação, antes de aplicar modificadores de atributos, equipamentos ou proficiência.",
            en: "Base success rate of crafting before applying modifiers from attributes, equipment, or proficiency.",
            fr: "Taux de réussite de base avant application des modificateurs provenant des attributs, équipements ou maîtrise.",
            de: "Grund-Erfolgsrate vor Anwendung von Modifikatoren aus Attributen, Ausrüstung oder Fertigkeit."
          },
          example: 0.75
        },
        qualityVariance: {
          type: "number",
          description: {
            pt: "Margem de variação de qualidade dos itens criados. Valores mais altos indicam maior influência de sorte e precisão.",
            en: "Margin of quality variance for crafted items. Higher values indicate greater influence of luck and precision.",
            fr: "Marge de variance de qualité des objets fabriqués. Des valeurs plus élevées indiquent une plus grande influence de la chance et de la précision.",
            de: "Spanne der Qualitätsabweichung hergestellter Gegenstände. Höhere Werte bedeuten größeren Einfluss von Glück und Präzision."
          },
          example: 0.2
        },
        failureConsequences: {
          type: "string",
          description: {
            pt: "Define o que acontece em caso de falha: perda parcial de materiais, falha total, item defeituoso, etc.",
            en: "Defines what happens on failure: partial material loss, total failure, defective item, etc.",
            fr: "Définit ce qui se passe en cas d'échec : perte partielle de matériaux, échec total, objet défectueux, etc.",
            de: "Definiert, was bei einem Fehlschlag passiert: teilweiser Materialverlust, Totalausfall, fehlerhaftes Objekt usw."
          },
          example: "partial_loss"
        },
        craftingTime: {
          type: "number",
          description: {
            pt: "Tempo necessário para concluir a criação, em segundos.",
            en: "Time required to complete crafting, in seconds.",
            fr: "Temps nécessaire pour terminer la fabrication, en secondes.",
            de: "Zeit, die benötigt wird, um die Herstellung abzuschließen, in Sekunden."
          },
          example: 15
        },
        product: {
          type: "object",
          description: {
            pt: "Objeto resultante da criação, contendo ID, nome e propriedades iniciais.",
            en: "Crafting result object containing ID, name, and initial properties.",
            fr: "Objet résultant de la fabrication, contenant ID, nom et propriétés initiales.",
            de: "Herstellungsresultat mit ID, Name und Anfangseigenschaften."
          },
          example: { id: "potion_healing_minor", quantity: 1 }
        },
        criticalSuccess: {
          type: "object",
          description: {
            pt: "Chance e efeito de sucesso crítico na criação, produzindo itens de qualidade superior.",
            en: "Chance and effect of critical success in crafting, producing higher quality items.",
            fr: "Chance et effet de succès critique lors de la fabrication, produisant des objets de meilleure qualité.",
            de: "Chance und Effekt eines kritischen Erfolgs bei der Herstellung, der hochwertigere Gegenstände erzeugt."
          },
          example: { chance: 0.1, qualityBoost: 1.5 }
        }
      }
    },
    gathering: {
      title: {
        pt: "Coleta",
        en: "Gathering",
        fr: "Collecte",
        de: "Sammeln"
      },
      description: {
        pt: "Habilidades de coleta permitem obter recursos naturais e materiais necessários para criação, comércio ou sobrevivência. A eficiência depende de atributos, ferramentas e conhecimento do ambiente.",
        en: "Gathering skills allow obtaining natural resources and materials needed for crafting, trading, or survival. Efficiency depends on attributes, tools, and environmental knowledge.",
        fr: "Les compétences de collecte permettent d'obtenir des ressources naturelles et des matériaux nécessaires à la fabrication, au commerce ou à la survie. L'efficacité dépend des attributs, des outils et de la connaissance de l'environnement.",
        de: "Sammelfähigkeiten ermöglichen es, natürliche Ressourcen und Materialien für Handwerk, Handel oder Überleben zu gewinnen. Effizienz hängt von Attributen, Werkzeugen und Umweltkenntnis ab."
      },
      entries: {
        resourceType: {
          type: "string",
          description: {
            pt: "Tipo de recurso a ser coletado: madeira, minério, ervas, frutos, pele, água, etc.",
            en: "Type of resource to be gathered: wood, ore, herbs, fruits, hides, water, etc.",
            fr: "Type de ressource à collecter : bois, minerai, herbes, fruits, peaux, eau, etc.",
            de: "Art der zu sammelnden Ressource: Holz, Erz, Kräuter, Früchte, Felle, Wasser usw."
          },
          example: "herbs"
        },
        toolsRequired: {
          type: "array",
          description: {
            pt: "Ferramentas necessárias para a coleta: machado, picareta, foice, balde, armadilhas, etc.",
            en: "Tools required for gathering: axe, pickaxe, sickle, bucket, traps, etc.",
            fr: "Outils nécessaires à la collecte : hache, pioche, faucille, seau, pièges, etc.",
            de: "Werkzeuge für das Sammeln: Axt, Spitzhacke, Sense, Eimer, Fallen usw."
          },
          example: ["sickle", "basket"]
        },
        baseYield: {
          type: "number",
          description: {
            pt: "Quantidade base de recursos coletados, antes de modificadores de atributos e ferramentas.",
            en: "Base quantity of resources gathered before applying attribute and tool modifiers.",
            fr: "Quantité de base de ressources collectées avant application des modificateurs d'attributs et d'outils.",
            de: "Grundmenge der gesammelten Ressourcen vor Anwendung von Attribut- und Werkzeugmodifikatoren."
          },
          example: 3
        },
        environmentalModifiers: {
          type: "object",
          description: {
            pt: "Modificadores de ambiente que afetam a coleta, como clima, hora do dia, estação ou terreno.",
            en: "Environmental modifiers affecting gathering, such as weather, time of day, season, or terrain.",
            fr: "Modificateurs environnementaux affectant la collecte, comme la météo, l'heure, la saison ou le terrain.",
            de: "Umweltmodifikatoren, die das Sammeln beeinflussen, wie Wetter, Tageszeit, Jahreszeit oder Gelände."
          },
          example: { rainy: -0.1, night: -0.2, mountain: 0.2 }
        },
        failureConsequences: {
          type: "string",
          description: {
            pt: "Define o que acontece em caso de falha: nenhum recurso coletado, ferimentos, equipamento danificado, etc.",
            en: "Defines what happens on failure: no resource gathered, injury, equipment damage, etc.",
            fr: "Définit ce qui se passe en cas d'échec : aucune ressource collectée, blessure, équipement endommagé, etc.",
            de: "Definiert, was bei einem Fehlschlag passiert: keine Ressource gesammelt, Verletzung, Geräteschaden usw."
          },
          example: "none_collected"
        },
        criticalYield: {
          type: "object",
          description: {
            pt: "Chance e efeito de colheita crítica, produzindo mais recursos ou de melhor qualidade.",
            en: "Chance and effect of critical gathering, yielding more or higher quality resources.",
            fr: "Chance et effet de collecte critique, produisant plus ou des ressources de meilleure qualité.",
            de: "Chance und Effekt eines kritischen Sammelns, das mehr oder hochwertigere Ressourcen liefert."
          },
          example: { chance: 0.1, multiplier: 2 }
        }
      }
    },
    exploration: {
      title: {
        pt: "Exploração",
        en: "Exploration",
        fr: "Exploration",
        de: "Erkundung"
      },
      description: {
        pt: "Habilidades relacionadas à exploração do ambiente, percepção, orientação e movimentação em diferentes terrenos.",
        en: "Skills related to environmental exploration, perception, navigation, and movement across terrains.",
        fr: "Compétences liées à l'exploration de l'environnement, à la perception, à la navigation et au déplacement sur différents terrains.",
        de: "Fähigkeiten im Zusammenhang mit Umwelterkundung, Wahrnehmung, Orientierung und Bewegung über verschiedene Geländearten."
      },
      entries: {
        perceptionRange: {
          type: "number",
          description: {
            pt: "Alcance de percepção do ambiente em metros.",
            en: "Environmental perception range in meters.",
            fr: "Portée de perception de l'environnement en mètres.",
            de: "Umweltwahrnehmungsreichweite in Metern."
          },
          example: 10
        },
        terrainAdaptation: {
          type: "object",
          description: {
            pt: "Modificadores de adaptação a diferentes tipos de terreno: montanha, floresta, água, deserto, etc.",
            en: "Modifiers for adaptation to different terrain types: mountain, forest, water, desert, etc.",
            fr: "Modificateurs pour l'adaptation à différents types de terrain : montagne, forêt, eau, désert, etc.",
            de: "Modifikatoren für die Anpassung an verschiedene Geländetypen: Berg, Wald, Wasser, Wüste usw."
          },
          example: { mountain: 0.8, forest: 1, water: 0.5 }
        },
        navigationSkill: {
          type: "number",
          description: {
            pt: "Habilidade de se orientar usando mapas, estrelas ou referências naturais.",
            en: "Skill in navigating using maps, stars, or natural landmarks.",
            fr: "Compétence à s'orienter en utilisant des cartes, des étoiles ou des repères naturels.",
            de: "Fähigkeit zur Orientierung mithilfe von Karten, Sternen oder natürlichen Landmarken."
          },
          example: 5
        },
        stealth: {
          type: "number",
          description: {
            pt: "Capacidade de se mover sem ser detectado pelo ambiente ou inimigos.",
            en: "Ability to move without being detected by the environment or enemies.",
            fr: "Capacité à se déplacer sans être détecté par l'environnement ou les ennemis.",
            de: "Fähigkeit, sich unbemerkt von der Umgebung oder Feinden zu bewegen."
          },
          example: 3
        },
        endurance: {
          type: "number",
          description: {
            pt: "Resistência a longas jornadas ou exploração em condições adversas.",
            en: "Endurance for long journeys or exploration under harsh conditions.",
            fr: "Endurance pour de longs trajets ou l'exploration dans des conditions difficiles.",
            de: "Ausdauer für lange Reisen oder Erkundungen unter harten Bedingungen."
          },
          example: 7
        }
      }
    },
    perception: {
      title: {
        pt: "Percepção",
        en: "Perception",
        fr: "Perception",
        de: "Wahrnehmung"
      },
      description: {
        pt: "Habilidades relacionadas à detecção de estímulos no ambiente, interpretação de sinais e sensibilidade a detalhes.",
        en: "Skills related to detecting environmental stimuli, interpreting signals, and sensitivity to details.",
        fr: "Compétences liées à la détection des stimuli environnementaux, à l'interprétation des signaux et à la sensibilité aux détails.",
        de: "Fähigkeiten zur Erkennung von Umgebungsreizen, Interpretation von Signalen und Sensibilität für Details."
      },
      entries: {
        perceptionRange: {
          type: "number",
          description: {
            pt: "Distância máxima em que estímulos podem ser detectados.",
            en: "Maximum distance at which stimuli can be detected.",
            fr: "Distance maximale à laquelle les stimuli peuvent être détectés.",
            de: "Maximale Entfernung, in der Reize wahrgenommen werden können."
          },
          example: 10 // em metros ou unidades do jogo
        },
        perceptionSpeed: {
          type: "number",
          description: {
            pt: "Velocidade com que o personagem percebe mudanças ou eventos no ambiente.",
            en: "Speed at which the character notices changes or events in the environment.",
            fr: "Vitesse à laquelle le personnage perçoit les changements ou événements dans l'environnement.",
            de: "Geschwindigkeit, mit der der Charakter Veränderungen oder Ereignisse in der Umgebung bemerkt."
          },
          example: 5 // valores relativos à rapidez da percepção
        },
        surpriseAvoidance: {
          type: "number",
          description: {
            pt: "Capacidade de evitar ataques surpresa ou emboscadas.",
            en: "Ability to avoid surprise attacks or ambushes.",
            fr: "Capacité à éviter les attaques surprises ou les embuscades.",
            de: "Fähigkeit, Überraschungsangriffe oder Hinterhalte zu vermeiden."
          },
          example: 7
        },
        tracking: {
          type: "number",
          description: {
            pt: "Habilidade de seguir rastros ou manter contato visual/auditivo com um alvo.",
            en: "Skill to follow tracks or maintain visual/auditory contact with a target.",
            fr: "Capacité à suivre des traces ou à maintenir le contact visuel/auditif avec une cible.",
            de: "Fähigkeit, Spuren zu verfolgen oder Sicht-/Hörkontakt mit einem Ziel aufrechtzuerhalten."
          },
          example: 6
        },
        trapDetection: {
          type: "number",
          description: {
            pt: "Capacidade de perceber armadilhas ou perigos escondidos no ambiente.",
            en: "Ability to detect traps or hidden dangers in the environment.",
            fr: "Capacité à détecter les pièges ou dangers cachés dans l'environnement.",
            de: "Fähigkeit, Fallen oder versteckte Gefahren in der Umgebung zu erkennen."
          },
          example: 5
        },
        environmentalAwareness: {
          type: "number",
          description: {
            pt: "Consciência geral do ambiente, incluindo clima, movimentação de NPCs e mudanças de terreno.",
            en: "General awareness of the environment, including weather, NPC movement, and terrain changes.",
            fr: "Conscience générale de l'environnement, y compris le climat, les mouvements des PNJ et les changements de terrain.",
            de: "Allgemeines Umweltbewusstsein, einschließlich Wetter, NPC-Bewegungen und Geländeveränderungen."
          },
          example: 7
        }
      }
    }
  },
  category: {
    projectile: {
      title: {
        pt: "Projétil",
        en: "Projectile",
        fr: "Projectile",
        de: "Projektil"
      },
      description: {
        pt: "Habilidades que lançam algo em direção a um alvo, como flechas, bolas de fogo ou magias.",
        en: "Skills that launch something toward a target, like arrows, fireballs, or spells.",
        fr: "Compétences qui lancent quelque chose vers une cible, comme des flèches, des boules de feu ou des sorts.",
        de: "Fähigkeiten, die etwas auf ein Ziel schleudern, wie Pfeile, Feuerbälle oder Zauber."
      },
      entries: {
        speed: {
          type: "number",
          description: {
            pt: "Velocidade do projétil.",
            en: "Projectile speed.",
            fr: "Vitesse du projectile.",
            de: "Geschwindigkeit des Projektils."
          },
          example: 20
        },
        range: {
          type: "number",
          description: {
            pt: "Alcance máximo do projétil.",
            en: "Maximum range of the projectile.",
            fr: "Portée maximale du projectile.",
            de: "Maximale Reichweite des Projektils."
          },
          example: 50
        },
        piercing: {
          type: "boolean",
          description: {
            pt: "Indica se o projétil atravessa múltiplos alvos.",
            en: "Indicates if the projectile pierces multiple targets.",
            fr: "Indique si le projectile traverse plusieurs cibles.",
            de: "Gibt an, ob das Projektil mehrere Ziele durchdringt."
          },
          example: false
        }
      }
    },
    target: {
      title: {
        pt: "Alvo",
        en: "Target",
        fr: "Cible",
        de: "Ziel"
      },
      description: {
        pt: "Habilidades direcionadas a um único alvo sem necessidade de projétil.",
        en: "Skills directed at a single target without a projectile.",
        fr: "Compétences dirigées vers une seule cible sans projectile.",
        de: "Fähigkeiten, die auf ein einzelnes Ziel gerichtet sind, ohne Projektil."
      },
      entries: {
        accuracy: {
          type: "number",
          description: {
            pt: "Chance de acerto da habilidade.",
            en: "Chance to hit with the skill.",
            fr: "Chance de toucher avec la compétence.",
            de: "Trefferchance der Fähigkeit."
          },
          example: 0.9
        },
      }
    },
    self: {
      title: {
        pt: "Si mesmo",
        en: "Self",
        fr: "Soi-même",
        de: "Selbst"
      },
      description: {
        pt: "Habilidades que afetam apenas o usuário, como buffs ou cura.",
        en: "Skills that affect only the user, like buffs or healing.",
        fr: "Compétences qui n'affectent que l'utilisateur, comme les buffs ou les soins.",
        de: "Fähigkeiten, die nur den Benutzer betreffen, wie Buffs oder Heilung."
      },
      entries: {
        duration: {
          type: "number",
          description: {
            pt: "Duração do efeito da habilidade.",
            en: "Duration of the skill effect.",
            fr: "Durée de l'effet de la compétence.",
            de: "Dauer des Fähigkeits-Effekts."
          },
          example: 10
        }
      }
    },
    contact: {
      title: {
        pt: "Contato",
        en: "Contact",
        fr: "Contact",
        de: "Kontakt"
      },
      description: {
        pt: "Habilidades que requerem contato físico com o alvo.",
        en: "Skills that require physical contact with the target.",
        fr: "Compétences nécessitant un contact physique avec la cible.",
        de: "Fähigkeiten, die physischen Kontakt mit dem Ziel erfordern."
      },
    },
    aura: {
      title: {
        pt: "Aura",
        en: "Aura",
        fr: "Aura",
        de: "Aura"
      },
      description: {
        pt: "Habilidades que afetam uma área ao redor do usuário de forma contínua.",
        en: "Skills affecting an area around the user continuously.",
        fr: "Compétences affectant une zone autour de l'utilisateur de manière continue.",
        de: "Fähigkeiten, die kontinuierlich einen Bereich um den Benutzer herum beeinflussen."
      },
      entries: {
        radius: {
          type: "number",
          description: {
            pt: "Raio de efeito da aura.",
            en: "Effect radius of the aura.",
            fr: "Rayon d'effet de l'aura.",
            de: "Wirkungsradius der Aura."
          },
          example: 5
        }
      }
    },
    targetArea: {
      title: {
        pt: "Área-alvo",
        en: "Target Area",
        fr: "Zone Cible",
        de: "Zielbereich"
      },
      description: {
        pt: "Habilidades que afetam uma área específica no campo.",
        en: "Skills that affect a specific area on the field.",
        fr: "Compétences qui affectent une zone spécifique sur le terrain.",
        de: "Fähigkeiten, die einen bestimmten Bereich auf dem Spielfeld beeinflussen."
      },
      entries: {
        radius: {
          type: "number",
          description: {
            pt: "Raio da área afetada.",
            en: "Radius of the affected area.",
            fr: "Rayon de la zone affectée.",
            de: "Radius des betroffenen Bereichs."
          },
          example: 3
        },
        delay: {
          type: "number",
          description: {
            pt: "Tempo até o efeito acontecer na área.",
            en: "Time until the effect occurs in the area.",
            fr: "Temps avant que l'effet se produise dans la zone.",
            de: "Zeit bis der Effekt im Bereich auftritt."
          },
          example: 1
        }
      }
    },
    wave: {
      title: {
        pt: "Onda",
        en: "Wave",
        fr: "Vague",
        de: "Welle"
      },
      description: {
        pt: "Habilidades que se propagam em linha ou cone.",
        en: "Skills that propagate in a line or cone.",
        fr: "Compétences qui se propagent en ligne ou en cône.",
        de: "Fähigkeiten, die sich in einer Linie oder einem Kegel ausbreiten."
      },
      entries: {
        width: {
          type: "number",
          description: {
            pt: "Largura da onda.",
            en: "Width of the wave.",
            fr: "Largeur de la vague.",
            de: "Breite der Welle."
          },
          example: 2
        },
        length: {
          type: "number",
          description: {
            pt: "Comprimento da onda.",
            en: "Length of the wave.",
            fr: "Longueur de la vague.",
            de: "Länge der Welle."
          },
          example: 10
        },
        speed: {
          type: "number",
          description: {
            pt: "Velocidade de propagação da onda.",
            en: "Speed of the wave propagation.",
            fr: "Vitesse de propagation de la vague.",
            de: "Geschwindigkeit der Wellenausbreitung."
          },
          example: 5
        },
        decayRate: {
          type: "number",
          description: {
            pt: "Taxa de redução do efeito da onda ao longo da distância.",
            en: "Rate at which the wave's effect diminishes over distance.",
            fr: "Taux de diminution de l'effet de la vague sur la distance.",
            de: "Rate, mit der der Effekt der Welle über die Distanz abnimmt."
          },
          example: 0.1
        }
      }
    },
    toggle: {
      title: {
        pt: "Alternável",
        en: "Toggle",
        fr: "Basculer",
        de: "Umschalten"
      },
      description: {
        pt: "Habilidades que podem ser ligadas ou desligadas, alterando o estado do usuário.",
        en: "Skills that can be turned on or off, changing the user's state.",
        fr: "Compétences pouvant être activées ou désactivées, modifiant l'état de l'utilisateur.",
        de: "Fähigkeiten, die ein- oder ausgeschaltet werden können und den Zustand des Benutzers ändern."
      },
      entries: {
        active: {
          type: "boolean",
          description: {
            pt: "Indica se a habilidade está ativa.",
            en: "Indicates if the skill is active.",
            fr: "Indique si la compétence est active.",
            de: "Gibt an, ob die Fähigkeit aktiv ist."
          },
          example: false
        }
      }
    },
    summon: {
      title: {
        pt: "Invocação",
        en: "Summon",
        fr: "Invocation",
        de: "Beschwörung"
      },
      description: {
        pt: "Habilidades que invocam criaturas ou objetos temporários.",
        en: "Skills that summon temporary creatures or objects.",
        fr: "Compétences qui invoquent des créatures ou objets temporaires.",
        de: "Fähigkeiten, die temporäre Kreaturen oder Objekte beschwören."
      },
      entries: {
        duration: {
          type: "number",
          description: {
            pt: "Duração da invocação.",
            en: "Duration of the summon.",
            fr: "Durée de l'invocation.",
            de: "Dauer der Beschwörung."
          },
          example: 30
        },
        maxSummons: {
          type: "number",
          description: {
            pt: "Número máximo de invocações simultâneas.",
            en: "Maximum number of simultaneous summons.",
            fr: "Nombre maximal d'invocations simultanées.",
            de: "Maximale Anzahl gleichzeitiger Beschwörungen."
          },
          example: 1
        }
      }
    }
  },
  rank: {
    level: ["basic", "intermediate", "advanced", "master", "legendary"],
    multiplier: 1.0,
    description: {
      pt: "Define a complexidade e o potencial máximo da habilidade.",
      en: "Defines the complexity and maximum potential of the skill.",
      fr: "Définit la complexité et le potentiel maximal de la compétence.",
      de: "Definiert die Komplexität und das maximale Potenzial der Fähigkeit.",
    },
  },
  cost: {
    types: {
      stamina: {
        base: 0,
        hold: {
          continueUse: false,
          perSec: 0
        }
      }, 
      mana: {
        base: 0,
        hold: {
          continueUse: false,
          perSec: 0
        }
      },
      health: {
        base: 0,
        hold: {
          continueUse: false,
          perSec: 0
        }
      }, 
    },
  },
  buffs: {
    strengthUp: {
      key: "strengthUp",
      title: {
        "pt-br": "força aprimorada",
        "en": "enhanced strength"
      },
      duration: 300,
      description: {
        "pt-br": "Aumenta temporariamente o poder de ataque físico.",
        "en": "Temporarily increases physical attack power."
      },
      affectedAttributes: ["strength", "attack"]
    },
    speedBoost: {
      key: "speedBoost",
      title: {
        "pt-br": "impulso de velocidade",
        "en": "speed boost"
      },
      duration: 200,
      description: {
        "pt-br": "Melhora a velocidade de movimento e esquiva.",
        "en": "Improves movement and dodge speed."
      },
      affectedAttributes: ["agility", "speed"]
    },
    manaRegen: {
      key: "manaRegen",
      title: {
        "pt-br": "regeneração espiritual",
        "en": "spiritual regeneration"
      },
      duration: 400,
      description: {
        "pt-br": "Aumenta a taxa de regeneração de mana ou energia espiritual.",
        "en": "Increases mana or spiritual energy regeneration rate."
      },
      affectedAttributes: ["spirit", "mana"]
    },
    luckBoost: {
      key: "luckBoost",
      title: {
        "pt-br": "sorte elevada",
        "en": "luck boost"
      },
      duration: 180,
      description: {
        "pt-br": "Melhora chances de acerto crítico e qualidade de coleta.",
        "en": "Improves critical hit chance and gathering quality."
      },
      affectedAttributes: ["luck"]
    }
  },
  debuffs: {
    poisoned: {
      key: "poisoned",
      title: {
        "pt-br": "envenenado",
        "en": "poisoned"
      },
      duration: 300,
      description: {
        "pt-br": "Causa dano contínuo ao longo do tempo.",
        "en": "Deals continuous damage over time."
      },
      affectedAttributes: ["health"]
    },
    slowed: {
      key: "slowed",
      title: {
        "pt-br": "lento",
        "en": "slowed"
      },
      duration: 200,
      description: {
        "pt-br": "Reduz velocidade de movimento e ataque.",
        "en": "Reduces movement and attack speed."
      },
      affectedAttributes: ["speed", "agility"]
    },
    confused: {
      key: "confused",
      title: {
        "pt-br": "confuso",
        "en": "confused"
      },
      duration: 150,
      description: {
        "pt-br": "Afeta a precisão e chance de acerto crítico.",
        "en": "Affects accuracy and critical hit chance."
      },
      affectedAttributes: ["accuracy", "luck"]
    },
    weakened: {
      key: "weakened",
      title: {
        "pt-br": "enfraquecido",
        "en": "weakened"
      },
      duration: 250,
      description: {
        "pt-br": "Reduz força e resistência física.",
        "en": "Reduces strength and physical resistance."
      },
      affectedAttributes: ["strength", "constitution"]
    }
  },
  attributeInfluence: {
    agility: 0,
    constitution: 0,
    dexterity: 0,
    flexibility: 0,
    resistance: 0,
    strength: 0,
    vigour: 0,
    abstraction: 0,
    creativity: 0,
    focus: 0,
    knowledge: 0,
    memory: 0,
    swimming: 0,
    climbing: 0,
    running: 0,
    walking: 0,
    guidance: 0,
    fishing: 0,
    hunting: 0,
    gathering: 0,
    charisma: 0,
    empathy: 0,
    leadership: 0,
    persuasion: 0,
    deception: 0,
    bravery: 0,
    portal: 0,
    vision: 0,
    hearing: 0,
    smell: 0,
    taste: 0,
    touch: 0,
    proprioception: 0,
    balance: 0,
    thermoception: 0,
    nociception: 0,
    interoception: 0,
    electroreception: 0,
    magnetoreception: 0,
    echolocation: 0,
    vibrationSensitivity: 0,
    lightPolarization: 0,
    chemicalSensitivity: 0,
    ultravioletVision: 0,
    infraredVision: 0,
    hydrostaticPressure: 0,
    passiveSonar: 0,
    energy: 0,
    health: 0,
    stamina: 0,
    mana: 0
  },
};

skills.duration = (level, skillLevel, base) => {
  return level * skillLevel + base;
}