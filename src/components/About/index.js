import React from 'react'
// photo of James Hardin
import coverImage from "../../assets/images/Headshot.jpg";

function About() {
// about section content
  return (
    <section className="margin-top flex-col-center" >
      <h1 className='project-title text-center'>About me</h1>
      <img className='about-image' src={coverImage} alt="James Hardin" />
      <div className="my-2">
        <p>
          Graduate of UNCC Full Stack Web Development Bootcamp.
          Born in 2002, I am 20 years old. I took time after highschool to work, but 
          in January 2022 I decided to finally pursue my dream job as a
          web developer. I took UNCC's part time web dev bootcamp so I could
          balance my time between work and school which still proved to be very challanging, but
          I have grown immensely from this experience including the capacity to learn new complex coding concepts quickly and 
          under pressure from time.
        </p>
      </div>
    </section>
  )
}

export default About