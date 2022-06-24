import React from 'react'
import Skill from "../Skill"
import resumeImage from "../../assets/images/james-hardin-webdev-resume.jpg"
import reactIcon from "../../assets/images/react-icon.png"
import jsIcon from "../../assets/images/javascript-icon.png"
import nodeJsIcon from "../../assets/images/nodejs-icon.png"
import mysqlIcon from "../../assets/images/mysql-icon.png"
import mongodbIcon from "../../assets/images/mongodb-icon.png"

function Resume() {
  const proficiencies = {
    js: {
      name: "JavaScript",
      image: jsIcon,
      alt: "javascript icon"
    },
    react: {
      name: "React",
      image: reactIcon,
      alt: "react icon"
    },
    nodejs: {
      name: 'NodeJS',
      image: nodeJsIcon,
      alt: "node js icon"
    },
    sql: {
      name: "SQL + Sequelize",
      image: mysqlIcon,
      alt: "sql icon"
    },
    mongodb: {
      name: "mongodb",
      image: mongodbIcon,
      alt: "mongodb icon"
    }
  }
// resume section content
  return (
    <section className="flex-col-center margin-top" >
      <h1 className="project-title">Resume</h1>
      <img src={resumeImage} className="my-2" style={{ width: "100%" }} alt="James Hardin" />
      <div className="my-2">
      <a href={resumeImage} download="james-hardin-webdev-resume">Download resume</a>
      </div>
      <div>
        <p>My proficiencies include:</p>
        <ul className='flex-row proficiencies-ul'>
          <Skill skill={proficiencies.js}></Skill>
          <Skill skill={proficiencies.react}></Skill>
          <Skill skill={proficiencies.nodejs}></Skill>
          <Skill skill={proficiencies.sql}></Skill>
          <Skill skill={proficiencies.mongodb}></Skill>
        </ul>
      </div>
    </section>
  )
}

export default Resume