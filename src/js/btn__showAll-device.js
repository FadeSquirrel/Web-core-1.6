const btnShowAll = document.querySelector(
  ".brands-container__btn-show-devices"
);

btnShowAll.addEventListener("click", () => {
  let hiddenBtns = document.querySelectorAll('[data-device-hidden="true"]');

  hiddenBtns.forEach((element) => {
    element.classList.toggle("hidden--visible");
  });

  if (btnShowAll.classList.contains("btn__showAll--decor--rotate")) {
    btnShowAll.textContent = "Показать всё";
  } else {
    btnShowAll.textContent = "Скрыть";
  }

  btnShowAll.classList.toggle("btn__showAll--decor--rotate");
});
