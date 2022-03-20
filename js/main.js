if (document.getElementById('comments')) {
    setTimeout(function() {
    try {
    // CommetForm.js
    (function(l,b){var g=function(){var a="0"!=this.dataset.id?this.dataset.id:0,c=b.getElementById("comment-editor"),d=c.dataset.src+(a?"&parentID="+a:"");if(d!=c.src){var e=c.src.match(/&parentID=(\d+)/);c.style.visibility="hidden";c.style.display="block";c.hidden=!1;c.src=d;b.getElementById(a?"c"+a:"comment-form-block").insertBefore(c,null);b.getElementById("comment-form-undo").hidden=!a;b.getElementById("comment-read").checked=!0;e&&(b.querySelector("#c"+e[1]+" .comment-reply").disabled=!1);a&&(b.querySelector("#c"+
    a+" .comment-reply").disabled=!0)}},h=function(){var a=b.createElement("button");a.classList.add("comment-reply");a.type="button";for(var c=b.querySelectorAll(".cblock"),d=0;d<c.length;d++){var e=c[d].getElementsByTagName("time"),f=a.cloneNode(!1);f.textContent="\u8fd4\u4fe1";f.dataset.id=c[d].id.substring(1);f.addEventListener("click",g);e[e.length-1].insertAdjacentElement("afterend",f)}b.getElementById("comment-form-undo").addEventListener("click",g)},k=function(){var a=b.getElementById("comment-editor");
    a&&""==a.src&&(a.style.visibility="hidden",a.style.display="block",a.hidden=!1,a.src=a.dataset.src);if(a=b.getElementById("lazy-comments"))a.insertAdjacentHTML("afterend",a.textContent),a.id="",a.parentNode&&a.parentNode.removeChild(a),h()};(function(){var a=b.getElementById("lazy-comment-editor");a&&(a.insertAdjacentHTML("afterend",a.textContent),a.id="",a.parentNode&&a.parentNode.removeChild(a));(a=b.getElementById("comment-editor"))&&a.addEventListener("load",function(){this.style.visibility="visible"});
    b.getElementById("lazy-comments")||h();(a=b.getElementById("comment-read"))&&(a.checked?k():a.addEventListener("change",k))})()})(window,document);
    } catch (e) { _sendError(e, 'CommetForm.js'); }
    }, 0);
    }