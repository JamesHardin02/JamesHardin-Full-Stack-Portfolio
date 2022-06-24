
function Project({project}) {
  console.log(project)
  // returns list of projects
  return (
    <li
      className={`flex-col-center `}
      key={project.name}
    >
      <div className="flex-col-center project-info">
        <p className="bold-text text-center project-title">{project.name}</p>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noreferrer noopener">
          Git Hub Repo: {project.name}
        </a>
      </div>
      {project.website ?<a className=""href={project.website} target="_blank" rel="noreferrer noopener">
        <figure className="project-figure">
          <img className="project-image" alt="project screenshot" src={project.image}></img>
          <figcaption>Click screenshot to go to deployed website</figcaption>
        </figure>
      </a>
      :
        <figure className="project-figure">
          <img className="project-image" alt="project screenshot" src={project.image}></img>
        </figure>
      }
      <br/><br/>
    </li>
  )
}

export default Project