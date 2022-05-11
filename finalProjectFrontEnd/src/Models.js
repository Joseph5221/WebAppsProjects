import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
function Models() {
  const { brandId } = useParams();
  const [models, setModels] = useState([]);

  // Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/brands/${brandId}/models/`)
      .then((body) => body.json())
      .then((json) => setModels(() => [...json]));
  }, [brandId]);


  return (
    <>
      <h1>Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model._id}>
            <Link to={`${model._id}`}>{model.title}</Link>
          </li>
        ))}
      </ul>
        <Link to={`new`}>New Car Model</Link>
    </>
  );
}

export default Models;
