import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function NewModel() {
    const { modelId, brandId } = useParams();
    const [singleModel, setModel] = useState({
        title: "",
        description: "",
        good_gas: false,
        BrandID: brandId
    });

    // Runs on page render or when storeId changes, but that happens on re-render
    useEffect(() => {
        fetch(`http://localhost:8000/models/${modelId}`)
            .then((body) => body.json())
            .then((json) => setModel(() => json));
    }, []);


    function handleChange(event) {
        const {title, value} = event.target;
        setModel(prevModel => {
            return {
                ...prevModel,
                [title]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(singleModel);
        const newModel = {
            _id: modelId,
            title: singleModel.title,
            description: singleModel.description,
            good_gas: singleModel.good_gas,
            BrandID: brandId
        }
        fetch(`http://localhost:8000/brands/`, {
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
            <h1>New Model:</h1>
            <form id="form" onSubmit={handleClick}>
                <div>
                    <label htmlFor="ModelName"> Model Name: </label>
                    <input onChange={handleChange} id="ModelName" placeholder={singleModel.title} name="name" value={singleModel.name}></input>
                </div>
                <div>
                    <label htmlFor="ModelQuantity"> Model Description: </label>
                    <input onChange={handleChange} id="ModelNameQuantity" placeholder={singleModel.description} name="Quantity" value={singleModel.Quantity}></input>
                </div>
                <div>
                    <label htmlFor="ModelPrice"> Is the Model Good On Gas? </label>
                    <input type="checkbox" onChange={handleChange} id="ModelPrice" name="Price" value={singleModel.Price}></input>
                </div>

                <button onSubmit={handleClick} type="submit" >Update a model</button>
            </form>
        </>
      );
}
export default NewModel;
