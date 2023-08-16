import { dropMenu } from "./drop-menu";
import { toggleBlurMask } from "./blur-mask";

const btnDropMenu = document.querySelector(".btn__drop-menu");

btnDropMenu.addEventListener("click", () => {
  dropMenu.classList.toggle("drop-menu--hidden");
  toggleBlurMask();
});
