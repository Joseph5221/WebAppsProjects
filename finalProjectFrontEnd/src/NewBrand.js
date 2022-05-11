import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBrand() {
  const navigate = useNavigate();
  const [brand, setBrand] = useState({
    title: ''
  });


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
            .then(navigate(`/brands`));
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
