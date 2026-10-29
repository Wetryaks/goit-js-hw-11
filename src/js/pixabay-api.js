import axios from 'axios';

const API_KEY = '58301557-56665f797872cc77947448cf8';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
  return response.data;
}
