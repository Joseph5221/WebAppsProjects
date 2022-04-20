import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/stores"/>
		  <Route index element={<Stores />} />
		  <Route path=":storeid/items" element={<StoreInventory />} />
		  <Route path=":store_id/items/:item_id" element={<Item />} />
		  <Route path=":store_id/items/new" element={<NewItem />} />

        </Route>
      </Routes>
    </Router>
  );
}