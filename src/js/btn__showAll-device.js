const btnShowAll = document.querySelector(".btn__showAll");

btnShowAll.addEventListener("click", () => {
  let hiddenBtns = document.querySelectorAll('[data-brands-hidden="true"]');
  let hiddenDesktopBtns = document.querySelectorAll(
    '[data-hidden-desktop="true"]'
  );

  hiddenBtns.forEach((element) => {
    element.classList.toggle("hidden--visible");
  });

  hiddenDesktopBtns.forEach((element) => {
    element.classList.toggle("hidden--visible");
  });

  if (btnShowAll.classList.contains("btn__showAll--decor--rotate")) {
    btnShowAll.textContent = "Показать всё";
  } else {
    btnShowAll.textContent = "Скрыть";
  }

  btnShowAll.classList.toggle("btn__showAll--decor--rotate");
});
