import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function DeleteBrand() {
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
    }, [modelId]);



    function handleClick(event) {
        event.preventDefault();
        console.log(singleModel);
        const newModel = {
            _id: modelId,
            title: "",
            description: "",
            good_gas: false,
            BrandID: brandId
        }
        fetch(`http://localhost:8000/brands/${brandId}/models/${modelId}`, {
            method: "DELETE",
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
            <h1>DELETE ${singleModel.title}</h1>
            <h2>ARE YOU SURE YOU WANT TO DELETE THIS MODEL?</h2>
            <button onSubmit={handleClick}>DELETE ME</button>
        </>
    );
}




export default DeleteBrand;
