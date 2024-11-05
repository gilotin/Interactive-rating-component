const form = document.querySelector(".rating-card__form");
const ratingCard = document.querySelector(".rating-card");
const resultCard = document.querySelector(".result-card");
const result = document.querySelector(".result-card__paragraph");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rating = formData.get("rating");

    ratingCard.classList.add("hidden");
    resultCard.classList.remove("hidden");

    result.textContent = `You selected ${rating} out of 5`;
});
