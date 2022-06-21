import React, { useState } from 'react';
// screenshot imports //
import techTalk from "../../assets/images/tech-talk-homepage.png";
import bookHub from "../../assets/images/user-feed-page.png";
import rwandaTour from "../../assets/images/rwanda-tour-home-page.png";
import thoughtBubble from "../../assets/images/thought-bubble-post-thought.png";
import eShop from "../../assets/images/E-Shop-Organizer-insomnia-ss.png";
import administerMyTeam from "../../assets/images/administer-my-team-ss.png";
//--------------------//

function Project() {
  // project info objects
  const [projects] = useState([
    {
      name: 'Tech Talk',
      description: 'A full stack blog site where users can post about technology',
      github: 'https://github.com/JamesHardin02/tech-talk',
      image: techTalk,
      website: 'https://tech-talk-project.herokuapp.com/'
    },
    { 
      name: 'BookHub', 
      description: 'A full stack social media site where users can search books and make discussion posts about them',
      github: 'https://github.com/vidurham/bookhub',
      image: bookHub,
      website: 'https://bookhub-project-2.herokuapp.com/'
    },
    { 
      name: 'A Tour Guide Of Rwanda', 
      description: 'A website that allows users to plan a tour of the differnet regions of Rwanda',
      github: 'https://github.com/JamesHardin02/A-Tour-Guide-Of-Rwanda',
      image: rwandaTour,
      website: 'https://jameshardin02.github.io/A-Tour-Guide-Of-Rwanda/'
    },
    { 
      name: 'Thought Bubble', 
      description: 'A MongoDB backend app for a social media website',
      github: 'https://github.com/JamesHardin02/thought-bubble',
      image: thoughtBubble
    },
    { 
      name: 'E Shop Organizer', 
      description: 'A SQL backend app for a e-commerce store',
      github: 'https://github.com/JamesHardin02/E-Shop-Organizer',
      image: eShop
    },
    { 
      name: 'Administer My Team', 
      description: 'A SQL backend content management system app to organize and keep track of employee information',
      github: 'https://github.com/JamesHardin02/administer-my-team',
      image: administerMyTeam
    },
  ]);

  // returns list of projects
  return (
    <ul className="my-5" >
      {projects.map((project) => (
        <li
          className={`mx-1`}
          key={project.name}
        >
          <span>
            {project.name} <br/>
            {project.description} <br/>
            <a href={project.github} target="_blank" rel="noreferrer noopener">
              Git Hub Repo: {project.github}
            </a>
            <br/>
            {project.website ?<a href={project.website} target="_blank" rel="noreferrer noopener">
              <figure>
                <img alt="project screenshot" src={project.image}></img>
                <figcaption>Click screenshot to go to deployed website</figcaption>
              </figure>
            </a>
            :
              <img alt="project screenshot" src={project.image}></img>
            }
            <br/><br/>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Project