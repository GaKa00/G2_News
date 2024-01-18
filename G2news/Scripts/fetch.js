const APIkey = "pub_36653feee246fd80e9b307f3259eff073c8d0"

const newsLink =`https://newsdata.io/api/1/archive?apikey=${APIkey}=example&language=en`
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


