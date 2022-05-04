import React from 'react';
import './style.css';



const Animal = ({id, image, name, latin, onAnimalClick}) => {
    return (
        
        <div className="animal" onClick={() => {onAnimalClick(id)}}>
            <div className="animal__image">
                <img src={image} alt="slon" />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{name}</div>
                <div className="animal__latin">{latin}</div>
            </div>
        </div>
        
    );
}

export default Animal;