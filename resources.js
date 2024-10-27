document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const cards = document.querySelectorAll(".card");

    // Filter resources based on search input
    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const cardTitle = card.querySelector("h2").textContent.toLowerCase();
            const cardContent = card.querySelector("p").textContent.toLowerCase();
            const isVisible = cardTitle.includes(searchValue) || cardContent.includes(searchValue);

            card.style.display = isVisible ? "block" : "none";
        });
    });
});
