import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar}/>


const Rating = (props) => {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='star'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span className="star-red" key={rangeElem.toString()} >{star}</span> 
                    : <span className="star-grey" key={rangeElem.toString()} >{star}</span>
            )}
        </div>
    )
}

export default Rating;

