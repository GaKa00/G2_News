let yesterday = new Date().getDate() -1;
const newAPI = "26873f2efaf240bfab3a9b7a0053b43b"

const newsLink =`https://newsapi.org/v2/everything?domains=bbc.co.uk&from=${yesterday}&to=${yesterday}&apiKey=${newAPI}`
// `https://newsdata.io/api/1/news?apikey=${APIkey}`



import axios from 'axios';

   export async function fetchData() {
    try {
        const response = await axios.get(newsLink);
        console.log(response.data.articles);
    } catch (error) {
        console.error('Data could not be loaded:', error.message);
    }
}





//WHAT TO DO

/* 
Make search query = "q={searchQuery}"
Make a country bar? 



*/