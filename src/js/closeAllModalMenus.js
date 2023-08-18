import { blurMask } from "./blur-mask";
import { closeDropMenu } from "./btn__close-drop-menu";
import { closeAllFeedbackMenus } from "./btn__close-feedback-menu";

blurMask.addEventListener("click", () => {
  closeDropMenu();
  closeAllFeedbackMenus();
});
