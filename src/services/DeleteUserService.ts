import IUserRepository from '../repositories/IUserRepository';
import AppError from '../error/AppError';

class DeleteUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(id: string): Promise<void> {
    const client = await this.userRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    await this.userRepository.delete(id);
  }
}

export default DeleteUserService;
