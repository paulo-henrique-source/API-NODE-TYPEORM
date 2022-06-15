import CreateAvaliationDTO from '../dtos/CreateAvaliationDTO';
import Avaliation from '../models/Avaliation';

export default interface IAvaliationRepository {
  findById(id: string): Promise<Avaliation | undefined>;
  findAll(): Promise<Avaliation[]>;
  save(preference: Avaliation): Promise<Avaliation>;
  create(
    CreateAvaliationDTO: CreateAvaliationDTO,
  ): Promise<Avaliation | undefined>;
  delete(id: string): Promise<void>;
}
