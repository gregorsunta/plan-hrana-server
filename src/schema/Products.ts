import gql from 'graphql-tag';

export const ProductsTypeDefs = gql`
  type Query {
    products(kategorija: String!): [Product]!
    product(id: Int!): Product
    kategorije: [String]!
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

  input PriceInput {
    id: Int
    akcijska_cena_na_kilogram_liter: Float
    akcijska_cena_na_kos: Float
    alternativna_kategorija: String
    cena_kosarica: Float
    cena_kosarica_akcija: Float
    date: String
    datestamp: String
    drzava: String
    drzava_dolgo_ime: String
    ena_a: String
    enota: String
    izdelek_je_alternativa: String
    izdelek_ni_v_prodaji: String
    izdelka_ne_bo_vec_v_prodaji: String
    izdelka_trenutno_ni_v_prodaji: String
    kategorija: String
    kolicina_mL: String
    redna_cena_na_kilogram_liter: Float
    redna_cena_na_kos: Float
    teza_g: Int
    trgovina: String
    valid_price: String
    vrsta_popusta: String
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

  type Price {
    id: Int
    akcijska_cena_na_kilogram_liter: Float
    akcijska_cena_na_kos: Float
    alternativna_kategorija: String
    cena_kosarica: Float
    cena_kosarica_akcija: Float
    date: String
    datestamp: String
    drzava: String
    drzava_dolgo_ime: String
    ena_a: String
    enota: String
    izdelek_je_alternativa: String
    izdelek_ni_v_prodaji: String
    izdelka_ne_bo_vec_v_prodaji: String
    izdelka_trenutno_ni_v_prodaji: String
    kategorija: String
    kolicina_mL: String
    redna_cena_na_kilogram_liter: Float
    redna_cena_na_kos: Float
    teza_g: Int
    trgovina: String
    valid_price: String
    vrsta_popusta: String
  }
`;
