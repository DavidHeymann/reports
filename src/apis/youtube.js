import axios from 'axios';

const KEY = 'AIzaSyAcs4vJPB0WA9Hb9YdPlhHu20__sS9coF4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});