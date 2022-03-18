import { injectable, inject } from "tsyringe";
import { IUserInst } from './model';
import { IUserService } from './service'

export interface IUserCtrl {
  list(): IUserInst[]
}

@injectable()
export class UserCtrl implements IUserCtrl {
  constructor(
    @inject("UserService") public readonly userService: IUserService
  ) {}

  list(): IUserInst[] {
    return this.userService.list()
  }
}
