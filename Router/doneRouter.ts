import { Router } from "express";
import {
  createDone,
  defaultDone,
  deleteDone,
  getDone,
  getOneDone,
  updateDone,
} from "../Controller/DoneController";

const router: Router = Router();

router.route("/").get(defaultDone);
router.route("/read").get(getDone);
router.route("/create").post(createDone);
router.route("/:id").get(getOneDone).patch(updateDone).delete(deleteDone);

export default router;
