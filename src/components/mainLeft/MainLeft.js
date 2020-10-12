import React from 'react';
import Bio from '../bio/Bio';
import Skills from '../skillsSection/Skills'


const MainLeft = () => {
    return (

        <div className="md:m-5">
            <Bio />
            <Skills className="relative" />
        </div>
    )
}

export default MainLeft;