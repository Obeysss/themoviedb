import repository, { baseUrl, bearerToken } from "./repository";
class WhatsPopular {
  async getWhatsPopularMovie(type) {
    const endPoint = `discover/${type}`;
    const popularMovie = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        return ress.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return popularMovie;
  }
}

export default new WhatsPopular();
