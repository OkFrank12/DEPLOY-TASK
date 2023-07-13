import express, { Application } from "express";
import dotenv from "dotenv";
import { mainApp } from "./mainApp";
import { dbConnect } from "./Config/db";
dotenv.config();

const realPort = parseInt(process.env.APPLICATION_PORT!);
const port: number = realPort;

const app: Application = express();

const server = app.listen(port, () => {
  mainApp(app);
  dbConnect();
  console.log("");
  console.log("Server is live...!");
});

process.on("uncaughtException", (error: any) => {
  console.log("Server is shutting down because of uncaught exception");
  console.log("uncaughtException: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of unhandled rejection");
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
