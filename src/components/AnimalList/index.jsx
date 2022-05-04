import React from 'react';
import Animal from '../Animal';

const AnimalList = ({animals}) => {
    return (
        <div className="animal-list">
				{animals.map (
                    (animal) => {
                      return (
                        <Animal 
                            key={animal.id}
                            name={animal.nazev}
                            latin={animal.nazevLatinsky}
                            image={animal.foto} 
                            />
                        )
                    }
                ) }
			</div>
    );
}

export default AnimalList;