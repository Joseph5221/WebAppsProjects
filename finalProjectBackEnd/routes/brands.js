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
  const brandId = req.params.brand_id;
  console.log(brandId);
  const matchingBrand = await db.findOne({ _id: ObjectId(brandId) });
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
  const replacedBrand = req.body;
  await db.replaceOne(
    {
     _id: ObjectID(req.params.brand_id),
   },
   {
     ...replacedBrand,
   }
 );

  res.json(replacedBrand);
});

BrandsRouter.delete("/:brand_id", async (req, res) => {
  const db = await req.app.get("db")("brands");
  await db.deleteOne({ _id: ObjectID(req.params.brand_id) });
  res.sendStatus(200);
});


export default BrandsRouter;
