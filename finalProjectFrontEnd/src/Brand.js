import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function Brand() {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [singleBrand, setBrand] = useState({title: ""});

  // Runs on page render or when brandId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/brands/${brandId}`)
      .then((body) => body.json())
      .then((json) => setBrand(() => json));
  }, [brandId]);


  function handleGoBackwards(event){
    navigate(`/brands`);
  };

  return (
    <>
      <h1>
       BrandName: {singleBrand.title}
      </h1>
        <br/>
      <Link to="models">Models</Link>
        <br/>
      <Link to={"update"}>Update Brand</Link>
        <br/>
      <Link to={"delete"}>Delete Brand</Link>
      <br/>
      <br/>
      <form onSubmit={handleGoBackwards}>
        <input type="submit" value="Back to Brands"></input>
      </form>
    </>
  );
}

export default Brand;
