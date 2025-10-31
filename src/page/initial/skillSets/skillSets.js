export const SkillSets = {
  state: {},
  render: () => {
    SkillSets.div = document.createElement("div");
    SkillSets.div.className = "skill-set flex-col";

    for (let index = 0; index < 3; index++) {
      const element = document.createElement("div");
      element.classList.add("slot");
      element.dataset.key = index + 1;
      element.style.right = `${10 + index * 10}px`
      SkillSets.div.appendChild(element);      
    }

    return SkillSets.div;
  }
}