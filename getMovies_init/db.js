/* 이름 Query의 기능성을 프로그래밍, Query를 resolve*/
let movies =[
    {          
       id: 0,
       name : "Logan",
       score : 100
       
   },  
       {
       id :1,
       name : "Mylove",
       score : 80
   },
   
    {
       id : 3,
       name : "Touching",
       score : 40
   },
    {
       id : 4,
       name : "stand",
       score : 70
   },
    {  id : 5,
       name : "mirror",
       score : 99
   }
   ];

export const getMovies = () =>movies;
export const getById = id => {
    const filteredMovies = movies.filter(movie=>movie.id===id);
    return filteredMovies[0];
};
//걸러진 사람을 리턴. 해당 ID와 맞는 person을 리턴
//id 를 부여해서 id가 people배열 안에 있는, 모든Object들을 확인
//filter : 모든 대상을 거친 뒤 해당 조건에 맞는 걸 리턴
export const deleteMovie = (id) =>{
    const cleanedMovies = movies.filter(movie=>movie.id!==id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else{
        return false
    }
}; // 같은 id를 가지지 않은 movie의 배열을 만듬
export const addMovie = (name,score) => {
    const newMovie = {
        id : `${movies.length+1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}
