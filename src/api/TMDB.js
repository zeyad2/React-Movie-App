

// src/api/tmdb.js
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchPopularMovies = async () => {
  try {
    const endpoint = `${BASE_URL}/movie/popular`;
    const response = await fetch(endpoint, options);
    const data = await response.json();
    console.log(data.results)

    return data.results; // Only return the movies
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return []; // fallback
  }
};
