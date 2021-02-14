const API_KEY = "9e7f4bc908f73460c45bb162672073cf";

const request = {
    fetchTrending:          `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:   `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:          `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionsMovies:     `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:      `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie:       `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:     `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;

