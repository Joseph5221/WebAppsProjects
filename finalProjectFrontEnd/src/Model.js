import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function Model() {
  const { modelId, brandId } = useParams();
  const navigate = useNavigate();
  const [singleModel, setModel] = useState({});
  const [singleBrand, setBrand] = useState({title: ""});

  // Runs on page render or when storeId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/brands/${brandId}/models/${modelId}`)
      .then((body) => body.json())
      .then((json) => setModel(() => json));
    fetch(`http://localhost:8000/brands/${brandId}`)
        .then((body) => body.json())
        .then((json) => setBrand(() => json));

  }, [brandId, modelId]);

  
  function handleGoBackwards(event){
    navigate(`/brands/${brandId}/models`);
  };

  return (
    <>
      <h1>
        {singleBrand.title} - {singleModel.title}
      </h1>
        <Link to={"update"}>Update Model</Link>
      <br/>
        <Link to={"delete"}>Delete Model</Link>
        <br/>
      <br/>
      <form onSubmit={handleGoBackwards}>
        <input type="submit" value="Back to Models"></input>
      </form>
    </>
  );
}

export default Model;