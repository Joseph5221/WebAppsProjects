import express from "express";
import {ObjectId} from "mongodb";

const ModelsRouter = express.Router();

//Stuff for this assignment
ModelsRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("models");
  const brandId = req.params.BrandID;
  console.log(brandId);
  const matchingModels = await db.find({ BrandID: ObjectId(brandId) }).toArray();
  res.json(matchingModels);
});

ModelsRouter.get("/:model_id", async (req, res) =>{
  const db = await req.app.get("db")("models");
  const modelId = req.params._id;
  console.log(modelId);
  const matchingModel = await db.findOne({ _id: ObjectId(modelId) });
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
  await db.replaceOne(
    {
     _id: ObjectID(req.params._id),
   },
   {
     ...replacedModel,
   }
 );

  res.json(replacedModel);
});

ModelsRouter.delete("/:model_id", async (req, res) => {
  const db = await req.app.get("db")("models");
  await db.deleteOne({ _id: ObjectID(req.params._id) });
  res.sendStatus(200);
});

export default ModelsRouter;
