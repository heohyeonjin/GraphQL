import {getMovies,getById,addMovie,deleteMovie} from "./db";

const resolvers = {
    Query:{
        movies :() => getMovies(), //people함수가 people을  return  
        movie :(_,{id}) => getById(id)
    },
    Mutation:{
        addMovie : (_,{name,score}) => addMovie(name,score),
        deleteMovie : (_,{id}) => deleteMovie(id)
    }
}; //어떤 사용자가 name Query를 보내면 Nicolas를 반환하는 함수로 답함.

export default resolvers;
