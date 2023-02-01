import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();

  const changeHandle = (event) => {
    //  const something = event.target.value;
    setName(event.target.value);
  };

  const submitBtn = () => {
    setFullName(name); // we passed the value here of input field (event target)
  };

  return (
    <div className="App">
      <h1>Form Handling</h1>
      <input
        placeHolder="enter here"
        type="number,text"
        onChange={changeHandle}
        vaule={name} // <----- Point to notice
      />
      <br />
      <button onClick={submitBtn}>submit</button>
      <p>{fullName}</p>
    </div>
  );
}
