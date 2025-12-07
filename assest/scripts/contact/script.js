document.addEventListener("DOMContentLoaded", () => {
    const langToggleMobile = document.getElementById("langToggleMobile");
    const langDropdownMobile = document.getElementById("langDropdownMobile");

    langToggleMobile.addEventListener("click", (e) => {
        e.stopPropagation();
        langDropdownMobile.classList.toggle("open");
    });

    const langToggleDesktop = document.getElementById("langToggleDesktop");
    const langDropdownDesktop = document.getElementById("langDropdownDesktop");

    langToggleDesktop.addEventListener("click", (e) => {
        e.stopPropagation();
        langDropdownDesktop.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        langDropdownMobile.classList.remove("open");
        langDropdownDesktop.classList.remove("open");
    });

    document.querySelectorAll(".lang-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const link = btn.getAttribute("data-link");
            if (link) window.location.href = link;
        });
    });

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});
