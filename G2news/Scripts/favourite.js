const favBtn = document.querySelector(".fav-btn");
const newsCard = document.querySelectorAll(".news-card")

favBtn.addEventListener("click", () => {
    newsCard.classList.add("favourited")
})


// export default favourite