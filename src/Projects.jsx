import React from 'react'
import './Projects.css';

import builders from './assets/builders.png';
import volunteer from './assets/volunteer.png';
import sstraders from './assets/sstraders.png';

function Projects() {
  const projcontainer = [{name:"Builders",image:builders,description:"A COMPLETE CONSTRUCTION SITE using Html, Css, Bootstrap  builders-site1.netlify.app"},
  {name:"SS Traders",image:sstraders,description:" An ECOMMERCE SITE using React JS, Bootstrap,Mongo DB,Express JS"},
  {name:"Volunteers", image:volunteer,description:"An BLOOD DONATION SITE using React Js, Bootstrap, Express Js, MySQL  https://welifesaver.netlify.app/"}]
  return (
    <div className='projects-container'>
      <h3>Projects </h3>    
      <div className='card-outer'>
      {projcontainer.map((card, index) => (
        <div className="card" key={index}>
          <img className="card-image" src={card.image} alt="Card Image" />
          <div className="card-content">
            <h2>{card.name}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Projects