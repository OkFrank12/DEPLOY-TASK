import express, { Application } from "express";
import cors from "cors";
import task from "./Router/taskRouter";
import done from "./Router/doneRouter";
import auth from "./Router/authRouter";
export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use("/api/v1/task", task)
    .use("/api/v1/done", done)
    .use("/api/v1/auth", auth)
};
