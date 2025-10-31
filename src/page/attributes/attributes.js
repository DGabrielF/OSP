import { DB } from "../../../database/database.js";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar.js";
import { attribute } from "../../scripts/core/calculators/attribute.js";
import { attributes } from "../../scripts/core/config/attributes.js";
import { State } from "../../scripts/state.js";
import { Language } from "../../tools/language.js";

export const Attributes = {  
  render: () => {
    Attributes.section = document.createElement("section");
    Attributes.section.id = "attributes";
    Attributes.section.classList.add("flex-row");

    createCloseButton();
    
    createSideMenu();
    Attributes.section.appendChild(Attributes.sideMenu);

    createContent();
    Attributes.section.appendChild(Attributes.content);

    return Attributes.section;
  }
}

function updateContent(key) {
  Attributes.content.innerHTML = "";
  const database = attributes[key]
  for (const attr in database) {
    const div = createAttributeDiv(key, attr);
    if (!div) continue;
    Attributes.content.appendChild(div);
  }
}

function createAttributeDiv(key, attr) {
  const database = attributes[key][attr];
  const playerdata = State.player.attributes[key][attr];
  if (!playerdata) return;

  const div = document.createElement("div");
  const name = document.createElement("span");
  name.textContent = database.title[Language.self];
  div.appendChild(name);
  const help = document.createElement("img");
  help.src = "src/assets/menu-icons/question.svg";
  help.alt = "help";
  help.addEventListener("click", () => {
    attribute.addXP(attr, 100);
  })
  div.appendChild(help);
  const progressBar = new ProgressBar({
    value: playerdata.currentXP,
    maxValue: playerdata.xpToUp,
    showText: true
  });
  const attributeDiv = progressBar.render();
  const label = attributeDiv.querySelector("span");
  attributeDiv.addEventListener("mouseenter", () => {
    label.classList.add("show");
  });
  attributeDiv.addEventListener("mouseleave", () => {
    label.classList.remove("show");
  });
  div.appendChild(attributeDiv);
  return div;
}

function createContent() {
  Attributes.content = document.createElement("div");
  Attributes.content.classList.add("attribute-content");
  Attributes.content.classList.add("flex-col");
}

function createSideMenu() {
  Attributes.sideMenu = document.createElement("div");
  Attributes.sideMenu.classList.add("side-menu");

  for (const key in attributes) {
    if (!Object.hasOwn(DB.users.attributes, key)) continue;
    const div = document.createElement("div");

    const mark = document.createElement("div");

    const text = document.createElement("span");
    text.textContent = key; // colocar o texto com suas traduções depois
    div.append(mark, text);
    Attributes.sideMenu.appendChild(div);
    div.addEventListener("click", () => {
      for (const child of Attributes.sideMenu.children) {
        if (child.classList.contains("selected")) {
          child.classList.remove("selected");
        }
      }
      div.classList.add("selected");
      updateContent(key);
    });
  }
}

function createCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  const image = document.createElement("img");
  image.draggable = false;
  image.src = "src/assets/menu-icons/close.svg";
  closeButton.appendChild(image);
  Attributes.section.appendChild(closeButton);
}