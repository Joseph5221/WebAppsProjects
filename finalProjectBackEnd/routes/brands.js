import express from "express";
import ModelsRouter from "./models.js";
import {ObjectId} from "mongodb";

const BrandsRouter = express.Router();

ModelsRouter.mergeParams = true;
BrandsRouter.use("/:brand_id/models", ModelsRouter);

BrandsRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("brands");
  const brands = await db.find().toArray();

  res.json(brands);
});

BrandsRouter.get("/:brand_id", async (req, res) =>{
  const db = await req.app.get("db")("brands");
  const brandId = req.params._id;
  console.log(brandId);
  const matchingBrand = await db.findOne(brandId);
  res.json(matchingBrand);
});

BrandsRouter.post("/", async (req, res) => {
  const db = await req.app.get("db")("brands");
  const createdBrand = req.body;
  console.log(createdBrand);
  db.insertOne(createdBrand);
  res.status(201).json(createdBrand);
});

BrandsRouter.put("/:brand_id", async (req, res) => {
  const db = await req.app.get("db")("brands");
  const replacedBrand = JSON.stringify(req.body.title);
  const query = {_id: req.body._id};
  console.log(query);
  console.log(replacedBrand);
  console.log("farts1")
  await db.replaceOne( query, replacedBrand );

  res.status(211).json(replacedBrand);
});

BrandsRouter.delete("/:brand_id", async (req, res) => {
  const db = await req.app.get("db")("brands");
  await db.deleteOne({ _id: ObjectID(req.params.brand_id) });
  res.sendStatus(200);
});


export default BrandsRouter;
