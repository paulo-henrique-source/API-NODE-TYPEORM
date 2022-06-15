import CreatePreferenceDTO from '../dtos/CreatePreferenceDTO';
import Preference from '../models/Preference';

export default interface IPreferenceRepository {
  findById(id: string): Promise<Preference | undefined>;
  findAll(): Promise<Preference[]>;
  save(preference: Preference): Promise<Preference>;
  create(
    CreatePreferenceDTO: CreatePreferenceDTO,
  ): Promise<Preference | undefined>;
  delete(id: string): Promise<void>;
}
