let yesterday = new Date().getDate() -1;
const container = document.querySelector('.news-card-container');

const newAPI = "26873f2efaf240bfab3a9b7a0053b43b"

const newsLink =`https://newsapi.org/v2/everything?domains=bbc.co.uk&from=${yesterday}&to=${yesterday}&apiKey=${newAPI}`
// `https://newsdata.io/api/1/news?apikey=${APIkey}`



import axios from 'axios';

   export async function fetchData() {
    try {
        const response = await axios.get(newsLink);
        console.log(response.data.articles);
        console.log(response.data.articles.title);
        console.log(response.data.articles.content);
        container.innerHTML =  response.data.articles.map((article) => {
             `<div class="news-card">
        <img src="${article.urlToImage}" alt="" />
        <h1 class="card-title">${article.title}</h1>
        <p class="card-desc">
        ${article.content}
        </p>
        </div>`
        }
           ).join('');


        
        
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