document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Отримуємо назву поточної сторінки
    const navLinks = document.querySelectorAll(".header__nav-link");

    let activeLink = null;

    navLinks.forEach((link) => {
        // Отримуємо назву сторінки з посилання, видаляючи './' чи '/' на початку
        const linkHref = link.getAttribute("href").replace(/^\.\//, "").replace(/^\//, "");

        if (linkHref === currentPage) {
            link.classList.add("active");
            activeLink = link;
        }

        link.addEventListener("mouseenter", () => {
            if (activeLink && activeLink !== link) {
                activeLink.classList.add("hover-out");
            }
        });

        link.addEventListener("mouseleave", () => {
            if (activeLink && activeLink !== link) {
                activeLink.classList.remove("hover-out");
            }
        });
    });
});
