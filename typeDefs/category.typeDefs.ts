import { gql } from "apollo-server-express";
// Định nghĩa các key cho phép ông fe lấy
// Them sau xoa viet trong multation
// jien thi ra thi query
export const typeDefsCategory = gql`
    type Category {
        id: ID,
        title: String,
        avatar: String,
    }
    type Query {
        getListCategory: [Category],
        getCategory(id: ID): Category
    }
    input CategoryInput {
        title: String,
        avatar: String,
    }

    type Mutation {
        createCategory(category: CategoryInput): Category,
        updateCategory(id: ID, category: CategoryInput): Category,
        deleteCategory(id: ID): String
    }
`;
 