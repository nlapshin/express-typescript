import "reflect-metadata"
import * as http from "http";
import express, { Express } from "express";
import bodyParser from "body-parser";

import './container'

import routes from './routes'
import { user } from './entities'

export class Server {
    private readonly _app: Express;
    private _server!: http.Server;

    constructor() {
        this._app = express();
        this._app.set("port", process.env.PORT || 3000);

        this.configureMiddleware();
    }

    get app(): Express {
        return this._app;
    }

    get server(): http.Server {
        return this._server;
    }

    public configureMiddleware() {
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: true }));

        routes.register(this._app)
        user.register(this._app)
    }

    public start() {
        this._server = this._app.listen(this._app.get("port"), () => {
            console.log("🚀 Server is running on port " + this._app.get("port"));
        });
    }
}

export default Server;

// express + typescript.
// 1. npm install typescript --save-dev
// 2. tsconfig.json - создать.
// 3. Как запускать наш код? tsc && node ./dist/index.js
// - ts-node. ts-node для транспиляции и запуска. tsc && node ./dist/index.js
// - Первый вариант: nodemon + ts-node. Настраиваем nodemon и под ним запускаем ts-node
// - Второй вариант: ts-node-dev.
// Можно запускать.
