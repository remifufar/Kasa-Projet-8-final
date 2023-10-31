import React from 'react';
 
import Data from '../../data/data.json';
import { NavLink } from 'react-router-dom';

function Carte() {
    return (
        <div className='cards-conteneur'>
            { Data.map (({id, cover, title}) =>
            <NavLink className="Carte" to= {"/Appartement/" +id} key={id} id={id}>
                <img className="cards-image" src={cover} alt="photo logements" />
                <div className='text-conteneur'><h2 className='cards-text'>{title}</h2></div>
            </NavLink>   
            )}

           
        </div>

    )

    }
  export default Carte;
  