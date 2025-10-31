import { elements } from "./elements.js";
import { items } from './items.js';
import { missions } from './missions.js';
import { skills } from './skills.js';
import { creatures } from './creatures.js';
import { producers } from './producers.js';
import { world } from './world.js';
import { attributes } from './attributes.js';
import { object } from "../utils/obj.js";

export const GameConfig = {
  elements,
  items,
  missions,
  skills,
  creatures,
  producers,
  world,
  attributes,
  get: (id, database) => {},
};

/**
 * Busca um elemento pelo nome (em qualquer idioma)
 * @param {string} name - nome do elemento
 * @returns {object|null} elemento correspondente ou null
 */
GameConfig.get = ({id, db}) => {
  if (db && !GameConfig[db]) {
    console.warn(`Database "${db}" não existe em GameConfig.`);
    return undefined;
  }

  if (db && id) return GameConfig[db][id] ?? undefined;
  if (db) return GameConfig[db];

  return object.getAttributeByKey(id, GameConfig);
}