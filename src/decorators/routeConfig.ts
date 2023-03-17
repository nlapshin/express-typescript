import { Express, Request, Response } from "express";

export enum METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

interface RouteConfigProps {
  server: Express;
  method: METHOD;
  path: string;
}

export function routeConfig({server, method, path}: RouteConfigProps): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const response = async (req: Request, res: Response) => {
      console.log('before route config', descriptor.value)

      try {
        const data = await descriptor.value(req, res); // наш обработчик для которого выполняется декоторатор

        res.status(200).json({ success: true, data });
      } catch (e) {
        if (e instanceof Error) {
          res.status(500).json({
            success: false,
            message: "Some error occurred",
            error: e.message,
            stack: e.stack,
          });
        } else {
          res.status(500).json({
            success: false,
            message: "Some error occurred"
          });
        }
      }
    }

    server[method](path, response);
  }
}
