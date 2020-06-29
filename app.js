import express from "express"; // framework
import morgan from "morgan"; // logger
import helmet from "helmet"; // secure for nodeJs
import cookieParser from "cookie-parser"; // parsing cookie for session
import bodyParser from "body-parser"; // data-parsing from form object
import { localsMiddleWare } from "./middlewares";
import userRouter from "./routers/userRouter"; // use another code, just object unit {}
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express(); // get

// connection
app.use(helmet()); // security
app.set("view engine", "pug"); // pug 설정, view 파일의 기본 경로는 /views
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // logger

// local middleware (global variable)
app.use(localsMiddleWare);

// router, like request-mapping (in JAVA Spring)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); 
app.use(routes.videos, videoRouter);

// module
// giving all settings to them who use this code-file
export default app;