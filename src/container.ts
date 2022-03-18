import { container } from 'tsyringe';

import { UserCtrl} from './entities/user/ctrl'
import { UserService, IUserService } from './entities/user/service'

container.registerSingleton<IUserService>('UserService', UserService)
container.registerSingleton<UserCtrl>('UserCtrl', UserCtrl)
