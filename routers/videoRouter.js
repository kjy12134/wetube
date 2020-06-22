import express from "express";
import routes from "../routes";
import { videos, videoDetail, editVideo, deleteVideo, upload } from "../controllers/videoController";

//module (not default)
const videoRouter = express.Router();

// controller 별 세부 기능 requestmapping
//videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.upload, upload);

export default videoRouter; // 해당 코드의 전체를 쓰겟다(default)