import { quizzOptions } from "../../../../database/quizz.js";
import { FireStore } from "../../../scripts/firebase/store.js";
import { ToolsHtml } from "../../../tools/html.js";

export const Add = {
  state: {
    category: "",
    theme: "",
    type: "",
    difficulty: "",
    question: "",
    answers: [],
  },

  render: () => {
    Add.section = document.createElement("section");
    Add.section.id = "quizz-setup-add";

    const title = document.createElement("h1");
    title.textContent = Add.getDisplayText(quizzOptions.title)
    Add.section.appendChild(title);

    const backButton = document.createElement("button");
    backButton.className = "back";
    backButton.addEventListener("click", () => {
      console.log("Voltar acionado!");
    });

    Add.form = document.createElement("form");
    Add.section.appendChild(Add.form);
    Add.form.appendChild(ToolsHtml.createInput(null, "question", "Pergunta", "text"));

    Add.form.appendChild(ToolsHtml.createSelect("category", "Categoria", quizzOptions.categories));
    Add.form.appendChild(ToolsHtml.createSelect("theme", "Tema", []));
    Add.form.appendChild(ToolsHtml.createSelect("type", "Tipo", quizzOptions.type));
    Add.form.appendChild(ToolsHtml.createSelect("difficulty", "Dificuldade", quizzOptions.difficulty));
    Add.answersContainer = document.createElement("div");
    Add.answersContainer.classList.add("answers-container");
    Add.form.appendChild(Add.answersContainer);

    const buttonArea = document.createElement("div");
    buttonArea.className = "button-area";

    const saveButton = document.createElement("button");
    saveButton.textContent = "salvar";
    saveButton.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("JSON result:", Add.state);
      const response = await FireStore.add(null, "quizzQuestions", Add.state);
      console.log("resposta:", response);
    });
    
    const cleanButton = document.createElement("button");
    cleanButton.textContent = "limpar";
    cleanButton.addEventListener("click", (e) => {
    e.preventDefault();
    Add.state = { category: "", theme: "", type: "", difficulty: "", question: "", answers: [] };
    });

    buttonArea.append(saveButton, cleanButton);
    Add.section.appendChild(buttonArea);
    Add.addEventListeners();


    return Add.section;
  },

  updateThemes: (categoryKey) => {
    const category = quizzOptions.categories.find((c) => c.key === categoryKey);
    const themeSelect = Add.form.querySelector("select[data-key='theme']");
    themeSelect.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- selecione --";
    themeSelect.appendChild(placeholder);

    if (category) {
      category.themes.forEach((theme) => {
        const option = document.createElement("option");
        option.value = theme.key;
        option.textContent = Add.getDisplayText(theme.display);
        themeSelect.appendChild(option);
      });
    }
  },

  renderAnswers(typeKey) {
    Add.answersContainer.innerHTML = "";
    
    if (typeKey === "true/false") {
      Add.answersContainer.innerHTML = "";
      const wrapper = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = "A afirmação é verdadeira?";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.key = "answers";
      checkbox.addEventListener("change", () => {
        this.state.answers = [
          { text: "Verdadeiro", key: "true" },
          { text: "Falso", key: "false" },
        ];
      });
      wrapper.appendChild(label);
      wrapper.appendChild(checkbox);
      Add.answersContainer.appendChild(wrapper);
    } else if (typeKey === "multiple" || typeKey === "common") {
      this.state.answers = [];

      for (let i = 0; i < 4; i++) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("answer-row");

      const input = document.createElement("input");
      input.type = "text";
      input.name = `answer`;
      input.dataset.key = `answer-${i}`;
      input.placeholder = `Resposta ${i + 1}`;

      // Box de seleção
      const selector = document.createElement("input");
      selector.type = typeKey === "multiple" ? "checkbox" : "radio";
      selector.name = "correct-answer";
      selector.dataset.correct = i;

        selector.addEventListener("change", (e) => {
          if (typeKey === "multiple") {
            this.state.answers[i] = {
              ...(this.state.answers[i] || { text: "" }),
              correct: e.target.checked,
            };
          } else {
            Add.state.answers.forEach((ans, idx) => {
              if (idx === i) ans.correct = idx === i;
            });
          }
        });

        wrapper.appendChild(input);
        wrapper.appendChild(selector);
        Add.answersContainer.appendChild(wrapper);
      }
    }
  },

  getDisplayText: (displayArr, lang = "pt-br") => {
    const found = displayArr.find((d) => d.language === lang);
    return found ? found.text : displayArr[0].text;
  },

  addEventListeners: () => {
    Add.form.addEventListener("input", (e) => {
      const key = e.target.dataset.key;
      if (!key) return;

      if (key.startsWith("answer-")) {
        const index = parseInt(key.split("-")[1], 10);
        Add.state.answers[index] = { text: e.target.value, key: `opt${index + 1}` };
      } else {
        Add.state[key] = e.target.value;
        if (key === "category") {
          Add.updateThemes(e.target.value);
        }
        if (key === "type") {
          Add.renderAnswers(e.target.value);
        }
      }
    })
  },
}