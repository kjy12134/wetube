import express from "express";
import routes from "../routes"

//module (not default)
const userRouter = express.Router();

// controller 별 세부 기능 requestmapping
userRouter.get(routes.users, (req,res) => res.send('users'));
userRouter.get(routes.userDetail, (req,res) => res.send('user detail'));
userRouter.get(routes.editProfile, (req,res) => res.send('user edit'));
userRouter.get(routes.changePwd, (req,res) => {res.send('user change passwd')});

export default userRouter;