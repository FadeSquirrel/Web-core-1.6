import { dropMenu } from "./drop-menu";
import { BLUR_MASK, setBlurMaskZIndexClass } from "./blur-mask";

const btnDropMenu = document.querySelector(".btn__drop-menu");

btnDropMenu.addEventListener("click", () => {
  dropMenu.classList.toggle("hidden-mobile-tablet");
  dropMenu.classList.toggle("z-index--mobile-tablet-upper-layer");

  if (dropMenu.classList.contains("anim--mobile-tablet--dropping-down")) {
    dropMenu.classList.remove("anim--mobile-tablet--dropping-down");
  }
  dropMenu.classList.toggle("anim--mobile-tablet--dropping-top");

  setBlurMaskZIndexClass(BLUR_MASK.Z_TABLET_MASK_LAYER, true);
});
