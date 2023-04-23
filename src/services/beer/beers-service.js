import axios from "axios";

const BEER_REST_API_URL = "https://api.sampleapis.com/beers/ale";

const api = axios.create({
  withCredentials: false,
});

export const findAllBeers = async () => {
  const response = await api.get(BEER_REST_API_URL);
  return response.data;
};

export const findBeerByName = async (beer) => {
  const response = await api.get(BEER_REST_API_URL);
  const json = await response.data;
  const regex = new RegExp(`${beer}`, 'i');
  return json.filter((beer) => regex.test(beer.name));
}

export const findBeerByID = async (beerid) => {
  const response = await api.get(`${BEER_REST_API_URL}/${beerid}`);
  return response.data;
}