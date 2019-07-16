import React from 'react';
import Carousel from './Carousel/Carousel';


function ProjectModal({project, close}) {


    return (
        <div className='project-modal'>
            <button className='project-modal__close' onClick={close}>X</button>

            <img className='project-modal__logo' src={`content/${project.images[0].url}`} alt={project.images[0].alt} />
            <div className='project-modal-description'>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
                {project.hosted && <h3>Link to Project Site: {project.hosted}</h3> }
                {project.github && <h3>Link to Github: {project.github}</h3> }
            </div>
            <Carousel className='carousel' images={project.images}/>
        </div>
    )
}

export default ProjectModal;
