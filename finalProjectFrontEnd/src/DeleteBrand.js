import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Brands from "./Brands";
function DeleteBrand() {
    const { brandId } = useParams();
    const [brand, setBrand] = useState({
        title: '',
    })
    const [redirect, setRedirect] = useState(false)

      // Runs on page render or when brandId changes, but that happens on re-render
  useEffect(() => {
      fetch(`http://localhost:8000/brands/${brandId}`)
      .then((body) => body.json())
      .then((json) => setBrand(() => json));
  }, [brandId]);

    if (redirect) {
        return <Brands />;
    }

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
            .then((body) => body.json());
        setRedirect(true) // This is huge for redirection!
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
