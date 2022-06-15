import { Repository, getRepository } from 'typeorm';
import User from '../models/Users';
import IUserRepository from './IUserRepository';
import CreateUserDTO from '../dtos/CreateUserDTO';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async findAll(): Promise<User[]> {
    return this.ormRepository.find();
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { email },
    });
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }

  public async create({
    name,
    email,
    password,
    deficiency,
    birthday,
    gender,
    status,
  }: CreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      deficiency,
      birthday,
      gender,
      status,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
