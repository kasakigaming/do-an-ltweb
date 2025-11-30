const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("lang-menu");

// Nhấn vào nút -> hiện/ẩn menu
langBtn.addEventListener("click", (e) => {
    langMenu.classList.toggle("hidden");
    e.stopPropagation(); // Ngăn click nổi lên document
});

// Ẩn khi click ra ngoài
document.addEventListener("click", () => {
    langMenu.classList.add("hidden");
});
