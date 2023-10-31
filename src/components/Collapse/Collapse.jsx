import React, {useState} from 'react'



function Collapse(props) {

    const [isOpen, setIsOpen,] = useState(false); //
    const [rotate, setRotate] = useState(false);
    const [expand, setExpand] = useState(false);

    const conteneur = () => {
        setIsOpen(!isOpen);
        setRotate(!rotate);
        setExpand(!expand);

        
      };

  return (
    <div onClick={conteneur} className='collapse-conteneur'>
      <div className='collapse-titre'>
        <h2>{props.title}</h2>
        <p
        className={`animated-element ${rotate ? 'rotate' : ''}`}><i className="fa-solid fa-chevron-up"></i> </p>
      </div>
        <div className={`animated-elements ${expand ? 'expanded' : ''}`}>
             <p className='collapse_p'>{props.content}</p> 

        </div>
    </div>
  )
}

export default Collapse
