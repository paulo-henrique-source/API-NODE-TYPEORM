import User from '../models/Users';

export default interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
}
