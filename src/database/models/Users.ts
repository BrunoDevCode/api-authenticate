import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface UsersProps {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
