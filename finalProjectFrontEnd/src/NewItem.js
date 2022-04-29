import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function NewItem() {
  const { storeId } = useParams();
  const [items, setItems] = useState([]);


//   useEffect(() => {
//     fetch(`http://localhost:8000/stores/${storeId}/item`, {
//         method: 'PUT'

//     },
//     body :JSON.stringify()

//     , []);

    return (
      <>
        <h1>New Item for store:</h1>
        <form >
            <label htmlFor="ItemName"> Item Name: </label>
                <input id="ItemName" name="ItemName"></input>
                <br/>
                <label htmlFor="ItemQuantity"> Item Quantity: </label>
                <input id="ItemNameQuantity" name="ItemQuantity"></input>
                <br/>
                <label htmlFor="ItemPrice"> Item Price </label>
                <input id="ItemPrice" name="ItemPrice"></input>
                <br/>
                <input type="submit" value="Add an Item to the store!"></input>
        </form>
    </>
  );
}

export default NewItem;
