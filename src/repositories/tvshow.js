import repository, { baseUrl, bearerToken } from "./repository";

class TvShow {
  async getShowByName(name) {
    const endPoint = `tv/${name}`;
    const series = await repository
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
    return series;
  }
}

export default new TvShow();
