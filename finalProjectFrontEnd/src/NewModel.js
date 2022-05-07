import { useState } from "react";
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
    // useEffect(() => {
    //     fetch(`http://localhost:8000/models/${modelId}`)
    //         .then((body) => body.json())
    //         .then((json) => setModel(() => json));
    // }, [modelId]);


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
        console.log(singleModel);
        const newModel = {
            _id: modelId,
            title: singleModel.title,
            description: singleModel.description,
            good_gas: singleModel.good_gas,
            BrandID: brandId
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
            <h1>New Model:</h1>
            <form id="form" onSubmit={handleClick}>
                <div>
                    <label htmlFor="ModelTitle"> Model Title: </label>
                    <input onChange={handleChange} id="ModelName" placeholder={singleModel.title} name="title" value={singleModel.title}></input>
                </div>
                <div>
                    <label htmlFor="ModelDescription"> Model Description: </label>
                    <input onChange={handleChange} id="ModelDescription" placeholder={singleModel.description} name="description" value={singleModel.description}></input>
                </div>
                <div>
                    <label htmlFor="ModelGas"> Is the Model Good On Gas? </label>
                    <input type="checkbox" onChange={handleChange} id="ModelGas" name="good_gas" value={singleModel.good_gas}></input>
                </div>

                <button onSubmit={handleClick} type="submit" >Update a model</button>
            </form>
        </>
      );
}
export default NewModel;
