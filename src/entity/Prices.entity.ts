import {
  BaseEntity,
  Column,
  ColumnOptions,
  Entity,
  ManyToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { Products } from './Products.entity.ts';

const priceParameter: ColumnOptions = {
  type: 'decimal',
  precision: 5,
  scale: 2,
  nullable: true,
};

@Entity()
export class Prices {
  @PrimaryColumn()
  id: number;

  @Column(priceParameter)
  akcijska_cena_na_kilogram_liter: number;

  @Column(priceParameter)
  akcijska_cena_na_kos: string;

  @Column({ nullable: true })
  alternativna_kategorija: string;

  // 'decimal', { scale: 2 }
  @Column(priceParameter)
  cena_kosarica: string;

  // 'decimal', { scale: 2 }
  @Column(priceParameter)
  cena_kosarica_akcija: string;

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

  @Column({ nullable: true })
  enota: string;

  @Column({ nullable: true })
  izdelek_je_alternativa: string;

  @Column({ nullable: true })
  izdelek_ni_v_prodaji: string;

  @Column({ nullable: true })
  izdelka_ne_bo_vec_v_prodaji: string;

  @Column({ nullable: true })
  izdelka_trenutno_ni_v_prodaji: string;

  @Column({ nullable: true })
  kategorija: string;

  @Column({ nullable: true })
  kolicina_mL: string;

  // 'decimal', { scale: 2 }
  @Column(priceParameter)
  redna_cena_na_kilogram_liter: string;

  // 'decimal', { scale: 2 }
  @Column(priceParameter)
  redna_cena_na_kos: string;

  @Column({ nullable: true })
  teza_g: string;

  @Column()
  trgovina: string;

  @Column({ nullable: true })
  valid_price: string;

  @Column({ nullable: true })
  vrsta_popusta: string;

  @ManyToOne(() => Products, (product) => product.prices)
  products: Relation<Products>;
}
