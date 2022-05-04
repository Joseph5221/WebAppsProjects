import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function NewModel() {
  const { brandId } = useParams();
  const [model, setModel] = useState({
    title: '',
    description: '',
    good_gas: false,
  });


    function handleChange(event) {
        const {name, value} = event.target;
        setModel(prevModel => {
            return {
                ...prevModel,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(model);
        const newModel = {
            name: model.name,
            Quantity: model.Quantity,
            Price: model.Price
        }
        fetch(`http://localhost:8000/brands/${brandId}/models`, {
            method: "POST",
            body: JSON.stringify(newModel),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((body) => body.json())
    }

    return (
        <>
            <h1>New Model for brand:</h1>
            <form id="form" onSubmit={handleClick}>
                <div>
                    <label htmlFor="ModelName"> Model Name: </label>
                    <input onChange={handleChange} id="ModelName" name="name" value={model.name}></input>
                </div>
                <div>
                    <label htmlFor="ModelQuantity"> Model Quantity: </label>
                    <input onChange={handleChange} id="ModelNameQuantity" name="Quantity" value={model.Quantity}></input>
                </div>
                <div>
                    <label htmlFor="ModelPrice"> Model Price </label>
                    <input onChange={handleChange} id="ModelPrice" name="Price" value={model.Price}></input>
                </div>

                <button onSubmit={handleClick} type="submit" >Add an model to the brand</button>
            </form>
        </>
      );
}
export default NewModel;
