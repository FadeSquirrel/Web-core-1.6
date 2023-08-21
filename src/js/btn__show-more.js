const btnShowMore = document.querySelector(".btn__show-more");

btnShowMore.addEventListener("click", () => {
  let hiddenTablet = document.querySelectorAll('[data-text-hidden="true"]');
  hiddenTablet.forEach((element) => {
    element.classList.toggle("hidden--visible");
  });

  let hiddenAll = document.querySelectorAll('[data-text-hidden-all="true"]');
  hiddenAll.forEach((element) => {
    element.classList.toggle("descr__text--visible");
  });

  if (btnShowMore.classList.contains("btn__show-more--decor--rotate")) {
    btnShowMore.textContent = "Читать далее";
  } else {
    btnShowMore.textContent = "Скрыть";
  }

  btnShowMore.classList.toggle("btn__show-more--decor--rotate");
});
