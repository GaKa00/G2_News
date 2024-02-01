import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const container = document.querySelector('.news-card-container');

const newAPI = "26873f2efaf240bfab3a9b7a0053b43b";
const yesterday = new Date().getDate() - 1;
const newsLink = `https://newsapi.org/v2/everything?domains=bbc.co.uk&from=${yesterday}&to=${yesterday}&apiKey=${newAPI}`;

export async function fetchData() {
    try {
        const response = await axios.get(newsLink);
        const articles = response.data.articles;

        // Generate UUIDs for each article
        articles.forEach(article => {
            article.id = uuidv4();
        });

        // Display articles in the container
        container.innerHTML = articles.map(article => {
            const cardId = `card-${article.id}`;
            return `<div class="news-card" data-card-id="${cardId}">
                <img src="${article.urlToImage}" alt="" class="news-img" />
                <h1 class="card-title">${article.title}</h1>
                <p class="card-desc">
                    ${article.content.replace(/(<([^>]+)>)/gi, "")}
                </p>
                <button class="fav-btn"> <i class="fa-regular fa-bookmark fav-icon"></i></button>
                </div>`;
        }).join('');

    } catch (error) {
        console.error('Data could not be loaded:', error.message);
    }
}






// `<div class="news-card">
//         <img src="${articles.urlToImage}" alt="" />
//         <h1 class="card-title">${articles.title}</h1>
//         <p class="card-desc">
//         ${articles.content}
//         </p>
//         </div>`







//WHAT TO DO

/* 
Make search query = "q={searchQuery}"
Make a country bar? 



*/