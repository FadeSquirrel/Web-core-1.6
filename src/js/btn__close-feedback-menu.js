import { feedbackMenu } from "./feedback-menu";
import { BLUR_MASK, setBlurMaskZIndexClass } from "./blur-mask";

const btnsCloseFeedbackMenu = document.querySelectorAll(
  ".btn__close-feedback-menu"
);

btnsCloseFeedbackMenu.forEach((element) => {
  let feedbackMenu = element.parentNode;

  element.addEventListener("click", () => {
    setTimeout(() => {
      feedbackMenu.classList.toggle("hidden");
      feedbackMenu.classList.toggle("z-index--upper-layer");
    }, 700);

    if (feedbackMenu.classList.contains("anim--dropping-top")) {
      feedbackMenu.classList.remove("anim--dropping-top");
    }
    feedbackMenu.classList.toggle("anim--dropping-down");

    setBlurMaskZIndexClass(BLUR_MASK.Z_OVERLAY, false);
  });
});

export function closeAllFeedbackMenus() {
  btnsCloseFeedbackMenu.forEach((element) => {
    let feedbackMenu = element.parentNode;

    if (!feedbackMenu.classList.contains("hidden")) {
      setTimeout(() => {
        feedbackMenu.classList.toggle("hidden");
        feedbackMenu.classList.toggle("z-index--upper-layer");
      }, 700);

      if (feedbackMenu.classList.contains("anim--dropping-top")) {
        feedbackMenu.classList.remove("anim--dropping-top");
      }
      feedbackMenu.classList.toggle("anim--dropping-down");

      setBlurMaskZIndexClass(BLUR_MASK.Z_OVERLAY, false);
    }
  });
}
