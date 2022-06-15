import IPreferenceRepository from '../repositories/IPreferenceRepository';
import PreferenceRepository from '../repositories/PreferenceRepository';
import Preference from '../models/Preference';

interface Request {
  user_id: string;
  store_id: string;
}

class CreatePreferenceService {
  private preferenceRepository: IPreferenceRepository;

  constructor(preferenceRepository: PreferenceRepository) {
    this.preferenceRepository = preferenceRepository;
  }

  public async execute({
    store_id,
    user_id,
  }: Request): Promise<Preference | undefined> {
    const preference = await this.preferenceRepository.create({
      store_id,
      user_id,
    });

    return preference;
  }
}

export default CreatePreferenceService;
