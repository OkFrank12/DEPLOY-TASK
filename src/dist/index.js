"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mainApp_1 = require("./mainApp");
const db_1 = require("./Config/db");
dotenv_1.default.config();
const realPort = parseInt(process.env.APPLICATION_PORT);
const port = realPort;
const app = (0, express_1.default)();
const server = app.listen(process.env.APPLICATION_PORT || port, () => {
    (0, mainApp_1.mainApp)(app);
    (0, db_1.dbConnect)();
    console.log("");
    console.log("Server is live...!");
});
process.on("uncaughtException", (error) => {
    console.log("Server is shutting down because of uncaught exception");
    console.log("uncaughtException: ", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("Server is shutting down because of unhandled rejection");
    console.log("unhandledRejection: ", reason);
    server.close(() => {
        process.exit(1);
    });
});
