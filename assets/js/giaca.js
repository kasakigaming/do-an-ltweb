// Language dropdown toggle và Mobile menu
document.addEventListener("DOMContentLoaded", () => {
    // ========== DESKTOP LANGUAGE DROPDOWN ==========
    const langBtnDesktop = document.getElementById("langToggleDesktop");
    const langDropdownDesktop = document.getElementById("langDropdownDesktop");
    
    if (langBtnDesktop && langDropdownDesktop) {
        langBtnDesktop.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdownDesktop.classList.toggle("open");
        });
    }

    // ========== MOBILE LANGUAGE DROPDOWN ==========
    const langBtnMobile = document.getElementById("langToggleMobile");
    const langDropdownMobile = document.getElementById("langDropdownMobile");
    
    if (langBtnMobile && langDropdownMobile) {
        langBtnMobile.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdownMobile.classList.toggle("open");
        });
    }

    // Đóng tất cả dropdown khi click ra ngoài
    document.addEventListener("click", () => {
        if (langDropdownDesktop) langDropdownDesktop.classList.remove("open");
        if (langDropdownMobile) langDropdownMobile.classList.remove("open");
    });

    // Ngăn dropdown đóng khi click vào bên trong
    const langContents = document.querySelectorAll(".language__content");
    langContents.forEach(content => {
        content.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });

    // ========== HAMBURGER MENU ==========
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });
    }
});