import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserRepository from '../repositories/UserRepository';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, deficiency, birthday, gender, status } =
      request.body;

    const userRespository = new UserRepository();
    const createUser = new CreateUserService(userRespository);

    const user = await createUser.execute({
      name,
      email,
      password,
      deficiency,
      birthday,
      gender,
      status,
    });

    // @ts-expect-error
    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, deficiency, birthday, gender, status } = request.body;

    const userRespository = new UserRepository();
    const updateUser = new UpdateUserService(userRespository);

    const user = await updateUser.execute({
      id,
      name,
      email,
      deficiency,
      birthday,
      gender,
      status,
    });

    return response.json(user);
  }
  public async index(request: Request, response: Response): Promise<Response> {
    const userRespository = new UserRepository();

    const users = await userRespository.findAll();

    return response.json(users);
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const userRespository = new UserRepository();
    const destroyUser = new DeleteUserService(userRespository);

    await destroyUser.execute(id);

    return response.json({ message: 'Deletado com sucesso!' });
  }
}

export default UserController;
