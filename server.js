const express = require("express");
const server = express();
const RecipeRouter = require("./schemes/recipe-router");

server.use(express.json());
server.use("/api/recipes", RecipeRouter);

module.exports = server;
