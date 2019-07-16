import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import projects from './projects.json';
import './projects.scss';

function Projects (props) {

    const [ selected, setSelected ] = useState()
    const [ toggle, setToggle ] = useState(false);

    const display = projects.map((project, index)=>
        <div
            key={index}
            className='projects-single'
            onClick={() => {
                setSelected(project);
                setToggle(true)
            }}
            style={{
                backgroundImage: `url(content/${project.images[0].url})`
            }}
        >
            <h1>{project.name}</h1>
        </div>
    )
    return (
        <div className='projects'>
            { toggle && <ProjectModal project={selected} close={() => setToggle(false)} /> }
            {display}
        </div>
    );
};

export default Projects;
