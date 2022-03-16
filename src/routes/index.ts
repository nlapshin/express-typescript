import { Express, Request } from "express";
import { routeConfig, METHOD } from '../decorators'

export default {
  register(server: Express) {
    class Routes {
      @routeConfig({
        server,
        method: METHOD.GET,
        path: "/"
      })
      public getExample() {
        return { key: 'value' };
      }

      @routeConfig({
        server,
        method: METHOD.POST,
        path: "/"
      })
      public postExample(request: Request) {
        return request.body;
      }
    }
  }
}
