import { Settings } from "../../settings/settings.js";

export const MainMenu = {
  state: {
    selectedOption: null,
    options: [
      "backpack",
      "attributes",
      "skills",
      "missions",
      "bestiary",
      "events",
      "friends",
      "guild",
      "organizations",
    ]
  },

  render: () => {
    MainMenu.div = document.createElement("div");
    MainMenu.div.id = "main-menu";
    MainMenu.div.classList.add("flex-row");

    MainMenu.shortcuts = Settings.state.shortcuts.default;

    const hideMenu = document.createElement("button");
    hideMenu.className = "toggle flex-row";
    hideMenu.addEventListener("click", () => {
      showMenu.style.display = "flex";
      hideMenu.style.display = "none";
      MainMenu.optionArea.style.display = "none";
    })
    const hideMenuIcon = document.createElement("img");
    hideMenuIcon.draggable = false;
    hideMenuIcon.src = "src/assets/menu-icons/right.svg";
    hideMenuIcon.alt = "hide";
    hideMenu.appendChild(hideMenuIcon);

    const showMenu = document.createElement("button");
    showMenu.className = "toggle flex-row";
    showMenu.style.display = "none";
    showMenu.addEventListener("click", () => {
      showMenu.style.display = "none";
      hideMenu.style.display = "flex";
      MainMenu.optionArea.style.display = "flex";
    })
    const showMenuIcon = document.createElement("img");
    showMenuIcon.draggable = false;
    showMenuIcon.src = "src/assets/menu-icons/left.svg";
    showMenuIcon.alt = "show";
    showMenu.appendChild(showMenuIcon);
    
    MainMenu.optionArea = document.createElement("div");
    MainMenu.optionArea.className = "options flex-row";
    
    MainMenu.div.append(hideMenu, showMenu, MainMenu.optionArea);


    for (const option of MainMenu.state.options) {
      const button = document.createElement("button");
      button.dataset.key = option;
      button.addEventListener("click", () => {
        MainMenu.cleanSelected();
        button.disabled = true;
        MainMenu.state.selectedOption = option;
        image.src = `src/assets/menu-icons/${button.dataset.key}-dark.svg`;
      });
      MainMenu.optionArea.appendChild(button);
      
      const image = document.createElement("img");
      image.draggable = false;
      image.src = `src/assets/menu-icons/${option}.svg`;
      image.alt = option;
      image.addEventListener("mouseenter", () => {
        label.classList.add("show");
        if (!button.disabled) button.style.backgroundColor = "#ffffff55";
      })
      image.addEventListener("mouseout", () => {
        label.classList.remove("show");
        button.style.backgroundColor = (button.disabled) ? "var(--color-primary)" : "transparent";
      })
      
      const label = document.createElement("span");
      label.textContent = `${option} (${Settings.state.shortcuts.default[option].toUpperCase()})`;
      button.append(image, label);
    }

    document.addEventListener("keydown", (e) => MainMenu.addListeners(e))
    return MainMenu.div;
  },

  cleanSelected: () => {
    for (const child of MainMenu.optionArea.children) {
      if (child.disabled) {
        child.disabled = false;
        child.style.backgroundColor = "transparent";
        const image = child.querySelector("img");
        image.src = `src/assets/menu-icons/${child.dataset.key}.svg`;
      }
    }
  },

  addListeners: (e) => {
    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

    const key = e.key.toLowerCase();
    const action = Object.keys(MainMenu.shortcuts).find(opt => MainMenu.shortcuts[opt] === key);

    if (action) {
      e.preventDefault();
      const element = MainMenu.div.querySelector(`[data-key="${action}"]`);
      element.click();
    }
  }
}