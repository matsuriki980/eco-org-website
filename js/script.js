// ==========================================================================
// ハンバーガーメニュー
// ==========================================================================
const hamburgerButton = document.getElementById("hamburger__button");
const hamburgerMenu = document.getElementById("hamburger__menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
