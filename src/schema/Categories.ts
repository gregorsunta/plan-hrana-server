import gql from 'graphql-tag';

export const CategoriesTypeDefs = gql`
  type Query {
    category(id: Int): Category!
    categories: [Category]!
    subcategories: [String]!
  }

  type Category {
    id: Int
    name: String
    subcategories: [String]
  }
`;
