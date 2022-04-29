import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Models() {
  const [stores, setStores] = useState([]);

  // Analogous to ComponentDidMount; runs on component's mount and first render; runs once
  useEffect(() => {
    fetch(`http://localhost:8000/stores`)
      .then((body) => body.json())
      .then((json) => setStores(() => [...json]));
  }, []);

  return (
    <>
      <h1>Stores</h1>
      <ul>
        {stores.map((store) => (
          <li key={store._id}>
            <Link to={`/stores/${store._id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Models;
