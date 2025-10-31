export const Hotkeys = {
  state: {},
  render: () => {
    Hotkeys.div = document.createElement("div");
    Hotkeys.div.className = "hotkeys flex-row";

    for (let index = 0; index < 6; index++) {
      const element = document.createElement("div");
      element.classList.add("slot");
      element.dataset.key = index + 1;
      Hotkeys.div.appendChild(element);      
    }

    return Hotkeys.div;
  }
}