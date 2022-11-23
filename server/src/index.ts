import express, { json, urlencoded, Application } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import responseTime from "response-time";
import compression from "compression";

import { config } from "dotenv";

import Router from "./route";

config();

const app: Application = express();
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(responseTime());

app.use(morgan("dev"));
app.use(express.static("public"));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.removeHeader("X-Frame-Options");
  next();
});

app.use(Router);

app.set("showStackError", true);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

export default app;
