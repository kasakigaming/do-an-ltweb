// Language dropdown toggle
document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.querySelector(".header__language--btn");
    const langContainer = document.querySelector(".header__language");
    
    if (!langBtn || !langContainer) return;

    // Toggle dropdown khi click button
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langContainer.classList.toggle("is-open");
    });

    // Đóng dropdown khi click ra ngoài
    document.addEventListener("click", () => {
      langContainer.classList.remove("is-open");
    });

    // Ngăn dropdown đóng khi click vào bên trong
    const langContent = document.querySelector(".language__content");
    if (langContent) {
      langContent.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  });