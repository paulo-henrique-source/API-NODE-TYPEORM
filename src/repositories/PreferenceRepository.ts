import { Repository, getRepository } from 'typeorm';
import Preference from '../models/Preference';
import IPreferenceRepository from './IPreferenceRepository';
import CreatePreferenceDTO from '../dtos/CreatePreferenceDTO';

class PreferenceRepository implements IPreferenceRepository {
  private ormRepository: Repository<Preference>;

  constructor() {
    this.ormRepository = getRepository(Preference);
  }

  public async findById(id: string): Promise<Preference | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async findAll(): Promise<Preference[]> {
    return this.ormRepository.find();
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }

  public async create({
    store_id,
    user_id,
  }: CreatePreferenceDTO): Promise<Preference> {
    const preference = this.ormRepository.create({
      store_id,
      user_id,
    });

    await this.ormRepository.save(preference);

    return preference;
  }

  public async save(preference: Preference): Promise<Preference> {
    return this.ormRepository.save(preference);
  }
}

export default PreferenceRepository;
