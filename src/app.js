import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import responseMiddleware from "./middlewares/response.middleware.js";
import config from "./config/config.js";
import cookieParser from "cookie-parser";

const app = express();

// Middlewares Configurations
app.use(
    cors({
        origin: config.origin,
        credentials: true,
    })
);

app.use(responseMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
// Routers
app.use("/api/user", userRouter);

export default app;
