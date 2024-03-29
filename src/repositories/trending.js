import repository, { baseUrl, bearerToken } from "./repository";

class Trending {
  async getTrendingMovie(type) {
    const endPoint = `trending/movie/${type}`;
    const trendingMovie = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        return ress.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    return trendingMovie;
  }
}

export default new Trending();
