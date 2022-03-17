import { Express, Request } from "express";
import { routeConfig, routeLog, routeAuth, METHOD } from '../decorators'

export default {
  register(server: Express) {
    class Routes {
      @routeLog()
      @routeConfig({
        server,
        method: METHOD.GET,
        path: "/"
      })
      public getExample() {
        return { key: 'value' };
      }

      @routeLog()
      @routeConfig({
        server,
        method: METHOD.POST,
        path: "/"
      })
      public postExample(request: Request) {
        return request.body;
      }

      @routeLog()
      @routeAuth('12345')
      @routeConfig({
        server,
        method: METHOD.DELETE,
        path: "/"
      })
      public deleteExample() {
        return {}
      }
    }
  }.
}
