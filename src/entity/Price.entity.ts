import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Price {
  @PrimaryColumn()
  id: number;

  @Column()
  parentId: number;

  @Column()
  akcijska_cena_na_kilogram_liter: number;

  @Column()
  akcijska_cena_na_kos: number;

  @Column()
  alternativna_kategorija: string;

  @Column('decimal', { scale: 2 })
  cena_kosarica: number;

  @Column('decimal', { scale: 2 })
  cena_kosarica_akcija: number;

  @Column()
  date: string;

  @Column()
  datestamp: string;

  @Column()
  drzava: string;

  @Column()
  drzava_dolgo_ime: string;

  @Column()
  ena_a: string;

  @Column()
  enota: string;

  @Column()
  izdelek_je_alternativa: number;

  @Column()
  izdelek_ni_v_prodaji: number;

  @Column()
  izdelka_ne_bo_vec_v_prodaji: number;

  @Column()
  izdelka_trenutno_ni_v_prodaji: number;

  @Column()
  kategorija: string;

  @Column()
  kolicina_mL: string;

  @Column('decimal', { scale: 2 })
  redna_cena_na_kilogram_liter: number;

  @Column('decimal', { scale: 2 })
  redna_cena_na_kos: number;

  @Column()
  teza_g: number;

  @Column()
  trgovina: string;

  @Column()
  valid_price: number;

  @Column()
  vrsta_popusta: string;

  @ManyToOne(() => Product, (product) => product.prices)
  product: Product;
}
