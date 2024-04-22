const main = document.querySelector("[data-js='main']");
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const addCard = document.createElement("section");
  addCard.classList.add("question-card");
  const img = document.createElement("img");
  img.classList.add("question-card__icon");
  img.setAttribute("src", "./assets/bookmark.png");
  img.setAttribute("alt", "bookmark");
  img.setAttribute("data-js", "bookmark");
  const addQuestion = document.createElement("h2");
  addQuestion.textContent = data["add-question"];
  const h2 = document.createElement("h2");
  const addButton = document.createElement("button");
  addButton.classList.add("question-card__button");
  addButton.setAttribute("data-js", "question-card__button");
  addButton.textContent = "Show Answer";
  const pAnswer = document.createElement("p");
  pAnswer.classList.add("question-card__answer");
  pAnswer.setAttribute("data-js", "question-card__answer");

  const div = document.createElement("div");
  div.classList.add("question-card__tags");

  const divTag = document.createElement("div");
  divTag.classList.add("question-card__tag");
  divTag.textContent = "#" + data["add-tag"];
  div.append(divTag);
  addCard.append(img, addQuestion, h2, addButton, pAnswer, div);
  main.append(addCard);

  const bookmark = document.querySelector('[data-js="bookmark"]');
  const answerButton = document.querySelector(
    "[data-js='question-card__button']"
  );
  const answerText = document.querySelector(
    '[data-js="question-card__answer"]'
  );

  let changeImage = true;
  bookmark.addEventListener("click", () => {
    if (changeImage) {
      bookmark.src = "./assets/bookmark_filled.png";
    } else {
      bookmark.src = "./assets/bookmark.png";
    }
    changeImage = !changeImage;
  });

  let hideAnswer = true;
  answerButton.addEventListener("click", function hidden() {
    if (hideAnswer) {
      (answerButton.textContent = "hide answer"),
        (answerText.textContent = data["add-answer"]);
    } else {
      (answerButton.textContent = "show answer"), (answerText.textContent = "");
    }
    hideAnswer = !hideAnswer;
  });
});

const addQuestion = document.querySelector('[data-js="add-question"]');
const addAnswer = document.querySelector('[data-js="add-answer"]');
const questionCounter = document.querySelector("[data-js=question-counter]");
const answerCounter = document.querySelector("[data-js=answer-counter]");

addQuestion.addEventListener("input", (event) => {
  let textRemain = 150 - event.target.value.length;
  questionCounter.innerHTML = `${textRemain} characters left`;
});

addAnswer.addEventListener("input", (event) => {
  let textRemain = 150 - event.target.value.length;
  answerCounter.textContent = `${textRemain} characters left`;
});
