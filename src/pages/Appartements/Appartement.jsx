import React from 'react'
import Data from '../../data/data.json';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Rating from'../../components/Rating/Rating';
import Carrousel from "../../components/Carrousel/Carrousel";
import Error from "../Error/Error"
function Appartement() {

 
  const { id } = useParams();
  const item = Data.find(data => data.id === id)
  if (item === undefined) { 
  
      return <Error/>;
      
      
  }
  return (
      <section key={id}>
          <Carrousel images={item.pictures}/>
          <div className='Appartement_header'>

              <div className='Appartement_header_titre'>
                  <h1>{item.title}</h1>
                  <h2>{item.location}</h2>
                  <div className='tags'>
          {item.tags.map((tag, i) => (
          <p className='tag' key={i} >{tag}</p> ))}
              </div>
              </div> 
              
              <div className='tags-content'>
              
              
              <div className='Appartement_header_people'>
                  <h3>{item.host.name}</h3>
                  <img src={item.host.picture} alt="photo" />
              </div>
                  <Rating scaleValue={item.rating} />
              </div>
          
              
          </div>

          
          <article className='Collapse-Content'>
          <div className='Collapse'>
                  <Collapse 
                      title='Description'
                      content={item.description}
                  />
              </div>
              <div className='Collapse'>
                  <Collapse
                      title='Équipements'
                      content={item.equipments.map((equipment, i) => (
                          <span className='span' key={i}>
                              {equipment}
                          </span>
                      ))}
                  />
              </div>
              </article>
      </section>
)
}


export default Appartement
