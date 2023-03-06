const express = require("express");
const ActorRoutes = express.Router();
const {
  retrieveAllActors,
  retrieveActorById,
  createActor,
  updateActorById,
  deleteActorById,
} = require("../controllers/actor.controller");

ActorRoutes.get("/all", retrieveAllActors);
ActorRoutes.get("/:id", retrieveActorById);
ActorRoutes.post("/", createActor);
ActorRoutes.patch("/:id", updateActorById);
ActorRoutes.delete("/:id", deleteActorById);

module.exports = ActorRoutes;
