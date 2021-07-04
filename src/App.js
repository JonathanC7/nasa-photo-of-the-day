import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import InfoCard from './InfoContainer/InfoCard'
import { Button } from 'reactstrap'


function App() {
  const [data, setData] = useState([])
  useEffect(() =>{
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data)
      })
      .catch((error) => {console.log('Error!', error)})
  },[])
  return (
    <div className="App">
      <InfoCard data = {data}/>
    </div>
  );
}

export default App;
