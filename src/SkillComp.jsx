
import React, { useState } from 'react';
import './SkillComp.css'
import html from './assets/HTML5(1).png';
import css from './assets/css.png';
import bootstrap from './assets/bootstrap.png';
import js from './assets/js.png';
import reactjs from './assets/reactjs.png';
import expressjs from './assets/expressjs.png';
import git from './assets/git.png';
import java from './assets/java.png';
import mongodb from './assets/mongodb.png';
import mysql from './assets/mysql.png';

const Skill = ({ skillName, skillImage, skillDescription }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSkillClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="skill-card" onClick={handleSkillClick}>
      <img src={skillImage} alt={skillName} />
      <h3>{skillName}</h3>
      {isClicked && <p>{skillDescription}</p>}
    </div>
  );
};

const SkillComp = () => {
  // Sample data for skills (use your own images and descriptions)
  const skills = [
    {
      name: 'HTML',
      image: html,
    },
    {
      name: 'CSS',
      image: css,
    },
    {
      name: 'JavaScript',
      image: js,
    },
    {
      name: 'React Js',
      image: reactjs,
   
    },
    {
      name: 'Express Js',
      image: expressjs,

    },
    {
      name: 'Bootstrap',
      image: bootstrap,

    },
    {
      name: 'Git',
      image: git,
     
    },
    {
      name: 'MongoDb',
      image: mongodb,
 
    },
    {
      name: 'MySql',
      image: mysql,
      
    },
    {
      name: 'Java',
      image: java,
   
    },
    
  ];

  return (
    <div className="app">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            skillName={skill.name}
            skillImage={skill.image}
           
          />
        ))}
      </div>
    </div>
  );
};

export default SkillComp;
