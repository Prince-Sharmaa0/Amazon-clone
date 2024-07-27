document.addEventListener("DOMContentLoaded", () => {
    // Back to Top functionality
    const backToTopBtn = document.querySelector(".foot-panel1");
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Search functionality
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    searchIcon.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
        }
    });

    // Sign-in functionality (basic)
    const signInElement = document.querySelector(".nav-signin span");
    signInElement.addEventListener("click", () => {
        alert("Redirecting to sign-in page...");
        window.location.href = "https://www.amazon.com/ap/signin";
    });

    // Language selection functionality
    const languageSelect = document.querySelector(".language-select");
    languageSelect.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        if (selectedLanguage) {
            alert(`Language changed to: ${selectedLanguage}`);
            // Implement language change functionality here
        }
    });

    // Add hover effect for nav-border elements
    const borderElements = document.querySelectorAll(".border");
    borderElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.border = "1.5px solid white";
        });
        element.addEventListener("mouseout", () => {
            element.style.border = "2px solid transparent";
        });
    });
});
