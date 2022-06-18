import React from 'react'
// photo of James Hardin
import coverImage from "../../assets/images/Headshot.jpg";

function About() {
// about section content
  return (
    <section className="my-5 about-me" >
      <h1 id="about">About me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="James Hardin" />
      <div className="my-2">
        <p>
          Graduate of UNCC Full Stack Web Development Bootcamp.
        </p>
      </div>
    </section>
  )
}

export default About