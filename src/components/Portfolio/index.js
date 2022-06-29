import Project from '../Project'
// screenshot imports //
import techTalkImg from "../../assets/images/tech-talk-homepage.png"
import bookHubImg from "../../assets/images/user-feed-page.png"
import tourGuideImg from "../../assets/images/rwanda-tour-home-page.png"
import thoughtBubbleImg from "../../assets/images/thought-bubble-post-thought.png"
import eShopImg from "../../assets/images/E-Shop-Organizer-insomnia-ss.png"
import administerMyTeamImg from "../../assets/images/administer-my-team-ss.png"
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
        thoughtBubble: { 
          name: 'Thought Bubble', 
          description: 'A MongoDB backend app for a social media website',
          github: 'https://github.com/JamesHardin02/thought-bubble',
          image: thoughtBubbleImg
        },
        eShop: { 
          name: 'E Shop Organizer', 
          description: 'A SQL backend app for a e-commerce store',
          github: 'https://github.com/JamesHardin02/E-Shop-Organizer',
          image: eShopImg
        },
        administerMyTeam: { 
          name: 'Administer My Team', 
          description: 'A SQL backend content management system app to organize and keep track of employee information',
          github: 'https://github.com/JamesHardin02/administer-my-team',
          image: administerMyTeamImg
        }
      }

// portfolio section content
  return (
    <section className="flex-col-center" >
      <ul className='project-list'>
        <Project project={projects.techTalk}></Project>
        <Project project={projects.bookHub}></Project>
        <Project project={projects.tourGuide}></Project>
        <Project project={projects.thoughtBubble}></Project>
        <Project project={projects.eShop}></Project>
        <Project project={projects.administerMyTeam}></Project>
      </ul>
    </section>
  )
}

export default Portfolio