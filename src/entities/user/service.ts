import { injectable } from "tsyringe";
import { IUserInst } from './model'

export interface IUserService {
  list(): IUserInst[]
}

@injectable()
export class UserService implements IUserService {
  list(): IUserInst[] {
    return [
      {
        username: 'user',
        email: 'user@mail.com',
      }
    ]
  }
}
