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
const snsMenu = document.querySelector("#menu-share");

for (const link of snsMenu.querySelectorAll("a[href]")) {
  link.addEventListener("click", () => {
    snsMenu.hidePopover();
  });
}




/*=============== SHOW MODAL ===============*/
const openBtn = document.querySelector(".share__modal_btn");
const modal = document.querySelector(".share__modal");

if (openBtn && modal) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
  });
}

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelector(".close_modal_btn");

function closeModal() {
  modal.classList.remove("show-modal");
}
closeBtn.addEventListener("click", closeModal);

/*====== ESC BUTTON TO CLOSE MODAL ======*/
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});