import express from "express";
import { userRouter } from "./router/user";

const app = express();

app.use("/api/v1/user",  userRouter);