import { dropMenu } from "./drop-menu";
import { BLUR_MASK, setBlurMaskZIndexClass } from "./blur-mask";

const btnClose = document.querySelector(".btn__close-drop-menu");

export function closeDropMenu() {
  if (!dropMenu.classList.contains("hidden-mobile-tablet")) {
    setTimeout(() => {
      dropMenu.classList.toggle("hidden-mobile-tablet");
      dropMenu.classList.toggle("z-index--mobile-tablet-upper-layer");
    }, 700);

    if (dropMenu.classList.contains("anim--mobile-tablet--dropping-top")) {
      dropMenu.classList.remove("anim--mobile-tablet--dropping-top");
    }
    dropMenu.classList.toggle("anim--mobile-tablet--dropping-down");

    setBlurMaskZIndexClass(BLUR_MASK.Z_TABLET_MASK_LAYER, false);
  }
}

btnClose.addEventListener("click", closeDropMenu);
