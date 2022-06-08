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
@Entity('avaliation')
class Avaliation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  score: string;

  @Column({
    unique: true,
  })
  cnpj_loja: string;

  @CreateDateColumn()
  user_id: string;

  @UpdateDateColumn()
  store_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Avaliation;
