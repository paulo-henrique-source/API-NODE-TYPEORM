import IPreferenceRepository from '../repositories/IPreferenceRepository';
import AppError from '../error/AppError';

class DeletePreferenceService {
  private preferenceRepository: IPreferenceRepository;

  constructor(preferenceRepository: IPreferenceRepository) {
    this.preferenceRepository = preferenceRepository;
  }

  public async execute(id: string): Promise<void> {
    const client = await this.preferenceRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    await this.preferenceRepository.delete(id);
  }
}

export default DeletePreferenceService;
