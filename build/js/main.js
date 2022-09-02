/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
// window.onload = function () {
//   let tabParents = document.querySelectorAll("[data-parent-tabs]");
//   tabParents.forEach(function (tabParent) {
//     let tabNavs = tabParent.querySelectorAll("[data-tab]");
//     let tabPanes = tabParent.querySelectorAll("[data-tab-content]");
//     let tabOkBtn = tabParent.querySelectorAll("[data-tab-btn]");
//     // console.log("tabNavs: ", tabParents);
//     console.log("tabOkBtn: ", tabOkBtn);
//     for (let i = 0; i < tabNavs.length; i++) {
//       tabNavs[i].addEventListener("click", function (e) {
//         e.preventDefault();
//         let activeTabAttr = e.target.getAttribute("data-tab");
//         for (let j = 0; j < tabNavs.length; j++) {
//           let contentAttr = tabPanes[j].getAttribute("data-tab-content");
//           if (activeTabAttr === contentAttr) {
//             tabNavs[j].classList.add("active");
//             tabPanes[j].classList.add("active");
//             tabOkBtn[j].classList.add("active");
//           } else {
//             tabNavs[j].classList.remove("active");
//             tabPanes[j].classList.remove("active");
//             tabOkBtn[j].classList.remove("active");
//           }
//         }
//       });
//     }
//   });
// };
window.onload = function () {
  let tabParents = document.querySelectorAll("[data-parent-tabs]");
  tabParents.forEach(function (tabParent) {
    let tabNavs = tabParent.querySelectorAll("[data-tab]");
    let tabPanes = tabParent.querySelectorAll("[data-tab-content]");
    let tabOkBtn = tabParent.querySelectorAll("[data-tab-btn]"); // console.log("tabNavs: ", tabParents);

    console.log("tabOkBtn: ", tabOkBtn);

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
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
            tabOkBtn[j].classList.remove("active");
          }
        }
      });
    }
  });
}; // let okBtn = document.querySelectorAll("[data-ok-tabs]");
// okBtn.forEach(function (okBtn) {
//   let tabNavs = tabParent.querySelectorAll("[data-ok-btn]");
//   for (let i = 0; i < tabNavs.length; i++) {
//     tabNavs[i].addEventListener("click", function (e) {
//       e.preventDefault();
//       let activeTabAttr = e.target.getAttribute("data-ok-add");
//       for (let j = 0; j < tabNavs.length; j++) {
//         let contentAttr = tabPanes[j].getAttribute("data-ok-show");
//         if (activeTabAttr === contentAttr) {
//           tabNavs[j].classList.add("active");
//           tabPanes[j].classList.add("active");
//         } else {
//           tabNavs[j].classList.remove("active");
//           tabPanes[j].classList.remove("active");
//         }
//       }
//     });
//   }
// });
/******/ })()
;
//# sourceMappingURL=main.js.map