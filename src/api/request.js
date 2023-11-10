const request = {
  fetchNowPlaying: "/movie/now_playing",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies: "/discover/moive?width_genres=28", // 잘못된 주소.
  fetchComedyMoives: "/discover/movie?wieth_genres=35",
  fetchHorrorMovies: "/discover/movie?width_genres=27",
  fetchRomanceMovies: "/discover/movie?width_genres=10749",
  fetchDocumentaries: "/discover/movie?width_genres=99",
};

export default request;
