import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Store() {
  const { storeId } = useParams();
  const [singleStore, setStore] = useState({});

  // Runs on page render or when storeId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/stores/${storeId}`)
      .then((body) => body.json())
      .then((json) => setStore(() => json));
  }, [storeId]);
  return (
    <>
      <h1>
        {singleStore.number} - {singleStore.name}
      </h1>
      <Link to="items">Roster</Link>
    </>
  );
}

export default Store;
