import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Title from './InfoContainer/Title'
import Date from './InfoContainer/Date'
import ImgContainer from './InfoContainer/ImgContainer'

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
      <Title data = {data}/>
      <ImgContainer data = {data}/>
      <Date data = {data}/>
    </div>
  );
}

export default App;
