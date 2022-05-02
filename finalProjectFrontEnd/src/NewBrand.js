import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function NewBrand() {
  const { brandId } = useParams();
  const [brand, setBrand] = useState([]);

    function handleChange(event) {
        const {title, value} = event.target;
        setBrand(prevBrand => {
            return {
                ...prevBrand,
                [title]: value
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
    }

    return (
      <>
        <h1>New Car Brand! Whaaaat!</h1>
        <form >
            <div>
                <label htmlFor="BrandName"> Brand Name: </label>
                <input id="BrandName" name="BrandName" placeholder="Tesla?"></input>
            </div>
            <input type="submit" value="Add a new Brand!"></input>
        </form>
    </>
  );
}

export default NewBrand;
