const APIkey = "pub_36653feee246fd80e9b307f3259eff073c8d0"
const newAPI = "26873f2efaf240bfab3a9b7a0053b43b"

const newsLink =`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newAPI}`
// `https://newsdata.io/api/1/news?apikey=${APIkey}`



import axios from 'axios';

   export async function fetchData() {
    try {
        const response = await axios.get(newsLink);
        console.log(response.data)
    } catch (error) {
        console.error('Data could not be loaded:', error.message);
    }
}


