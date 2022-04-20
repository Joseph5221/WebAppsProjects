import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Items() {
  const { classId } = useParams();
  const [items, setItems] = useState([]);

  // Runs on page render or when classId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/classes/${classId}/items`)
      .then((body) => body.json())
      .then((json) => setItems(() => [...json.items]));
  }, [classId]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default Items;
