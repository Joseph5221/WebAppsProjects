import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Brands() {
  const [brands, setBrands] = useState([]);

  // Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/brands`)
      .then((body) => body.json())
      .then((json) => setBrands(() => [...json]));
  }, []);

  return (
    <>
      <h1>Brands</h1>
      <ul>
        {brands.map((brand) => (
          <li key={brand._id}>
            <Link to={`/brands/${brand._id}`}>{brand.title}</Link>
          </li>
        ))}
      </ul>
        <Link to={`/brands/new`}>New Car Brand</Link>
    </>
  );
}

export default Brands;
