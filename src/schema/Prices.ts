import gql from 'graphql-tag';

export const PricesTypeDefs = gql`
  type Query {
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
