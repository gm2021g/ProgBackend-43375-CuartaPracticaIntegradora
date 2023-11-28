import express from "express";
import passport from "passport";
import {
  getLogin,
  getLogout,
  getRegister,
  getRestore,
  postLogin,
  postRegister,
  postRestore,
  getRestoreForm,
  postRestoreForm,
  changeUserRole
} from "../controller/users.controllers.js";

const Router = express.Router();

Router.get("/register", getRegister);

Router.get("/login", getLogin);

Router.post(
  "/register",
  passport.authenticate("register", { failureMessage: "not auth" }),
  postRegister
);

Router.post(
  "/login",
  passport.authenticate("login", { failureMessage: "not auth" }),
  postLogin
);

Router.get("/premium/:uid", changeUserRole);

Router.get("/logout", getLogout);

Router.get("/restore", getRestore);

Router.post("/restore", postRestore);

Router.get("/restoreForm/:uid/:token", getRestoreForm);

Router.post("/restoreForm/:uid/:token", postRestoreForm);

export default Router;



/*
import express from "express";
import passport from "passport";
import {
  getLogin,
  getLogout,
  getRegister,
  postLogin,
  postRegister,
} from "../controller/users.controllers.js";

const Router = express.Router();

Router.get("/register", getRegister);

Router.get("/login", getLogin);

Router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/error" }),
  postRegister
);

Router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/error" }),
  postLogin
);

Router.get("/logout", getLogout);

export default Router;
*/