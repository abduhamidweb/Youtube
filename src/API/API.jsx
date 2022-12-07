import axios from "axios";
const BASE_URL = "https://www.googleapis.com/youtube/v3";
let API_KEY = "AIzaSyCnPMT1Y2sgoQoWyrv01rBw-nEbprmVRKw";
let API_KEY_SEARCH = "AIzaSyDQwSG0kyL0fLjbWWG-bMn-0FrMvAmAi_k";

const API = {
    defaultVideo: async () => {
        const Respons = await axios.get(`${BASE_URL}/videos?key=${API_KEY}&part=snippet&maxResults=100&chart=mostPopular`);
        return Respons.data
    },
        searchVideo: async (Query) => {
        const Respons = await axios.get(
          `${BASE_URL}/search?key=${API_KEY_SEARCH}&maxResults=10000&part=snippet&${Query}`
        );
        return Respons.data
    }
}
export default API