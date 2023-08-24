import { BaseEntity, Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Price } from './Price.entity';

@Entity()
export class Product {
  @PrimaryColumn()
  id!: number;

  @Column()
  drzava_proizvajalca_poreklo: string;

  @Column()
  blagovna_znamka: string;

  @Column()
  ekoloski_proizvodi: number;

  @Column()
  ena_a: string;

  @Column()
  energijska_vrednost_kJ: number;

  @Column()
  enota: string;

  @Column()
  hranilna_vrednost_enota: string;

  @Column()
  id_slika: number;

  @Column()
  integrirana_pridelava: number;

  @Column()
  izbrana_kakovost: string;

  @Column()
  izbrana_kakovost_slovenija: number;

  @Column()
  kategorija: string;

  @Column()
  novo_ime: string;

  @Column()
  oznacba_visje_kakovosti: number;

  @Column()
  slika_ok: string;

  @Column()
  tip_znamke: string;

  @Column()
  vrsta_porekla: string;

  @Column()
  zajamcena_tradicionalna_posebnost: string;

  @Column()
  zascitena_geografska_oznacba: string;

  @Column()
  zascitena_oznacba_porekla: string;

  @OneToMany(() => Price, (price) => price.product)
  prices: Price[];
}
