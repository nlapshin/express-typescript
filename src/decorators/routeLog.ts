import { Request } from "express";

export function routeLog(): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value; // сохраняю ссылку на оригинальный метод

    console.log(original) // handler

    descriptor.value = function routeLog(...args: any[]) {
      console.log('before route log')

      // Мой код
      let request = args[0] as Request;

      const {
        url,
        method,
        body,
        headers,
      } = request;

      console.log("[LOG]", {
        url,
        method,
        body,
        headers,
      });

      return original.apply(this, args); // Вызываю оригинальный
    }
  };
}
