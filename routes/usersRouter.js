const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);
usersRouter.get("/new", usersController.createUsernameGet)
usersRouter.post("/create", usersController.createUsernamePost)
usersRouter.get("/sups", usersController.getAllSups)

module.exports = usersRouter