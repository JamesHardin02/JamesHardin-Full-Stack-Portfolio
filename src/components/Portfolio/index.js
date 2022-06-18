import React, { useState } from 'react';
import runBuddy from "../../assets/images/run-buddy-screenshot.png";
import rwandaTour from "../../assets/images/rwanda-tour-home-page.png";
import bookHub from "../../assets/images/user-feed-page.png";

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Run Buddy',
      description: 'The Run Buddy landing page exemplifies quientessential landing page design strategy that users can intuitively navigate to find the information they need while enjoying an aesthetically pleasing webpage ',
      github: 'https://github.com/JamesHardin02/run-buddy.git',
      image: runBuddy,
      website: 'https://jameshardin02.github.io/run-buddy/'
    },
    { 
      name: 'BookHub', 
      description: 'A full stack aplication where one can sign up, search for books, and make disucssion posts about them',
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
  ]);
// portfolio section content
  return (
    <section className="my-5" >
      {projects.map((project) => (
        <li
          className={`mx-1`}
          key={project.name}
        >
          <span>
            {project.name} <br/>
            {project.description} <br/>
            <a href={project.github} target="_blank">Git Hub Repo: {project.github}</a><br/>
            <a href={project.website} target="_blank"><img src={project.image}></img></a>
            <br/><br/>
          </span>
        </li>
      ))}
    </section>
  )
}

export default Portfolio