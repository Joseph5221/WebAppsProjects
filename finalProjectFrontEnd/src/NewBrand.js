import { useState } from "react";
import Brands from "./Brands";
//import { useParams } from "react-router-dom";
function NewBrand() {
  //const { brandId } = useParams();
  const [redirect, setRedirect] = useState(false)
  const [brand, setBrand] = useState({
    title: ''
  });

    if (redirect) {
        return <Brands />;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setBrand(prevBrand => {
            return {
                ...prevBrand,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(brand);
        const newBrand = {
            title: brand.title,
        }
        fetch(`http://localhost:8000/brands/`, {
            method: "POST",
            body: JSON.stringify(newBrand),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((body) => body.json())
        setRedirect(true)
    }

    return (
      <>
        <h1>New Car Brand! Whaaaat!</h1>
        <form onSubmit={handleClick}>
            <div>
                <label htmlFor="BrandName"> Brand Name: </label>
                <input id="BrandName" name="title" placeholder="Tesla?" onChange={handleChange} value={brand.title}></input>
            </div>
            <input type="submit" value="Add a new Brand!"></input>
        </form>
    </>
  );
}

export default NewBrand;
