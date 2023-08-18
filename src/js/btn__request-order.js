import { moduleRequestOrder } from "./feedback-menu";
import { BLUR_MASK, setBlurMaskZIndexClass } from "./blur-mask";

const btnFeedbackMenu = document.querySelectorAll(".btn__request-order");

btnFeedbackMenu.forEach((element) => {
  element.addEventListener("click", () => {
    moduleRequestOrder.classList.toggle("hidden");
    moduleRequestOrder.classList.toggle("z-index--upper-layer");

    if (moduleRequestOrder.classList.contains("anim--dropping-down")) {
      moduleRequestOrder.classList.remove("anim--dropping-down");
    }
    moduleRequestOrder.classList.toggle("anim--dropping-top");

    setBlurMaskZIndexClass(BLUR_MASK.Z_OVERLAY, true);
  });
});
