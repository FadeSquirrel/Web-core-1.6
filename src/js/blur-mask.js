import { pageMaskContainer } from "./page";
import "../style/less/_var.scss";

export const blurMaskClass = "page__mask-container--blur";

const desktopWidth = getComputedStyle(
  document.documentElement
).getPropertyValue("--desktop-width");

function resize() {
  if (window.innerWidth > desktopWidth) {
    removeBlurMask();
  }
}

function addBlurMask() {
  pageMaskContainer.classList.add(blurMaskClass);
  window.addEventListener("resize", resize);
}

function removeBlurMask() {
  pageMaskContainer.classList.remove(blurMaskClass);
  window.removeEventListener("resize", resize);
}

export function toggleBlurMask() {
  if (!pageMaskContainer.classList.contains(blurMaskClass)) {
    addBlurMask();
  } else {
    removeBlurMask();
  }
}
