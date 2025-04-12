import axios from 'axios';

const ACCESS_KEY = 'IRS9DkEuzGWatYY-n837IBUepc6T_l34aXGsOsmfr9Q'; 

const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};
