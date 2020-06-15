import express, { Router } from "express";

//module (not default)
export const userRouter = express.Router();
export const videoRouter = express.Router();

// controller 별 세부 기능 requestmapping
userRouter.get("/", (req,res) => res.send('user index'));
userRouter.get("/edit", (req,res) => res.send('user edit'));
userRouter.get("/password", (req,res) => res.send('user password'));


videoRouter.get("/", (req,res) => {res.send('video index')});
videoRouter.get("/edit", (req,res) => {res.send('video edit')});
videoRouter.get("/edit/password", (req, res) => {res.send('video password')});