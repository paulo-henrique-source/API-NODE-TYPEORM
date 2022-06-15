import IPreferenceRepository from '../repositories/IPreferenceRepository';
import PreferenceRepository from '../repositories/PreferenceRepository';
import Preference from '../models/Preference';
import AppError from '../error/AppError';

interface IRequest {
  id: string;
  store_id: string;
  user_id: string;
}

class UpdatePreferenceService {
  private preferenceRepository: IPreferenceRepository;

  constructor(preferenceRepository: PreferenceRepository) {
    this.preferenceRepository = preferenceRepository;
  }

  public async execute({
    id,
    store_id,
    user_id,
  }: IRequest): Promise<Preference> {
    const client = await this.preferenceRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found!', 400);
    }

    client.store_id = store_id;
    client.user_id = user_id;

    await this.preferenceRepository.save(client);

    return client;
  }
}

export default UpdatePreferenceService;
