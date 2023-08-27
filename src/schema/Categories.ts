import gql from 'graphql-tag';

export const CategoriesTypeDefs = gql`
  type Query {
    categories: [String]!
    subcategories: [String]!
  }

  type Category {
    id: Int
    name: String
    subcategoryids: [String]
  }
`;
