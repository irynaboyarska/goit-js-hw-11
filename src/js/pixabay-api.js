import axios from "axios";

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';

    return axios.get(BASE_URL, {
        params: {
            key: '55050395-20e5244c38068275f8aacdcf3',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(response => response.data.hits);
}