// モバイル用メニュー開閉
const menu = document.querySelector("#menu");
const buttonOpen = document.querySelector("#button-open");
const buttonClose = document.querySelector("#button-close");

buttonOpen.addEventListener("click", () => {
  // dialogをtop layerへ表示
  menu.showModal();
});

buttonClose.addEventListener("click", () => {
  menu.close();
});

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
const menu = document.querySelector("#menu-compact");

for (const link of menu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    menu.hidePopover();
  });
}