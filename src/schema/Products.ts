import gql from 'graphql-tag';

export const ProductsTypeDefs = gql`
  type Query {
    products: [Product]!
    product: Product
  }

  type Mutation {
    addProducts(products: [ProductInput]!): [Product!]!
  }

  input ProductInput {
    id: Int
    drzava_proizvajalca_poreklo: String
    blagovna_znamka: String
    ekoloski_proizvodi: Int
    ena_a: String
    energijska_vrednost_kJ: Int
    enota: String
    hranilna_vrednost_enota: String
    id_slika: Int
    integrirana_pridelava: Int
    izbrana_kakovost: String
    izbrana_kakovost_slovenija: Int
    kategorija: String
    novo_ime: String
    oznacba_visje_kakovosti: Int
    slika_ok: Int
    tip_znamke: String
    vrsta_porekla: String
    zajamcena_tradicionalna_posebnost: Int
    zascitena_geografska_oznacba: Int
    zascitena_oznacba_porekla: Int
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
    izdelek_je_alternativa: Int
    izdelek_ni_v_prodaji: Int
    izdelka_ne_bo_vec_v_prodaji: Int
    izdelka_trenutno_ni_v_prodaji: Int
    kategorija: String
    kolicina_mL: String
    redna_cena_na_kilogram_liter: Float
    redna_cena_na_kos: Float
    teza_g: Int
    trgovina: String
    valid_price: Int
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
    integrirana_pridelava: Int
    izbrana_kakovost: String
    izbrana_kakovost_slovenija: Int
    kategorija: String
    novo_ime: String
    oznacba_visje_kakovosti: Int
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
    alternativna_kategorija: Int
    cena_kosarica: Float
    cena_kosarica_akcija: Float
    date: String
    datestamp: String
    drzava: String
    drzava_dolgo_ime: String
    ena_a: String
    enota: String
    izdelek_je_alternativa: Int
    izdelek_ni_v_prodaji: Int
    izdelka_ne_bo_vec_v_prodaji: Int
    izdelka_trenutno_ni_v_prodaji: Int
    kategorija: String
    kolicina_mL: String
    redna_cena_na_kilogram_liter: Float
    redna_cena_na_kos: Float
    teza_g: Int
    trgovina: String
    valid_price: Int
    vrsta_popusta: String
  }
`;
