import repository, { baseUrl, bearerToken } from "./repository";

class PersonMovieCredits {
  async getPersonById(id) {
    const endPoint = `person/${id}`;
    const PersonCredits = await repository
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
    return PersonCredits;
  }
}
export default new PersonMovieCredits();
