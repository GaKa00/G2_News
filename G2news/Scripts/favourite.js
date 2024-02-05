function toggleFavourite(event) {
    if (event.target.matches('.fav-icon')) {
        const favIcon = event.target;
        const card = favIcon.closest('.news-card');
        const cardTitle = card.querySelector('.card-title').textContent;
        const cardId = card.dataset.cardId;

        let favouritesData = JSON.parse(localStorage.getItem('favourites')) || [];

        const existingIndex = favouritesData.findIndex(data => data.title === cardTitle);
        
        if (existingIndex !== -1) {
            // Article with the same title exists, remove it
            favouritesData.splice(existingIndex, 1);
            localStorage.setItem('favourites', JSON.stringify(favouritesData));

            // Toggle icon to regular (not favorited)
            favIcon.classList.remove("fa-solid");
            favIcon.classList.add("fa-regular");
        } else {
            // Article does not exist, add it to favorites
            const cardData = {
                id: cardId,
                title: cardTitle,
                imageUrl: card.querySelector('.news-img') ? card.querySelector('.news-img').src : '', 
                description: card.querySelector('.card-desc') ? card.querySelector('.card-desc').textContent : ''
            };
            favouritesData.push(cardData);
            localStorage.setItem('favourites', JSON.stringify(favouritesData));

            // Toggle icon to solid (favorited)
            favIcon.classList.remove("fa-regular");
            favIcon.classList.add("fa-solid");
        }

        // Update all favorite icons on the page based on localStorage data
        updateFavoriteIcons();
    }
}

function updateFavoriteIcons() {
    const favButtons = document.querySelectorAll('.fav-icon');
    const favouritesData = JSON.parse(localStorage.getItem('favourites')) || [];

    favButtons.forEach(button => {
        const cardTitle = button.closest('.news-card').querySelector('.card-title').textContent;
        const isFavourite = favouritesData.some(data => data.title === cardTitle);
        if (isFavourite) {
            button.classList.add('fa-solid');
            button.classList.remove('fa-regular');
        } else {
            button.classList.remove('fa-solid');
            button.classList.add('fa-regular');
        }
    });
}

function displayFavourites() {
    const favouritesContainer = document.querySelector('.favourites-card-container');
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

function initFavouriteButtonEventListeners() {
    // Event listener for toggling favorites
    document.querySelectorAll('.fav-btn').forEach(button => {
        button.addEventListener('click', toggleFavourite);
    });
}

// Call updateFavoriteIcons when the page loads to ensure proper initialization
updateFavoriteIcons();

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", toggleFavourite);
    displayFavourites();
    initFavouriteButtonEventListeners();
    
});

// export default toggleFavourite;
