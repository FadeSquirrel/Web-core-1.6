import { moduleRequestCall } from "./feedback-menu";
import { BLUR_MASK, setBlurMaskZIndexClass } from "./blur-mask";

const btnFeedbackMenu = document.querySelectorAll(".btn__call-order");

btnFeedbackMenu.forEach((element) => {
  element.addEventListener("click", () => {
    moduleRequestCall.classList.toggle("hidden");
    moduleRequestCall.classList.toggle("z-index--upper-layer");

    if (moduleRequestCall.classList.contains("anim--dropping-down")) {
      moduleRequestCall.classList.remove("anim--dropping-down");
    }
    moduleRequestCall.classList.toggle("anim--dropping-top");

    setBlurMaskZIndexClass(BLUR_MASK.Z_OVERLAY, true);
  });
});
