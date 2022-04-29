import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NewItem from "./NewItem"
import Model from "./Model";
import Models from "./Models";
import Brand from "./Brand";
import Brands from "./Brands";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brands />} />
          <Route path="brands" element={<Brands/>} />
          <Route path="brands/:brandId/">
            <Route path="" element={<Model />} />
            <Route path="models" element={<Models />} />
            <Route path="models/new" element={<NewModel />} />
            <Route path="models/:modelId" element={<Item/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
