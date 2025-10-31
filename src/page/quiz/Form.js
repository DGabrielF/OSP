import { FireStore } from "../../scripts/firebase/store.js";

export const Form = {
  state: {
    question: null,
    selectedAnswer: null,
  },

  render: () => {
    Form.section = document.createElement("section");
    Form.section.id = "quizz-form";
    Form.section.classList.add("flex-col");

    const title = document.createElement("h1");
    title.textContent = "Super Quizz";
    Form.section.appendChild(title);

    Form.questionStatement = document.createElement("div");
    Form.questionStatement.className = "question-statement";
    Form.section.appendChild(Form.questionStatement);
    
    Form.answerArea = document.createElement("div");
    Form.answerArea.className = "answer-area flex-col";
    Form.section.appendChild(Form.answerArea);

    const buttonArea = document.createElement("div");
    buttonArea.className = "button-area";
    Form.section.appendChild(buttonArea);

    Form.confirmButton = document.createElement("button");
    Form.confirmButton.textContent = "CONFIRMAR";
    Form.confirmButton.addEventListener("click", Form.checkAnswer);
    buttonArea.appendChild(Form.confirmButton);

    Form.retryButton = document.createElement("button");
    Form.retryButton.textContent = "REINICIAR";
    Form.retryButton.style.display = "none";
    Form.retryButton.addEventListener("click", Form.retryQuestion);
    buttonArea.appendChild(Form.retryButton);

    return Form.section;
  },

  update: async () => {
    const response = await FireStore.getDocById("ynAzEYL1K2EvoM4OhBUO", "quizzQuestions");
    console.log("resposta:", response);
    Form.state.question = response.data;
    Form.questionStatement.textContent = response.data.question;

    Form.answerArea.innerHTML = "";
    if (response.data.type === "common" || response.data.type === "multiple") {
      for (const element of response.data.answers) {
        const option = document.createElement("button");
        option.addEventListener("click", (e) => {
          if (response.data.type === "common") {
            for (const option of e.target.parentElement.children) {
              option.classList.remove("selected");
            };
            e.target.classList.add("selected");
          } else {
            e.target.classList.toggle("selected");
          }
        })
        option.textContent = element.text;
        Form.answerArea.appendChild(option);
      }
    } else if (response.data.type === "true/false") {
      const trueOption = document.createElement("div");
      trueOption.textContent = "verdadeiro";
      Form.answerArea.appendChild(trueOption);

      const falseOption = document.createElement("div");
      falseOption.textContent = "falso";
      Form.answerArea.appendChild(falseOption);
    } else {

    }
  },

  checkAnswer: () => {
    const buttons = Form.answerArea.querySelectorAll("button");
    const answers = Form.answerArea.querySelectorAll(".selected");
    const response = {text: null, correct: null};

    if (answers.length === 0) return {text: null, correct: null}
    for (const answer of answers) {
      const template = Form.state.question.answers.find(item => item.text === answer.textContent);
      Form.questionStatement.innerHTML = "";

      const message = document.createElement("span");
      Form.questionStatement.appendChild(message);

      if (template.correct) {
        message.textContent = "Parabéns, você acertou!";
        answer.classList.add("correct");
      } else {
        message.textContent = "Infelizmente você errou!";
        answer.classList.add("wrong");
      }
    }
    for (const btn of buttons) {
      btn.disabled = true;
    }

    Form.confirmButton.style.display = "none";
    Form.retryButton.style.display = "block";
    return response;
  },

  retryQuestion: () => {
    Form.confirmButton.style.display = "block";
    Form.retryButton.style.display = "none";
  }
}