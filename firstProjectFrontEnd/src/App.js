import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stores from "./Stores";
import "./App.css";
import Store from "./Store";
import Items from "./Items";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stores />} />
          <Route path="stores" element={<Stores />} />
          <Route path="stores/:storeId">
            <Route path="" element={<Store />} />
            <Route path="items" element={<Items />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;