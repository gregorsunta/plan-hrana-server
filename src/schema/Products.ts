import gql from 'graphql-tag';

export const ProductsTypeDefs = gql`
  type Query {
    products(kategorija: String!): [Product]!
    product(id: Int!): Product
  }

  type Mutation {
    addProducts(products: [ProductInput]!): [Product!]!
  }

  input ProductInput {
    id: Int
    drzava_proizvajalca_poreklo: String
    blagovna_znamka: String
    ekoloski_proizvodi: String
    ena_a: String
    energijska_vrednost_kJ: String
    enota: String
    hranilna_vrednost_enota: String
    id_slika: String
    integrirana_pridelava: String
    izbrana_kakovost: String
    izbrana_kakovost_slovenija: String
    kategorija: String
    novo_ime: String
    oznacba_visje_kakovosti: String
    slika_ok: String
    tip_znamke: String
    vrsta_porekla: String
    zajamcena_tradicionalna_posebnost: String
    zascitena_geografska_oznacba: String
    zascitena_oznacba_porekla: String
    prices: [PriceInput]
  }

  type Product {
    id: Int
    drzava_proizvajalca_poreklo: String
    blagovna_znamka: String
    ekoloski_proizvodi: Int
    ena_a: String
    energijska_vrednost_kJ: Int
    enota: String
    hranilna_vrednost_enota: String
    id_slika: Int
    integrirana_pridelava: String
    izbrana_kakovost: String
    izbrana_kakovost_slovenija: String
    kategorija: String
    novo_ime: String
    oznacba_visje_kakovosti: String
    slika_ok: String
    tip_znamke: String
    vrsta_porekla: String
    zajamcena_tradicionalna_posebnost: String
    zascitena_geografska_oznacba: String
    zascitena_oznacba_porekla: String
    prices: [Price]
  }
`;
