import repository,{ baseUrl, bearerToken } from "./repository";


class PersonMovieCredits{
    async getPersonMovieCredits(id){
        const endPoint = `person/${id}/movie_credits`
        const PersonCredits  =  await repository
        .get(baseUrl+endPoint,{
            headers:{
                accept: "application/json",
                Authorization: bearerToken,
            }
        })
        .then((ress)=>{
            return ress.data.cast
        })
        .catch((err)=>{
            console.log(err);
        })
        return PersonCredits
    }
}
export default new PersonMovieCredits();