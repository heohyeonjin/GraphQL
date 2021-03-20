import {GraphQLServer} from  "graphql-yoga"; //graph-yoga로 서버 시작
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql", // 모든 type들에 대한 정의
    resolvers:resolvers
});//server라는 새로운 variable, 새로운 GraphQLServer생성해서 환경설정 넣기

server.start(()=> console.log("Graphql Server Running"));
