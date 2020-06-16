import express from "express";
import routes from "../routes";

//module (not default)
const videoRouter = express.Router();

// controller 별 세부 기능 requestmapping
videoRouter.get(routes.videos, (req,res) => {res.send('video index')});
videoRouter.get(routes.videoDetail, (req,res) => {res.send('video detail')});
videoRouter.get(routes.editVideo, (req, res) => {res.send('edit video')});
videoRouter.get(routes.deleteVideo, (req, res) => res.send('delete video'));
videoRouter.get(routes.upload, (req, res) => {res.send('video upload')});

export default videoRouter; // 해당 코드의 전체를 쓰겟다(default)