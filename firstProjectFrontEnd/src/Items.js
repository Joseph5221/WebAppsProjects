import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Items() {
  const { storeId } = useParams();
  const [items, setItems] = useState([]);

  // Runs on page render or when classId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/stores/${storeId}/items`)
      .then((body) => body.json())
      .then((json) => setItems(() => [...json]));
  }, [storeId]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <Link to={`/stores/${storeId}/items/${item._id}`}>{item.name}</Link>
          </li>
      ))}
            <li>
            <Link to={`/stores/${storeId}/items/new`}>Make a new item!</Link>
          </li>
    </ul>
  );
}

export default Items;
