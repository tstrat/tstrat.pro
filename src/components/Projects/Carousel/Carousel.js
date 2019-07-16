import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Carosuel({ images }){

    const [ index, setIndex ] = useState(0)
    const imagesDisplay = images.slice(1).map((img, i) =>
        <img
            className={`project-modal__image ${index===i ? 'selected': ''}`}
            key={i}
            src={`content/${img.url}`}
            alt={img.alt}/>
    )
    return (
        <div className='carousel'>
            <div className='wrapper' style={
                {
                    transform :`translateX(-${index * (100/(imagesDisplay.length))}%`
                }
            }>
                {imagesDisplay}
            </div>
            <div className='carousel__btns'>
                <FaArrowLeft onClick={() => {
                    if ( index > 0 ) {
                        setIndex(index-1)
                    }
                }}
                    className={index <= 0 ? 'disabled':''}
                >
                    Prev
                </FaArrowLeft>
                <FaArrowRight
                    onClick={()=> {
                        if (index < imagesDisplay.length-1) {
                            setIndex(index+1)
                        }
                    }}
                    className={index >= imagesDisplay.length-1 ? 'disabled':''}
                >
                    Next
                </FaArrowRight>
            </div>
        </div>
    );
};

export default Carosuel;
