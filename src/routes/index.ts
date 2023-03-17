import { Express, Request } from "express";
import { routeConfig, routeLog, METHOD } from '../decorators'

const successResponse = {
  success: true,
  data: { key: 'value' }
}

const failureResponse = {
  success: false,
  err: 'error'
}

// @ - собачка обозначает декоратор.
// Декораторы с большой буквы(но не объязательно)
// В декоратор можно передвать данные 

// 1. routeLog. 2. routeConfig. 3. getExample
// routeConfig -> routeLog -> getExample

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
        console.log('handler')

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
    }
  }
}

/*
interface IC {
  send(message: string): void;
}


class A {
  constructor(private b: B, private c: IC) {}
}

class B {

}

class C implements IC {
  send(message: string) {
    
  }
}

class C2 implements IC {
  send(message: string) {
    
  }
}


const a = new A(new B(), new C2());
*/

// singleton и нет. 

/*
class Multiton {

}

class A {
  constructor(multi: Multiton) {

  }
}

class B {
  constructor(multi: Multiton) {
    
  }
}
*/
