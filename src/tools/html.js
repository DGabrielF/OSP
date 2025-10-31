export const ToolsHtml = {
  createInput: (id, key, labelText, type = "text") => {
    const wrapper = document.createElement("div");
      if (labelText) {
        const label = document.createElement("label");
        label.textContent = labelText;
        wrapper.appendChild(label);
      }

      const input = document.createElement("input");
      input.type = type;
      if (id) input.id = id;
      if (key) input.dataset.key = key;
      wrapper.appendChild(input);

    return wrapper;
  },

  createSelect(key, labelText, options) {
    const wrapper = document.createElement("div");

    if (labelText) {
      const label = document.createElement("label");
      label.textContent = labelText;
      wrapper.appendChild(label);
    }

    const select = document.createElement("select");
    select.dataset.key = key;

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- selecione --";
    select.appendChild(placeholder);

    if (options) {
      options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.key;
        option.textContent = this.getDisplayText(opt.display);
        select.appendChild(option);
      });
    }

    wrapper.appendChild(select);
    return wrapper;
  },

  getDisplayText: (displayArr, lang = "pt-br") => {
    const found = displayArr.find((d) => d.language === lang);
    return found ? found.text : displayArr[0].text;
  },
}
