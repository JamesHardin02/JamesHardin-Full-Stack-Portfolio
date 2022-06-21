import React from 'react'
import resumeImage from "../../assets/images/james-hardin-webdev-resume.jpg"

function Resume() {
// resume section content
  return (
    <section className="my-5 about-me" >
      <h1 id="about">Resume</h1>
      <img src={resumeImage} className="my-2" style={{ width: "100%" }} alt="James Hardin" />
      <div className="my-2">
      <a href={resumeImage} download="james-hardin-webdev-resume">Download resume</a>
      </div>
    </section>
  )
}

export default Resume