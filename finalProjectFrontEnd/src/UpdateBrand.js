import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function UpdateBrand() {
    const { brandId } = useParams();
    const [brand, setBrand] = useState({
        title: '',
    })

    // Runs on page render or when brandId changes, but that happens on re-render
    useEffect(() => {
        fetch(`http://localhost:8000/brands/${brandId}`)
            .then((body) => body.json())
            .then((json) => setBrand(() => json));
    }, [brandId]);


    function handleChange(event) {
        const {name, value} = event.target;
        setBrand(prevBrand => {
            return {
                ...prevBrand,
                [name]: value
            }
        })
        console.log(brand.title)
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(brand);
        const newBrand = {
            _id: brandId,
            title: brand.title,
        }
        fetch(`http://localhost:8000/brands/`, {
            method: "PATCH",
            body: JSON.stringify(newBrand),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((body) => body.json())
    }

    return (
        <>
            <h1>UPDATE Car Brand! You Messed Up The First Time!</h1>
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="BrandName"> Brand Name: </label>
                    <input id="BrandName" onChange={handleChange} name="title" placeholder="Tesla?" value={brand.title}></input>
                </div>
                <input type="submit" value="Add a new Brand!"></input>
            </form>
        </>
    );
}




export default UpdateBrand;