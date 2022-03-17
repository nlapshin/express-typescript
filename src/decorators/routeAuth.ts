import { Request, Response } from "express";

export function routeAuth(compareToken: string): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let request = args[0] as Request;
      const { headers } = request
      const { token } = headers

      if (token === compareToken) {
        return original.apply(this, args);
      } else {
        throw new Error('Invalid token')
      }
    }
  }
}
