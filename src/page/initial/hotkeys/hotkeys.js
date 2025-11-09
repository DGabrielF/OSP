import { slot } from "../../../scripts/core/calculators/slot.js";
import { State } from "../../../scripts/state.js";

export const Hotkeys = {
  state: {
    usedSet: "set-1",
  },
  render: () => {
    Hotkeys.div = document.createElement("div");
    Hotkeys.div.className = "hotkeys flex-row";

    createSlots();

    return Hotkeys.div;
  },

  update: (key) => {
    Hotkeys.state.usedSet = key;
    Hotkeys.div.innerHTML = "";
    createSlots()
  }
}

function createSlots() {
  for (const key in State.player.hotkeys[Hotkeys.state.usedSet]) {
    if (!Object.hasOwn(State.player.hotkeys[Hotkeys.state.usedSet], key)) continue;
    const element = document.createElement("div");
    element.addEventListener("click", () => {
      slot.use(State.player, State.player.hotkeys[Hotkeys.state.usedSet][key])
    });
    element.classList.add("slot");
    Hotkeys.div.appendChild(element);
  }
}
