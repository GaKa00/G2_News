type Article = {
    urlToImage: string;
    url: string;
    title:string;
}

import axios from 'axios';
const asideAPI : string = '27e03b329cc3446ab9cf92cd1939e2b2';
const query : string = 'sport';
const Link: string = `https://newsapi.org/v2/everything?q=${query}&domains=bbc.co.uk&apiKey=${asideAPI}`;

const asideContainer = <HTMLDivElement>document.querySelector('.aside-news');

async function fetchAsideData() : Promise<void> {
    try {
        const response = await axios.get(Link);
        console.log(response.data.articles);

        asideContainer.innerHTML = response.data.articles
            .filter((article : Article) => article.urlToImage)
            .map((article : Article ) => {
                return `<div class="aside-card">
                    <img src="${article.urlToImage}" alt="" />
                    <a href="${article.url}" target="_blank">
                    <h1 class="card-title">${article.title}</h1>
                  </a>
                </div>`;
            })
            .join("");
    } catch (error) {
        console.error("Data could not be loaded:", (error as Error).message);
    }
}

fetchAsideData();
