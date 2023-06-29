import repository, { baseUrl, bearerToken } from "./repository";

class SearchVal {
  async getSearchName(name) {
    const endPoint = `search/multi?query=${name}`;
    const search = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: bearerToken,
        },
      })
      .then((ress) => {
        console.log(ress.data);
        return ress.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return search;
  }
}
export default new SearchVal();