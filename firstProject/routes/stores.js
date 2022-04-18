import express from "express";

const StoresRouter = express.Router();

StoresRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("stores");
  const stores = await db.find().toArray();

  res.json(stores);
});

StoresRouter.get("/:store_id", async (req, res) =>{
  const db = await req.app.get("db")("stores");
  const storeId = req.params.store_id;
  console.log(storeId);
  const matchingStore = await db.findOne({ _id: Number(storeId) });
  res.json(matchingStore);
});

StoresRouter.get("/:store_id/items", async (req, res) =>{
  const db = await req.app.get("db")("items");
  const itemId = req.params.store_id;
  const allItems = await db.find().toArray();
  const matchingItems = await db.find({ StoreID: Number(itemId) }).toArray();
  res.json(matchingItems);
});

StoresRouter.post("/", async (req, res) => {
  const db = await req.app.get("db")("stores");
  const createdStore = req.body;
  console.log(createdStore);
  db.insertOne(createdStore);
  res.status(201).json(createdStore);
});

StoresRouter.put("/:store_id", async (req, res) => {
  const db = await req.app.get("db")("stores");
  const replacedStore = req.body;
  await db.replaceOne(
    {
     _id: Number(req.params.store_id),
   },
   {
     ...replacedStore,
   }
 );

  res.json(replacedStore);
});

StoresRouter.delete("/:store_id", async (req, res) => {
  const db = await req.app.get("db")("stores");
  await db.deleteOne({ _id: Number(req.params.store_id) });
  res.sendStatus(200);
});


export default StoresRouter;
