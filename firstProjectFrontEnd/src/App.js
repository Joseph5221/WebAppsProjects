import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "./Classes";
import "./App.css";
import Class from "./Class";
import Students from "./Students";


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

export default App;