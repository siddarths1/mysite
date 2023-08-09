import React from 'react'
import './Work.css'

import SkillComp from './SkillComp';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

function Work() {
  
  return (
    <div  id='Work'>
        <Education/>
        <SkillComp/>
        <Projects/>
    </div>
  )
}

export default Work