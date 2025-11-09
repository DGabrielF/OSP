import { State } from "../../scripts/state.js";

export class ProgressBar {
  constructor({value, maxValue, showText}) {
    this.#validateParameters(value, maxValue, showText);
    
    this.value = value;
    this.maxValue = maxValue;
    this.showText = showText;
  }

  render() {
    this.container = this.#createElementWithClass("div", "progress_container");
    
    if (this.showText) {
      this.label = this.#createElementWithClass("span", "label")
      this.container.appendChild(this.label);
    }

    this.bar = this.#createElementWithClass("div", "progress_bar");
    this.container.appendChild(this.bar);


    this.update(this.value ?? 0, this.maxValue ?? 1);

    return this.container;
  }

  update(newValue, newMaxValue) {
    if (typeof newMaxValue === "number" && newMaxValue > 0) this.maxValue = newMaxValue;
    
    const safeValue = (typeof newValue === "number") ? newValue : Number(newValue);
    this.value = Number.isFinite(safeValue) ? safeValue : 0;

    const safeMax = (typeof this.maxValue === "number" && this.maxValue > 0) ? this.maxValue : 1;

    let percentage = Math.floor((this.value / safeMax) * 100);
    percentage = Math.max(0, Math.min(percentage, 100));
    const percentageString = `${percentage}%`

    if (this.bar) this.bar.style.width = percentageString;

    if (this.showText) {
      this.label.textContent = percentageString;
    }
  }

  listenToState(pathCurrent, opts = {}) {
    if (this._unsubscribe) this._unsubscribe();

    const pathMax = opts.pathMax ?? (pathCurrent.endsWith(".current") ? pathCurrent.replace(/\.current$/, ".max") : opts.pathMax);

    const handler = (newValue) => {
      let max = (pathMax) ? (State.get ? State.get(pathMax) : undefined) : undefined;
      if (max == null && this.maxValue != null) max = this.maxValue;
      this.update(newValue, max);
    };

    this._unsubscribe = State.subscribe(pathCurrent, handler);

    const initialValue = (State.get) ? State.get(pathCurrent) : undefined;
    const initialMax = (pathMax && State.get) ? State.get(pathMax) : undefined;
    if (initialValue !== undefined) this.update(initialValue, initialMax);
  }

  detach() {
    if (this._unsubscribe) {
      try { this._unsubscribe(); } catch (e) { /* ignore */ }
      this._unsubscribe = null;
    }
  }

  #createElementWithClass(tag, className = "") {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  #validateParameters(currentValue, maxValue, showValue) {
  if (typeof currentValue !== "number" || currentValue < 0) {
      throw new Error("O parâmetro 'currentValue' deve ser um número positivo.");
    }
    
    if (typeof maxValue !== "number" || maxValue <= 0) {
      throw new Error("O parâmetro 'maxValue' deve ser um número maior que zero.");
    }
    
    if (currentValue > maxValue) {
      throw new Error("'currentValue' não pode ser maior que 'maxValue'.");
    }
    
    if (showValue && typeof showValue !== "boolean") {
      throw new Error("O parâmetro 'showValue' deve ser um valor booleano.");
    }
  }
}