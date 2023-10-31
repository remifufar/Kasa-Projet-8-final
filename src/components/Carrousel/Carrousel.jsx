import React, { useState } from "react";

import data from '../../data/data.json'



console.log(data.length);

function Carrousel ({ images }) {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Initialisé à 0

    const onLeftArrowClick = () => {

        const newIndex =

            currentPhotoIndex === 0 ? images.length - 1 : currentPhotoIndex - 1;

        setCurrentPhotoIndex(newIndex);
    };

    const onRightArrowClick = () => {
        const newIndex =
            currentPhotoIndex === images.length - 1 ? 0 : currentPhotoIndex + 1;
        setCurrentPhotoIndex(newIndex);
    };

    return (
        <div className="gallery">
            {images.length > 1 && (
                <div className="" onClick={onLeftArrowClick}>
                   <i className="svg-left fa-solid fa-chevron-left"></i>
                </div>
            )}
            <img  className="gallery-image" src={images[currentPhotoIndex]} alt="" />
            {images.length > 1 && (
                <div className="" onClick={onRightArrowClick}>
                    <i className="svg-right fa-solid fa-chevron-right"></i>
                </div>
            )}
            {images.length > 1 && (
                <p className="image-counter">
                    {currentPhotoIndex + 1}/{images.length}
                </p>
            )}
        </div>
    );
}

export default Carrousel;

