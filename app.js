import express from "express"; // framework
import morgan from "morgan"; // logger
import helmet from "helmet"; // secure for nodeJs
import cookieParser from "cookie-parser"; // parsing cookie for session
import bodyParser from "body-parser"; // data-parsing from form object
import userRouter from "./routers/userRouter"; // use another code, just object unit {}
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express(); // get

app.set("view engine", "pug"); // pug 설정, view 파일의 기본 경로는 /views
// set middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));


// use route
// like request-mapping (in JAVA Spring)
// url을 변수화해서 가져옴
app.use("/", globalRouter);
app.use(routes.users, userRouter); 
app.use(routes.videos, videoRouter);

// module
// giving all settings to them who use this code-file
export default app;