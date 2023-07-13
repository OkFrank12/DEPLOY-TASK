import { Router } from "express";
import {
  createTask,
  defaultTask,
  deleteTask,
  getOneTask,
  getTask,
  updateTask,
} from "../Controller/TaskModel";

const router: Router = Router();

router.route("/").get(defaultTask);
router.route("/read").get(getTask);
router.route("/create").post(createTask);
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask);

export default router;
