const btnShowAll = document.querySelector(".brands-container__btn-show-brands");

btnShowAll.addEventListener("click", () => {
  let hiddenEls = document.querySelectorAll('[data-brands-hidden="true"]');

  hiddenEls.forEach((element) => {
    element.classList.toggle("hidden--visible");
  });

  if (btnShowAll.classList.contains("btn__showAll--decor--rotate")) {
    btnShowAll.textContent = "Показать всё";
  } else {
    btnShowAll.textContent = "Скрыть";
  }

  btnShowAll.classList.toggle("btn__showAll--decor--rotate");
});
