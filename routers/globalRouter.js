import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, function(req, res) {res.send('home')});
globalRouter.get(routes.join, function(req, res) {res.send('join')});
globalRouter.get(routes.login, function(req, res) {res.send('login')});
globalRouter.get(routes.logout, function(req, res) {res.send('logout')});
globalRouter.get(routes.search, function(req, res) {res.send('search')});


export default globalRouter;