
function Project({project}) {
  console.log(project)
  // returns list of projects
  return (
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
  )
}

export default Project