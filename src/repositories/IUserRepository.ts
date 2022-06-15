import CreateUserDTO from '../dtos/CreateUserDTO';
import User from '../models/Users';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  create(createUserDTO: CreateUserDTO): Promise<User | undefined>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
