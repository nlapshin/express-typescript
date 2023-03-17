import { Express } from "express";
import { container } from "tsyringe";
import { routeConfig, routeLog, METHOD } from '../../decorators'
import { UserCtrl } from './ctrl'

const userCtrl = container.resolve<UserCtrl>("UserCtrl")

export default {
  register(server: Express) {
    class UserRoutes {
      @routeLog()
      @routeConfig({
        server,
        method: METHOD.GET,
        path: "/user/list"
      })
      public list() {
        return userCtrl.list();
      }
    }
  }
}


// endpoint user/list -> handler -> userCtrl.list -> userCtrl.list -> userService.list

/*
@injectable()
class UserService {

}


@injectable()
class UserCtrl {
  constructor(@inject() service: UserService)

}

endpoint user/list 
const userCtrl = container.resolve<UserCtrl>("UserCtrl")
*/
