import { Router } from "express";
import {
  createAccount,
  deleteOneUser,
  readOneUser,
  readUser,
  signInAccount,
  updateOneUser,
} from "../Controller/AuthController";

const router: Router = Router();

router.route("/all-users").get(readUser);
router.route("/register").post(createAccount);
router.route("/sign-in").post(signInAccount);
router.route("/:id/user-info").get(readOneUser);
router.route("/:id/update-user").patch(updateOneUser);
router.route("/:id/delete-user").delete(deleteOneUser);

export default router;
