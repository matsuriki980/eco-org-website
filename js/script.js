// ==========================================================================
// ハンバーガーメニュー
// ==========================================================================
const hamburgerButton = document.getElementById("hamburger__button");
const hamburgerMenu = document.getElementById("hamburger__menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});


// ==========================================================================
// ヘッダー背景表示・非表示
// ==========================================================================
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const fv = document.getElementById("fv");

  const getscrollPercentFv = () => {
    // ファーストビューの高さ
    const fvHeight = fv.offsetHeight;

    // スクロール量
    const scrolled = window.scrollY;

    if (scrolled > fvHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };

  getscrollPercentFv();
});
