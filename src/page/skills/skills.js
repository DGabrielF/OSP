import { skillsData } from "../../scripts/core/data/skills.js";
import { State } from "../../scripts/state.js";

export const Skills = {
  state: {
    elements: [],
    categories: [],
    types: []
  },
  group: {
    elements: null,
    categories: null,
    types: null
  },
  render: () => {
    Skills.section = document.createElement("section");
    Skills.section.id = "skills";
    Skills.section.classList.add("flex-row");

    createCloseButton();

    createContent();

    createSideMenu();
    
    Skills.section.appendChild(Skills.sideMenu);
    Skills.section.appendChild(Skills.content);

    return Skills.section;
  }
}

function updateContent(key) {
  Skills.content.innerHTML = "";
  let playerData;
  if (key === "all") {
    playerData = State.player.skills;
  }
  for (const skill of playerData) {
    const skillData = skillsData.get(skill.id);
    if (!Skills.state.elements.includes(skillData.detail.element)) {
      Skills.state.elements.push(skillData.detail.element);
    };
    if (!Skills.state.categories.includes(skillData.detail.category)) {
      Skills.state.categories.push(skillData.detail.category);
    };
    if (!Skills.state.types.includes(skillData.detail.type)) {
      Skills.state.types.push(skillData.detail.type);
    };

    const div = createSkillIcon(skillData);
    Skills.content.appendChild(div);
  }
}

function createSkillIcon(skill) {
  const div = document.createElement("div");
  div.addEventListener("click", () => {
    showDetail();
  })

  const img = document.createElement("img");
  img.src = skill.sprite;
  div.appendChild(img);
  
  return div;
}

function createContent() {
  Skills.content = document.createElement("div");
  Skills.content.classList.add("attribute-content");
  Skills.content.classList.add("flex-col");
  updateContent("all")
}

function createSideMenu() {
  Skills.sideMenu = document.createElement("div");
  Skills.sideMenu.classList.add("side-menu");

  Skills.group.elements = createOptionGroup("elementos", Skills.state.elements);  
  Skills.group.categories = createOptionGroup("categorias", Skills.state.categories);
  Skills.group.types = createOptionGroup("tipos", Skills.state.types);

  Skills.sideMenu.append(Skills.group.elements, Skills.group.categories, Skills.group.types)
}

function createOptionGroup(title, optionArray) {
  const group = document.createElement("div");
  group.addEventListener("click", (e) => {
    for (const key in Skills.group) {
      if (!Object.hasOwn(Skills.group, key)) continue;
      const options = Skills.group[key].querySelector(".options");
      options.style.display = "none";      
    }
    const showOptions = group.querySelector(".options");
    showOptions.style.display = "flex";
  });
  const text = document.createElement("span");
  text.textContent = title; // colocar o texto com suas traduções depois
  const mark = document.createElement("div");
  const options = document.createElement("div");
  options.className = "options";
  options.style.display = "none";
  for (const key of optionArray) {
    const div = document.createElement("div");
    const mark = document.createElement("div");
    const text = document.createElement("span");
    text.textContent = key; // colocar o texto com suas traduções depois
    div.append(mark, text);
    Skills.sideMenu.appendChild(div);
    div.addEventListener("click", () => {
      for (const child of Skills.sideMenu.children) {
        if (child.classList.contains("selected")) {
          child.classList.remove("selected");
        }
      }
      div.classList.add("selected");
      updateContent(key);
    });
    options.appendChild(div);
  }
  group.append(text, mark, options);
  return group;
}

function createCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  const image = document.createElement("img");
  image.draggable = false;
  image.src = "src/assets/menu-icons/close.svg";
  closeButton.appendChild(image);
  Skills.section.appendChild(closeButton);
}