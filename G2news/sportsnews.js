document.addEventListener('DOMContentLoaded', function () {
    var sportsAside = document.createElement('aside');
    sportsAside.classList.add('sports-news');
    sportsAside.innerHTML = `  <h2>Sportnyheter</h2>
    `;
    var newsContainer = document.querySelector('.news-card-container');
    newsContainer.parentNode.insertBefore(sportsAside, newsContainer.nextSibling);

});