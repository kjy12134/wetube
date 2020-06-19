import express from "express";
import routes from "../routes"
import { users, userDetail, editProfile, changePwd } from "../controllers/userController";

//module (not default)
const userRouter = express.Router();

// controller 별 세부 기능 requestmapping
//userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePwd, changePwd);

export default userRouter;