/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
window.onload = function () {
  let tabParents = document.querySelectorAll("[data-parent-tabs]");
  tabParents.forEach(function (tabParent) {
    let tabNavs = tabParent.querySelectorAll("[data-tab]");
    let tabPanes = tabParent.querySelectorAll("[data-tab-content]");
    let tabOkBtn = tabParent.querySelectorAll("[data-tab-btn]");
    let tabEmodji = tabParent.querySelectorAll("[data-tab-emo]"); // console.log("tabNavs: ", tabParents);

    for (let i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener("click", function (e) {
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (let j = 0; j < tabNavs.length; j++) {
          let contentAttr = tabPanes[j].getAttribute("data-tab-content");

          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active");
            tabOkBtn[j].classList.add("active");
            tabEmodji[j].classList.add("active");
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
            tabOkBtn[j].classList.remove("active");
            tabEmodji[j].classList.remove("active");
          }
        }
      });
    }
  });
};

setTimeout(function () {
  let preloader = document.getElementById('preload');

  if (!preloader.classList.contains('done')) {
    preloader.classList.add('done');
  }
}, 2000);
setTimeout(function () {
  document.getElementById('fail').style.display = 'block';
}, 1000);
setTimeout(function () {
  document.getElementById('try-btn').style.display = 'block';
}, 1000);
/******/ })()
;
//# sourceMappingURL=main.js.map