let yesterday = new Date().getDate() - 1;
const newAPI = "26873f2efaf240bfab3a9b7a0053b43b";
const container = document.querySelector(".news-card-container");
const searchBar = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

async function fetchData(query) {
  try {
    const newsLink = checkFilters(query);
    console.log(newsLink);
    const response = await axios.get(newsLink);
    console.log(response.data.articles);
    container.innerHTML = response.data.articles
      .map((article) => {
        return `<div class="news-card">
        <img src="${article.urlToImage}" alt="" />
        <h1 class="card-title">${article.title}</h1>
        <p class="card-desc">
        ${article.content.replace(/(<([^>]+)>)/gi, "")}
        </p>
        </div>`;
      })
      .join("");
  } catch (error) {
    console.error("Data could not be loaded:", error.message);
  }
}

fetchData();

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const searchQuery = searchBar.value;
  fetchData(searchQuery);
});

// create an array with the categories

function checkFilters(query, category) {
  if (!query && !category) {
    //If neither category nor query is provided
    const Link = `https://newsapi.org/v2/everything?domains=bbc.co.uk&from=${yesterday}&to=${yesterday}&apiKey=${newAPI}`;
    return Link;
  } else if (category) {
    //If a category has been selected
    const Link = `https://newsapi.org/v2/top-headlines/sources?&country=gb&category=${category}&apiKey=${newAPI}`;
    return Link;
  } else {
    //if  a searchquery has been provided
    const Link = `https://newsapi.org/v2/everything?q=${query}&domains=bbc.co.uk&from=${yesterday}&to=${yesterday}&apiKey=${newAPI}`;
    return Link;
  }
}
//get query and category choice

// `https://newsdata.io/api/1/news?apikey=${APIkey}`

import axios from "axios";

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

//make search query look in object and display objects w same word in title
