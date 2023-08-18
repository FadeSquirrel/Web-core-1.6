export const blurMask = document.querySelector(".blur-mask");

const Z_TABLET_MASK_LAYER = "blur-mask--tablet-mask-layer";
const Z_OVERLAY = "blur-mask--overlay";

export const BLUR_MASK = {
  Z_TABLET_MASK_LAYER,
  Z_OVERLAY,
};

export function setBlurMaskZIndexClass(zIndexClass, flag) {
  if (flag) {
    blurMask.classList.add(zIndexClass);
  } else {
    blurMask.classList.remove(zIndexClass);
  }
}
