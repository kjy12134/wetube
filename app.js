import express from "express"; // framework
import morgan from "morgan"; // logger
import helmet from "helmet"; // secure for nodeJs
import cookieParser from "cookie-parser"; // parsing cookie for session
import bodyParser from "body-parser"; // data-parsing from form object
import { userRouter } from "./router"; // use another code, just object unit {}
import { videoRouter } from "./router";

const app = express(); // get

const handlehome = (req, res) => res.send('HELLO FROM HOME');
const handleProfile = (req, res) => res.send('HELLO FROM PROFILE');


// set middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));


// use route
app.get("/", handlehome);
app.get("/profile", handleProfile);
app.use("/user", userRouter); // like request-mapping (in JAVA Spring)
app.use("/video", videoRouter);

// module
// giving all settings to them who use this code-file
export default app;