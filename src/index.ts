import * as http from "http";
import express, { Express } from "express";
import bodyParser from "body-parser";

import routes from './routes'

export class Server {
    private readonly _app: Express;

    get app(): Express {
        return this._app;
    }

    private _server!: http.Server;

    get server(): http.Server {
        return this._server;
    }

    constructor() {
        this._app = express();

        this._app.set("port", process.env.PORT || 3000);

        this.configureMiddleware();
    }

    public configureMiddleware() {
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: true }));

        routes.register(this._app)
    }

    public start() {
        this._server = this._app.listen(this._app.get("port"), () => {
            console.log("🚀 Server is running on port " + this._app.get("port"));
        });
    }
}

export default Server;
