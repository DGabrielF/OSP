import { State } from "../../state.js";
import { skillsData } from "../data/skills.js";

export const slot = {
  use: (playerSkills, skillId) => {},
  cost: (playerSkills, skillId) => {},
  cooldownCheck: (playerSkills, skillId) => {},
}

slot.use = (player, slotUsed) => {
  if (slotUsed.type === "item") {

  }
  
  if (slotUsed.type === "skill") {
    const skillId = slotUsed.equiped;
    const usedSkill = skillsData.get(skillId);
    if (!usedSkill) return;
  
    const cooldown = slot.cooldownCheck(player.skills, usedSkill);
    if (cooldown) return;
    
    const enoughEnergy = slot.cost(player.attributes.vitality, usedSkill.cost);
    if (!enoughEnergy) return;
  
    const newEnergy = State.get(`player.attributes.vitality.${usedSkill.cost.type}.current`) - usedSkill.cost.base;
    State.set(`player.attributes.vitality.${usedSkill.cost.type}.current`, newEnergy);
  
    if (usedSkill) {
      console.log(usedSkill.detail.category)
    }
  }
}

slot.cost = (attribute, skillCost) => {
  const playerEnergy = attribute[skillCost.type].current;
  const skillBase = skillCost.base;
  return playerEnergy >= skillBase;
}

slot.cooldownCheck = (playerSkills, usedSkill) => {
  const skillInfo = playerSkills.find(item => item.id === usedSkill.id);
  return (skillInfo.cooldown > 0);
}