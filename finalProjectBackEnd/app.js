import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { indexRouter } from "./routes/index.js";
import { usersRouter } from "./routes/users.js";
import connect from "./lib/db.js";

import StoresRouter from "./routes/stores.js";
import ItemsRouter from "./routes/items.js";

import cors from "cors";

const app = express();

app.set("db", async (collection) => {
  const mongo = await connect();
  return mongo.db("mongodb_lab").collection(collection);
});

app.set('view engine', 'ejs');

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/stores", StoresRouter);
app.use("/items", ItemsRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
