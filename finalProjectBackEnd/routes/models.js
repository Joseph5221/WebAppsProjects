import express from "express";
import {ObjectId} from "mongodb";

const ModelsRouter = express.Router();

//Stuff for this assignment
ModelsRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("models");
  const query = {BrandID : (req.params.brand_id).toString()}
  const matchingModels = await db.find(query).toArray();
  console.log(matchingModels)
  res.json(matchingModels);
});

ModelsRouter.get("/:model_id", async (req, res) =>{
  const db = await req.app.get("db")("models");
  const modelId = req.params.model_id;
  const query = {_id: ObjectId(modelId)}
  console.log(query);
  const matchingModel = await db.findOne(query);
  res.json(matchingModel);
});


//Remnants
ModelsRouter.post("/", async (req, res) => {
  const db = await req.app.get("db")("models");
  const createdModel = req.body;
  //createdModel.BrandID = ObjectId(req.params.BrandID);
  console.log(createdModel);
  db.insertOne(createdModel);
  res.status(201).json(createdModel);
});

ModelsRouter.put("/:model_id", async (req, res) => {
    const db = await req.app.get("db")("models");
    const replacedModel = req.body;
    const query = {_id: ObjectId(req.params.model_id)};
    await db.replaceOne(query, replacedModel);
    res.status(201).json(replacedModel);
});


ModelsRouter.delete("/:model_id", async (req, res) => {
  console.log("I am a model getting deleted!")
  const db = await req.app.get("db")("models");
  const query = {_id : ObjectId(req.body._id)}
  await db.deleteOne(query);
  res.sendStatus(200);
});

export default ModelsRouter;
