// モバイル用メニュー開閉
const menu = document.querySelector("#mobile-menu");
menu.addEventListener("click", (event) => {
  // dialog本体クリックだけbackdrop扱い
  if (event.target === menu) {
    menu.close();
  }
});

// メニュー内リンクを押したら閉じる
for (const link of menu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    menu.close();
  });
}

// モバイル用SNSメニュー内リンク選択時のpopoverクローズ
const snsMenu = document.querySelector("#mobile-share-menu");
snsMenu.addEventListener("click", (event) => {
  // dialog本体クリックだけbackdrop扱い
  if (event.target === snsMenu) {
    snsMenu.close();
  }
});

// モバイル用SNSメニュー内リンクを押したら閉じる
// for (const link of snsMenu.querySelectorAll("a[href]")) {
//   link.addEventListener("click", () => {
//     snsMenu.hidePopover();
//   });
// }

// URLコピー完了の通知
const toast = document.getElementById("copy_toast");
let toastTimer;

function showCopyToast() {
  clearTimeout(toastTimer);
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// URLコピーボタン
document.querySelector(".copy_btn").addEventListener("click", function () {
  const input = this.previousElementSibling;
  navigator.clipboard.writeText(input.value);
  showCopyToast();
});