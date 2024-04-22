const bookmark = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector(
  "[data-js='question-card__button']"
);
const answerText = document.querySelector('[data-js="question-card__answer"]');
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
      (answerText.textContent = "The flex-direction property");
  } else {
    (answerButton.textContent = "show answer"), (answerText.textContent = "");
  }
  hideAnswer = !hideAnswer;
});
