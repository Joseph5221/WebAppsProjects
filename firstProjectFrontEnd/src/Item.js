
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Item() {
  const { itemId } = useParams();
  const [singleItem, setItem] = useState({});

  // Runs on page render or when itemId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/items/${itemId}`)
      .then((body) => body.json())
      .then((json) => setItem(() => json));
  }, [itemId]);
  return (
    <>
      <h1>
        {singleItem.name}
      </h1>
      <p>
          Quantity: {singleItem.Quantity} 
        <br/>
          Price: {singleItem.Price}
      </p>
    </>
  );
}

export default Item;