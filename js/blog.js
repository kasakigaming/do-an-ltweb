// ================================
// LANGUAGE DROPDOWN
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // Khối bọc toàn bộ phần chọn ngôn ngữ (nút + dropdown)
  const langSelector = document.querySelector(".language-selector");
  const langCurrentBtn = document.querySelector(".language-current");
  const langItems = document.querySelectorAll(".language-item button");

  if (!langSelector || !langCurrentBtn) return;

  // Mở / đóng dropdown
  langCurrentBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langSelector.classList.toggle("is-open");
  });

  // Click ra ngoài → đóng dropdown
  document.addEventListener("click", () => {
    langSelector.classList.remove("is-open");
  });

  // Chọn ngôn ngữ
  langItems.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Xóa active cũ
      document
        .querySelectorAll(".language-item")
        .forEach((item) => item.classList.remove("language-item--active"));

      // Active item mới
      const parent = btn.closest(".language-item");
      if (parent) parent.classList.add("language-item--active");

      // Lấy flag + name
      const flagImg = btn.querySelector(".language-flag");
      const nameSpan = btn.querySelector(".language-name");

      const currentFlagImg = langCurrentBtn.querySelector(".language-flag");
      const currentNameSpan = langCurrentBtn.querySelector(".language-name");

      if (flagImg && currentFlagImg) {
        currentFlagImg.src = flagImg.src;
        currentFlagImg.alt = flagImg.alt;
      }

      if (nameSpan && currentNameSpan) {
        currentNameSpan.textContent = nameSpan.textContent;
      }

      // Đóng menu sau khi chọn
      langSelector.classList.remove("is-open");
    });
  });

  // ================================
  // HAMBURGER MOBILE MENU
  // ================================

  const navbarToggle = document.querySelector(".navbar-toggle");
  const mobileMenu = document.querySelector(".navbar-menu-mobile");

  if (navbarToggle && mobileMenu) {
    // Bấm hamburger → mở/đóng menu
    navbarToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("is-open");
    });

    // Click vào menu nhưng không đóng
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Click ra ngoài → đóng menu
    document.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
    });
  }
});
