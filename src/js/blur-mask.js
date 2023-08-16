import { pageMaskContainer } from "./page";
import { CONSTS } from "./vars";

export const blurMaskClass = "page__mask-container--blur";

function resize() {
  if (window.innerWidth > CONSTS.DESKTOP_WIDTH) {
    if (pageMaskContainer.classList.contains(blurMaskClass)) {
      removeBlurMask();
    }
  } else {
    if (!pageMaskContainer.classList.contains(blurMaskClass)) {
      addBlurMask();
    }
  }
}

function addBlurMask() {
  pageMaskContainer.classList.add(blurMaskClass);
}

function removeBlurMask() {
  pageMaskContainer.classList.remove(blurMaskClass);
}

export function toggleBlurMask() {
  let pageContainsClass = pageMaskContainer.classList.contains(blurMaskClass);

  if (!pageContainsClass) {
    addBlurMask();
    window.addEventListener("resize", resize);
  } else {
    removeBlurMask();
    window.removeEventListener("resize", resize);
  }
}
