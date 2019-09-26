import axios from "axios";

const pokemonService = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    pokemonService
      .get("/pokemon?limit=1000")
      .then(response => {
        resolve(response.data.results);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    pokemonService
      .get(`/pokemon/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
