const Actor = require("../models/actor.model");

async function retrieveAllActors(req, res, next) {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (error) {
    return next(error);
  }
}

async function retrieveActorById(req, res, next) {
  try {
    const { id } = req.params;
    const actor = await Actor.findById(id);
    res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
}

async function createActor(req, res, next) {
  try {
    const actor = new Actor(req.body.name);
    const actorDB = await actor.save();
    res.status(201).json(actorDB);
  } catch (error) {
    return next(error);
  }
}

async function updateActorById(req, res, next) {
  try {
    const { id } = req.params;
    const updateActor = await Actor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateActor);
  } catch (error) {
    return next(error);
  }
}

async function deleteActorById(req, res, next) {
  try {
    const { id } = req.params;
    const actor = await Actor.findByIdAndDelete(id);
    res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  retrieveAllActors,
  retrieveActorById,
  createActor,
  updateActorById,
  deleteActorById,
};
