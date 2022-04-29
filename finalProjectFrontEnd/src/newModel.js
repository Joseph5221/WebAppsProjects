import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function NewModel() {
  const { modelId } = useParams();
  const [models, setModels] = useState([]);

    return (
      <>
        <h1>New Model for brand:</h1>
        <form >
            <label htmlFor="ModelName"> Model Name: </label>
                <input id="ModelName" name="ModelName"></input>
                <br/>
                <label htmlFor="ModelDescription"> Model Description: </label>
                <input id="ModelNameDescription" name="ModelDescription"></input>
                <br/>
                <label htmlFor="ItemPrice"> Item Price </label>
                // Gonna have to put yes/no buttons in here for boolean value "good_gas"
                <input id="ItemPrice" name="ItemPrice"></input>
                <br/>
                <input type="submit" value="Add an Item to the store!"></input>
        </form>
    </>
  );
}

export default NewItem;
