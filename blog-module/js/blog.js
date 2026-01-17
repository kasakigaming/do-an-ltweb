document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.querySelector(".language-selector");
  const langCurrent = document.querySelector(".language-current");
  const mobileMenu = document.querySelector(".navbar-menu-mobile");

  document.addEventListener("click", (e) => {
    // Mở dropdown ngôn ngữ
    if (e.target.closest(".language-current")) {
      langSelector?.classList.toggle("is-open");
      mobileMenu?.classList.remove("is-open");
      return;
    }

    // Chọn 1 ngôn ngữ
    const langBtn = e.target.closest(".language-item button");
    if (langBtn) {
      // active item
      document
        .querySelectorAll(".language-item--active")
        .forEach((x) => x.classList.remove("language-item--active"));
      langBtn.closest(".language-item")?.classList.add("language-item--active");

      // đổi cờ trên nút current
      const src = langBtn.querySelector(".language-flag")?.src;
      const alt = langBtn.querySelector(".language-flag")?.alt || "";
      const currentFlag = langCurrent?.querySelector(".language-flag");
      if (src && currentFlag) {
        currentFlag.src = src;
        currentFlag.alt = alt;
      }

      // chuyển trang theo link gán trong html
      const href = langBtn.dataset.href;
      if (href) {
        window.location.href = href;
        return;
      }

      // nếu chưa gán data-href thì chỉ đóng dropdown
      langSelector?.classList.remove("is-open");
      return;
    }

    // Mở menu mobile
    if (e.target.closest(".navbar-toggle")) {
      mobileMenu?.classList.toggle("is-open");
      langSelector?.classList.remove("is-open");
      return;
    }

    // Click ra ngoài = đóng hết
    if (!e.target.closest(".language-selector"))
      langSelector?.classList.remove("is-open");
    if (!e.target.closest(".navbar-menu-mobile"))
      mobileMenu?.classList.remove("is-open");
  });
});
