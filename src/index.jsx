import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {


  const [animals, setAnimals] = useState([]);
  const [animalId, setAnimalId] = useState({});

  const onChooseAnimal = (id) => {
    const choosenAnimal = animals.find(animal => animal.id === id)
    setAnimalId(choosenAnimal)
  }



  useEffect (
    () => {
      fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => {
        setAnimals(data.zvirata);
        setAnimalId(data.zvirata[0])
      });
  },
[]);



  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList onAnimalClick={onChooseAnimal} animals={animals}/>
        <AnimalDetail animal={animalId}/>
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
