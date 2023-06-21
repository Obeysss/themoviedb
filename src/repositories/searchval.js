import repository, { baseUrl, bearerToken } from "./repository";

class SearchVal {
  async getSearchName(name) {
    console.log(name);
    const endPoint = `search/movie?query=${name}&include_adult=false&language=en-US&page=1`;
    const search = await repository
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
    return search;
  }
}
export default new SearchVal();