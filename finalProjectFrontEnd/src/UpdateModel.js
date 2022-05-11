import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateModel() {
    const { modelId, brandId } = useParams();
    const navigate = useNavigate();
    const [singleModel, setModel] = useState({
        	title: "",
	        description: "",
	        good_gas: false,
	        BrandID: brandId
    });

  
    // Runs on page render or when storeId changes, but that happens on re-render
    useEffect(() => {
        fetch(`http://localhost:8000/brands/${brandId}/models/${modelId}`)
            .then((body) => body.json())
            .then((json) => setModel(() => json));
    }, [modelId, brandId]);

    function handleChange(event) {
        const {name, value} = event.target;
        setModel(prevModel => {
            return {
                ...prevModel,
                [name]: value
            }
        })
    }

    function handleOnToggle() {
        setModel(prevState => {
            return {
                ...prevState,
                good_gas : !prevState.good_gas
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(singleModel);
        const newModel = {
            title: singleModel.title,
            description: singleModel.description,
            good_gas: singleModel.good_gas,
            BrandID: brandId
        }
        fetch(`http://localhost:8000/brands/${brandId}/models/${modelId}`, {
            method: "PUT",
            body: JSON.stringify(newModel),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((body) => body.json())
        navigate(`/brands/${brandId}/models`);
    }

    return (
        <>
            <h1>Update Model:</h1>
            <form id="form" onSubmit={handleClick}>
                <div>
                    <label htmlFor="ModelName"> Model Name: </label>
                    <input onChange={handleChange} id="ModelName" placeholder={singleModel.title} name="title" value={singleModel.title}></input>
                </div>
                <div>
                    <label htmlFor="ModelQuantity"> Model Description: </label>
                    <input onChange={handleChange} id="ModelNameQuantity" placeholder={singleModel.description} name="description" value={singleModel.description}></input>
                </div>
                <div>
                    <label htmlFor="ModelPrice"> Is the Model Good On Gas? </label>
                    <input
                        type="checkbox"
                        onChange={handleOnToggle}
                        checked={singleModel.good_gas}
                        id="ModelGas"
                        name="good_gas"
                        value={singleModel.good_gas}></input>                </div>

                <button onSubmit={handleClick} type="submit" >Update a model</button>
            </form>
        </>
    );
}

export default UpdateModel;