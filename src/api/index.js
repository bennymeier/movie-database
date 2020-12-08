import axios from 'axios';

const BEARER_TOKEN = ``;

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
});

// Get genres from API
export const getGenres = () => {
  return api.get('/genre/movie/list');
};

// Get movies by genre
export const getMoviesByGenre = (genreId, page, sort) => {
  return api.get('/discover/movie', {
    params: {
      with_genres: genreId,
      page,
      sort_by: sort,
    },
  });
};

// Get movies
export const getMovies = (name, page) => {
  return api.get(`/movie/${name}`, {
    params: {
      page,
    },
  });
};

// Get single movie
export const getMovie = (id) => {
  return api.get(`/movie/${id}`);
};

// Get credits of movie
export const getCredits = (id) => {
  return api.get(`/movie/${id}/credits`);
};

// Get recommended movies based on another
export const getRecommendations = (id) => {
  return api.get(`/movie/${id}/recommendations`);
};

// Get person
export const getPerson = (id) => {
  return api.get(`/person/${id}`);
};

// Get movies from an actor
export const moviesFromActor = (id, page, sort) => {
  return api.get(`/discover/movie`, {
    params: {
      with_cast: id,
      page,
      sort_by: sort,
    },
  });
};

// Search movie
export const searchMovie = (query) => {
  return api.get(`/search/movie`, { params: { query } });
};
