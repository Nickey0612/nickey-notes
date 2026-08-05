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
// const snsMenu = document.querySelector("#mobile-share-menu");
// snsMenu.addEventListener("click", (event) => {
//   // dialog本体クリックだけbackdrop扱い
//   if (event.target === snsMenu) {
//     snsMenu.close();
//   }
// });

// モバイル用SNSメニュー内ボタン押下時の挙動
document.querySelectorAll('[data-share="x"]').forEach(button => {
  button.addEventListener('click', () => {
    const url =
      "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(button.dataset.url) +
      "&text=" +
      encodeURIComponent(button.dataset.title);

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll('[data-share="fb"]').forEach(button => {
  button.addEventListener('click', () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(button.dataset.url);

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll('[data-share="hatena"]').forEach(button => {
  button.addEventListener('click', () => {
    const url =
      "https://b.hatena.ne.jp/entry/" +
      encodeURIComponent(button.dataset.url).replace(/^https?:\/\//, "s/");

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll('[data-share="line"]').forEach(button => {
  button.addEventListener('click', () => {
    const url =
      "https://social-plugins.line.me/lineit/share?url=" +
      encodeURIComponent(button.dataset.url);

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

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

// URLコピーボタン押下時の挙動
document.querySelector(".copy_btn").addEventListener("click", function () {
  const input = this.previousElementSibling;
  navigator.clipboard.writeText(input.value);
  showCopyToast();
});