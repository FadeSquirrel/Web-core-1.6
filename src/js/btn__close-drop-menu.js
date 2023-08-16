import { dropMenu } from "./drop-menu";
import { toggleBlurMask } from "./blur-mask";

const btnClose = document.querySelector(".btn__close-drop-menu");

btnClose.addEventListener("click", () => {
  dropMenu.classList.toggle("drop-menu--hidden");
  toggleBlurMask();
});
