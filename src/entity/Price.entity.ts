import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Price {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  akcijska_cena_na_kilogram_liter: number;

  @Column({ nullable: true })
  akcijska_cena_na_kos: number;

  @Column({ nullable: true })
  alternativna_kategorija: string;

  // 'decimal', { scale: 2 }
  @Column({ nullable: true })
  cena_kosarica: number;

  // 'decimal', { scale: 2 }
  @Column({ nullable: true })
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
  @Column({ nullable: true })
  redna_cena_na_kilogram_liter: string;

  // 'decimal', { scale: 2 }
  @Column({ nullable: true })
  redna_cena_na_kos: number;

  @Column({ nullable: true })
  teza_g: number;

  @Column()
  trgovina: string;

  @Column({ nullable: true })
  valid_price: string;

  @Column({ nullable: true })
  vrsta_popusta: string;

  @ManyToOne(() => Product, (product) => product.prices)
  product: Product;
}
