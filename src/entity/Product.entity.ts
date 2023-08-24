import { BaseEntity, Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Price } from './Price.entity';

@Entity()
export class Product {
  @PrimaryColumn()
  id!: number;

  @Column({ nullable: true })
  drzava_proizvajalca_poreklo: string;

  @Column()
  blagovna_znamka: string;

  @Column({ nullable: true })
  ekoloski_proizvodi: string;

  @Column()
  ena_a: string;

  @Column({ nullable: true })
  energijska_vrednost_kJ: string;

  @Column()
  enota: string;

  @Column({ nullable: true })
  hranilna_vrednost_enota: string;

  @Column({ nullable: true })
  id_slika: string;

  @Column({ nullable: true })
  integrirana_pridelava: string;

  @Column({ nullable: true })
  izbrana_kakovost: string;

  @Column({ nullable: true })
  izbrana_kakovost_slovenija: string;

  @Column()
  kategorija: string;

  @Column()
  novo_ime: string;

  @Column({ nullable: true })
  oznacba_visje_kakovosti: string;

  @Column({ nullable: true })
  slika_ok: string;

  @Column()
  tip_znamke: string;

  @Column({ nullable: true })
  vrsta_porekla: string;

  @Column({ nullable: true })
  zajamcena_tradicionalna_posebnost: string;

  @Column({ nullable: true })
  zascitena_geografska_oznacba: string;

  @Column({ nullable: true })
  zascitena_oznacba_porekla: string;

  @OneToMany(() => Price, (price) => price.product)
  prices: Price[];
}
