import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Brand() {
  const { brandId } = useParams();
  const [singleBrand, setBrand] = useState({title: ""});

  // Runs on page render or when brandId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/brands/${brandId}`)
      .then((body) => body.json())
      .then((json) => setBrand(() => json));
  }, [brandId]);
  return (
    <>
      <h1>
       BrandName: {singleBrand.title}
      </h1>
      <Link to="models">Models</Link>
      <Link to={"update"}>Update Brand</Link>
      <Link to={"delete"}>Delete Brand</Link>
    </>
  );
}

export default Brand;
