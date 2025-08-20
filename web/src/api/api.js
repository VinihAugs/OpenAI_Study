import axios from 'axios';

const URL_API = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/prompt';

export const makeRequest = async ({ prompt }) => {
  const { data } = await axios.post(URL_API, { prompt });
  return data;
};
