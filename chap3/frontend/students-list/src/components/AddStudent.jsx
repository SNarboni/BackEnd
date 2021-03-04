import { useState } from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState("Entrez un nom pour l'ajouter a la liste");
  
  const ajouter = () => {
    setIsValid("");
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    })
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      console.log(response);
      setIsValid(response)
    })
  };

  return (
    <div>
      <div>
        <h3>{isValid}</h3>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={ajouter}>Add</button>
      </div>

      <div>
        <Link to="/">revenir</Link>
      </div>
    </div>
  );
};

export default AddStudent;
