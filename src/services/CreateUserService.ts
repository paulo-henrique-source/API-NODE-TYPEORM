import { hash } from 'bcryptjs';
import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import User from '../models/Users';

interface Request {
  name: string;
  email: string;
  password: string;
  deficiency: string;
  status: boolean;
  gender: string;
  birthday: string;
}

class CreateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
    name,
    email,
    password,
    deficiency,
    birthday,
    gender,
    status,
  }: Request): Promise<User | undefined> {
    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      deficiency,
      birthday,
      gender,
      status,
    });

    return user;
  }
}

export default CreateUserService;
