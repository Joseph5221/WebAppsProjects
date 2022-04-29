import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Models() {
  const [models, setModels] = useState([]);

  // Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/models`)
      .then((body) => body.json())
      .then((json) => setModels(() => [...json]));
  }, []);

  return (
    <>
      <h1>Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model._id}>
            <Link to={`/models/${model._id}`}>{model.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Models;
