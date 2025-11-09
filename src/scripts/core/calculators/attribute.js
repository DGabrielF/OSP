import { State } from "../../state.js";
import { attributes } from "../config/attributes.js"
import { object } from "../utils/obj.js"

export const attribute = {
  constants: {
    xpToLevel: {
      base: 100,
      pow: 15,
    }
  },
  xpToLevel: (level, correlation) => {},
  addXP: (attributeId, xpAmount) => {},
  checkLevelUp: (player, attributeId) => {},
  levelUp: (player, attributeId) => {},
}

attribute.xpToLevel = (attributeKey) => {
  const playerLevel = object.getAttributeByKey(attributeKey, State.player.attributes)
  if (!playerLevel) return;
  const level = playerLevel.level
  const database = object.getAttributeByKey(attributeKey, attributes)
  const multiplier = database.correlation.multiplier
  const sense = database.correlation.sense
  const result = Math.floor(100 * multiplier * sense * level ** ( 1 + multiplier / 10 )) + 99
  return result;
}

attribute.addXP = (attributeId, xpAmount) => {
  const attr = object.getAttributeByKey(attributeId, State.player.attributes);
  if (!attr) return;

  attr.currentXP += xpAmount;
  attribute.checkLevelUp(attributeId);
}

attribute.checkLevelUp = (attributeId) => {
  const attr = object.getAttributeByKey(attributeId, State.player.attributes);

  while (attr.currentXP >= attr.xpToUp) {
    attribute.levelUp(attributeId);
  }
}

attribute.levelUp = (attributeId) => {
  const attr = object.getAttributeByKey(attributeId, State.player.attributes);
  attr.level += 1;
  attr.currentXP -= attr.xpToUp;
  attribute.update();
}

attribute.update = () => {
  for (const attr in State.player.attributes) {
    for (const key in State.player.attributes[attr]) {
      if (attributes[attr][key].correlation.multiplier !== 0) {
        State.player.attributes[attr][key].xpToUp = attribute.xpToLevel(key)
      }
      if (!attributes[attr][key].hasOwnProperty("constants")) continue;
      const dependencies = attributes[attr][key].constants.dependencies;
      if (Object.hasOwn(attributes[attr][key].constants, "percent")) {
        const percentConts = attributes[attr][key].constants.percent;
        const resultAtt = calculateProbaAttr(percentConts, dependencies);
        State.player.attributes[attr][key] = resultAtt;
      } else if (Object.hasOwn(attributes[attr][key].constants, "dependencies")) {
        const resultAtt = calculateRealAttribute(dependencies);
        if (dependencies.max) {
          State.player.attributes[attr][key].max = resultAtt;
          State.player.attributes[attr][key].current = State.player.attributes[attr][key].current ? State.player.attributes[attr][key].current : State.player.attributes[attr][key].max;
        } else {
          State.player.attributes[attr][key] = resultAtt;
        }
      }
    }    
  }
}

function calculateRealAttribute (dependencies) {
  const base = dependencies.base?dependencies.base:0
  const productoryResult = productory(State.player.attributes, dependencies)
  return base + productoryResult
}

function calculateProbaAttr ({min, max, k, p}, dependencies) {
  return min + (max - min) * (1 - Math.exp(- k * productory(State.player.attributes, dependencies)) ** p)
}

function productory(playerAttributes, obj) {
  if (!obj) return 0;
  return Object.entries(obj).reduce((sum, [key, weight]) => {
    const attribute = object.getAttributeByKey(key, playerAttributes);
    return sum + (attribute?.level || 0) * weight;
  }, 0);
}