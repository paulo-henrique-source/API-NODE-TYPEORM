import IUserRepository from '../repositories/IUserRepository';
import UserRepository from '../repositories/UserRepository';
import User from '../models/Users';
import AppError from '../error/AppError';

interface IRequest {
  id: string;
  name: string;
  email: string;
  deficiency: string;
  status: boolean;
  gender: string;
  birthday: string;
}

class UpdateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({
    id,
    name,
    email,
    deficiency,
    birthday,
    gender,
    status,
  }: IRequest): Promise<User> {
    const client = await this.userRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    if (email !== client.email) {
      const verifyEmail = await this.userRepository.findByEmail(email);

      if (verifyEmail) {
        throw new AppError('E-mail already used!', 400);
      }
    }

    client.name = name;
    client.email = email;
    client.deficiency = deficiency;
    client.birthday = birthday;
    client.gender = gender;
    client.status = status;

    await this.userRepository.save(client);

    return client;
  }
}

export default UpdateUserService;
