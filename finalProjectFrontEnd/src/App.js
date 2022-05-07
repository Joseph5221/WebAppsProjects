import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NewItem from "./NewItem"
import Model from "./Model";
import Models from "./Models";
import Brand from "./Brand";
import Brands from "./Brands";
import NewBrand from "./NewBrand";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brands />} />
          <Route path="brands" element={<Brands/>} />
          <Route path="brands/new" element={<NewBrand />} />
          <Route path="brands/:brandId/update/" element={<UpdateBrand />}/>
          <Route path="brands/:brandId/delete/" element={<DeleteBrand />}/>
          <Route path="brands/:brandId/">
            <Route path="" element={<Models />} />
            <Route path="models" element={<Models />} />
            <Route path="models/new" element={<NewModel />} />
            {/*<Route path="models/new" element={<NewModel />} />*/}
            <Route path="models/:modelId" element={<Model/>}/>
            <Route path="models/:modelId/update" element={<UpdateModel />}/>
            <Route path="models/:modelId/delete" element={<DeleteModel />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
