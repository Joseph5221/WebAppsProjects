import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";

function DeleteBrand() {
    const { brandId } = useParams();
    const navigate = useNavigate();
    const [brand, setBrand] = useState({
        title: '',
    })

    // Runs on page render or when brandId changes, but that happens on re-render
    useEffect(() => {
        fetch(`http://localhost:8000/brands/${brandId}`)
        .then((body) => body.json())
        .then((json) => setBrand(() => json));
    }, [brandId]);

    function handleClick(event) {
        event.preventDefault();
        console.log("I am sending a request to get deleted!");
        fetch(`http://localhost:8000/brands/${brandId}`, {
            body: JSON.stringify(brand),
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((body) => body.json())
            .then(navigate(`/brands`)); // This is huge for redirection!
    }

    return (
        <>
            <h1>DELETE {brand.title.toUpperCase()}?</h1>
            <h2>ARE YOU SURE YOU WANT TO DELETE THIS BRAND?</h2>
            <button onClick={handleClick} >DELETE ME</button>
        </>
    );
}




export default DeleteBrand;
