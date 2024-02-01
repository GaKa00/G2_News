function toggleFavourite(event) {
    if (event.target.matches('.fav-icon')) {
        const favIcon = event.target.closest('.fav-btn').querySelector('.fav-icon');
        favIcon.classList.toggle("fa-regular");
        favIcon.classList.toggle("fa-solid");

        const card = event.target.closest('.news-card');
        const cardData = {
            id: card.dataset.cardId,
            title: card.querySelector('.card-title').textContent,
            imageUrl: card.querySelector('.news-img') ? card.querySelector('.news-img').src : '', // Check if .news-img exists
            description: card.querySelector('.card-desc').textContent
        };

        let favouritesData = JSON.parse(localStorage.getItem('favourites')) || [];
        const isFavourited = favouritesData.some(data => data.id === cardData.id);
        if (isFavourited) {
            favouritesData = favouritesData.filter(data => data.id !== cardData.id);
        } else {
            favouritesData.push(cardData);
        }
        localStorage.setItem('favourites', JSON.stringify(favouritesData));
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const favouritesContainer = document.querySelector('.favourites-card-container');

    function displayFavourites() {
        const favouritesData = JSON.parse(localStorage.getItem('favourites')) || [];
        
        if (favouritesContainer) {
            favouritesContainer.innerHTML = '';

            favouritesData.forEach(cardData => {
                const cardHtml = `
                    <div class="news-card" data-card-id="${cardData.id}">
                        <img src="${cardData.imageUrl}" alt="" class="news-img" />
                        <h1 class="card-title">${cardData.title}</h1>
                        <p class="card-desc">${cardData.description}</p>
                        <button class="fav-btn"> <i class="fa-regular fa-bookmark fav-icon"></i></button>
                    </div>`;
                favouritesContainer.insertAdjacentHTML('beforeend', cardHtml);
            });

            // Update favorite icons based on local storage data
            const favButtons = document.querySelectorAll('.fav-btn');
            favButtons.forEach(button => {
                const cardId = button.closest('.news-card').dataset.cardId;
                const isFavourite = favouritesData.some(data => data.id === cardId);
                const favIcon = button.querySelector('.fav-icon');
                if (isFavourite) {
                    favIcon.classList.add('fa-solid');
                    favIcon.classList.remove('fa-regular');
                }
            });
        }
    }

    document.addEventListener("click", toggleFavourite);

    displayFavourites();
});

export default toggleFavourite;
