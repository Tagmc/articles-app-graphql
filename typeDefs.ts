import { gql } from "apollo-server-express";
// Định nghĩa các key cho phép ông fe lấy
export const typeDefs = gql`
    type Query {
        hello: String
    }
`;