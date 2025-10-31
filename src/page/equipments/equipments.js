import { DB } from "../../../database/database.js";
import { State } from "../../scripts/state.js";
import { Language } from "../../tools/language.js";

export const Equipment = {
  state: {
    selectedSet: null,
    options: {
      "neck": {
        key: "neck",
        title: {
          "pt-br": "pescoço",
          "en": "neck"
        }
      },
      "head": {
        key: "head",
        title: {
          "pt-br": "cabeça",
          "en": "head"
        }
      },
      "back": {
        key: "back",
        title: {
          "pt-br": "costas",
          "en": "back"
        }
      },
      "right-arm": {
        key: "right-arm",
        title: {
          "pt-br": "braço direito",
          "en": "right arm"
        }
      },
      "body": {
        key: "body",
        title: {
          "pt-br": "corpo",
          "en": "body"
        }
      },
      "left-arm": {
        key: "left-arm",
        title: {
          "pt-br": "braço esquerdo",
          "en": "left arm"
        }
      },
      "right-hand": {
        key: "right-hand",
        title: {
          "pt-br": "mão direita",
          "en": "right hand"
        }
      },
      "belt": {
        key: "belt",
        title: {
          "pt-br": "cinto",
          "en": "belt"
        }
      },
      "left-hand": {
        key: "left-hand",
          title: {
          "pt-br": "mão esquerda",
          "en": "left hand"
        }
      },
      "right-thigh": {
        key: "right-thigh",
        title: {
          "pt-br": "coxa direita",
          "en": "right thigh"
        }
      },
      "legs": {
        key: "legs",
        title: {
          "pt-br": "pernas",
          "en": "legs"
        }
      },
      "left-thigh": {
        key: "left-thigh",
        title: {
          "pt-br": "coxa esquerda",
          "en": "left thigh"
        }
      },
      "null": null,
      "shoes": {
        key: "shoes",
        title: {
          "pt-br": "sapatos",
          "en": "shoes"
        }
      }
    },
    inventory: {
      limit: 16,
      data: {

      }
    },
    transferItem: null,
  },

  render: () => {
    Equipment.section = document.createElement("section");
    Equipment.section.id = "equipment";
    Equipment.section.classList.add("flex-row");

    updateEquipments();

    return Equipment.section;
  }
}

function updateEquipments() {
  createCloseButton();

  createSetArea();

  createDetailArea();

  createBackpackArea();
}

function createCloseButton() {
  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  const image = document.createElement("img");
  image.draggable = false;
  image.src = "src/assets/menu-icons/close.svg";
  closeButton.appendChild(image);
  Equipment.section.appendChild(closeButton);
}

function createBackpackArea() {
  Equipment.backpack = document.createElement("div");
  Equipment.backpack.classList = "backpack";
  Equipment.section.appendChild(Equipment.backpack);

  for (let index = 0; index < Equipment.state.inventory.limit; index++) {
    const div = document.createElement("div");
    Equipment.backpack.appendChild(div);
    div.className = "slot flex-col";
    div.dataset.type = "backpack";
    div.dataset.slot = index;

    div.addEventListener("click", () => {
      updateAttributeDetails(item)
    });

    const itemId = Equipment.state.inventory.data[index];
    const item = DB.item.data[itemId];

    if (item) {
      const image = document.createElement("img");    

      image.src = `src/assets/sprites/equipment/${item.tag}/${item.name.en}.png`;
      image.alt = item.name[Language.self];
      div.style.border = `1px solid ${DB.item.qualities[item.quality].color}`;
      div.style.boxShadow = `0 0 2px ${DB.item.qualities[item.quality].color}`;    

      const label = document.createElement("span");
      label.textContent = item ? item.name[Language.self] : Equipment.state.options[option].title[Language.self];      

      div.addEventListener("mousemove", (e) => {
        label.style.display = "block";
        label.style.left = `${e.clientX}px`;
        label.style.top = `${e.clientY - 30}px`;
      });
      div.addEventListener("mouseout", () => {
        label.style.display = "none";
      });
      div.addEventListener("mousedown", () => {
        label.style.display = "none";
      });
      
      div.append(image, label);
    }

    enableDragAndDrop(div, item, "backpack");
  }
}

function createSetArea() {
  Equipment.set = document.createElement("div");
  Equipment.set.className = "set-area flex-col";
  Equipment.section.appendChild(Equipment.set);

  const set = document.createElement("div");
  set.className = "set";
  Equipment.set.appendChild(set);

  let index = 0;
  for (const option in Equipment.state.options) {
    const div = document.createElement("div");
    set.appendChild(div);
    index++;

    if (!Equipment.state.options[option]) continue;

    div.className = "slot flex-col";
    div.dataset.type = "equipment";
    div.dataset.slot = option;
    if ((index + 1) % 3 !== 0) {
      div.classList.add("side");
    }

    const itemId = State.player.items.equipment[option];
    const item = DB.item.data[itemId];

    div.addEventListener("click", () => {
      updateAttributeDetails(item)
    });

    const image = document.createElement("img");
    
    if (item) {
      image.src = `src/assets/sprites/equipment/${item.tag}/${item.name.en}.png`;
      image.alt = item.name[Language.self];
      div.style.border = `1px solid ${DB.item.qualities[item.quality].color}`;
      div.style.boxShadow = `0 0 2px ${DB.item.qualities[item.quality].color}`;    
    } else {
      image.src = `src/assets/equipment-icons/${option}.png`;
      div.classList.add("empty")
      image.onerror = () => {
        image.src = "src/assets/default-error.png";
      };
      image.draggable = false;
      image.alt = Equipment.state.options[option].title[Language.self];      
    }

    const label = document.createElement("span");
    label.textContent = item ? item.name[Language.self] : Equipment.state.options[option].title[Language.self];      

    div.addEventListener("mousemove", (e) => {
      label.style.display = "block";
      label.style.left = `${e.clientX}px`;
      label.style.top = `${e.clientY - 30}px`;
    });
    div.addEventListener("mouseout", () => {
      label.style.display = "none";
    });
    
    div.append(image, label);
    
    enableDragAndDrop(div, item, "equipment");
  }
}

function createDetailArea() {
  Equipment.details = document.createElement("div");
  Equipment.details.className = "attribute-detail flex-col";
  Equipment.set.appendChild(Equipment.details);
  updateAttributeDetails();
}

function updateAttributeDetails(item) {
  Equipment.details.innerHTML = "";  
  const title = document.createElement("h2");
  title.textContent = "Atributos obtidos".toUpperCase();
  
  if (item) {
    title.textContent = Equipment.state.options[item.tag].title[Language.self].toUpperCase();
  }
  Equipment.details.append(title);
}

function enableDragAndDrop(slot, item, slotType) {
  if (item) {  
    slot.addEventListener("dragstart", (e) => {  
      slot.draggable = true;
      const label = slot.querySelector("span");
      if (label) {
        label.style.display = "none";
      }
      Equipment.state.transferItem = item;
      e.dataTransfer.setData("item-id", Object.keys(DB.item.data).find(id => DB.item.data[id] === item));
      e.dataTransfer.setData("slot-type", slotType);
      e.dataTransfer.setData("slot-key", slot.dataset.slot);
    });
  }

  slot.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessário para permitir drop
    if (slot.dataset.type === "equipment" && slot.dataset.slot !== Equipment.state.transferItem.tag) return;
    slot.classList.add("drag-over");
  });

  slot.addEventListener("dragleave", () => {
    slot.classList.remove("drag-over", "drag-allowed");
  });

  slot.addEventListener("drop", (e) => {
    e.preventDefault();
    slot.classList.remove("drag-over", "drag-allowed");

    const itemId = e.dataTransfer.getData("item-id");
    const fromType = e.dataTransfer.getData("slot-type");
    const fromKey = e.dataTransfer.getData("slot-key");

    handleItemDrop(itemId, fromType, fromKey, slotType, slot.dataset.slot);
  });
}

function handleItemDrop(itemId, fromType, fromKey, toType, toKey) {
  const item = DB.item.data[itemId];
  if (!item) return;

  // Caso esteja indo para EQUIPAMENTO
  if (toType === "equipment") {
    const validSlot = Equipment.state.options[toKey]?.key === item.tag;
    if (!validSlot) {
      alert("Este item não pode ser equipado aqui!");
      return;
    }

    // Remove do slot de origem
    if (fromType === "equipment") {
      State.player.equipments[fromKey] = null;
    } else if (fromType === "backpack") {
      delete Equipment.state.inventory.data[fromKey];
    }

    // Equipa no destino
    State.player.equipments[toKey] = itemId;
  }

  // Caso esteja indo para MOCHILA
  if (toType === "backpack") {
    if (Object.keys(Equipment.state.inventory.data).length >= Equipment.state.inventory.limit) {
      alert("Mochila cheia!");
      return;
    }

    // Remove do slot de origem
    if (fromType === "equipment") {
      State.player.equipments[fromKey] = null;
    } else if (fromType === "backpack") {
      delete Equipment.state.inventory.data[fromKey];
    }

    // Adiciona ao inventário
    Equipment.state.inventory.data[toKey] = itemId;
  }

  // Re-renderizar para atualizar interface
  Equipment.section.innerHTML = "";
  updateEquipments();
}