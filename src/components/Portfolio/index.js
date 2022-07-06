import Project from '../Project'
// screenshot imports //
import techTalkImg from "../../assets/images/tech-talk-homepage.png"
import bookHubImg from "../../assets/images/user-feed-page.png"
import tourGuideImg from "../../assets/images/rwanda-tour-home-page.png"
import postANoteImg from "../../assets/images/post-a-note.png"
import cityWeatherWatchImg from "../../assets/images/city-weather-watch.png"
import managementPlannerImg from "../../assets/images/schedule-webpage.png"
import dailyLoveCalendarImg from "../../assets/images/daily-love-calendar-home.png"
//--------------------//
function Portfolio() {
    // project info objects
    const projects = {
        techTalk: {
          name: 'Tech Talk',
          description: 'A full stack blog site where users can post about technology',
          github: 'https://github.com/JamesHardin02/tech-talk',
          image: techTalkImg,
          website: 'https://tech-talk-project.herokuapp.com/'
        },
        dailyLoveCalendar: { 
          name: 'Daily Love Calendar', 
          description: 'A website where users can create a sentimental calendar to send to loved ones',
          github: 'https://github.com/JamesHardin02/Daily-Love-Calendar',
          image: dailyLoveCalendarImg,
          website: 'https://daily-love-calendar.herokuapp.com/'
        },
        bookHub: { 
          name: 'BookHub', 
          description: 'A full stack social media site where users can search books and make discussion posts about them',
          github: 'https://github.com/vidurham/bookhub',
          image: bookHubImg,
          website: 'https://bookhub-project-2.herokuapp.com/'
        },
        tourGuide: { 
          name: 'A Tour Guide Of Rwanda', 
          description: 'A website that allows users to plan a tour of the differnet regions of Rwanda',
          github: 'https://github.com/JamesHardin02/A-Tour-Guide-Of-Rwanda',
          image: tourGuideImg,
          website: 'https://jameshardin02.github.io/A-Tour-Guide-Of-Rwanda/'
        },
        postANote: { 
          name: 'Post-A-Note', 
          description: 'A RESTful Note taking app that allows users to write a note',
          github: 'https://github.com/JamesHardin02/post-a-note',
          image: postANoteImg,
          website: 'https://post-a-note.herokuapp.com/'
        },
        cityWeatherWatch: { 
          name: 'City Weather Watch', 
          description: 'A city weather search app that uses OpenWeather One Call API 1.0',
          github: 'https://github.com/JamesHardin02/City-Weather-Watch',
          image: cityWeatherWatchImg,
          website: 'https://jameshardin02.github.io/City-Weather-Watch/'
        },
        managementPlanner: { 
          name: 'Effective Time Management Planner', 
          description: 'A hourly schedule app that utilizes Moment.js to help a user plan their day',
          github: 'https://github.com/JamesHardin02/effective-time-management-planner',
          image: managementPlannerImg,
          website: 'https://jameshardin02.github.io/effective-time-management-planner/'
        }
      }

// portfolio section content
  return (
    <section className="flex-col-center" >
      <ul className='project-list'>
        <Project project={projects.techTalk}></Project>
        <Project project={projects.dailyLoveCalendar}></Project>
        <Project project={projects.bookHub}></Project>
        <Project project={projects.tourGuide}></Project>
        <Project project={projects.postANote}></Project>
        <Project project={projects.cityWeatherWatch}></Project>
        <Project project={projects.managementPlanner}></Project>
      </ul>
    </section>
  )
}

export default Portfolio