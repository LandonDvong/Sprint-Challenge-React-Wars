import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

const App = () => {
  const [name, setName] = useState();
  const [Mass, setMass] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/1")
      .then((res) => {
        setName(res.data.name);
        setMass(res.data.mass);
console.log(name);
console.log(Mass);
  })
  .catch((err) => {
    console.log(err);
  });
  })
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <p> name: {name}</p>
      <p> mass: {Mass}</p>

    </div>
  );
}

export default App;
