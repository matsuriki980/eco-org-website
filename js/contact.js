// ==========================================================================
// お問い合わせフォーム　送受信設定
// ==========================================================================
const formButton = document.getElementById("form__button");
const confirmButtonBack = document.getElementById("confirm__button--back");
const confirmButtonNext = document.getElementById("confirm__button--next");
const thanksButton = document.getElementById("thanks__button");
const s1 = document.getElementById("step1");
const s2 = document.getElementById("step2");
const s3 = document.getElementById("step3");
const form = document.getElementById("form");
const fv = document.getElementById("fv");

// ==================================
// 画面切り替え
// ==================================
const formStep = (step) => {
  s1.hidden = true;
  s2.hidden = true;
  s3.hidden = true;

  if (step === 1) {
    s2.hidden = false;
    fv.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (step === 2) {
    s1.hidden = false;
    fv.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (step === 3) {
    s3.hidden = false;
    fv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// ==================================
// フォームボタンの処理
// ==================================
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ページ移動を阻止

  const username = document.getElementById("username").value;
  const furigana = document.getElementById("furigana").value;
  const mail = document.getElementById("mail").value;
  const contact = document.getElementById("contact").value;

  // アラート
  const errors = []; // エラーメッセージを入れる
  const errorElements = []; // エラー発生時に該当の項目にスクロール

  // バリデーションチェック
  if (username === "") {
    errors.push("氏名を入力してください");
    errorElements.push(document.querySelector('input[name="username"]'));
  }

  if (mail === "") {
    errors.push("メールアドレスを入力してください");
    errorElements.push(document.querySelector('input[name="furigana"]'));
  }

  if (contact === "") {
    errors.push("お問い合わせ内容を入力してください");
    errorElements.push(document.querySelector('input[name="contact"]'));
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    errorElements[0].style.scrollMarginTop = "64px";
    errorElements[0].scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // 入力内容を取得し、確認画面へ反映
  document.getElementById("c_username").textContent = username;
  document.getElementById("c_furigana").textContent = furigana;
  document.getElementById("c_mail").textContent = mail;
  document.getElementById("c_contact").textContent = contact;

  formStep(1);
});

confirmButtonBack.addEventListener("click", () => {
  formStep(2);
});

confirmButtonNext.addEventListener("click", () => {
  formStep(3);
});

thanksButton.addEventListener("click", () => {
  form.reset(); // 入力値をリセット
  window.location.href = "/"; // トップページへ
});
