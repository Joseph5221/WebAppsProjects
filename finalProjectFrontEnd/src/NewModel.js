import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function NewItem() {
  const { storeId } = useParams();
  const [item, setItem] = useState({
    name: '',
    Quantity: '',
    Price: ''
  });


    function handleChange(event) {
        const {name, value} = event.target;
        setItem(prevItem => {
            return {
                ...prevItem,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(item);
        const newItem = {
            name: item.name,
            Quantity: item.Quantity,
            Price: item.Price
        }
        fetch(`http://localhost:8000/stores/${storeId}/items`, {
            method: "POST",
            body: JSON.stringify(newItem),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((body) => body.json())
    }

    return (
        <>
            <h1>New Item for store:</h1>
            <form id="form" onSubmit={handleClick}>
                <label htmlFor="ItemName"> Item Name: </label>
                <input onChange={handleChange} id="ItemName" name="name" value={item.name}></input>
                <br/>
                <label htmlFor="ItemQuantity"> Item Quantity: </label>
                <input onChange={handleChange} id="ItemNameQuantity" name="Quantity" value={item.Quantity}></input>
                <br/>
                <label htmlFor="ItemPrice"> Item Price </label>
                <input onChange={handleChange} id="ItemPrice" name="Price" value={item.Price}></input>
                <br/>
                <button onSubmit={handleClick} type="submit" >Add an item to the store</button>
            </form>
        </>
      );
}
export default NewItem;
// function handleSubmit() {
//     let item = {
//         "name": ItemName,
//         "Quantity": ItemQuantity,
//         "Price": ItemPrice;
//     };
//
//     fetch(`http://localhost:8000/stores/${storeId}/item`,
//         {
//             method: 'POST',
//             headers: { 'Content-Type':'application/json'},
//             mode: 'cors',
//             body : JSON.stringify(item)
//         });
// }
