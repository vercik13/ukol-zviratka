import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';


import AnimalDetail from './componets/AnimalDetail';

const App = () => {


  const [animals, setAnimals] = useState([]);



  useEffect (
    () => {
      fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => {
        setAnimals(data.zvirata);
      })
  })



  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalDetail />
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
