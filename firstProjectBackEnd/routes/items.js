import express from "express";

const ItemsRouter = express.Router();

//Stuff for this assignment
ItemsRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("items");
  const storeId = req.params.store_id;
  console.log(storeId);
  const matchingItems = await db.find({ StoreID: Number(storeId) }).toArray();
  res.json(matchingItems);
});

ItemsRouter.get("/:item_id", async (req, res) =>{
  const db = await req.app.get("db")("items");
  const itemsId = req.params.item_id;
  console.log(itemsId);
  const matchingItem = await db.findOne({ _id: Number(itemsId) });
  res.json(matchingItem);
});


//Remnants
ItemsRouter.post("/", async (req, res) => {
  const db = await req.app.get("db")("items");
  const createdItem = req.body;
  createdItem.StoreID = Number(req.params.store_id);
  console.log(createdItem);
  db.insertOne(createdItem);
  res.status(201).json(createdItem);
});

// ItemsRouter.put("/:item_id", async (req, res) => {
//   const db = await req.app.get("db")("items");
//   const replacedItem = req.body;
//   await db.replaceOne(
//     {
//      _id: Number(req.params.item_id),
//    },
//    {
//      ...replacedItem,
//    }
//  );

//   res.json(replacedItem);
// });

// ItemsRouter.delete("/:item_id", async (req, res) => {
//   const db = await req.app.get("db")("items");
//   await db.deleteOne({ _id: Number(req.params.item_id) });
//   res.sendStatus(200);
// });

export default ItemsRouter;
