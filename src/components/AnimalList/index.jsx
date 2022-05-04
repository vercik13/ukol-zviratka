import React from 'react';
import Animal from '../Animal';

const AnimalList = ({animals, onAnimalClick}) => {
    return (
        <div className="animal-list">
				{animals.map ((animal) => {
                      return (
                        <Animal 
                            onAnimalClick={onAnimalClick}
                            id={animal.id}
                            name={animal.nazev}
                            latin={animal.nazevLatinsky}
                            image={animal.foto}
                            key={animal.id}
                            />
                        )
                    }
                ) }
			</div>
    );
}

export default AnimalList;