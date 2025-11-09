import { State } from "../../../scripts/state.js";
import { Hotkeys } from "../hotkeys/hotkeys.js";

export const SkillSets = {
  state: {},
  render: () => {
    SkillSets.div = document.createElement("div");
    SkillSets.div.className = "skill-set flex-col";

    let index = 0;
    for (const key in State.player.hotkeys) {
      index++

      if (!Object.hasOwn(State.player.hotkeys, key)) continue;
      
      const element = document.createElement("button");
      element.classList.add("slot");
      element.dataset.key = key
      element.disabled = (key === Hotkeys.state.usedSet)
      element.style.right = `${10 + index * 10}px`
      element.addEventListener("click", () => {
        SkillSets.updateSet(key)
      })
      
      
      SkillSets.div.appendChild(element);      
    }

    return SkillSets.div;
  },

  updateSet: (key) => {
    Hotkeys.update(key)
    for (const child of SkillSets.div.children) {
      child.disabled = (key === child.dataset.key);      
    }
  }
}