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

// function resize() {
//   if (window.innerWidth > CONSTS.DESKTOP_WIDTH) {
//     if (pageMaskContainer.classList.contains(blurMaskClass)) {
//       removeBlurMask();
//     }
//   } else {
//     if (!pageMaskContainer.classList.contains(blurMaskClass)) {
//       addBlurMask();
//     }
//   }
// }

// function setBlurMaskZIndex(zIndex, flag) {
//   if (flag) {
//     pageMaskContainer.classList.add(blurMaskZIndexClass);
//   } else {
//     pageMaskContainer.classList.remove(blurMaskZIndexClass);
//   }
// }

// function addBlurMask() {
//   pageMaskContainer.classList.add(blurMaskClass);
//   setBlurMaskZIndex(blurMaskZIndexClass, true);
// }

// function removeBlurMask() {
//   pageMaskContainer.classList.remove(blurMaskClass);
//   setBlurMaskZIndex(blurMaskZIndexClass, false);
// }

// export function toggleBlurMask() {
//   let pageContainsClass = pageMaskContainer.classList.contains(blurMaskClass);

//   if (!pageContainsClass) {
//     addBlurMask();
//     window.addEventListener("resize", resize);
//   } else {
//     removeBlurMask();
//     window.removeEventListener("resize", resize);
//   }
// }

// export function addBlurMaskEx(zIndex) {
//   let pageContainsClass = pageMaskContainer.classList.contains(blurMaskClass);

//   if (pageContainsClass) {
//     toggleBlurMask();
//   }

//   addBlurMask();
//   setBlurMaskZIndex(zIndex, true);
// }

// export function removeBlurMaskEx(zIndex) {
//   let pageContainsClass = pageMaskContainer.classList.contains(blurMaskClass);

//   if (pageContainsClass) {
//     toggleBlurMask();
//   }

//   addBlurMask();
//   setBlurMaskZIndex(zIndex, true);
// }
