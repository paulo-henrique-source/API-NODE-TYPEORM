import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// codloja            integer                 NOT NULL,
// nome_loja       character varying(200),
// cnpj_loja          character varying(200),
// CONSTRAINT keycodloja PRIMARY KEY (codloja)
@Entity('store')
class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  cnpj_loja: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Store;
