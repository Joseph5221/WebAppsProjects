import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Model() {
  const { modelId } = useParams();
  const [singleModel, setModel] = useState({});

  // Runs on page render or when storeId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/models/${modelId}`)
      .then((body) => body.json())
      .then((json) => setModel(() => json));
  }, [modelId]);
  return (
    <>
      <h1>
        {singleModel.number} - {singleModel.name}
      </h1>
      <Link to="items">Roster</Link>
    </>
  );
}

export default Model;
