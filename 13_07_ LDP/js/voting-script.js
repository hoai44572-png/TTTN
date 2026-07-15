/* ============================================================
   MISS MISTER - HÀO KHÍ DU HIỆP - TRANG VOTING
   File: js/voting-script.js
   Chỉ xử lý giao diện tĩnh - chưa có animation/hover/API
============================================================ */
(function () {
  "use strict";

  /* ============================================================
     BXH Tab switching - chuyển tab Mỹ Nhân / Mỹ Nam / Phù Giáp
  ============================================================ */
  var bxhTabs = document.querySelectorAll(".v-bxh__tab");
  bxhTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      bxhTabs.forEach(function (t) {
        t.classList.remove("v-bxh__tab--active");
      });
      tab.classList.add("v-bxh__tab--active");
    });
  });

  /* ============================================================
     Pagination display - giữ UI tĩnh, chưa xử lý phân trang thật
  ============================================================ */
  var pageFirst = document.getElementById("pageFirst");
  var pagePrev  = document.getElementById("pagePrev");
  var pageNext  = document.getElementById("pageNext");
  var pageLast  = document.getElementById("pageLast");
  var pageNum   = document.getElementById("pageNum");

  /* ============================================================
     Smooth scroll khi click Vote Ngay về danh sách thí sinh
  ============================================================ */
  var voteBtn = document.getElementById("btnVoteNgay");
  if (voteBtn) {
    voteBtn.addEventListener("click", function (e) {
      var target = document.getElementById("danh-sach");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

})();
