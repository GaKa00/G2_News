const container = document.querySelector('.news-card-container');
function favourite(event) {
    console.log("Event target:", event.target);
    if (event.target.matches('.fav-icon')) {
        const favIcon = event.target.closest('.fav-btn').querySelector('.fav-icon');
        console.log("Fav button clicked");
        favIcon.classList.toggle("fa-regular");
        favIcon.classList.toggle("fa-solid");
    }
}

container.addEventListener("click", favourite);

export default favourite;
